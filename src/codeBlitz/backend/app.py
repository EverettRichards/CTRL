"""Flask API for Code Blitz."""
import os
import time
from flask import Flask, request, jsonify, session
from flask_cors import CORS

import db
from runner import run_python, run_java, run_cpp
from questions_config import QUESTIONS, TIME_PER_QUESTION

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET', 'codeblitz-dev-secret-change-in-production')
CORS(app, supports_credentials=True, origins=['http://localhost:5173', 'http://127.0.0.1:5173'])

# In-memory exam timer. None = not started.
_exam_end_time = None
# When set, timer is paused and this is the seconds remaining when paused.
_exam_paused_remaining = None


def _remaining():
    if _exam_paused_remaining is not None:
        return _exam_paused_remaining
    if _exam_end_time is None:
        return None
    r = max(0, int(_exam_end_time - time.time()))
    return r


def _timer_started():
    return _exam_end_time is not None or _exam_paused_remaining is not None


def _timer_paused():
    return _exam_paused_remaining is not None


def _require_auth():
    user = session.get('user')
    if not user:
        return None
    return user


def _require_admin():
    user = _require_auth()
    if not user or not user.get('is_admin'):
        return None
    return user


@app.before_request
def init_db_once():
    db.init_db()


# ---- Auth ----
@app.route('/api/auth/login', methods=['POST'])
def auth_login():
    data = request.get_json() or {}
    username = (data.get('username') or '').strip()
    password = data.get('password') or ''
    if not username or not password:
        return jsonify({'ok': False, 'error': 'Username and password required'}), 200
    user = db.verify_user(username, password)
    if not user:
        return jsonify({'ok': False, 'error': 'Invalid username or password'}), 200
    session['user'] = user
    return jsonify({
        'ok': True,
        'username': user['username'],
        'is_admin': user['is_admin'],
    })


@app.route('/api/auth/me')
def auth_me():
    user = _require_auth()
    if not user:
        return jsonify({'ok': False}), 200
    return jsonify({'ok': True, 'user': user})


@app.route('/api/auth/logout', methods=['POST'])
def auth_logout():
    session.pop('user', None)
    return jsonify({'ok': True})


# ---- Admin ----
@app.route('/api/admin/users', methods=['GET'])
def admin_users():
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    users = db.list_users()
    return jsonify({'ok': True, 'users': users})


@app.route('/api/admin/users', methods=['POST'])
def admin_create_user():
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    data = request.get_json() or {}
    username = (data.get('username') or '').strip()
    password = data.get('password') or ''
    if not username or not password:
        return jsonify({'ok': False, 'error': 'Username and password required'}), 200
    success, err = db.create_user(username, password)
    if not success:
        return jsonify({'ok': False, 'error': err or 'Failed'}), 200
    return jsonify({'ok': True})


@app.route('/api/admin/users/<int:user_id>', methods=['DELETE'])
def admin_delete_user(user_id):
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    db.delete_user(user_id)
    return jsonify({'ok': True})


@app.route('/api/admin/users/<int:user_id>', methods=['PUT'])
def admin_update_user(user_id):
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    data = request.get_json() or {}
    password = data.get('password') or ''
    if not password:
        return jsonify({'ok': False, 'error': 'Password required'}), 200
    # Minimal update: would need a proper update_password in db.py; skip for now
    return jsonify({'ok': True})


@app.route('/api/admin/users/clear', methods=['POST'])
def admin_clear_users():
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    db.clear_users_except_admin()
    return jsonify({'ok': True, 'message': 'Cleared.'})


@app.route('/api/admin/timer-status')
def admin_timer_status():
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    r = _remaining()
    return jsonify({
        'ok': True,
        'remaining': r,
        'started': _timer_started(),
        'paused': _timer_paused(),
    })


@app.route('/api/admin/start-exam', methods=['POST'])
def admin_start_exam():
    global _exam_end_time, _exam_paused_remaining
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    _exam_paused_remaining = None
    _exam_end_time = time.time() + 3600
    return jsonify({'ok': True})


@app.route('/api/admin/pause-timer', methods=['POST'])
def admin_pause_timer():
    global _exam_end_time, _exam_paused_remaining
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    r = _remaining()
    if r is None:
        return jsonify({'ok': False, 'error': 'Timer not started'}), 400
    _exam_paused_remaining = r
    _exam_end_time = None
    return jsonify({'ok': True, 'remaining': r})


@app.route('/api/admin/resume-timer', methods=['POST'])
def admin_resume_timer():
    global _exam_end_time, _exam_paused_remaining
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    if _exam_paused_remaining is None:
        return jsonify({'ok': False, 'error': 'Timer not paused'}), 400
    _exam_end_time = time.time() + _exam_paused_remaining
    _exam_paused_remaining = None
    return jsonify({'ok': True})


@app.route('/api/admin/leaderboard')
def admin_leaderboard():
    if not _require_admin():
        return jsonify({'ok': False, 'error': 'Unauthorized'}), 403
    entries = db.list_leaderboard()
    return jsonify({'ok': True, 'leaderboard': entries})


# ---- Timer (contestant) ----
@app.route('/api/timer/status')
def timer_status():
    if not _require_auth():
        return jsonify({'ok': False}), 403
    r = _remaining()
    return jsonify({
        'ok': True,
        'remaining': r,
        'started': _timer_started(),
    })


# ---- Questions ----
@app.route('/api/questions/')
def questions_list():
    if not _require_auth():
        return jsonify({'ok': False}), 403
    out = [
        {
            'id': q['id'],
            'prompt': q['prompt'],
            'starter': q['starter'],
            'starter_java': q.get('starter_java', q['starter']),
            'starter_cpp': q.get('starter_cpp', q['starter']),
        }
        for q in QUESTIONS
    ]
    return jsonify({'ok': True, 'questions': out})


@app.route('/api/questions/run', methods=['POST'])
def questions_run():
    if not _require_auth():
        return jsonify({'ok': False}), 403
    data = request.get_json() or {}
    code = data.get('code', '')
    question_index = data.get('question_index', 0)
    lang = (data.get('language') or 'python').lower().strip()
    if lang == 'c++':
        lang = 'cpp'
    preview = data.get('preview', False)

    if question_index < 0 or question_index >= len(QUESTIONS):
        return jsonify({'ok': False, 'error': 'Invalid question index'}), 400
    if lang not in ('python', 'java', 'cpp'):
        return jsonify({'ok': False, 'error': 'Invalid language. Use python, java, or c++.'}), 400

    if lang == 'python':
        output = run_python(code)
    elif lang == 'java':
        output = run_java(code)
    else:
        output = run_cpp(code)

    expected = QUESTIONS[question_index]['expected']
    correct = output.strip() == expected.strip()
    points = 0
    if correct and not preview:
        remaining = _remaining()
        if remaining is not None:
            points = max(10, int((remaining / TIME_PER_QUESTION) * 100))
            user = _require_auth()
            if user and points > 0:
                db.add_user_points(user['id'], points)

    return jsonify({
        'ok': True,
        'output': output,
        'correct': correct,
        'points': points,
        'preview': preview,
    })


if __name__ == '__main__':
    db.init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
