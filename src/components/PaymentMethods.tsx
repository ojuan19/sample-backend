import React from 'react';

const PaymentMethods = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
      <div className="flex justify-between mb-2">
        <span className="text-white">Credit Card</span>
        <input type="radio" name="payment" value="credit-card" />
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-white">PayPal</span>
        <input type="radio" name="payment" value="paypal" />
      </div>
      {/* Add additional payment methods as necessary */}
    </div>
  );
};

export default PaymentMethods;
