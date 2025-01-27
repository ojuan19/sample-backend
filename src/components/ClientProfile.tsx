import React from 'react';

const ClientProfile: React.FC = () => {
  return (
    <div className="dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-white">Client Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white">Name</label>
          <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input type="email" className="w-full p-2 rounded bg-gray-900 text-white" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-white">Address</label>
          <textarea className="w-full p-2 rounded bg-gray-900 text-white" placeholder="Enter your address"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ClientProfile;