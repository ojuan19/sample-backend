import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-gray-300 w-64 p-4">
      <nav>
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-white">Home</a></li>
          <li className="mb-4"><a href="#" className="hover:text-white">Search</a></li>
          <li><a href="#" className="hover:text-white">Library</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;