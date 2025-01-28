import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistDetail from './pages/PlaylistDetail';
import { ThemeProvider } from './context/ThemeContext';
import { PlaylistProvider } from './context/PlaylistContext';

function App() {
  return (
    <ThemeProvider>
      <PlaylistProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
          </Routes>
        </Router>
      </PlaylistProvider>
    </ThemeProvider>
  );
}

export default App;
