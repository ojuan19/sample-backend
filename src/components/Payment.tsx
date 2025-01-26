import React, { useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const Payment: React.FC = () => {
  const { finalizePurchase } = useContext(CheckoutContext);

  const handlePayment = () => {
    finalizePurchase();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <p>Select your payment method:</p>
      <div className="space-y-2">
        <button className="payment-option">Credit Card</button>
        <button className="payment-option">PayPal</button>
      </div>
      <button onClick={handlePayment} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        PAY
      </button>
    </div>
  );
};

export default Payment;
