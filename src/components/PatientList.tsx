import React from 'react';

interface Patient {
  id: number;
  name: string;
  age: number;
  medicalHistory: string;
}

interface PatientListProps {
  patients: Patient[];
  deletePatient: (id: number) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, deletePatient }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
      <h2 className="text-gray-700 text-lg font-bold mb-4">Patient List</h2>
      {patients.length === 0 ? (
        <p className="text-gray-500">No patients to display</p>
      ) : (
        <ul>
          {patients.map(patient => (
            <li key={patient.id} className="mb-4 border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 font-bold">{patient.name}</p>
                  <p className="text-gray-700">Age: {patient.age}</p>
                  <p className="text-gray-600">Medical History: {patient.medicalHistory}</p>
                </div>
                <button
                  onClick={() => deletePatient(patient.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;
