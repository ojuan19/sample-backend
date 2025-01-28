import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [currentOption, setCurrentOption] = useState('standard');

  const options = [
    { label: 'Standard Shipping', value: 'standard', cost: 5 },
    { label: 'Express Shipping', value: 'express', cost: 15 },
    { label: 'Next-Day Shipping', value: 'nextDay', cost: 25 }
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Shipping Options</h2>
      <ul className="space-y-2">
        {options.map(option => (
          <li key={option.value} className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value={option.value}
              checked={currentOption === option.value}
              onChange={() => setCurrentOption(option.value)}
              className="mr-2"
            />
            <label className="text-gray-800 dark:text-gray-200">
              {option.label} - ${option.cost}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;
