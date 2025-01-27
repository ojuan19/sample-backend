import React, { useState } from 'react';

const Payment = () => {
  const [method, setMethod] = useState('creditCard');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    // Mock payment processing
    alert('Payment processed!');
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className="mb-4">
        <label>
          <input type="radio" value="creditCard" checked={method === 'creditCard'} 
            onChange={() => setMethod('creditCard')}
          />
          Credit Card
        </label>
        <label>
          <input type="radio" value="paypal" checked={method === 'paypal'} 
            onChange={() => setMethod('paypal')}
          />
          PayPal
        </label>
      </div>
      {method === 'creditCard' && (
        <div>
          <input type="text" placeholder="Credit Card Number" value={creditCardNumber} 
            onChange={e => setCreditCardNumber(e.target.value)} className="block mb-2"
          />
          <input type="text" placeholder="Expiry Date (MM/YY)" value={expiryDate} 
            onChange={e => setExpiryDate(e.target.value)} className="block mb-2"
          />
          <input type="text" placeholder="CVC" value={cvc} 
            onChange={e => setCvc(e.target.value)} className="block mb-2"
          />
        </div>
      )}
      <button onClick={handlePayment} className="mt-4">Pay</button>
    </div>
  );
};

export default Payment;
