import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PollPage from './pages/PollPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poll/:id" element={<PollPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;