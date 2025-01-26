import React from 'react';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold">Swimwear Australia</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Collection</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-8 flex flex-col items-center">
        <section className="max-w-4xl text-center">
          <h2 className="text-5xl mb-4">Summer 2022 Collection</h2>
          <p className="text-lg mb-10">Discover the latest trends in swimwear designed for the Australian summer. Dive into style and comfort with our exclusive pieces.</p>
          <button className="mt-5 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg">Explore Now</button>
        </section>
      </main>
      <footer className="p-4 text-center border-t border-gray-800">
        <p>&copy; 2022 Swimwear Australia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
