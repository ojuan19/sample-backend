import React from 'react';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 30, contact: '123-456-7890' },
    { id: 2, name: 'Jane Smith', age: 25, contact: '987-654-3210' }
    // Mock data; ideally fetch from state or API
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl mb-4">Patient List</h2>
      <ul className="list-disc">
        {patients.map(patient => (
          <li key={patient.id} className="mb-2">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
