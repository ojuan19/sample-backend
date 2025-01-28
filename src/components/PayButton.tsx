import React from 'react';

const PayButton: React.FC = () => {
  const handlePayment = () => {
    alert('Payment processed!');
  };

  return (
    <button 
      onClick={handlePayment} 
      className="w-full mt-4 p-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900">
      Pay Now
    </button>
  );
};

export default PayButton;
