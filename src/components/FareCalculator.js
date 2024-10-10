// src/components/FareCalculator.js
import React, { useState } from 'react';
import './FareCalculator.css';

const FareCalculator = () => {
  const [startStop, setStartStop] = useState('');
  const [endStop, setEndStop] = useState('');
  const [fare, setFare] = useState(null);

  const calculateFare = () => {
    if (startStop && endStop) {
      const calculatedFare = Math.abs(startStop.charCodeAt(0) - endStop.charCodeAt(0)) * 5;
      setFare(calculatedFare);
    }
  };

  const handleReset = () => {
    setStartStop('');
    setEndStop('');
    setFare(null);
  };

  return (
    <div className="fare-calculator">
      <h2>Fare Calculator</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Start Stop"
          value={startStop}
          onChange={(e) => setStartStop(e.target.value.toUpperCase())}
        />
        <input
          type="text"
          placeholder="End Stop"
          value={endStop}
          onChange={(e) => setEndStop(e.target.value.toUpperCase())}
        />
      </div>
      <button onClick={calculateFare}>Calculate Fare</button>
      {fare !== null && (
        <div className="result">
          <p>Estimated Fare: ₹{fare}</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default FareCalculator;
