import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Settings from './components/Settings';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-8">
      <Timer />
      <Settings />
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
