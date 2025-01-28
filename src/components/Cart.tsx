import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl">Cart</h2>
      {/* Item list with option to update quantity or remove items */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <div>Item 1</div>
          <div className="flex items-center">
            <button className="bg-red-500 px-2 py-1 mr-2">-</button> 1 <button className="bg-green-500 px-2 py-1 ml-2">+</button>
            <button className="bg-gray-700 px-2 py-1 ml-4">Remove</button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div>Item 2</div>
          <div className="flex items-center">
            <button className="bg-red-500 px-2 py-1 mr-2">-</button> 1 <button className="bg-green-500 px-2 py-1 ml-2">+</button>
            <button className="bg-gray-700 px-2 py-1 ml-4">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
