import React, { useState } from 'react';

const PayButtonComponent: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayNow = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment processed successfully!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <button
      onClick={handlePayNow}
      disabled={isProcessing}
      className={`mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md ${isProcessing ? 'opacity-50' : 'hover:bg-blue-700'}`}
    >
      {isProcessing ? 'Processing...' : 'PAY'}
    </button>
  );
};

export default PayButtonComponent;
