// src/components/ViewFeedback.js
import React, { useState, useEffect } from 'react';
import './ViewFeedback.css';

const ViewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    // Simulate an API call to fetch feedback
    const fetchedFeedback = [
      { id: 1, user: 'User 1', comment: 'Great service!' },
      { id: 2, user: 'User 2', comment: 'Needs improvement in timings.' },
      { id: 3, user: 'User 3', comment: 'Very clean buses.' },
    ];
    setFeedbackList(fetchedFeedback);
  };

  return (
    <div className="view-feedback">
      <h2>View Passenger Feedback</h2>
      <div className="feedback-list">
        {feedbackList.length > 0 ? (
          feedbackList.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <p><strong>{feedback.user}</strong>: {feedback.comment}</p>
            </div>
          ))
        ) : (
          <p className="no-feedback">No feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewFeedback;
