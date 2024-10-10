// src/components/NewsTicker.js
import React from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
  const newsItems = [
    "DTC introduces new AC buses on Route 543 starting next Monday!",
    "Free bus rides for women extended until the end of the year.",
    "DTC launches real-time bus tracking on its mobile app.",
    "Upcoming route changes due to city marathon on 10th October.",
    "DTC announces new eco-friendly electric buses by 2025."
  ];

  return (
    <div className="news-ticker">
      <div className="ticker-wrapper">
        <div className="ticker">
          {newsItems.map((news, index) => (
            <span key={index} className="ticker-item">
              {news}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
