import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 LuxuryBrand. All rights reserved.</p>
                <nav className="space-x-4">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;