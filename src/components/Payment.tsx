import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit_card');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payment Options</h2>
      <div className="flex flex-col">
        <label className="mb-2">
          <input
            type="radio"
            name="payment"
            value="credit_card"
            checked={selectedPayment === 'credit_card'}
            onChange={() => setSelectedPayment('credit_card')}
          />
          Credit Card
        </label>
        <label className="mb-2">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={selectedPayment === 'paypal'}
            onChange={() => setSelectedPayment('paypal')}
          />
          PayPal
        </label>
      </div>
    </div>
  );
};

export default Payment;