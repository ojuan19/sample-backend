import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [selectedSLA, setSelectedSLA] = useState('Standard Shipping');

  const shippingOptions = [
    { label: 'Standard Shipping', value: 'standard' },
    { label: 'Express Shipping', value: 'express' },
    { label: 'Next Day Shipping', value: 'next-day' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Shipping Options</h2>
      {shippingOptions.map(option => (
        <div key={option.value} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value={option.value}
              checked={selectedSLA === option.value}
              onChange={(e) => setSelectedSLA(e.target.value)}
              className="form-radio h-4 w-4 text-blue-500"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
