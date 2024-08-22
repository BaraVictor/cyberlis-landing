import React from 'react';
import '../style/Navbar.css';
import logoImage from '../assets/logo.jpeg';
import SprinkleText from './SprinkleText.jsx';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><img src={logoImage} alt="Logo" /></a>
      </div>
      <h1 className="NameNavbar">CyberLIS76</h1>
      <div className="slogan">Viitorul începe acum!</div>
      <ul className="nav-links">
        <li> 
          <a href="/">Acasă</a> 
        </li>
        <li> 
          <a href="/New"><SprinkleText /></a> 
        </li>
        <li>
          <a href="/AboutUs">Proiecte</a>
        </li>
        <li>
          <a href="/AboutUs">Despre Noi</a>
        </li>
        <li>
          <a href="/OurTeam">Echipa</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <div className="menu-btn">
        {/* Your menu button */}
      </div>
    </nav>
  );
};

export default Navbar;