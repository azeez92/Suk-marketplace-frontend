import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'; // Import the external CSS
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <footer>
      <section className="kobo">
        <div className="logo">
          <aside>
            <img src="images/Logo 2.png" alt="logo" />
          </aside>

          <span className="yan">
            <div><i className="bi bi-facebook"></i></div>
            <div><i className="bi bi-twitter"></i></div>
            <div><i className="bi bi-instagram"></i></div>
            <div><i className="bi bi-linkedin"></i></div>
          </span>
        </div>

        <div className="naira">
          <h3>Our Services</h3>
          <h5>Delivery Information</h5>
          <h5>Good & Services</h5>
          <h5>Shopping & Refund</h5>
          <h5>All product <span className="g">Home Appliances & More.</span></h5>
        </div>

        <div className="shile">
          <h3>Account</h3>
          <h5>My Account</h5>
          <h5>Login/Register</h5>
          <h5>Cart</h5>
          <h5>Wishlist</h5>
          <h5>Shop</h5>
        </div>

        <div className="coin">
          <h3>Quick Link</h3>
          <h5>Privacy Policy</h5>
          <h5>Terms Of Use</h5>
          <h5>FAQs</h5>
          <h5>Contact</h5>
        </div>

        <div className="poun">
          <h3>SuK</h3>
          <h5>Subscribe</h5>
          <h5>To Our Newsletter daily</h5>

          <div className="flag">
            <input type="email" placeholder="Enter your email" />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
          </div>
        </div>
      </section>

      <article className="fake">
        <div><h2>Download App</h2></div>

      <Col className='btn-1'>
      <Button  type="submit" variant="outline-primary">
      <svg width="106" height="32" viewBox="0 0 106 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0.7" y="0.7" width="104.6" height="30.6" rx="4.3" fill="url(#pattern0_305_509)" stroke="#FAFAFA" stroke-width="0.6"/>
<defs>
<pattern id="pattern0_305_509" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_305_509" transform="matrix(0.00157479 0 0 0.00558591 -0.0675402 -1.51093)"/>
</pattern></defs></svg>
      </Button>
      </Col>


      <Col className='btn-2'>
      <Button type="submit"  variant="outline-primary">
      <svg width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0.7" y="0.7" width="104.6" height="34.6" rx="4.3" fill="url(#pattern0_305_813)" stroke="white" stroke-width="0.6"/>
<defs>
<pattern id="pattern0_305_813" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_305_813" transform="matrix(0.00254808 0 0 0.00778547 -0.00961538 -1.05709)"/>
</pattern></defs></svg>
        
        </Button></Col>
      </article>

      <aside className="final">
        <p><i className="bi bi-c-circle"></i> Copyright At-tibyan Tech 2024. All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;