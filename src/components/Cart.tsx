import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([{
    id: 1,
    name: 'Sample Item',
    price: 29.99,
    quantity: 1
  }]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="border-b py-2 flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className="w-12 text-center" min="1" />
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <span className="font-bold">Total: </span>${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
