import React from 'react';

const PayButton: React.FC = () => {
  const handlePayment = () => {
    alert('Payment Processed Successfully!');
  };

  return (
    <button onClick={handlePayment} className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 rounded text-white">
      PAY
    </button>
  );
};

export default PayButton;
