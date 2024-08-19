import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ServiceFeatures.css';

const features = [
  { title: 'Free and Fast Delivery', description: 'Receive your orders within 24 hours', icon: 'bi bi-truck' },
  { title: '24/7 Customer Service', description: 'Always available customer support', icon: 'bi bi-headset' },
  { title: 'Money Back Guarantee', description: 'We return money within 30 days', icon: 'bi bi-cash-stack' },
  { title: 'Exclusive Offers', description: 'Access special deals and discounts', icon: 'bi bi-tags-fill' }, // Added fourth feature
  // Add more features as needed
];

const ServiceFeatures = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 mb-4"> {/* Changed from col-md-4 to col-md-3 for four columns */}
            <div className="card feature-card h-100 text-center p-4 shadow-sm">
              <div className="card-body">
                <i className={feature.icon + ' feature-icon mb-3'}></i>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;