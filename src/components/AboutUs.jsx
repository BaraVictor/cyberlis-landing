import '../style/AboutUs.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/DSC_0888.JPG';
import Image2 from '../assets/DSC_0888.JPG';
import Image3 from '../assets/DSC_0888.JPG';
import spinningGear from '../assets/gear.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="title-container">
        <div className="aboutus-title">Despre Noi</div>
        <h2 className="quote">Puterea umană amplificată prin minunile roboților.</h2>
      </div>
      <div className="content">
        <div className="section">
          <h2>Misiunea Noastră</h2>
          <p>
            Desi este primul nostru an in care participam in acest concurs,
            avem multa experienta din ale concursuri
          </p>
        </div>
        <div className="section">
          <h2>Istoria Noastră</h2>
          <p>
            Bla bla bla
          </p>
        </div>
        <div className="section">
          <h2>Echipa Noastră</h2>
          <p>
            Bla bla blarababa
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs