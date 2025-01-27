import React, { useState } from 'react';

const Payment: React.FC = () => {
  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
  const [selectedMethod, setSelectedMethod] = useState<string>(paymentMethods[0]);

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Payment</h2>
      {paymentMethods.map((method) => (
        <div className="flex items-center mb-2 dark:text-white" key={method}>
          <input
            type="radio"
            name="payment"
            checked={selectedMethod === method}
            onChange={() => setSelectedMethod(method)}
            className="mr-2"
          />
          <label>{method}</label>
        </div>
      ))}
    </div>
  );
};

export default Payment;
