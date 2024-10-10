// src/components/RealTimeTracking.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './RealTimeTracking.css';

const RealTimeTracking = () => {
  const [busLocations, setBusLocations] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('all'); // State to manage selected route
  const [routes] = useState(['Route 1', 'Route 2', 'Route 3']); // Mock route data for user input

  useEffect(() => {
    fetchBusLocations(selectedRoute);
  }, [selectedRoute]);

  const fetchBusLocations = async (route) => {
    // Simulate fetching real-time data based on selected route
    let fetchedLocations = [
      { id: 1, position: [28.6139, 77.2090], route: 'Route 1' },
      { id: 2, position: [28.7041, 77.1025], route: 'Route 2' },
      { id: 3, position: [28.5355, 77.3910], route: 'Route 3' },
    ];

    // Filter locations based on selected route if not "all"
    if (route !== 'all') {
      fetchedLocations = fetchedLocations.filter((bus) => bus.route === route);
    }

    setBusLocations(fetchedLocations);
  };

  const handleRouteChange = (e) => {
    setSelectedRoute(e.target.value);
  };

  return (
    <div className="real-time-tracking">
      <h2>Real-Time Bus Tracking</h2>
      <div className="route-selector">
        <label htmlFor="route">Select Route: </label>
        <select id="route" value={selectedRoute} onChange={handleRouteChange}>
          <option value="all">All Routes</option>
          {routes.map((route, index) => (
            <option key={index} value={route}>
              {route}
            </option>
          ))}
        </select>
      </div>
      <MapContainer center={[28.6139, 77.2090]} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {busLocations.map((bus) => (
          <Marker key={bus.id} position={bus.position}>
            <Popup>
              {bus.route} - Bus ID: {bus.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default RealTimeTracking;
