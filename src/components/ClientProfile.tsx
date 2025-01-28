import React, { useState } from 'react';

const ClientProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Client Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientProfile;
