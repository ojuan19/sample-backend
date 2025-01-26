import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import Calendar from './components/Calendar';
import CommunicationLog from './components/CommunicationLog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<PatientForm />} />
          <Route path="/appointments" element={<Calendar />} />
          <Route path="/communications" element={<CommunicationLog />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;