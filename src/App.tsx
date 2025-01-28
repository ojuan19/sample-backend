import React, { useState, createContext } from 'react';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: true,
  toggleDarkMode: () => {},
});

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <header className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">E-Commerce Checkout</h1>
            <DarkModeToggle />
          </header>
          <main className="p-4 space-y-8">
            <Cart />
            <ClientProfile />
            <Shipping />
            <Payment />
            <button className="bg-green-500 text-white px-4 py-2">PAY</button>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;