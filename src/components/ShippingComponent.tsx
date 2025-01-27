import React, { useState } from 'react';

const ShippingComponent: React.FC = () => {
  const [shippingOption, setShippingOption] = useState('standard');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingOption(e.target.value);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">Shipping</h2>
      <form className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name="shipping"
            value="standard"
            checked={shippingOption === 'standard'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          Standard Shipping
        </label>
        <label className="block">
          <input
            type="radio"
            name="shipping"
            value="express"
            checked={shippingOption === 'express'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          Express Shipping
        </label>
      </form>
    </div>
  );
};

export default ShippingComponent;
