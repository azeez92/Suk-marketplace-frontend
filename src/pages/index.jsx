// src/pages/HomePage.jsx
import React from 'react';
 import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
    return (
        <div>
            <section className="hero-section text-center py-5 bg-light">
                <h1>Explore Our Products</h1>
                <p>Find the best deals in your neighborhood.</p>
            </section>
            <section className="products-section">
                <div className="container">
                    <ProductGrid />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
