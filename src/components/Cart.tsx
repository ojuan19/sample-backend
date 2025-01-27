import React from 'react';

const Cart = ({ items, onUpdate }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price}</span>
              <button
                onClick={() => onUpdate(index)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
