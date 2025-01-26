import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
