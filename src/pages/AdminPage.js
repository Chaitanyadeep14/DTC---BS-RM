// src/pages/AdminPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faRoute, faCalendarAlt, faComments, faChartBar, faUsers } from '@fortawesome/free-solid-svg-icons';
import AdminDashboard from '../components/AdminDashboard';
import ManageRoutes from '../components/ManageRoutes';
import ManageSchedules from '../components/ManageSchedules';
import ViewFeedback from '../components/ViewFeedback';
import AnalyticsReports from '../components/AnalyticsReports';
import UserManagement from '../components/UserManagement';
import './AdminPage.css';

const AdminPage = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'manage-routes':
        return <ManageRoutes />;
      case 'manage-schedules':
        return <ManageSchedules />;
      case 'view-feedback':
        return <ViewFeedback />;
      case 'analytics-reports':
        return <AnalyticsReports />;
      case 'user-management':
        return <UserManagement />;
      default:
        return <AdminDashboard setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="admin-page">
      <nav className="admin-nav">
        <button onClick={() => setCurrentSection('dashboard')}>
          <FontAwesomeIcon icon={faTachometerAlt} className="fa-icon" />
        </button>
        <button onClick={() => setCurrentSection('manage-routes')}>
          <FontAwesomeIcon icon={faRoute} className="fa-icon" />
        </button>
        <button onClick={() => setCurrentSection('manage-schedules')}>
          <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon" /> 
        </button>
        <button onClick={() => setCurrentSection('view-feedback')}>
          <FontAwesomeIcon icon={faComments} className="fa-icon" />
        </button>
        <button onClick={() => setCurrentSection('analytics-reports')}>
          <FontAwesomeIcon icon={faChartBar} className="fa-icon" />
        </button>
        <button onClick={() => setCurrentSection('user-management')}>
          <FontAwesomeIcon icon={faUsers} className="fa-icon" />
        </button>
      </nav>
      <div className="admin-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminPage;
