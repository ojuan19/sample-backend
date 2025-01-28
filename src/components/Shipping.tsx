import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [selectedShipping, setSelectedShipping] = useState('standard');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      <div className="flex flex-col">
        <label className="mb-2">
          <input
            type="radio"
            name="shipping"
            value="standard"
            checked={selectedShipping === 'standard'}
            onChange={() => setSelectedShipping('standard')}
          />
          Standard Shipping
        </label>
        <label className="mb-2">
          <input
            type="radio"
            name="shipping"
            value="express"
            checked={selectedShipping === 'express'}
            onChange={() => setSelectedShipping('express')}
          />
          Express Shipping
        </label>
      </div>
    </div>
  );
};

export default Shipping;