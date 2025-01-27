import React, { useState } from 'react';

interface ShippingOption {
  id: number;
  name: string;
  price: number;
}

const Shipping: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const shippingOptions: ShippingOption[] = [
    { id: 1, name: 'Standard Shipping', price: 5 },
    { id: 2, name: 'Express Shipping', price: 15 },
  ];

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      <ul>
        {shippingOptions.map((option) => (
          <li key={option.id} className="py-2">
            <input
              type="radio"
              id={`shipping-${option.id}`}
              name="shipping"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="mr-2"
            />
            <label htmlFor={`shipping-${option.id}`}>{option.name} - ${option.price.toFixed(2)}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;
