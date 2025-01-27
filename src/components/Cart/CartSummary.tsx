import React from 'react';

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mt-4">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      <p className="text-lg">Total: ${total.toFixed(2)}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white">
        Adjust Quantities
      </button>
    </div>
  );
};

export default CartSummary;
