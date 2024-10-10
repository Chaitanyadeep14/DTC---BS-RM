// src/components/Dashboard.js
import React from 'react';
import LinkedDutySchedule from './LinkedDutySchedule';
import UnlinkedDutySchedule from './UnlinkedDutySchedule';
import RouteManagement from './RouteManagement';
import Reports from './Reports';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="dashboard-sections">
        <div>
          <LinkedDutySchedule />
        </div>
        <div>
          <UnlinkedDutySchedule />
        </div>
        <div>
          <RouteManagement />
        </div>
        <div>
          <Reports />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
