import React, { useState } from 'react';

const generateCalendar = () => {
  // Replace this with actual logic to generate calendar dates
  return Array.from({ length: 30 }, (_, i) => ({ date: `2023-09-${i + 1}` }));
};

const AppointmentCalendar = () => {
  const [dates] = useState(generateCalendar());

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
      <div className="grid grid-cols-7 gap-4">
        {dates.map((dateObj, index) => (
          <div key={index} className="p-2 border rounded text-center">
            {dateObj.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCalendar;
