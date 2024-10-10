// src/components/ManageSchedules.js
import React, { useState } from 'react';
import './ManageSchedules.css';

const ManageSchedules = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, route: 'Route 1', time: '08:00 AM' },
    { id: 2, route: 'Route 2', time: '09:00 AM' },
  ]);
  const [newSchedule, setNewSchedule] = useState({ route: '', time: '' });

  const addSchedule = () => {
    if (newSchedule.route.trim() && newSchedule.time.trim()) {
      setSchedules([...schedules, { id: schedules.length + 1, ...newSchedule }]);
      setNewSchedule({ route: '', time: '' });
    }
  };

  const deleteSchedule = (scheduleId) => {
    setSchedules(schedules.filter(schedule => schedule.id !== scheduleId));
  };

  return (
    <div className="manage-schedules">
      <h2>Manage Schedules</h2>
      <div className="schedule-list">
        {schedules.map(schedule => (
          <div key={schedule.id} className="schedule-item">
            <span>{schedule.route} - {schedule.time}</span>
            <button onClick={() => deleteSchedule(schedule.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-schedule">
        <input
          type="text"
          placeholder="Route Name"
          value={newSchedule.route}
          onChange={(e) => setNewSchedule({ ...newSchedule, route: e.target.value })}
        />
        <input
          type="time"
          value={newSchedule.time}
          onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
        />
        <button onClick={addSchedule}>Add Schedule</button>
      </div>
    </div>
  );
};

export default ManageSchedules;
