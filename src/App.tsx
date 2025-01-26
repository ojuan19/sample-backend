import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import { CheckoutProvider } from './context/CheckoutContext';

const App: React.FC = () => {
  return (
    <CheckoutProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 p-5">
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/client-profile" element={<ClientProfile />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </CheckoutProvider>
  );
};

export default App;
