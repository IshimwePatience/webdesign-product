import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>Have questions about our products or services? We're here to help!</p>
      
      <div className="contact-info">
        <p>Phone: +123 456 7890</p>
        <p>Email: info@techdesignhub.com</p>
        <p>Address: 123 Tech Lane, Design City, TX</p>
      </div>
      
      <div className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday to Friday: 9 AM - 6 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
      </div>
      
      <form className="contact-form">
        <h2>Contact Form</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;