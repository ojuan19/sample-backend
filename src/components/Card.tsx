import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="border rounded shadow p-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;