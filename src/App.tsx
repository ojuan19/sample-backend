import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import './index.css';

function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const deletePatient = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8">Patient Records</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        <PatientForm addPatient={addPatient} />
        <PatientList patients={patients} deletePatient={deletePatient} />
      </div>
    </div>
  );
}

export default App;
