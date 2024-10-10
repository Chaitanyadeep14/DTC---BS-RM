// src/components/RouteManagement.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './RouteManagement.css';

// Import your custom marker image or logo
import locationIcon from '../assets/location-icon.png'; // Make sure to replace with your actual path

const RouteManagement = () => {
  const [routes, setRoutes] = useState([]);
  const [newRoute, setNewRoute] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  const addRoute = () => {
    setRoutes([...routes, newRoute]);
    setNewRoute([]);
  };

  const handleMapClick = (event) => {
    setNewRoute([...newRoute, [event.latlng.lat, event.latlng.lng]]);
  };

  const deleteRoute = (index) => {
    setRoutes(routes.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedRoutes = JSON.parse(e.target.result);
        setRoutes(uploadedRoutes);
      };
      reader.readAsText(file);
    }
  };

  const downloadRoutes = () => {
    const dataStr = JSON.stringify(routes);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const exportFileDefaultName = 'routes.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error fetching user location: ", error);
        }
      );
    }
  }, []); // Runs once on component mount to get the user's location

  // Define a custom icon using Leaflet
  const customLocationIcon = L.icon({
    iconUrl: locationIcon, // Path to your custom icon image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup position relative to the icon
  });

  function LocationMarker() {
    const map = useMap();

    useEffect(() => {
      if (userLocation) {
        map.setView(userLocation, map.getZoom());
      }
    }, [map]); // Removed `userLocation` from dependency array

    return userLocation === null ? null : (
      <Marker position={userLocation} icon={customLocationIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div className="route-management">
      <h2>Route Management</h2>
      <MapContainer
        center={userLocation || [28.6139, 77.2090]} // Default to Delhi if user location is not available
        zoom={13}
        style={{ height: "400px", width: "100%", marginBottom: '20px' }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && <LocationMarker />}
        {newRoute.map((position, index) => (
          <Marker key={index} position={position}>
            <Popup>Marker at {position}</Popup>
          </Marker>
        ))}
        {routes.map((route, index) => (
          <Polyline key={index} positions={route} color="blue">
            <Popup>
              <button onClick={() => deleteRoute(index)} className="small-button">Delete</button>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>
      <div className="button-group">
        <button onClick={addRoute} disabled={newRoute.length === 0} className="main-button">
          Add Route
        </button>
        <input type="file" accept=".json" onChange={handleFileUpload} className="file-input" />
        <button onClick={downloadRoutes} className="main-button">
          Download Routes
        </button>
      </div>
    </div>
  );
};

export default RouteManagement;
