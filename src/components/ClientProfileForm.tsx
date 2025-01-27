import React, { useState } from 'react';

interface ClientProfile {
  name: string;
  address: string;
  email: string;
}

const ClientProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<ClientProfile>({
    name: '',
    address: '',
    email: '',
  });

  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!profile.name || !profile.address || !profile.email) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Client Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleInputChange}
        className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleInputChange}
        className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleInputChange}
        className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
      />
      {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
      <button
        onClick={validateForm}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default ClientProfileForm;
