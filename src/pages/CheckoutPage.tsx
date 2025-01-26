import React from 'react';
import Button from '../styles/Button';

const CheckoutPage: React.FC = () => {
  const handleCheckout = () => {
    alert('Proceed to checkout');
  };

  return (
    <div className="container mx-auto my-10 p-5 max-w-lg bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-5">Checkout Page</h1>
      <Button label="Checkout" onClick={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
