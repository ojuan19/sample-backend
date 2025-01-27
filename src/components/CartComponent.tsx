import React from 'react';

const CartComponent: React.FC = () => {
  // Dummy data for the cart items
  const cartItems = [
    { id: 1, name: 'Item 1', quantity: 2, price: 50 },
    { id: 2, name: 'Item 2', quantity: 1, price: 30 },
  ];

  const totalCost = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-b border-gray-600 px-4 py-2 text-left">Item</th>
            <th className="border-b border-gray-600 px-4 py-2 text-left">Quantity</th>
            <th className="border-b border-gray-600 px-4 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border-b border-gray-600 px-4 py-2">{item.name}</td>
              <td className="border-b border-gray-600 px-4 py-2">{item.quantity}</td>
              <td className="border-b border-gray-600 px-4 py-2">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right font-bold">
        Total: ${totalCost}
      </div>
    </div>
  );
};

export default CartComponent;
