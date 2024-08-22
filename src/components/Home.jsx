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
        <a href="/OurTeam" className="cta-button">Echipele Noastre</a>
      </section>
      <section className="features">
        <h2>Cine suntem noi?</h2>
        <div className="feature-item">
          <h3>Cine?</h3>
          <p>Suntem echipa Cyberlis76, o nouă echipă care s-a format în această primăvară cu speranța de a 
            intra în noi competiții și de a putea realiza multe lucruri grozave împreună cu colegii și profesorii noștri.</p>
        </div>
        <div className="feature-item">
          <h3>Cum?</h3>
          <p>Am fost informați pentru prima dată despre această competiție de către profesorul nostru 
            de matematică a școlii Gavril Daniela, după ce a luat legătura cu un lider de echipă din America. 
            După ce a auzit că este o competiție mondială, s-a gândit instantaneu să participe studenți 
            (competiția aducând și multe posibilități despre diverse universități). Din acel moment, 
            ne-am înregistrat la FTC Ro și am lucrat la multe proiecte.</p>
        </div>
        <div className="feature-item">
          <h3>De ce?</h3>
          <p>Aceasta nu este prima competiție de robotică la care am participat, de fapt am participat 
            și la Nextlab (o altă competiție binecunoscută), unde am lucrat în echipe pentru a crea un robot 
            care să urmeze un anumit traseu. Ne-am alăturat în mare parte acestei noi competiții, deoarece 
            mulți dintre noi ne place să lucrăm în acest domeniu de lucru, a crea ceva nou poate fi întotdeauna 
            distractiv. Prin participarea la această competiție sperăm să învățăm lucruri noi despre roboți 
            și să putem lucra în echipă într-un mod eficient.</p>
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