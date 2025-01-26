import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
    const variantClasses = variant === 'secondary' ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600';

    return (
        <button
            onClick={onClick}
            className={`text-white p-2 rounded ${variantClasses}`}
        >
            {label}
        </button>
    );
};

export default Button;