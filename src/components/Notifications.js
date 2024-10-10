// src/components/Notifications.js
import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://your-websocket-server');
    ws.onmessage = (event) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        event.data,
      ]);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
