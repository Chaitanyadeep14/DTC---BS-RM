// src/components/LinkedDutySchedule.js
import React, { useState } from 'react';
import CalendarView from './CalendarView';
import './LinkedDutySchedule.css';

const LinkedDutySchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [crewId, setCrewId] = useState('');
  const [busId, setBusId] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateSchedule = () => {
    if (editIndex !== null) {
      const updatedSchedules = schedules.map((schedule, index) =>
        index === editIndex ? { crewId, busId } : schedule
      );
      setSchedules(updatedSchedules);
      setEditIndex(null);
    } else {
      setSchedules([...schedules, { crewId, busId }]);
    }
    setCrewId('');
    setBusId('');
  };

  const editSchedule = (index) => {
    setCrewId(schedules[index].crewId);
    setBusId(schedules[index].busId);
    setEditIndex(index);
  };

  const deleteSchedule = (index) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  return (
    <div className="linked-duty-schedule">
      <h2>Linked Duty Scheduling</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Crew ID"
          value={crewId}
          onChange={(e) => setCrewId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bus ID"
          value={busId}
          onChange={(e) => setBusId(e.target.value)}
        />
      </div>
      <button onClick={addOrUpdateSchedule}>
        {editIndex !== null ? 'Update' : 'Add'} Schedule
      </button>

      <div className="schedule-list">
        {schedules.map((schedule, index) => (
          <div key={index}>
            Crew {schedule.crewId} assigned to Bus {schedule.busId}
            <button onClick={() => editSchedule(index)}>Edit</button>
            <button onClick={() => deleteSchedule(index)}>Delete</button>
          </div>
        ))}
      </div>

      <CalendarView schedules={schedules} />
    </div>
  );
};

export default LinkedDutySchedule;
