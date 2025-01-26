import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const handleSelect = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
      <div className="space-y-2">
        <div onClick={() => handleSelect('Credit Card')} className={`p-2 cursor-pointer ${paymentMethod === 'Credit Card' ? 'bg-blue-200 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
          <span className="text-gray-900 dark:text-white">Credit Card</span>
        </div>
        <div onClick={() => handleSelect('PayPal')} className={`p-2 cursor-pointer ${paymentMethod === 'PayPal' ? 'bg-blue-200 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
          <span className="text-gray-900 dark:text-white">PayPal</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
