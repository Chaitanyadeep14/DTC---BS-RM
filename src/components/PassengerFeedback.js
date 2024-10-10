// src/components/PassengerFeedback.js
import React, { useState } from 'react';
import './PassengerFeedback.css';

const PassengerFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would normally submit the feedback to the server
  };

  const handleReset = () => {
    setFeedback('');
    setSubmitted(false);
  };

  return (
    <div className="passenger-feedback">
      <h2>Passenger Feedback</h2>
      {submitted ? (
        <div className="thank-you-message">
          <p>Thank you for your feedback!</p>
          <button onClick={handleReset}>Submit Another Feedback</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default PassengerFeedback;
