import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Application</h2>
      <p className="mb-4">This is a simple prototype of a web application using Vite, React, TypeScript, and Tailwind CSS.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </main>
  );
};

export default MainContent;
