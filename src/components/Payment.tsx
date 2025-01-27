import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <div>
        <input
          type="radio"
          name="payment"
          value="creditCard"
          checked={paymentMethod === 'creditCard'}
          onChange={() => setPaymentMethod('creditCard')}
          className="mr-2"
        />
        <span>Credit Card</span>
      </div>
      <div>
        <input
          type="radio"
          name="payment"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={() => setPaymentMethod('paypal')}
          className="mr-2"
        />
        <span>PayPal</span>
      </div>
      {paymentMethod === 'creditCard' && (
        <div className="mt-4">
          <input type="text" placeholder="Card Number" className="p-2 w-full mb-2 bg-gray-700" />
          <input type="text" placeholder="Expiry Date" className="p-2 w-full mb-2 bg-gray-700" />
          <input type="text" placeholder="CVC" className="p-2 w-full mb-2 bg-gray-700" />
        </div>
      )}
    </div>
  );
};

export default Payment;
