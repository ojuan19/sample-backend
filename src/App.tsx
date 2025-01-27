import React from 'react';
import CartComponent from './components/CartComponent';
import ClientProfileComponent from './components/ClientProfileComponent';
import ShippingComponent from './components/ShippingComponent';
import PaymentComponent from './components/PaymentComponent';
import PayButtonComponent from './components/PayButtonComponent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-8">E-commerce Checkout</h1>
      <CartComponent />
      <ClientProfileComponent />
      <ShippingComponent />
      <PaymentComponent />
      <PayButtonComponent />
    </div>
  );
};

export default App;
