import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import { api, formatTime } from './services/api.js';

const RUN_COOLDOWN_MS = 3000;

export default function QuestionScreen() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [score, setScore] = useState(0);
  const [remaining, setRemaining] = useState(null);
  const [runDisabled, setRunDisabled] = useState(true);
  const [runCooldown, setRunCooldown] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [language, setLanguage] = useState('python');
  const runCooldownRef = useRef(null);

  const getStarter = (q, lang) => {
    if (!q) return '';
    if (lang === 'java') return q.starter_java ?? q.starter ?? '';
    if (lang === 'c++') return q.starter_cpp ?? q.starter ?? '';
    return q.starter ?? '';
  };

  const loadQuestions = async () => {
    try {
      const res = await api.questions.list();
      if (res.ok && res.questions?.length) {
        setQuestions(res.questions);
        setCode(getStarter(res.questions[0], language));
        setQIndex(0);
      }
    } catch {
      setQuestions([]);
    }
  };

  //hi how are you

  const pollTimer = async () => {
    try {
      const res = await api.timer.status();
      if (res.ok) {
        setRemaining(res.remaining);
        if (res.started) setRunDisabled(false);
      }
    } catch {
      setRemaining(null);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    const id = setInterval(pollTimer, 1000);
    return () => clearInterval(id);
  }, [runDisabled]);

  useEffect(() => {
    if (questions.length && qIndex < questions.length) {
      setCode(getStarter(questions[qIndex], language));
    }
  }, [qIndex, questions, language]);

  const runCode = async () => {
    if (runCooldown || runDisabled) return;
    setRunCooldown(true);
    setOutput('Running...\n');
    try {
      const res = await api.questions.run(code, qIndex, language);
      setOutput(res.output || '');
      if (res.correct) {
        const newScore = score + (res.points || 0);
        setScore(newScore);
        setOutput((o) => o + `\n✅ Correct! +${res.points ?? 0} points\n`);
        if (runCooldownRef.current) clearTimeout(runCooldownRef.current);
        runCooldownRef.current = setTimeout(() => {
          setQIndex((i) => {
            const next = i + 1;
            if (next >= questions.length) {
              setFinalScore(newScore);
              setOutput((o) => o + `\n🎉 Quiz Complete!\nFinal Score: ${newScore}\n`);
              setRunDisabled(true);
              return i;
            }
            return next;
          });
          setRunCooldown(false);
        }, 1500);
        return;
      }
    } catch (e) {
      setOutput(e.error || 'Request failed');
    }
    runCooldownRef.current = setTimeout(() => setRunCooldown(false), RUN_COOLDOWN_MS);
  };

  const currentQ = questions[qIndex];
  const isComplete = qIndex >= questions.length && questions.length > 0;

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="question-page">
      <div className="question-top-bar">
        <span className="question-top-text">Score: {score}</span>
        <span className="question-top-text">
          {remaining != null ? `⏱ ${formatTime(remaining)}` : '⏱ Waiting for admin…'}
        </span>
        <label className="question-top-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Language:
          <select
            className="question-lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
          </select>
        </label>
      </div>

      {currentQ && !isComplete && (
        <p className="question-prompt">{currentQ.prompt}</p>
      )}
      {isComplete && (
        <p className="question-prompt">🎉 Quiz Complete!</p>
      )}

      <div className="question-run-row">
        <button
          type="button"
          className={`question-run-btn ${(runCooldown || runDisabled) ? 'run-disabled' : ''}`}
          onClick={runCode}
          disabled={runCooldown || runDisabled}
        >
          ▶ Run
        </button>
      </div>

      <div className="question-main">
        <textarea
          className="question-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={runDisabled}
          placeholder="Code"
          spellCheck={false}
        />
        <div className="question-output-wrap">
          <pre className="question-output">{output || ' '}</pre>
        </div>
      </div>

      <div className="question-footer">
        <button type="button" className="question-logout-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
