import React from 'react';

const ClientProfile = ({ profile, onProfileChange }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Client Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => onProfileChange({ ...profile, name: e.target.value })}
            className="w-full mt-1 p-2 border-2 border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => onProfileChange({ ...profile, email: e.target.value })}
            className="w-full mt-1 p-2 border-2 border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            value={profile.address}
            onChange={(e) => onProfileChange({ ...profile, address: e.target.value })}
            className="w-full mt-1 p-2 border-2 border-gray-300 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientProfile;
