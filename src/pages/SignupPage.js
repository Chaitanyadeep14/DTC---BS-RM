// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., call to a backend service)
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    alert('Signup successful!');
  };

  return (
    <div className="signup-container animated fadeIn">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup} className="signup-form">
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-group animated-input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="signup-button animated-button">
          Sign Up
        </button>
        {/* Link to navigate back to Login Page */}
        <p className="login-link">
          Already have an account?{' '}
          <Link to="/login" className="login-button-link animated-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
