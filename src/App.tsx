import React, { useState } from 'react';
import CartSection from './components/CartSection';
import ClientProfileForm from './components/ClientProfileForm';
import ShippingOptions from './components/ShippingOptions';
import PaymentMethod from './components/PaymentMethod';
import PayButton from './components/PayButton';

const App: React.FC = () => {
  const [isProfileValid, setProfileValid] = useState(false);
  const [isShippingSelected, setShippingSelected] = useState(false);
  const [isPaymentMethodValid, setPaymentMethodValid] = useState(false);

  const handleProfileValidation = (isValid: boolean) => setProfileValid(isValid);
  const handleShippingSelection = (isSelected: boolean) => setShippingSelected(isSelected);
  const handlePaymentValidation = (isValid: boolean) => setPaymentMethodValid(isValid);

  const handleCheckout = () => {
    if (isProfileValid && isShippingSelected && isPaymentMethodValid) {
      alert('Payment Successful!');
    } else {
      alert('Please complete all checkout steps.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-6">
      <CartSection />
      <ClientProfileForm />
      <ShippingOptions />
      <PaymentMethod />
      <PayButton disabled={!(isProfileValid && isShippingSelected && isPaymentMethodValid)} onClick={handleCheckout} />
    </div>
  );
};

export default App;
