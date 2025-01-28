import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Spotify Clone</div>
      <input type="text" placeholder="Search..." className="p-2 bg-gray-800 text-white rounded" />
      <div className="flex items-center">
        <div className="mr-2">User</div>
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;