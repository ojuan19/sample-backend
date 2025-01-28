import React from 'react';

const ClientProfile: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl">Client Profile</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full bg-gray-800 text-white p-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full bg-gray-800 text-white p-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input type="text" className="w-full bg-gray-800 text-white p-2" required />
        </div>
      </form>
    </div>
  );
};

export default ClientProfile;
