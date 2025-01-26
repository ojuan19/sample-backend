import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <p>© 2023 My Awesome App. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
