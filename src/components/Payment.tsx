import React from 'react';

interface PaymentMethod {
  id: number;
  method: string;
}

interface PaymentProps {
  methods: PaymentMethod[];
  onPay: () => void;
}

const Payment: React.FC<PaymentProps> = ({ methods, onPay }) => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold">Payment</h2>
      <ul>
        {methods.map((method) => (
          <li key={method.id} className="flex justify-between py-2">
            <span>{method.method}</span>
          </li>
        ))}
      </ul>
      <button onClick={onPay} className="mt-4 bg-blue-500 px-3 py-1 rounded">PAY</button>
    </div>
  );
};

export default Payment;