import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PatientForm from './components/PatientRecords/PatientForm';
import PatientTabs from './components/PatientRecords/PatientTabs';
import Scheduler from './components/AppointmentScheduler/Scheduler';
import AppointmentModal from './components/AppointmentScheduler/AppointmentModal';
import CommLogTable from './components/CommunicationLog/CommLogTable';
import AddCommNote from './components/CommunicationLog/AddCommNote';

function App() {
  return (
    <Router>
      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient" element={<PatientForm />} />
          <Route path="/patient/tabs" element={<PatientTabs />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/appointment" element={<AppointmentModal />} />
          <Route path="/comm-log" element={<CommLogTable />} />
          <Route path="/add-comm-note" element={<AddCommNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;