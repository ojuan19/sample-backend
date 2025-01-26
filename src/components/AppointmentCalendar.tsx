import React, { useState } from 'react';

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState([
    { date: '2023-03-21', status: 'confirmed' },
    { date: '2023-03-22', status: 'pending' },
    { date: '2023-03-23', status: 'canceled' }
  ]);

  const getColorClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'canceled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Appointment Calendar</h2>
      <div className="grid grid-cols-7 gap-4">
        {appointments.map((appointment, index) => (
          <div key={index} className={`p-2 ${getColorClass(appointment.status)}`}>
            {appointment.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCalendar;