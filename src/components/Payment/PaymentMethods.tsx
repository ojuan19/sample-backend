import React from 'react';

interface PaymentMethod {
  id: number;
  name: string;
}

interface PaymentMethodsProps {
  methods: PaymentMethod[];
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ methods }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
      <ul>
        {methods.map((method) => (
          <li key={method.id} className="mb-2">
            <button className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
              {method.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;
