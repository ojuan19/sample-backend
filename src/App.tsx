import React, { useState } from 'react';
import CreatePatientForm from './components/CreatePatientForm';
import PatientList from './components/PatientList';

interface Patient {
  id: number;
  name: string;
  age: number;
  medicalHistory: string;
}

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Omit<Patient, 'id'>) => {
    setPatients((prevPatients) => [
      ...prevPatients,
      { ...patient, id: prevPatients.length + 1 },
    ]);
  };

  const deletePatient = (id: number) => {
    setPatients((prevPatients) => prevPatients.filter(patient => patient.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <CreatePatientForm addPatient={addPatient} />
        </div>
        <div className="md:w-1/2">
          <PatientList patients={patients} deletePatient={deletePatient} />
        </div>
      </div>
    </div>
  );
};

export default App;
