import React from 'react';

const Payment: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl">Payment</h2>
      <div className="mt-4">
        <div className="mb-4">
          <input type="radio" name="payment" value="credit-card" className="mr-2" />
          <label>Credit Card</label>
        </div>
        <div className="mb-4">
          <input type="radio" name="payment" value="paypal" className="mr-2" />
          <label>PayPal</label>
        </div>
        {/* Further payment form fields would be here */}
      </div>
    </div>
  );
};

export default Payment;
