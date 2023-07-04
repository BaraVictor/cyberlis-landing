import React from 'react';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 CyberLIS76. All rights reserved.</p>
        <ul className="footer-links">
        <li> 
          <a href="/">Acasă</a> 
        </li>
        <li>
          <a href="/AboutUs">Despre Noi</a>
        </li>
        <li>
          <a href="/Ourteams">Echipele Noastre</a>
        </li>
        <li>
          <a href="/contact">Contactează-ne</a>
        </li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100092378257118" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/cyberlis76/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@cyberlis76" target="_blank">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;