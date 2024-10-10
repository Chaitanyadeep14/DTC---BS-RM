// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/route-timings" activeClassName="active">Route Timings</NavLink>
        </li>
        <li>
          <NavLink to="/real-time-tracking" activeClassName="active">Real-Time Tracking</NavLink>
        </li>
        <li>
          <NavLink to="/passenger-feedback" activeClassName="active">Passenger Feedback</NavLink>
        </li>
        <li>
          <NavLink to="/fare-calculator" activeClassName="active">Fare Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="active">Admin Page</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login / Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
