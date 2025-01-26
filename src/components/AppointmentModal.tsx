import React, { useState } from 'react';

type AppointmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({ date: '', time: '', patient: '' });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment details:', appointmentDetails);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">Schedule Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            name="date"
            value={appointmentDetails.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="time"
            name="time"
            value={appointmentDetails.time}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={appointmentDetails.patient}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
            <button type="submit" className="bg-indigo-500 text-white p-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;