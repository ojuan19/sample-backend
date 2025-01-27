import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartSummary from './components/CartSummary';
import ClientProfileForm from './components/ClientProfileForm';
import ShippingOptions from './components/ShippingOptions';
import PaymentMethods from './components/PaymentMethods';
import PayButton from './components/PayButton';

function App() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white mb-4">Checkout</h1>
          <CartSummary />
          <ClientProfileForm />
          <ShippingOptions />
          <PaymentMethods />
          <PayButton />
        </div>
      </Router>
    </div>
  );
}

export default App;
