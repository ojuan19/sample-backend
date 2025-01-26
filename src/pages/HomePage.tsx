import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Card 1" description="This is the first card's description." />
                <Card title="Card 2" description="This is the second card's description." />
                <Card title="Card 3" description="This is the third card's description." />
            </div>
        </div>
    );
};

export default HomePage;