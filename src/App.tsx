import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './components/Cart/ItemList';
import CartSummary from './components/Cart/CartSummary';
import ProfileForm from './components/ClientProfile/ProfileForm';
import ShippingOptions from './components/Shipping/ShippingOptions';
import PaymentMethods from './components/Payment/PaymentMethods';
import PayButton from './components/PayButton';

// Mock data to simulate the behavior
const mockItems = [
  { id: 1, name: 'Item 1', quantity: 2, price: 10.0 },
  { id: 2, name: 'Item 2', quantity: 1, price: 15.5 },
];
const mockShippingOptions = [
  { id: 1, name: 'Standard', price: 5 },
  { id: 2, name: 'Express', price: 15 },
];
const mockPaymentMethods = [
  { id: 1, name: 'Credit Card' },
  { id: 2, name: 'PayPal' },
];

function CheckoutPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-2xl font-bold mb-8">Checkout Page</h1>
      <ItemList items={mockItems} />
      <CartSummary total={mockItems.reduce((total, item) => total + item.quantity * item.price, 0)} />
      <ProfileForm />
      <ShippingOptions options={mockShippingOptions} />
      <PaymentMethods methods={mockPaymentMethods} />
      <PayButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
