import React from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-2">
            <span>{item.name}</span> -
            <span> {item.quantity} x ${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
