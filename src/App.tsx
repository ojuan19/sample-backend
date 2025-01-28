import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ClientProfile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
