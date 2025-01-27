import React from 'react';
import Cart from './Cart';
import ClientProfile from './ClientProfile';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout: React.FC = () => {
  const handlePay = () => {
    alert('Payment successful!');
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <Cart />
      <ClientProfile />
      <Shipping />
      <Payment />
      <button
        onClick={handlePay}
        className="mt-4 p-3 bg-green-600 text-white rounded hover:bg-green-700 w-full font-semibold"
      >
        PAY
      </button>
    </div>
  );
};

export default Checkout;
