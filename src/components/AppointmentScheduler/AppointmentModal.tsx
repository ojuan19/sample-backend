import React from 'react';

const AppointmentModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-lg font-semibold">New Appointment</h3>
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm">Patient Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-sm">Date</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="p-2 bg-blue-600 text-white rounded">Save Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentModal;