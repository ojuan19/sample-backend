import React from 'react';

const Shipping = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
      <select
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        className="w-full mt-1 p-2 border-2 border-gray-300 rounded"
      >
        <option value="standard">Standard Shipping</option>
        <option value="express">Express Shipping</option>
      </select>
    </div>
  );
};

export default Shipping;
