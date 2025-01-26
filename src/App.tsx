import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;