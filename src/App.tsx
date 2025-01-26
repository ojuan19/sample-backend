import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import Calendar from './components/Calendar';
import CommLog from './components/CommLog';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientForm />} />
          <Route path="/appointments" element={<Calendar />} />
          <Route path="/communications" element={<CommLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;