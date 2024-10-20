import React from 'react';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>At TechDesign Hub, we don't just sell products, we also offer a range of professional services to support your business and personal projects.</p>
      
      <div className="service-list">
        <div className="service">
          <h2>Custom Web Design</h2>
          <p>Our expert designers create modern, responsive, and user-friendly websites tailored to your business goals.</p>
        </div>
        <div className="service">
          <h2>Web Development</h2>
          <p>Full-stack development services that ensure your website is functional, secure, and scalable.</p>
        </div>
        <div className="service">
          <h2>Graphic Design</h2>
          <p>Creative graphic design services, including logo design, branding, and marketing materials.</p>
        </div>
        <div className="service">
          <h2>Technical Support</h2>
          <p>From troubleshooting to upgrades, our support team is ready to assist you with all your technical needs.</p>
        </div>
        <div className="service">
          <h2>Digital Marketing</h2>
          <p>Grow your online presence with our SEO, social media marketing, and email marketing services.</p>
        </div>
      </div>
      
      <button className="cta-button">Contact Us for a Free Quote</button>
    </div>
  );
}

export default Services;