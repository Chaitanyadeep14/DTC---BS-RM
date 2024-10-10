// src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faCalendarAlt, faComments, faChartBar, faUsers } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-links">
        <Link to="/manage-routes">
          <FontAwesomeIcon icon={faRoute} className="link-icon" />
          Manage Bus Routes
        </Link>
        <Link to="/manage-schedules">
          <FontAwesomeIcon icon={faCalendarAlt} className="link-icon" />
          Manage Schedules
        </Link>
        <Link to="/view-feedback">
          <FontAwesomeIcon icon={faComments} className="link-icon" />
          View Passenger Feedback
        </Link>
        <Link to="/analytics-reports">
          <FontAwesomeIcon icon={faChartBar} className="link-icon" />
          Analytics and Reports
        </Link>
        <Link to="/user-management">
          <FontAwesomeIcon icon={faUsers} className="link-icon" />
          User Management
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
