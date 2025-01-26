import React, { useState } from 'react';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={patientData.firstName} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          value={patientData.lastName} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input 
          type="email" 
          name="email" 
          value={patientData.email} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input 
          type="tel" 
          name="phone" 
          value={patientData.phone} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">Submit</button>
    </form>
  );
}

export default PatientForm;