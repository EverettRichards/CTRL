import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import { api, formatTime } from './services/api.js';

export default function AdminScreen() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [remaining, setRemaining] = useState(null);
  const [timerPaused, setTimerPaused] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [addMessage, setAddMessage] = useState('');
  const [clearConfirm, setClearConfirm] = useState(false);

  const loadUsers = async () => {
    try {
      const res = await api.admin.users();
      if (res.ok) setUsers(res.users || []);
    } catch {
      setUsers([]);
    }
  };

  const loadTimer = async () => {
    try {
      const res = await api.admin.timerStatus();
      if (res.ok) {
        setRemaining(res.remaining);
        setTimerPaused(!!res.paused);
      }
    } catch {
      setRemaining(null);
      setTimerPaused(false);
    }
  };

  const loadLeaderboard = async () => {
    try {
      const res = await api.admin.leaderboard();
      if (res.ok) setLeaderboard(res.leaderboard || []);
    } catch {
      setLeaderboard([]);
    }
  };

  const refresh = async () => {
    setRefreshing(true);
    await Promise.all([loadUsers(), loadTimer(), loadLeaderboard()]);
    setRefreshing(false);
  };

  const pauseTimer = async () => {
    try {
      await api.admin.pauseTimer();
      await loadTimer();
    } catch (e) {
      console.warn(e);
    }
  };

  const resumeTimer = async () => {
    try {
      await api.admin.resumeTimer();
      await loadTimer();
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }
    if (!user.is_admin) {
      navigate('/question', { replace: true });
      return;
    }
    refresh();
    const id = setInterval(loadTimer, 1000);
    return () => clearInterval(id);
  }, [loading, user, navigate]);

  const startExam = async () => {
    try {
      await api.admin.startExam();
      await loadTimer();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUsername.trim() || !newPassword) {
      setAddMessage('Username and password required');
      return;
    }
    setAddMessage('');
    try {
      const res = await api.admin.createUser(newUsername.trim(), newPassword);
      if (res.ok) {
        setNewUsername('');
        setNewPassword('');
        await loadUsers();
        setAddMessage('User added.');
      } else {
        setAddMessage(res.error || 'Failed to add user');
      }
    } catch (err) {
      setAddMessage(err.error || 'Failed to add user');
    }
  };

  const handleDeleteUser = async (userId, username) => {
    if (username === 'admin') return;
    if (!window.confirm(`Delete user "${username}"?`)) return;
    try {
      await api.admin.deleteUser(userId);
      await loadUsers();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleClearUsers = async () => {
    if (!clearConfirm) {
      setClearConfirm(true);
      return;
    }
    try {
      const res = await api.admin.clearUsers();
      if (res.ok) {
        setClearConfirm(false);
        setAddMessage(res.message || 'Cleared.');
        await loadUsers();
      }
    } catch (e) {
      setAddMessage(e.error || 'Failed');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  if (loading) {
    return (
      <div className="admin-page">
        <p className="admin-timer">Loading…</p>
      </div>
    );
  }
  if (!user || !user.is_admin) {
    return null;
  }

  return (
    <div className="admin-page">
      <div className="admin-header-row">
        <h1 className="admin-heading admin-page-title">Admin Control Panel</h1>
        <button type="button" className="admin-logout-inline" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <section className="admin-section">
        <h2 className="admin-heading">Global Timer</h2>
        <div className="admin-timer-actions">
          <button type="button" className="admin-primary-btn" onClick={startExam}>
            Start Exam Timer
          </button>
          {remaining != null && !timerPaused && (
            <button type="button" className="admin-secondary-btn" onClick={pauseTimer}>
              Pause Timer
            </button>
          )}
          {timerPaused && (
            <button type="button" className="admin-primary-btn" onClick={resumeTimer}>
              Resume Timer
            </button>
          )}
        </div>
        <p className="admin-timer">
          {remaining != null
            ? `⏱ Remaining: ${formatTime(remaining)}${timerPaused ? ' (paused)' : ''}`
            : '⏱ Waiting to start'}
        </p>
      </section>

      <div className="admin-two-col">
        <div className="admin-col">
          <section className="admin-section">
            <h2 className="admin-heading">Add User</h2>
            <form onSubmit={handleAddUser} className="admin-form">
              <input
                type="text"
                placeholder="Username"
                className="login-input admin-inline-input"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                autoComplete="off"
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input admin-inline-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button type="submit" className="admin-primary-btn admin-btn-sm">Add</button>
            </form>
            {addMessage ? <p className="login-msg">{addMessage}</p> : null}
          </section>

          <section className="admin-section">
            <h2 className="admin-heading">Users</h2>
            <button type="button" className="admin-refresh" onClick={refresh} disabled={refreshing}>
              {refreshing ? 'Refreshing…' : 'Refresh'}
            </button>
            {users.length === 0 ? (
              <p className="admin-empty">No users yet</p>
            ) : (
              <ul className="admin-user-list">
                {users.map((u) => (
                  <li key={u.id} className="admin-user-row">
                    <span>{u.username}</span>
                    {u.username !== 'admin' && (
                      <button
                        type="button"
                        className="admin-delete-btn"
                        onClick={() => handleDeleteUser(u.id, u.username)}
                      >
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="admin-section">
            <button
              type="button"
              className={clearConfirm ? 'admin-clear-btn-confirm' : 'admin-clear-btn'}
              onClick={handleClearUsers}
            >
              {clearConfirm ? 'Click again to clear all users (except admin)' : 'Clear all users (except admin)'}
            </button>
            {clearConfirm && (
              <button type="button" className="admin-refresh" onClick={() => setClearConfirm(false)}>
                Cancel
              </button>
            )}
          </section>
        </div>

        <div className="admin-col">
          <section className="admin-section">
            <h2 className="admin-heading">Leaderboard</h2>
            <button type="button" className="admin-refresh admin-refresh-sm" onClick={loadLeaderboard} disabled={refreshing}>
              Refresh
            </button>
            {leaderboard.length === 0 ? (
              <p className="admin-empty">No scores yet</p>
            ) : (
              <ol className="admin-leaderboard-list">
                {leaderboard.map((entry, i) => (
                  <li key={entry.username} className="admin-leaderboard-row">
                    <span className="admin-leaderboard-rank">{i + 1}.</span>
                    <span className="admin-leaderboard-username">{entry.username}</span>
                    <span className="admin-leaderboard-points">{entry.points} pts</span>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
