import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<div className="text-white p-6">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
