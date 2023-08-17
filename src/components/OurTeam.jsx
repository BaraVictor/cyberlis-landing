import React from 'react';
import Sidebar from './Sidebar.jsx';
import Searchbar from './SearchBar.jsx';
import '../style/OurTeam.css';
import Image1 from '../assets/gavril po.jpeg';
import Image2 from '../assets/bogdan pr.jpeg';
import Image3 from '../assets/Valentina Calin.jpeg';
import Image4 from '../assets/Apreustesei Maricica.jpeg';
import Image5 from '../assets/Caterina Stoian.jpeg';
import Image6 from '../assets/anca.jpeg'
import Image7 from '../assets/matei.JPG'
import Image8 from '../assets/teo.JPG'
import Image9 from '../assets/tudor.JPG'
import Image10 from '../assets/calita.JPG'
import Image11 from '../assets/andreea.JPG'
import Image12 from '../assets/lider com.jpeg'
import Image13 from '../assets/mali.JPG'
import Image14 from '../assets/carina.JPG'
import Image15 from '../assets/marco.JPG'
import Image16 from '../assets/vic.JPG'
import Image17 from '../assets/maria.JPG'
import Image18 from '../assets/smara.JPG'
import Image19 from '../assets/david.JPG'
import Image20 from '../assets/lider p3d.JPG'
import Image21 from '../assets/gabriela.JPG'
import Image22 from '../assets/george.JPG'
import Image23 from '../assets/irina.JPG'
import Image24 from '../assets/emi.JPG'
function OurTeam() {
  return (
    <div className="our-team-container"> 
      <Sidebar />
      {/*<Searchbar />*/}
      <section className="our-team">
        <div className="ourteam-title-container">
          <div>Echipa Noastra</div>
        </div>
        <div>
        <div id="mentors" className="section-title">Mentori</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image1} alt="Team Member 1" />
            <div className="description">
              <h3>Gavril Daniela</h3>
              <h5>MENTOR COORDONATOR</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image2} alt="Team Member 2" />
            <div className="description">
              <h3>Grigoras Vladut-Bogdan</h3>
              <h5>MENTOR</h5>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="section-title">- Voluntari -</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image3} alt="Team Member 1" />
            <div className="description">
              <h3>Calin Valentina</h3>
              <h5>Rol</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image4} alt="Team Member 2" />
            <div className="description">
              <h3>Apreutesei Maricica</h3>
              <h5>Șefa</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image5} alt="Team Member 1" />
            <div className="description">
              <h3>Stoian Caterina</h3>
              <h5>Rol</h5>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="bar" />
        <div id="asamblare" className="section-title">Asamblare</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image7} alt="Team Member 1" />
            <div className="description">
              <h3>Popa Matei</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image8} alt="Team Member 2" />
            <div className="description">
              <h3>Piciorlung Teodor-Octavian</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="section-title">- Voluntari -</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image9} alt="Team Member 1" />
            <div className="description">
              <h3>Postolache Tudor</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image10} alt="Team Member 2" />
            <div className="description">
              <h3>Calita Grabiel</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image11} alt="Team Member 1" />
            <div className="description">
              <h3>Tirdea Andreea</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
      <div className="bar" />
        <div>
        <div id="PR" className="section-title">Public Relations (PR)</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image6} alt="Team Member 1" />
            <div className="description">
              <h3>Chipe Anca</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image12} alt="Team Member 2" />
            <div className="description">
              <h3>Holban-Ichim Maria-Veronica</h3>
              <h5>SEFA</h5>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="section-title">- Voluntari -</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image13} alt="Team Member 1" />
            <div className="description">
              <h3>Vasile Elena-Malina</h3>
              <h5>Rol</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image14} alt="Team Member 2" />
            <div className="description">
              <h3>Plosnita Carina</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
      <div className="bar" />
        <div>
        <div id="programare" className="section-title">Programare</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image15} alt="Team Member 1" />
            <div className="description">
              <h3>Mihalcea Marco-Sebastian</h3>
              <h5>SEF</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image16} alt="Team Member 2" />
            <div className="description">
              <h3>Bara Victor</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="section-title">- Voluntari -</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image17} alt="Team Member 1" />
            <div className="description">
              <h3>Tirdea Maria</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image18} alt="Team Member 2" />
            <div className="description">
              <h3>Luca Smaranda</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image19} alt="Team Member 1" />
            <div className="description">
              <h3>Murgociu David</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
      <div className="bar" />
        <div>
        <div id="proiectare3d" className="section-title">Proiectare 3D</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image20} alt="Team Member 1" />
            <div className="description">
              <h3>Palade Mihai</h3>
              <h5>SEF</h5>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image21} alt="Team Member 2" />
            <div className="description">
              <h3>Andrei Garbriela</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
        <div>
        <div className="section-title">- Voluntari -</div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Image22} alt="Team Member 1" />
            <div className="description">
              <h3>Cojocaru George</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image23} alt="Team Member 2" />
            <div className="description">
              <h3>Tirlea Irina</h3>
              <p>Descriere</p>
            </div>
          </div>
          <div className="member">
            <img src={Image24} alt="Team Member 1" />
            <div className="description">
              <h3>Nechita Emanuel</h3>
              <p>Descriere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
