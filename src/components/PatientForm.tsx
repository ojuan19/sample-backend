import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type PatientFormInputs = {
  firstName: string;
  lastName: string;
  age: number;
};

interface PatientFormProps {
  addPatient: (patient: PatientFormInputs) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ addPatient }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PatientFormInputs>();

  const onSubmit: SubmitHandler<PatientFormInputs> = data => addPatient(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-gray-800 text-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2">First Name</label>
        <input className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" {...register('firstName', { required: 'First name is required' })} />
        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Last Name</label>
        <input className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" {...register('lastName', { required: 'Last name is required' })} />
        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Age</label>
        <input type="number" className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" {...register('age', { required: 'Age is required', valueAsNumber: true })} />
        {errors.age && <span className="text-red-500">{errors.age.message}</span>}
      </div>

      <button type="submit" className="mt-4 w-full py-2 bg-blue-600 rounded hover:bg-blue-500 transition">Submit</button>
    </form>
  );
};

export default PatientForm;
