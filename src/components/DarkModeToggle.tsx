import React from 'react';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex items-center justify-between">
      <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
      >
        {darkMode ? 'Disable' : 'Enable'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
