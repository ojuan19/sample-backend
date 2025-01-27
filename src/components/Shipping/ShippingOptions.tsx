import React from 'react';

interface ShippingOption {
  id: number;
  name: string;
  price: number;
}

interface ShippingOptionsProps {
  options: ShippingOption[];
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id} className="mb-2">
            <span>{option.name}</span> -
            <span> ${option.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingOptions;
