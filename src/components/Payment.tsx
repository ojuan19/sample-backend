import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
      <div className="mb-2">
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="credit"
            checked={paymentMethod === 'credit'}
            onChange={() => setPaymentMethod('credit')}
            className="mr-2"
          />
          Credit Card
        </label>
        {paymentMethod === 'credit' && (
          <div className="mt-2">
            <input type="text" placeholder="Card Number" className="w-full text-black mb-2" />
            <input type="text" placeholder="Expiry Date" className="w-full text-black mb-2" />
            <input type="text" placeholder="CVV" className="w-full text-black mb-2" />
          </div>
        )}
      </div>
      <div className="mb-2">
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            className="mr-2"
          />
          PayPal
        </label>
        {paymentMethod === 'paypal' && (
          <div className="mt-2">
            <p>Please proceed with PayPal login to complete your payment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
