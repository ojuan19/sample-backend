import React, { useState } from 'react';

const ClientProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Implement form submission logic
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Client Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
        <button type="submit" className="w-full bg-blue-500 dark:bg-blue-400 text-white font-semibold p-2 rounded-lg">
          Save
        </button>
      </form>
    </div>
  );
};

export default ClientProfile;
