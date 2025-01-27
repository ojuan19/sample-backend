import React, { useState } from 'react';
import Cart from './components/Cart';
import ClientProfile from './components/ClientProfile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'Item 1', quantity: 1, price: 100 },
    { name: 'Item 2', quantity: 2, price: 150 },
  ]);
  const [profile, setProfile] = useState({ name: '', email: '', address: '' });
  const [shippingOption, setShippingOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handlePay = () => {
    // Validation logic can be added here
    alert('Payment Successful!');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-2xl mx-auto py-10">
          <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          <Cart items={cartItems} onUpdate={(index) => {
            const newItems = cartItems.slice();
            newItems.splice(index, 1);
            setCartItems(newItems);
          }} />
          <ClientProfile profile={profile} onProfileChange={setProfile} />
          <Shipping selectedOption={shippingOption} onOptionChange={setShippingOption} />
          <Payment method={paymentMethod} onMethodChange={setPaymentMethod} />
          <button
            onClick={handlePay}
            className="mt-4 w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            PAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
