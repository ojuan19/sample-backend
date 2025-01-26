import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PayButton from './components/PayButton';

const App: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handlePay = () => {
    if (validated) {
      alert('Payment successful!');
    } else {
      alert('Please complete all steps.');
    }
  };

  return (
    <Router>
      <div className="p-8">
      <nav className="mb-4">
        <Link to="/cart" className="mr-4">Cart</Link>
        <Link to="/profile" className="mr-4">Profile</Link>
        <Link to="/shipping" className="mr-4">Shipping</Link>
        <Link to="/payment" className="mr-4">Payment</Link>
      </nav>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<ClientProfile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <div className="mt-4">
        <PayButton onPay={handlePay} disabled={!validated} />
      </div>
      </div>
    </Router>
  );
};

export default App;
