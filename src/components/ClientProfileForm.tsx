import React from 'react';

const ClientProfileForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
      <div className="mb-2">
        <label className="block text-white">Name:</label>
        <input type="text" className="w-full mt-1 p-2 rounded" required />
      </div>
      <div className="mb-2">
        <label className="block text-white">Email:</label>
        <input type="email" className="w-full mt-1 p-2 rounded" required />
      </div>
      <div className="mb-2">
        <label className="block text-white">Address:</label>
        <input type="text" className="w-full mt-1 p-2 rounded" required />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ClientProfileForm;
