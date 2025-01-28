import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span className="text-lg text-gray-800 dark:text-gray-200">{item.name}</span>
            <span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 p-1 text-center border rounded"
              />
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 p-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
