import React from 'react';
import Cart from './Cart';
import ClientProfile from './ClientProfile';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout: React.FC = () => {
  return (
    <div className="space-y-4">
      <Cart />
      <ClientProfile />
      <Shipping />
      <Payment />
      <button className="w-full bg-green-600 text-white p-2 rounded shadow">PAY</button>
    </div>
  );
};

export default Checkout;