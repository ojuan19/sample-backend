import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>([ // Placeholder items
    { id: 1, name: 'Item 1', quantity: 1, price: 30 },
    { id: 2, name: 'Item 2', quantity: 2, price: 20 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shopping Cart</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={e => updateQuantity(item.id, +e.target.value)}
            className="w-16 p-1 text-center bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <span className="text-gray-700 dark:text-gray-300">${item.price * item.quantity}</span>
          <button onClick={() => removeItem(item.id)} className="text-red-500 dark:text-red-400">Remove</button>
        </div>
      ))}
      <div className="flex justify-between items-center p-2 mt-4">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
        <span className="text-lg font-semibold text-gray-900 dark:text-white">${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
