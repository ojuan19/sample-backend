import React from 'react';

const HeroComponent: React.FC = () => {
    return (
        <section className="relative h-screen bg-hero-image bg-cover bg-center text-white">
            <div className="absolute inset-0 bg-black opacity-50"></div> 
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className="text-5xl font-extrabold mb-4">Discover the Luxury</h1>
                <p className="mb-8">Experience elegance and sophistication like never before.</p>
                <a href="#products" className="bg-gold text-black px-6 py-2 rounded hover:bg-white transition">Explore Products</a>
            </div>
        </section>
    );
};

export default HeroComponent;