import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, quantity }) => {
  return (
    <div className="bg-gray-800 text-white m-4 p-6 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm">Price: ${price} per unit</p>
      <p className="text-sm">Available: {quantity} units</p>
    </div>
  );
};

export default ProductCard;
