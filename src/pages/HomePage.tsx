import React from 'react';
import Header from '../components/Header/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8">
        <h2 className="text-xl font-semibold">Welcome to the Home Page</h2>
        <p className="mt-4">This is where you can put the main content of the home page.</p>
      </main>
    </div>
  );
};

export default HomePage;
