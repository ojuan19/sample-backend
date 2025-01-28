import React from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode }) => (
          <div className={darkMode ? 'bg-gray-800 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold mb-4">Welcome to Dark Mode App</h1>
              <ToggleSwitch />
              <p className="mt-4">This is a simple application with a dark mode toggle.</p>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
