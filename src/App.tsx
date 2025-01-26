import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col min-h-screen">
                    <Header />
                    <MainContent />
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
