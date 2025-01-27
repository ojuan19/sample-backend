import React from 'react';

interface PayButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const PayButton: React.FC<PayButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 px-6 py-2 rounded text-white ${disabled ? 'bg-gray-400' : 'bg-green-500 cursor-pointer'} dark:${disabled ? 'bg-gray-600' : 'bg-green-700'}`}
    >
      PAY
    </button>
  );
};

export default PayButton;
