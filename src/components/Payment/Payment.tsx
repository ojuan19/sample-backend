import React from 'react';

const Payment: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment Successful');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Payment</h2>
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200">Credit Card Number</label>
        <input type="text" required className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-gray-200">Expiration Date</label>
        <input type="text" required className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white" />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Pay
      </button>
    </form>
  );
};

export default Payment;
