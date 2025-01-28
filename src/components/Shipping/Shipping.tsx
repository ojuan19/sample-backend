import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('standard');
  const options = [
    { id: 'standard', name: 'Standard Shipping', duration: '3-5 days' },
    { id: 'express', name: 'Express Shipping', duration: '1-2 days' },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Shipping</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id} className="mb-2">
            <label className="text-gray-800 dark:text-gray-200">
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-2"
              />
              {option.name} ({option.duration})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;
