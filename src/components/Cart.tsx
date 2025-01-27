import React, { useState } from 'react';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([ // Sample data
    { name: 'Product 1', quantity: 1, price: 100 },
    { name: 'Product 2', quantity: 2, price: 50 },
  ]);

  const totalPrice = items.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-2 dark:text-white">
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <span>${item.quantity * item.price}</span>
          </li>
        ))}
      </ul>
      <div className="border-t mt-4 pt-4 flex justify-between dark:text-white">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
