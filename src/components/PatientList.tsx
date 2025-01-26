import React from 'react';

type Patient = {
  firstName: string;
  lastName: string;
  age: number;
};

interface PatientListProps {
  patients: Patient[];
  deletePatient: (index: number) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, deletePatient }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md">
      <h2 className="text-xl mb-4">Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded">
            <span>{`${patient.firstName} ${patient.lastName}, Age: ${patient.age}`}</span>
            <button 
              onClick={() => deletePatient(index)} 
              className="ml-4 py-1 px-2 bg-red-600 rounded hover:bg-red-500 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
