import React, { useState } from 'react';

const Cart: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15.00, quantity: 2 }
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl">{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <input type="number" value={item.quantity}
                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                   className="w-12 bg-gray-900 text-white rounded-l px-3 py-1 focus:outline-none" />
            <button onClick={() => removeItem(item.id)} className="bg-red-500 px-3 py-1 rounded-r text-white">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
