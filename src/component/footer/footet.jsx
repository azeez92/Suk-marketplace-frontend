// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    {/* About Column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            SUK Marketplace is a local platform to buy, sell, and trade goods within your neighborhood.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/" className="text-dark">Home</a>
                            </li>
                            <li>
                                <a href="/products" className="text-dark">Products</a>
                            </li>
                            <li>
                                <a href="/about" className="text-dark">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-dark">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@sukmarketplace.com" className="text-dark">info@sukmarketplace.com</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> <a href="tel:+1234567890" className="text-dark">+1 234 567 890</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="https://facebook.com" className="text-dark me-2">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://twitter.com" className="text-dark me-2">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://instagram.com" className="text-dark">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 SUK Marketplace. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
