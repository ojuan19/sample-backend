import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 text-gray-900 dark:text-gray-100">
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:underline">About Me</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
