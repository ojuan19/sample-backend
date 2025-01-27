import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const shippingOptions = [
    { id: 1, name: 'Standard Shipping', duration: '3-5 days' },
    { id: 2, name: 'Express Shipping', duration: '1-2 days' },
  ];

  const [selectedOption, setSelectedOption] = useState<number>(shippingOptions[0].id);

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Shipping</h2>
      {shippingOptions.map((option) => (
        <div className="flex items-center mb-2 dark:text-white" key={option.id}>
          <input
            type="radio"
            name="shipping"
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)}
            className="mr-2"
          />
          <label>{option.name} ({option.duration})</label>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
