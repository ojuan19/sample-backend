import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('standard');

  const options = [
    { id: 'standard', name: 'Standard Shipping' },
    { id: 'express', name: 'Express Shipping' },
  ];

  return (
    <div className="dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-white">Shipping Options</h2>
      {options.map(option => (
        <div key={option.id} className="mb-2">
          <label className="flex items-center text-white">
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="mr-2"
            />
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Shipping;