import React from 'react';
import { useForm } from 'react-hook-form';

const PatientForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h2 className="text-xl mb-4">Patient Record Form</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          {...register('name', { required: true })}
          className="border p-2 w-full"
        />
        {errors.name && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date of Birth</label>
        <input
          type="date"
          {...register('dob', { required: true })}
          className="border p-2 w-full"
        />
        {errors.dob && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contact Info</label>
        <input
          {...register('contact', { required: true })}
          className="border p-2 w-full"
        />
        {errors.contact && <span className="text-red-500">This field is required</span>}
      </div>
      <button type="submit" className="bg-green-500 text-white p-2">Submit</button>
    </form>
  );
};

export default PatientForm;