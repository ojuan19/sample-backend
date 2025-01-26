import React from 'react';

const PayButton: React.FC<{ onPay: () => void }> = ({ onPay }) => {
  return (
    <button onClick={onPay} className="w-full bg-green-500 dark:bg-green-400 text-white font-semibold p-4 rounded-lg mt-4">
      Pay Now
    </button>
  );
};

export default PayButton;
