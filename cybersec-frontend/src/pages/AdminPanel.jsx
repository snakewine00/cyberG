import React, { useState } from 'react';

function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid admin credentials');
    }
  };

  const formStyle = {
    maxWidth: 400,
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: '#222',
    padding: '2rem',
    borderRadius: '8px',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
  };
  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #888',
    fontSize: '1rem',
    color: '#222',
    background: '#fff',
  };
  const buttonStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
  };
  const errorStyle = {
    color: '#ff3333',
    fontWeight: 'bold',
  };
  const adminContentStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#222',
    background: '#e0e0e0',
    padding: '2rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  if (!loggedIn) {
    return (
      <form onSubmit={handleLogin} style={formStyle}>
        <h2 style={{ color: '#00d8ff', textAlign: 'center' }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
        {error && <div style={errorStyle}>{error}</div>}
      </form>
    );
  }

  return (
    <div style={adminContentStyle}>
      <h2 style={{ color: '#007bff' }}>Welcome, Admin!</h2>
      <p style={{ color: '#fff' }}>Add new cybersecurity courses to the platform.</p>
    </div>
  );
}

export default AdminPanel; 