import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products">
      <h1>Browse Our Products</h1>
      <p>At TechDesign Hub, we offer a wide range of products that meet your design and computing needs. Shop from our categories below:</p>
      
      <div className="product-categories">
        <div className="category">
          <h2>Computers & Laptops</h2>
          <p>High-performance desktops and laptops for every need, from gaming to professional design.</p>
        </div>
        <div className="category">
          <h2>Web Design Software</h2>
          <p>Professional tools like Adobe Creative Suite, Sketch, Figma, and more to bring your creative ideas to life.</p>
        </div>
        <div className="category">
          <h2>Accessories & Peripherals</h2>
          <p>Keyboards, mice, monitors, and other essential accessories to optimize your setup.</p>
        </div>
        <div className="category">
          <h2>Graphic Design Tablets</h2>
          <p>Tablets and styluses perfect for designers and digital artists.</p>
        </div>
        <div className="category">
          <h2>Hosting & Domain Services</h2>
          <p>Affordable and reliable web hosting packages and domain name registration for your next big project.</p>
        </div>
      </div>
      
      <Link to="/products" className="cta-button">Shop Now</Link>
    </div>
  );
}

export default Products;