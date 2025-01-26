import React from 'react';

const PayButton: React.FC<{ onPay: () => void, disabled: boolean }> = ({ onPay, disabled }) => {
  return (
    <button
      onClick={onPay}
      disabled={disabled}
      className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400">
      Pay Now
    </button>
  );
};

export default PayButton;
