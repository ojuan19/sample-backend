import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;