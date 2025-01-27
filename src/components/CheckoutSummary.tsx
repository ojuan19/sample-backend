import React from 'react';

interface CheckoutSummaryProps {
  total: number;
  shippingCost: number;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ total, shippingCost }) => {
  const grandTotal = total + shippingCost;
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="mb-2">Subtotal: ${total.toFixed(2)}</div>
      <div className="mb-2">Shipping: ${shippingCost.toFixed(2)}</div>
      <div className="mt-4 font-bold text-lg">Total: ${grandTotal.toFixed(2)}</div>
      <button className="bg-green-500 text-white w-full p-2 rounded mt-4">PAY</button>
    </div>
  );
};

export default CheckoutSummary;
