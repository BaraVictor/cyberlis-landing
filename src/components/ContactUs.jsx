import React from 'react';
import '../style/ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-details">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </section>
  );
}

export default ContactUs;