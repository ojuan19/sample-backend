import React, { useState } from 'react';

const ClientProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isValid = name && email.includes('@') && phone.length >= 10;

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Client Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1 dark:text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 dark:text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 dark:text-white">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </form>
      <div className="mt-2">
        <button className={`px-4 py-2 text-white ${isValid ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'}`}
          disabled={!isValid}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ClientProfile;
