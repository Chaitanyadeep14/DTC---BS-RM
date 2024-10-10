// src/components/UserManagement.js
import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'User1', role: 'passenger' },
  ]);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <span>{user.name} - {user.role}</span>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
