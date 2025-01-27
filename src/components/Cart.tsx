import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: 'Item 1', price: 25, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-b py-2 flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <input
              type="number"
              className="w-16 text-black text-center"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-semibold">
        Total: ${calculateTotal().toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
