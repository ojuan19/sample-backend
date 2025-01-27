import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('creditCard');

  return (
    <div className="dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-white">Payment Method</h2>
      <div>
        <label className="flex items-center text-white mb-2">
          <input
            type="radio"
            name="payment"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
            className="mr-2"
          />
          Credit Card
        </label>
        <label className="flex items-center text-white mb-2">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            className="mr-2"
          />
          PayPal
        </label>
      </div>
    </div>
  );
};

export default Payment;