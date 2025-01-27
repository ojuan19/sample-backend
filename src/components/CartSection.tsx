import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartSection: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Item 1', price: 10.0, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20.0, quantity: 2 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-medium dark:text-white">{item.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">${item.price}</p>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="ml-2 text-red-500 dark:text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="font-bold text-lg dark:text-white">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default CartSection;
