import React from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: Item[];
  onUpdate: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdate, onRemove }) => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between py-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdate(item.id, parseInt(e.target.value))}
              className="w-16 text-black"
            />
            <button onClick={() => onRemove(item.id)} className="ml-4 bg-red-500 px-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;