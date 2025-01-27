import React, { useState } from 'react';

interface PaymentDetails {
  method: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

const PaymentMethod: React.FC = () => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    method: 'creditCard',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
      <div className="mb-4">
        <input
          type="radio"
          name="method"
          value="creditCard"
          checked={paymentDetails.method === 'creditCard'}
          onChange={handleInputChange}
          className="mr-2"
        />
        <span className="dark:text-white">Credit Card</span>
      </div>
      {paymentDetails.method === 'creditCard' && (
        <div>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            onChange={handleInputChange}
            className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiry Date"
            onChange={handleInputChange}
            className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={handleInputChange}
            className="block w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
