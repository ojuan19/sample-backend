import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../context/CheckoutContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useContext(CheckoutContext);
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="mb-2 p-2 border-b border-gray-300">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => navigate('/client-profile')} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Client Profile
      </button>
    </div>
  );
};

export default Cart;
