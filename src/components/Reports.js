// src/components/Reports.js
import React, { useState, useEffect, useCallback } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './Reports.css';

// Correctly register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend);

const Reports = () => {
  const [filter, setFilter] = useState('all');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartType, setChartType] = useState('bar'); // Default to bar chart
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const fetchChartData = useCallback(async (filter, dateRange) => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ data: mockData(filter) }), 1000);
      });

      if (response && response.data) {
        setChartData(response.data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setChartData({
        labels: [],
        datasets: [],
      });
    }
  }, []); // No dependencies needed

  useEffect(() => {
    fetchChartData(filter, dateRange);
  }, [fetchChartData, filter, dateRange]);

  const mockData = (filter) => {
    switch (filter) {
      case 'route':
        return {
          labels: ['Route 1', 'Route 2', 'Route 3'],
          datasets: [
            {
              label: 'Number of Buses',
              data: [12, 19, 3],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
      case 'bus':
        return {
          labels: ['Bus 101', 'Bus 102', 'Bus 103'],
          datasets: [
            {
              label: 'Passenger Count',
              data: [20, 35, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        };
      case 'crew':
        return {
          labels: ['Crew A', 'Crew B', 'Crew C'],
          datasets: [
            {
              label: 'Trips Completed',
              data: [15, 10, 5],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        };
      default:
        return {
          labels: ['Default Label 1', 'Default Label 2'],
          datasets: [
            {
              label: 'Default Data',
              data: [5, 10],
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
            },
          ],
        };
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  const renderChart = () => {
    if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
      return <div>No data available for the selected filter.</div>;
    }

    switch (chartType) {
      case 'line':
        return <Line data={chartData} />;
      case 'pie':
        return <Pie data={chartData} />;
      default:
        return <Bar data={chartData} />;
    }
  };

  return (
    <div className="reports">
      <h2>Reports</h2>
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="route">Route</option>
          <option value="bus">Bus</option>
          <option value="crew">Crew</option>
        </select>
        <select value={chartType} onChange={handleChartTypeChange}>
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateChange}
        />
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateChange}
        />
      </div>
      <div className="chart-container">{renderChart()}</div>
    </div>
  );
};

export default Reports;
