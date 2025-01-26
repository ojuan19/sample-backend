import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PatientForm from './components/PatientForm';
import AppointmentCalendar from './components/AppointmentCalendar';
import CommunicationLog from './components/CommunicationLog';

function App() {
  return (
    <Router>
      <div className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/patients/new" element={<PatientForm />} />
          <Route path="/calendar" element={<AppointmentCalendar />} />
          <Route path="/communications" element={<CommunicationLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
