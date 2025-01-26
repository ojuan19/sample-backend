import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-2 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            <span className="text-2xl pl-2">Patient Records</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="/create"
            className="text-white no-underline hover:text-white hover:no-underline px-3"
          >
            Create Patient
          </Link>
          <Link
            to="/list"
            className="text-white no-underline hover:text-white hover:no-underline px-3"
          >
            Patient List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
