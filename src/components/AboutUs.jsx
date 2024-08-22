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
          <h2>Misiunea</h2>
          <p>
          Chiar dacă nu am participat niciodată la o astfel de competiție mondială de robotică, suntem mereu pregătiți pentru o nouă provocare. 
          In acest mod ne îmbunătățim altitudinile in domeniul nostru dorit.
          Sperăm să câștigăm experiență și să învățăm lucruri noi care ne pot ajuta apoi pentru sezonul următor.
          </p>
        </div>
        <div className="section">
          <h2>Despre Noi</h2>
          <p>
          Am început cu participarea la competiții facile precum Nextlab. 
          Aici am lucrat în echipa pentru a realiza roboti urmaritori de linie în funcție de vârsta participanților. 
          In anul 2024 am decis să trecem la un alt nivel. Asa a aparut echipa Cyberlis76 care isi propune sa participe la cometitia FTC Romania incepand cu editia #8.
          Abia așteptăm să vedem ce ne rezervă viitorul!
          </p>
        </div>
        <div className="section">
          <h2>Echipa</h2>
          <p>
          Echipa este formata in mare parte parte din elevi de liceu, cu un numar egal de membri și voluntari (15 membri și 15 voluntari). 
          Mentorii echipei sunt prof. Gavril Daniela și domnul inginer Grigoras Bogdan, iar ca mentori voluntari prof. Apreutesei Maricica, Călin Valentina și ec. Stoian Ecaterina.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs