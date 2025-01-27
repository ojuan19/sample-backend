import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 24.99, quantity: 1 },
    { id: 2, name: 'Product B', price: 14.99, quantity: 1 }
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="mb-4">
          <div className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
          <input 
            type="number" 
            value={item.quantity} 
            min="1"
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))} 
            className="mt-2 p-2 w-full bg-gray-700"
          />
        </div>
      ))}
      <div className="font-bold">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default Cart;
