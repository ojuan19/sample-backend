import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Shipping: React.FC = () => {
  const { shipping, updateShipping } = useContext(UserContext);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
      <select value={shipping} onChange={(e) => updateShipping(e.target.value)} className="block w-full p-2 border">
        <option value="standard">Standard - Free</option>
        <option value="express">Express - $10</option>
        <option value="overnight">Overnight - $20</option>
      </select>
    </div>
  );
};

export default Shipping;