import React from 'react';
import Sidebar from './Sidebar.jsx';
import '../style/OurTeam.css';
import Image1 from '../assets/gavril po.jpeg';
import Image2 from '../assets/bogdan pr.jpeg';
import Image3 from '../assets/Valentina Calin.jpeg';
import Image4 from '../assets/Apreustesei Maricica.jpeg';
import Image5 from '../assets/Caterina Stoian.jpeg';

function OurTeam() {
  return (
    <div className="our-team-container"> 
      <Sidebar />
      <section className="our-team">
        <div className="ourteam-title-container">
          <div>Echipa Noastră</div>
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
            <img src={Image5} alt="Team Member 1" />
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
      <div className="bar" />
        <div>
        <div id="PR" className="section-title">Public Relations (PR)</div>
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
      <div className="bar" />
        <div>
        <div id="programare" className="section-title">Programare</div>
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
      <div className="bar" />
        <div>
        <div id="proiectare3d" className="section-title">Proiectare 3D</div>
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
      </section>
    </div>
  );
}

export default OurTeam;