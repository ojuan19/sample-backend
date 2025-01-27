import React, { useState } from 'react';

const PaymentComponent: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">Payment</h2>
      <form className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={handleMethodChange}
            className="mr-2"
          />
          Credit Card
        </label>
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handleMethodChange}
            className="mr-2"
          />
          PayPal
        </label>
      </form>
    </div>
  );
};

export default PaymentComponent;
