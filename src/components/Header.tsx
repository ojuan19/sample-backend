import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto">
                <ul className="flex justify-between">
                    <li className="text-lg font-bold">My App</li>
                    <li className="space-x-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;