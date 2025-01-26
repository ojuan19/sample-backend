import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Navigation from './components/Navigation';
import { PatientProvider } from './context/PatientContext';

function App() {
  return (
    <PatientProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<PatientForm />} />
              <Route path="/create" element={<PatientForm />} />
              <Route path="/list" element={<PatientList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PatientProvider>
  );
}

export default App;
