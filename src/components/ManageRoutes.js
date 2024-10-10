// src/components/ManageRoutes.js
import React, { useState } from 'react';
import './ManageRoutes.css';

const ManageRoutes = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: 'Route 1', stops: ['Stop A', 'Stop B', 'Stop C'] },
    { id: 2, name: 'Route 2', stops: ['Stop D', 'Stop E', 'Stop F'] },
  ]);
  const [newRouteName, setNewRouteName] = useState('');

  const addRoute = () => {
    if (newRouteName.trim()) {
      setRoutes([...routes, { id: routes.length + 1, name: newRouteName, stops: [] }]);
      setNewRouteName('');
    }
  };

  const deleteRoute = (routeId) => {
    setRoutes(routes.filter(route => route.id !== routeId));
  };

  return (
    <div className="manage-routes">
      <h2>Manage Bus Routes</h2>
      <div className="route-list">
        {routes.map(route => (
          <div key={route.id} className="route-item">
            <span>{route.name}</span>
            <button onClick={() => deleteRoute(route.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-route">
        <input
          type="text"
          placeholder="New Route Name"
          value={newRouteName}
          onChange={(e) => setNewRouteName(e.target.value)}
        />
        <button onClick={addRoute}>Add Route</button>
      </div>
    </div>
  );
};

export default ManageRoutes;
