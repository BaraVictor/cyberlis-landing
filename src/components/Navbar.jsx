import React from 'react';
import '../style/Navbar.css';
import logoImage from '../assets/logo.jpeg';
<<<<<<< HEAD
import SprinkleText from './SprinkleText.jsx';
=======
>>>>>>> b35b2a34f3a61a96f5d75d56f124f98f750f7a2f

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <h1 className="NameNavbar">CyberLIS76</h1>
      <div className="slogan">Viitorul începe acum!</div>
      <ul className="nav-links">
        <li> 
          <a href="/">Acasă</a> 
        </li>
<<<<<<< HEAD
        <li> 
          <a href="/new"><SprinkleText /></a> 
        </li>
=======
>>>>>>> b35b2a34f3a61a96f5d75d56f124f98f750f7a2f
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