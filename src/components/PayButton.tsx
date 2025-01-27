import React from 'react';

const PayButton = () => {
  const handlePay = () => {
    // Implement payment processing mock
    alert('Payment processed successfully!');
  };

  return (
    <button onClick={handlePay} className="bg-green-500 hover:bg-green-400 text-white p-2 rounded mt-4">
      Pay Now
    </button>
  );
};

export default PayButton;
