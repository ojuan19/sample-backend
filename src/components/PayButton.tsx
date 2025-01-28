import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const PayButton: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const { profile, shipping } = useContext(UserContext);

  const handlePay = () => {
    // Placeholder for handling payment
    console.log('Processing payment...', { cartItems, profile, shipping });
    alert('Payment processed!');
  };

  return (
    <div className="p-4">
      <button onClick={handlePay} className="bg-green-500 text-white py-2 px-4 rounded">
        Pay Now
      </button>
    </div>
  );
};

export default PayButton;