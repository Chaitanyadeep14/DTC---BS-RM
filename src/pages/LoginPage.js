// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., call to a backend service)
    alert('Login successful!');
  };

  return (
    <div className="login-container animated fadeIn">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group animated-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group animated-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button animated-button">
          Login
        </button>
        {/* New Button to Navigate to Signup Page */}
        <p className="signup-link">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-button-link animated-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
