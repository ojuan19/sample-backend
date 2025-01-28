import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PayButton from './components/PayButton';
import DarkModeToggle from './components/DarkModeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <DarkModeToggle />
            <Routes>
              <Route path="/" element={<Cart />} />
              <Route path="/profile" element={<ClientProfile />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
            <PayButton />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
