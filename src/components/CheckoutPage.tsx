import React, { useState } from 'react';
import Cart from './Cart';
import ClientProfile from './ClientProfile';
import Shipping from './Shipping';
import Payment from './Payment';

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const steps = [<Cart />, <ClientProfile />, <Shipping />, <Payment />];

  const nextStep = () => {
    setStep(Math.min(step + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep(Math.max(step - 1, 0));
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Checkout Process</h1>
      <div>{steps[step]}</div>
      <div className="flex justify-between mt-4">
        {step > 0 && <button onClick={prevStep} className="px-4 py-2 bg-gray-700">Back</button>}
        {step < steps.length - 1 ? (
          <button onClick={nextStep} className="px-4 py-2 bg-blue-600">Next</button>
        ) : (
          <button className="px-4 py-2 bg-green-600">Pay</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
