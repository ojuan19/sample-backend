import React, { useState } from 'react';

const Shipping = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 5.99, deliveryTime: '3-5 days' },
    { id: 'express', name: 'Express Shipping', price: 12.99, deliveryTime: '1-2 days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 19.99, deliveryTime: 'Next day' },
  ];

  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Shipping Options</h2>
      <ul>
        {shippingOptions.map(option => (
          <li key={option.id} className="mb-2">
            <label>
              <input type="radio" name="shipping" value={option.id} 
                checked={selectedOption === option.id} 
                onChange={() => setSelectedOption(option.id)}
              />
              {option.name} - ${option.price} ({option.deliveryTime})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;
