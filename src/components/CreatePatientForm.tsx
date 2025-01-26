import React, { useState } from 'react';

interface CreatePatientFormProps {
  addPatient: (patient: Omit<Patient, 'id'>) => void;
}

interface FormState {
  name: string;
  age: string;
  medicalHistory: string;
}

const CreatePatientForm: React.FC<CreatePatientFormProps> = ({ addPatient }) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    age: '',
    medicalHistory: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.age) {
      alert('Name and Age are required');
      return;
    }

    addPatient({
      name: formState.name,
      age: formState.age,
      medicalHistory: formState.medicalHistory,
    });

    setFormState({
      name: '',
      age: '',
      medicalHistory: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalHistory">
          Medical History
        </label>
        <textarea
          name="medicalHistory"
          value={formState.medicalHistory}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Patient
        </button>
      </div>
    </form>
  );
};

export default CreatePatientForm;
