import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link> | <Link to="/products">Products</Link> | 
        <Link to="/services">Services</Link> | <Link to="/testimonials">Testimonials</Link> | 
        <Link to="/blog">Blog</Link> | <Link to="/contact">Contact Us</Link>
      </div>
      <div className="social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="newsletter-signup">
        <h4>Subscribe to our newsletter</h4>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;