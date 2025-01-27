import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const paymentMethods = ['Credit Card', 'PayPal'];

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <ul>
        {paymentMethods.map((method, index) => (
          <li key={index} className="py-2">
            <input
              type="radio"
              id={`payment-${method}`}
              name="payment"
              value={method}
              checked={selectedMethod === method}
              onChange={() => setSelectedMethod(method)}
              className="mr-2"
            />
            <label htmlFor={`payment-${method}`}>{method}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
