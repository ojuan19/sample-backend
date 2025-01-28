import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("ToggleSwitch must be used within a ThemeProvider");

  const { darkMode, toggleDarkMode } = themeContext;

  return (
    <div className="flex items-center justify-center mt-4">
      <label htmlFor="toggle-switch" className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" id="toggle-switch" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
