import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [method, setMethod] = useState('credit');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <div>
        <label className="block mb-2">
          <input type="radio" name="payment" value="credit" checked={method === 'credit'} onChange={(e) => setMethod(e.target.value)} /> Credit Card
        </label>
        <label className="block mb-2">
          <input type="radio" name="payment" value="debit" checked={method === 'debit'} onChange={(e) => setMethod(e.target.value)} /> Debit Card
        </label>
        <label className="block mb-2">
          <input type="radio" name="payment" value="paypal" checked={method === 'paypal'} onChange={(e) => setMethod(e.target.value)} /> PayPal
        </label>
      </div>
    </div>
  );
};

export default Payment;