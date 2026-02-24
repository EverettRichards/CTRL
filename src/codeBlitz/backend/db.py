"""SQLite database and user helpers for Code Blitz backend."""
import os
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(DIR, 'users.db')

DEFAULT_ADMIN_USERNAME = 'admin'
DEFAULT_ADMIN_PASSWORD = 'code123'


def get_connection():
    return sqlite3.connect(DB_PATH)


def init_db():
    """Create users table and default admin if not present."""
    conn = get_connection()
    try:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                is_admin INTEGER NOT NULL DEFAULT 0,
                points INTEGER NOT NULL DEFAULT 0
            )
        ''')
        conn.commit()
        # Add points column if missing (migration for existing DBs)
        cur = conn.execute('PRAGMA table_info(users)')
        columns = [row[1] for row in cur.fetchall()]
        if 'points' not in columns:
            conn.execute('ALTER TABLE users ADD COLUMN points INTEGER NOT NULL DEFAULT 0')
            conn.commit()
        cur = conn.execute(
            'SELECT id FROM users WHERE username = ?',
            (DEFAULT_ADMIN_USERNAME,)
        )
        if cur.fetchone() is None:
            conn.execute(
                'INSERT INTO users (username, password_hash, is_admin) VALUES (?, ?, 1)',
                (DEFAULT_ADMIN_USERNAME, generate_password_hash(DEFAULT_ADMIN_PASSWORD))
            )
            conn.commit()
    finally:
        conn.close()


def get_user_by_username(username):
    """Return (id, username, password_hash, is_admin) or None."""
    conn = get_connection()
    try:
        cur = conn.execute(
            'SELECT id, username, password_hash, is_admin FROM users WHERE username = ?',
            (username,)
        )
        return cur.fetchone()
    finally:
        conn.close()


def verify_user(username, password):
    """Return user dict { id, username, is_admin } or None."""
    row = get_user_by_username(username)
    if not row:
        return None
    _id, name, pw_hash, is_admin = row
    if not check_password_hash(pw_hash, password):
        return None
    return {'id': _id, 'username': name, 'is_admin': bool(is_admin)}


def list_users():
    """Return list of { id, username, is_admin, points }."""
    conn = get_connection()
    try:
        cur = conn.execute(
            'SELECT id, username, is_admin, COALESCE(points, 0) FROM users ORDER BY username'
        )
        rows = cur.fetchall()
        return [
            {'id': r[0], 'username': r[1], 'is_admin': bool(r[2]), 'points': r[3] if len(r) > 3 else 0}
            for r in rows
        ]
    finally:
        conn.close()


def add_user_points(user_id, points_to_add):
    """Add points to a user's total. Call after a correct submission."""
    conn = get_connection()
    try:
        conn.execute(
            'UPDATE users SET points = COALESCE(points, 0) + ? WHERE id = ?',
            (points_to_add, user_id)
        )
        conn.commit()
    finally:
        conn.close()


def list_leaderboard():
    """Return list of { username, points } sorted by points descending."""
    conn = get_connection()
    try:
        cur = conn.execute(
            'SELECT username, COALESCE(points, 0) FROM users ORDER BY COALESCE(points, 0) DESC, username'
        )
        return [{'username': r[0], 'points': r[1]} for r in cur.fetchall()]
    finally:
        conn.close()


def create_user(username, password):
    """Create user. Returns (True, None) or (False, error_message)."""
    conn = get_connection()
    try:
        conn.execute(
            'INSERT INTO users (username, password_hash, is_admin) VALUES (?, ?, 0)',
            (username, generate_password_hash(password))
        )
        conn.commit()
        return True, None
    except sqlite3.IntegrityError:
        return False, 'Username already exists'
    finally:
        conn.close()


def delete_user(user_id):
    """Delete user by id; never delete the default admin."""
    conn = get_connection()
    try:
        conn.execute(
            'DELETE FROM users WHERE id = ? AND username != ?',
            (user_id, DEFAULT_ADMIN_USERNAME)
        )
        conn.commit()
    finally:
        conn.close()


def clear_users_except_admin():
    """Delete all users except the default admin."""
    conn = get_connection()
    try:
        conn.execute('DELETE FROM users WHERE username != ?', (DEFAULT_ADMIN_USERNAME,))
        conn.commit()
    finally:
        conn.close()
