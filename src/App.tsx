import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <DarkModeToggle />
        </header>
        <main>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
