import React, { useState } from 'react';

interface ShippingOption {
  id: number;
  name: string;
  cost: number;
  estimatedDelivery: string;
}

const Shipping: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const shippingOptions: ShippingOption[] = [
    { id: 1, name: 'Standard Shipping', cost: 5.99, estimatedDelivery: '3-5 business days' },
    { id: 2, name: 'Express Shipping', cost: 9.99, estimatedDelivery: '1-2 business days' },
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      {shippingOptions.map(option => (
        <div key={option.id} className="mb-2">
          <input
            type="radio"
            name="shipping"
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)}
            className="mr-2"
          />
          <span>{option.name} - ${option.cost.toFixed(2)} ({option.estimatedDelivery})</span>
        </div>
      ))}
      {selectedOption !== null && (
        <div className="mt-4 font-bold">
          Selected Option: {shippingOptions.find(option => option.id === selectedOption)?.name}
        </div>
      )}
    </div>
  );
};

export default Shipping;
