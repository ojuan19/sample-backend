import React from 'react';
import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProductHighlights from './components/ProductHighlights';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="font-sans text-black">
            <Header />
            <main>
                <HeroComponent />
                <ProductHighlights />
            </main>
            <Footer />
        </div>
    );
};

export default App;
