import React from 'react';

const ProfileForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <label className="block mb-2">
        Name:
        <input type="text" className="block w-full mt-1 p-2 rounded-md bg-gray-700" />
      </label>
      <label className="block mb-2">
        Email:
        <input type="email" className="block w-full mt-1 p-2 rounded-md bg-gray-700" />
      </label>
      <label className="block mb-2">
        Address:
        <input type="text" className="block w-full mt-1 p-2 rounded-md bg-gray-700" />
      </label>
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
