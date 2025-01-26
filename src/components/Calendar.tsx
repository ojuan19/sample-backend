import React from 'react';

// A very basic calendar layout
const Calendar: React.FC = () => {
  return (
    <div className="border rounded shadow-md">
      <div className="p-4 font-semibold text-xl">Appointments</div>
      <div className="grid grid-cols-7">
        {/* Placeholder for calendar days */}
        {[...Array(30)].map((_, i) => (
          <div key={i} className="p-2 h-20 border">
            <div className="text-xs">Day {i + 1}</div>
            <div className="text-sm text-green-500">Available</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;