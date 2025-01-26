import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validate = (fieldValues = formData) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'This field is required.';
    if ('age' in fieldValues)
      temp.age = fieldValues.age ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? '' : 'Email is not valid.';

    setErrors({
      ...temp
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every(x => x === "")) {
      // Submit form
      console.log('Submitting', formData);
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Age</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          />
        {errors.age && <span className="text-red-500">{errors.age}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
          />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default PatientForm;
