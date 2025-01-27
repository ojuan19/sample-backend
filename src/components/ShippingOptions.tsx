import React from 'react';

const ShippingOptions = () => {
  // Mock data for shipping options
  const shippingOptions = [
    { id: 1, name: 'Standard Shipping', cost: 5 },
    { id: 2, name: 'Express Shipping', cost: 15 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Shipping Options</h2>
      {shippingOptions.map(option => (
        <div key={option.id} className="flex justify-between mb-2">
          <span className="text-white">{option.name}</span>
          <span className="text-white">${option.cost}</span>
          {/* Add radio button for selection */}
          <input type="radio" name="shipping" value={option.id} />
        </div>
      ))}
    </div>
  );
};

export default ShippingOptions;
