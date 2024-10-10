// src/components/RouteTimings.js
import React, { useState, useEffect } from 'react';
import './RouteTimings.css';

const RouteTimings = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    // Replace this with actual API call
    const fetchedRoutes = [
      { id: 1, name: 'Route 1', stops: ['Stop A', 'Stop B', 'Stop C'] },
      { id: 2, name: 'Route 2', stops: ['Stop D', 'Stop E', 'Stop F'] },
    ];
    setRoutes(fetchedRoutes);
  };

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="route-timings">
      <h2>Route Timings</h2>
      <div className="route-list">
        {routes.map((route) => (
          <button key={route.id} onClick={() => handleRouteSelect(route)}>
            {route.name}
          </button>
        ))}
      </div>

      {selectedRoute && (
        <div className="route-details">
          <h3>{selectedRoute.name} - Timings</h3>
          <ul>
            {selectedRoute.stops.map((stop, index) => (
              <li key={index}>
                {stop} - Estimated Arrival: {Math.floor(Math.random() * 60)} min
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RouteTimings;
