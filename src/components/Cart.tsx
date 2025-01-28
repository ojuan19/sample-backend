import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, updateCart } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    updateCart(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    updateCart(id, 0);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
              <input
                type="number"
                className="w-16 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-1 rounded"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <span className="text-gray-800 dark:text-gray-200">${item.price.toFixed(2)}</span>
              <button 
                className="text-red-600 dark:text-red-400 hover:underline"
                onClick={() => handleRemoveItem(item.id)}
              >Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
