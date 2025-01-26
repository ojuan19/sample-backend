import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import AppointmentCalendar from './components/AppointmentCalendar';
import CommunicationLog from './components/CommunicationLog';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route path="/calendar" element={<AppointmentCalendar />} />
          <Route path="/communication-log" element={<CommunicationLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;