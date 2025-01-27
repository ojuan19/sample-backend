import React, { useState } from 'react';

interface ShippingOption {
  id: number;
  name: string;
  cost: number;
}

const ShippingOptions: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<ShippingOption | null>(null);
  const shippingOptions: ShippingOption[] = [
    { id: 1, name: 'Standard', cost: 5.0 },
    { id: 2, name: 'Expedited', cost: 10.0 },
    { id: 3, name: 'Overnight', cost: 20.0 },
  ];

  const handleOptionChange = (option: ShippingOption) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
      {shippingOptions.map((option) => (
        <div key={option.id} className="flex justify-between items-center mb-2">
          <span className="text-lg dark:text-white">{option.name}</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">${option.cost}</span>
          <input
            type="radio"
            name="shippingOption"
            value={option.id}
            checked={selectedOption?.id === option.id}
            onChange={() => handleOptionChange(option)}
            className="ml-2"
          />
        </div>
      ))}
    </div>
  );
};

export default ShippingOptions;
