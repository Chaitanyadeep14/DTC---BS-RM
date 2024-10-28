// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import clickSound from '../assets/click-sound.mp3'; // Import the audio file

// const LandingPage = () => {
//   const playSound = () => {
//     const audio = new Audio(clickSound);
//     audio.play();
//   };

  return (
    <div className="landing-page">
      <main className="landing-main">
        <div className="landing-buttons">
          {/* Button to Navigate to the Project Dashboard */}
          <Link to="/dashboard" className="landing-button primary-button">
            Enter Dashboard
          </Link>
          {/* Additional Buttons */}
          <Link to="/login" className="landing-button white-button">Login</Link>
          <Link to="/signup" className="landing-button green-button">Sign Up</Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
