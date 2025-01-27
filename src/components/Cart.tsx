import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: 'Item 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Item 2', price: 39.99, quantity: 2 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name} (${item.price})</span>
              <input
                type="number"
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-black ml-2"
              />
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Total: ${totalCost.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
