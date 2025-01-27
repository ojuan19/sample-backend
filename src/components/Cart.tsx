import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const increaseQuantity = (id: number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setItems(
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-white">Cart</h2>
      {items.length === 0 ? (
        <p className="text-white">Your cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center p-2">
              <span className="text-white">{item.name}</span>
              <span className="text-white">
                ${item.price.toFixed(2)} x {item.quantity}
              </span>
              <div className="flex space-x-2">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-600 text-white px-2 py-1 rounded">-</button>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-600 text-white px-2 py-1 rounded">+</button>
                <button onClick={() => removeItem(item.id)} className="bg-red-600 text-white px-2 py-1 rounded">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;