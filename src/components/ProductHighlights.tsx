import React from 'react';

const ProductHighlights: React.FC = () => {
    const products = [
        { id: 1, name: 'Luxury Watch 1', image: 'path/to/image1.jpg', description: 'An exquisite watch model.' },
        { id: 2, name: 'Luxury Watch 2', image: 'path/to/image2.jpg', description: 'Elegant design with classic features.' },
        { id: 3, name: 'Luxury Watch 3', image: 'path/to/image3.jpg', description: 'A masterpiece of craftsmanship.' }
    ];

    return (
        <section className="py-16 bg-white text-black">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Product Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="border p-4 hover:shadow-lg transition">
                            <img src={product.image} alt={product.name} className="mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="mb-2">{product.description}</p>
                            <button className="bg-gold text-black px-4 py-2 rounded mt-4 hover:bg-white transition">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductHighlights;