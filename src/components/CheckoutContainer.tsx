import React, { useState } from 'react';
import Cart from './Cart';
import ClientProfile from './ClientProfile';
import Shipping from './Shipping';
import Payment from './Payment';

const CheckoutContainer: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  const steps = [
    <Cart key="cart" />,
    <ClientProfile key="client" />, 
    <Shipping key="shipping" />, 
    <Payment key="payment" />
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <div className="mb-4 flex justify-between">
        <button onClick={prevStep} disabled={step === 0} className="bg-blue-500 px-4 py-2">Previous</button>
        <button onClick={nextStep} className="bg-blue-500 px-4 py-2">{step === steps.length - 1 ? 'Pay' : 'Next'}</button>
      </div>
      <div>
        {steps[step]}
      </div>
    </div>
  );
};

export default CheckoutContainer;
