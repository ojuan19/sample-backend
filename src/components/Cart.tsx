import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', price: 49.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 2 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((items) => items.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              className="w-12 text-center"
            />
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-2 py-1">Remove</button>
          </li>
        ))}
      </ul>
      <div className="border-t pt-4 mt-4">
        <span className="font-bold">Total: ${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;