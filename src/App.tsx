import React from 'react';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Summary from './components/Summary';

function App() {
  const handlePay = () => {
    alert('Payment Successful!');
  };

  const fakeTotalCost = 150; // This should be derived from the cart state

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">Checkout</h1>
        <div className="space-y-6">
          <Cart />
          <ClientProfile />
          <Shipping />
          <Payment />
          <Summary totalCost={fakeTotalCost} onPay={handlePay} />
        </div>
      </div>
    </div>
  );
}

export default App;
