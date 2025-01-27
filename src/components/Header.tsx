import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-black text-white">
            <div className="text-xl font-bold">LuxuryBrand</div>
            <nav className="space-x-4 hover:text-gold">
                <a href="#hero">Home</a>
                <a href="#products">Products</a>
                <a href="#about">About</a>
            </nav>
        </header>
    );
};

export default Header;