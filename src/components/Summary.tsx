import React from 'react';

interface SummaryProps {
  totalCost: number;
  onPay: () => void;
}

const Summary: React.FC<SummaryProps> = ({ totalCost, onPay }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Summary</h2>
      <div className="flex justify-between items-center dark:text-white">
        <span>Total Cost:</span>
        <span>${totalCost}</span>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full"
        onClick={onPay}
      >
        PAY
      </button>
    </div>
  );
};

export default Summary;
