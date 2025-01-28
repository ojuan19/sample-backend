import React from 'react';
import ProductCard from './ProductCard';
import './index.css';  // Ensure dark mode CSS is loaded

const App: React.FC = () => {
  const products = [
    {
      name: 'Apples',
      image: '/images/apples.jpg',
      price: 0.5,
      quantity: 100,
    },
    {
      name: 'Oranges',
      image: '/images/oranges.jpg',
      price: 0.8,
      quantity: 50,
    }
  ];

  return (
    <div className="dark bg-black min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
