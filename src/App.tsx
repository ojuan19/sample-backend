import React from 'react';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-8">Checkout Page</h1>
        <Checkout />
      </div>
    </div>
  );
}

export default App;