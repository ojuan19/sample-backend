import React from 'react';

interface SLA {
  id: number;
  name: string;
  cost: number;
}

interface ShippingProps {
  slas: SLA[];
  onSelect: (id: number) => void;
}

const Shipping: React.FC<ShippingProps> = ({ slas, onSelect }) => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold">Select Shipping Method</h2>
      <ul>
        {slas.map((sla) => (
          <li key={sla.id} className="flex justify-between py-2">
            <span>{sla.name}</span>
            <span>${sla.cost.toFixed(2)}</span>
            <button onClick={() => onSelect(sla.id)} className="ml-4 bg-green-500 px-2 rounded">Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipping;