import React from 'react';

const Payment = ({ method, onMethodChange }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
      <select
        value={method}
        onChange={(e) => onMethodChange(e.target.value)}
        className="w-full mt-1 p-2 border-2 border-gray-300 rounded"
      >
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
    </div>
  );
};

export default Payment;
