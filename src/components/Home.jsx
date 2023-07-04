import React from 'react';
import '../style/Home.css';
import logoImage from '../assets/logo.jpeg';

const Home = () => {
  return (
    <div className="home">
      <div className="logo-background">
        <div className="team-name">CyberLIS76</div>
        <h2 className="motto">Viitorul incepe acum!</h2>
      </div>
      <section className="intro">
        <h1>Bine ati venit la CyberLIS76</h1>
        <p>Aici munca e o joaca, iar joaca o munca!</p>
        <a href="/Ourteams" className="cta-button">Echipele Noastre</a>
      </section>
      <section className="features">
        <h2>Cine suntem noi?</h2>
        <div className="feature-item">
          <img src="icon1.png" alt="Feature 1" />
          <h3>Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <img src="icon2.png" alt="Feature 2" />
          <h3>Service 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <img src="icon3.png" alt="Feature 3" />
          <h3>Service 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
      {/*<section className="cta-section">
        <h2>Get in Touch</h2>
        <p>Ready to join our team or have any questions? Contact us now!</p>
        <a href="#" className="cta-button">Contact Us</a>
      </section>
  */}
    </div>
  );
};

export default Home