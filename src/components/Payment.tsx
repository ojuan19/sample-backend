import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('credit');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const validatePaymentDetails = () => {
    return paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <form className="space-y-4">
        <input type="radio" name="paymentMethod" value="credit" checked={paymentMethod === 'credit'} onChange={() => setPaymentMethod('credit')} className="mr-2" /> Credit Card
        {paymentMethod === 'credit' && (
          <div className="space-y-2">
            <input type="text" name="cardNumber" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={handlePaymentChange} className="block w-full border p-2" required />
            <input type="text" name="expiryDate" placeholder="Expiry Date" value={paymentDetails.expiryDate} onChange={handlePaymentChange} className="block w-full border p-2" required />
            <input type="text" name="cvv" placeholder="CVV" value={paymentDetails.cvv} onChange={handlePaymentChange} className="block w-full border p-2" required />
          </div>
        )}
        {/* You can add PayPal or other options here */}
      </form>
    </div>
  );
};

export default Payment;
