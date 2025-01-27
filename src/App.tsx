import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

const App: React.FC = () => {
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
