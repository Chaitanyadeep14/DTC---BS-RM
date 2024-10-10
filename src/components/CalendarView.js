// src/components/CalendarView.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


const CalendarView = ({ schedules }) => {
  const events = schedules.map((schedule, index) => ({
    id: index,
    title: `Crew ${schedule.crewId} on Bus ${schedule.busId}`,
    start: new Date(),
    end: new Date(),
  }));
// src/components/YourComponent.js

// eslint-disable-next-line no-unused-vars


  return (
    <div className="calendar-view">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarView;
