import React, { useState } from 'react';

interface ShippingOption {
  id: number;
  name: string;
  cost: number;
}

const Shipping: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const shippingOptions: ShippingOption[] = [
    { id: 1, name: 'Standard Shipping', cost: 5 },
    { id: 2, name: 'Express Shipping', cost: 15 },
  ];

  const handleSelect = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping Options</h2>
      <ul className="space-y-2">
        {shippingOptions.map(option => (
          <li key={option.id} className={`flex justify-between items-center p-2 cursor-pointer ${selectedOption === option.id ? 'bg-blue-200 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'}`} onClick={() => handleSelect(option.id)}>
            <span className="text-gray-900 dark:text-white">{option.name}</span>
            <span className="text-gray-900 dark:text-white">${option.cost}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;
