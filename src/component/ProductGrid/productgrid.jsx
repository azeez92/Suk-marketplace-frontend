// src/components/ProductGrid/ProductGrid.jsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;