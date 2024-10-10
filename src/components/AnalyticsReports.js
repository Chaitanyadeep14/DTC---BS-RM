// src/components/AnalyticsReports.js
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './AnalyticsReports.css';

const AnalyticsReports = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Passenger Count',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          'rgba(255, 153, 51, 0.6)', // Saffron
          'rgba(255, 255, 255, 0.6)', // White
          'rgba(19, 136, 8, 0.6)', // Green
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 153, 51, 1)', // Saffron
          'rgba(255, 255, 255, 1)', // White
          'rgba(19, 136, 8, 1)', // Green
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics-reports">
      <h2>Analytics and Reports</h2>
      <div className="charts">
        <div className="chart">
          <Bar data={data} />
        </div>
        <div className="chart">
          <Line data={data} />
        </div>
        <div className="chart">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;
