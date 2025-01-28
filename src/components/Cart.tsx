import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-lg">{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div className="flex items-center">
            <input type="number" value={item.quantity} min="1" onChange={(e) => updateQuantity(item.id, e.target.value)} className="w-16 text-right mr-2" />
            <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;