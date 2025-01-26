import React, { useState } from 'react';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PayButton from './components/PayButton';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handlePay = () => {
    alert('Payment processed successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Cart />;
      case 1:
        return <ClientProfile />;
      case 2:
        return <Shipping />;
      case 3:
        return <Payment />;
      default:
        return <Cart />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-2xl w-full p-4">
        {renderStep()}
        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button onClick={handlePrevious} className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold p-2 rounded-lg">
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button onClick={handleNext} className="bg-blue-500 dark:bg-blue-400 text-white font-semibold p-2 rounded-lg">
              Next
            </button>
          ) : (
            <PayButton onPay={handlePay} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
