import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../context/CheckoutContext';

const Shipping: React.FC = () => {
  const navigate = useNavigate();
  const { setShipping } = useContext(CheckoutContext);
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
  };

  const handleSubmit = () => {
    setShipping(selectedMethod);
    navigate('/payment');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Shipping</h2>
      <ul className="space-y-2">
        <li>
          <button onClick={() => handleSelect('standard')} className={`shipping-option ${selectedMethod === 'standard' ? 'selected' : ''}`}>
            Standard - $5.00 (3-5 business days)
          </button>
        </li>
        <li>
          <button onClick={() => handleSelect('express')} className={`shipping-option ${selectedMethod === 'express' ? 'selected' : ''}`}>
            Express - $15.00 (1-2 business days)
          </button>
        </li>
      </ul>
      <button onClick={handleSubmit} className="bg-purple-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Payment
      </button>
    </div>
  );
}

export default Shipping;
