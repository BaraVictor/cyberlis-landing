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
          <a href="/new"><SprinkleText /></a> 
        </li>
        <li>
          <a href="/aboutus">Proiecte</a>
        </li>
        <li>
          <a href="/aboutus">Despre Noi</a>
        </li>
        <li>
          <a href="/ourteams">Echipa Noastră</a>
        </li>
        <li>
          <a href="/contact">Contactează-ne</a>
        </li>
      </ul>
      <div className="menu-btn">
        {/* Your menu button */}
      </div>
    </nav>
  );
};

export default Navbar;