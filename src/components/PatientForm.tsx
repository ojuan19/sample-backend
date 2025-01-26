import React, { useState } from 'react';
import { validatePatient } from '../utils/ValidationUtils';

type Patient = {
  name: string;
  age: number;
  ailment: string;
};

const PatientForm: React.FC = () => {
  const [patient, setPatient] = useState<Patient>({ name: '', age: 0, ailment: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePatient(patient)) {
      console.log('Patient data is valid:', patient);
    } else {
      console.log('Validation failed for patient data:', patient);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={patient.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={patient.age}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="ailment"
        placeholder="Ailment"
        value={patient.ailment}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-indigo-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default PatientForm;