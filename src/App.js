// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewsTicker from './components/NewsTicker';  // Import NewsTicker
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import ChartView from './components/ChartView';
import ManageRoutes from './components/ManageRoutes';
import ManageSchedules from './components/ManageSchedules';
import ViewFeedback from './components/ViewFeedback';
import AnalyticsReports from './components/AnalyticsReports';
import UserManagement from './components/UserManagement';
import RouteTimings from './components/RouteTimings';
import RealTimeTracking from './components/RealTimeTracking';
import PassengerFeedback from './components/PassengerFeedback';
import FareCalculator from './components/FareCalculator';
import dtcLogo from './assets/dtc-logo.png'; // Import logo
import './App.css';

// Main App Component
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        {/* Flex container for logo and header */}
        <div className="header-content">
          <img src={dtcLogo} alt="DTC Logo" className="header-logo" />
          <h1>Delhi Transport Corporation (DTC) - Automated Bus Scheduling System _ By Vrajya</h1>
        </div>
      </header>

      {/* Include NewsTicker on All Pages */}
      <NewsTicker /> {/* Displayed on all pages below the header */}

      {/* Conditionally Render NavBar Only If Not on Landing Page */}
      {location.pathname !== '/' && <NavBar />} {/* Move NavBar below NewsTicker */}

      <main>
        <Routes>
          {/* Default Route Redirects to LandingPage */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect all unknown paths to LandingPage */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/charts" element={<ChartView />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/manage-routes" element={<ManageRoutes />} />
          <Route path="/manage-schedules" element={<ManageSchedules />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          <Route path="/analytics-reports" element={<AnalyticsReports />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/route-timings" element={<RouteTimings />} />
          <Route path="/real-time-tracking" element={<RealTimeTracking />} />
          <Route path="/passenger-feedback" element={<PassengerFeedback />} />
          <Route path="/fare-calculator" element={<FareCalculator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// App Component with Router Setup
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
