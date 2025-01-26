import React from 'react';
import 'tailwindcss/tailwind.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      {label}
    </button>
  );
};

export default Button;
