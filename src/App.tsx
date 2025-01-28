import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl">Hello World</h1>
    </div>
  );
};

export default App;
