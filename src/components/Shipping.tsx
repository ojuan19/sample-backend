import React, { useState } from 'react';

const Shipping = () => {
  const [selectedOption, setSelectedOption] = useState('standard');
  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 5.00, estimate: '3-5 days' },
    { id: 'fast', name: 'Fast Shipping', price: 15.00, estimate: '1-2 days' }
  ];

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      {shippingOptions.map(option => (
        <div key={option.id} className="mb-2">
          <input
            type="radio"
            name="shipping"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)}
            className="mr-2"
          />
          <span>{option.name} - ${option.price} ({option.estimate})</span>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
