import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');

  const paymentOptions = [
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'PayPal', value: 'paypal' }
  ];

  const handlePayment = () => {
    alert('Payment submitted successfully!');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
      {paymentOptions.map(option => (
        <div key={option.value} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value={option.value}
              checked={selectedPayment === option.value}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="form-radio h-4 w-4 text-blue-500"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        </div>
      ))}
      <button onClick={handlePayment} className="mt-4 bg-green-500 px-4 py-2 rounded text-white">Pay</button>
    </div>
  );
};

export default Payment;
