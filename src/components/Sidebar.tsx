import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-100 w-64 h-screen fixed">
            <nav className="p-4">
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;