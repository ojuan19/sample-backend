import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl">Spotify Clone</div>
        <div className="flex space-x-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/settings" className="hover:underline">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;