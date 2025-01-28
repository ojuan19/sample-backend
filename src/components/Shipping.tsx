import React from 'react';

const Shipping: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl">Shipping</h2>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <input type="radio" name="shipping" value="standard" className="mr-2" />
          <label>Standard (3-5 days)</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="radio" name="shipping" value="express" className="mr-2" />
          <label>Express (1-2 days)</label>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
