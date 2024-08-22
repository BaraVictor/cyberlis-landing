import React from 'react';
import Logo1 from '../assets/Logo_Mentori.png';
import Logo2 from '../assets/Logo_Asamblare.png';
import Logo3 from '../assets/Logo_PR.png';
import Logo4 from '../assets/Logo_Programare.png';
import Logo5 from '../assets/Logo_Proiectare3D.png';
import '../style/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="image-column">
      <a href="#mentors">
        <img src={Logo1} alt="mentors" />
        </a>
        <a href="#asamblare">
        <img src={Logo2} alt="asamblare" />
        </a>
        <a href="#PR">
        <img src={Logo3} alt="PR" />
        </a>
        <a href="#programare">
        <img src={Logo4} alt="programare" />
        </a>
        <a href="#proiectare3d">
        <img src={Logo5} alt="proiectare3d" />
        </a>
      </div>
      <div className="text-column">
        <p>Mentors</p>
        <p>Asamblare</p>
        <p>PR</p>
        <p>Programare</p>
        <p>Proiectare 3D</p>
      </div>
    </div>
  );
}

export default Sidebar;

