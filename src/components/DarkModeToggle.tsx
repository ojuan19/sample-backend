import React from 'react';

const DarkModeToggle: React.FC<{ toggleDarkMode: () => void }> = ({ toggleDarkMode }) => {
  return (
    <div className="flex justify-center mt-4">
      <button onClick={toggleDarkMode} className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded">
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
