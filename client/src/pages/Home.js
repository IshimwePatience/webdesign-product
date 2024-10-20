import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to TechDesign Hub</h1>
      <p>At TechDesign Hub, we offer top-tier computer and web design products that cater to all your tech needs. From cutting-edge hardware to advanced software solutions, we've got everything you need to build and elevate your online presence or personal tech setup. Our focus is on delivering quality, efficiency, and reliability.</p>
      
      <h2>Featured Products</h2>
      <ul>
        <li>Laptops & Desktops: Explore the latest models from leading brands.</li>
        <li>Web Design Tools: Discover professional-grade software to bring your creative vision to life.</li>
        <li>Accessories & Peripherals: Enhance your workspace with the best tech accessories.</li>
      </ul>
      
      <Link to="/products" className="cta-button">Shop Now</Link>
      
      <h2>Why Choose Us?</h2>
      <ul>
        <li>High-quality products from trusted brands.</li>
        <li>Expert customer support to guide you through every step.</li>
        <li>Competitive prices and exclusive offers for our loyal customers.</li>
      </ul>
    </div>
  );
}

export default Home;