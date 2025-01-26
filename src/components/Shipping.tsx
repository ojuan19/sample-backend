import React, { useState } from 'react';

const Shipping: React.FC = () => {
  const [selectedSLA, setSelectedSLA] = useState<string>('standard');

  const shippingOptions = [
    { id: 'standard', label: 'Standard Shipping (5-7 days, Free)', cost: 0 },
    { id: 'express', label: 'Express Shipping (2-3 days, $9.99)', cost: 9.99 },
    { id: 'overnight', label: 'Overnight Shipping (1 day, $19.99)', cost: 19.99 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shipping Method</h2>
      <form className="space-y-2">
        {shippingOptions.map(option => (
          <label key={option.id} className="block">
            <input type="radio" name="shipping" value={option.id} checked={selectedSLA === option.id} onChange={() => setSelectedSLA(option.id)} className="mr-2" />
            {option.label}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Shipping;
