import React from 'react';

const Carousel: React.FC = () => {
  return (
    <div className="flex space-x-4 overflow-x-scroll">
      <div className="flex-none w-1/3">
        <img src="/images/product1.jpg" alt="Product 1" className="w-full" />
      </div>
      <div className="flex-none w-1/3">
        <img src="/images/product2.jpg" alt="Product 2" className="w-full" />
      </div>
      <div className="flex-none w-1/3">
        <img src="/images/product3.jpg" alt="Product 3" className="w-full" />
      </div>
    </div>
  );
};

export default Carousel;