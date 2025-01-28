import React from 'react';

const ClientProfile: React.FC = () => {
  // Handle forms using native React handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted'); // Implement form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Client Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200">Name</label>
        <input type="text" required className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200">Address</label>
        <textarea required className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200">Email</label>
        <input type="email" required className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" />
      </div>
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Save
      </button>
    </form>
  );
};

export default ClientProfile;
