// src/components/ProductCard/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductCard;