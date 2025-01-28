import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { UserProvider } from './context/UserContext';
import useDarkMode from './hooks/useDarkMode';

const App: React.FC = () => {
  useDarkMode();

  return (
    <UserProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/playlist/:id" element={<PlaylistPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;