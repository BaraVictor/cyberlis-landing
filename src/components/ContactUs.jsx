import React from 'react';
import '../style/ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="contactus-container">Contact Us</div>
      </div>
      <div className="contact-details">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </section>
  );
}

export default ContactUs;