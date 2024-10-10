// src/components/UnlinkedDutySchedule.js
import React, { useState } from 'react';
import './UnlinkedDutySchedule.css';

const UnlinkedDutySchedule = () => {
  const [handoverSchedule, setHandoverSchedule] = useState([]);
  const [crewId, setCrewId] = useState('');
  const [busId, setBusId] = useState('');
  const [restPeriod, setRestPeriod] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateHandover = () => {
    if (editIndex !== null) {
      const updatedHandovers = handoverSchedule.map((handover, index) =>
        index === editIndex ? { crewId, busId, restPeriod } : handover
      );
      setHandoverSchedule(updatedHandovers);
      setEditIndex(null);
    } else {
      setHandoverSchedule([...handoverSchedule, { crewId, busId, restPeriod }]);
    }
    setCrewId('');
    setBusId('');
    setRestPeriod(0);
  };

  const editHandover = (index) => {
    setCrewId(handoverSchedule[index].crewId);
    setBusId(handoverSchedule[index].busId);
    setRestPeriod(handoverSchedule[index].restPeriod);
    setEditIndex(index);
  };

  const deleteHandover = (index) => {
    setHandoverSchedule(handoverSchedule.filter((_, i) => i !== index));
  };

  return (
    <div className="unlinked-duty-schedule">
      <h2>Unlinked Duty Scheduling</h2>
      <form className="form-group">
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
        <input
          type="number"
          placeholder="Rest Period (hours)"
          value={restPeriod}
          onChange={(e) => setRestPeriod(e.target.value)}
        />
        <button type="button" onClick={addOrUpdateHandover}>
          {editIndex !== null ? 'Update' : 'Add'} Handover
        </button>
      </form>

      <div className="handover-list">
        {handoverSchedule.map((handover, index) => (
          <div key={index}>
            <span>
              Crew {handover.crewId} handed over Bus {handover.busId} with {handover.restPeriod} hours rest.
            </span>
            <div className="handover-buttons">
              <button onClick={() => editHandover(index)}>Edit</button>
              <button onClick={() => deleteHandover(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlinkedDutySchedule;
