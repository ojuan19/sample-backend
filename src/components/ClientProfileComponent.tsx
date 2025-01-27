import React, { useState } from 'react';

const ClientProfileComponent: React.FC = () => {
  const [profile, setProfile] = useState({ name: '', email: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded border border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded border border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded border border-gray-600"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientProfileComponent;
