import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import OurTeam from './components/OurTeam.jsx';
import ContactUs from './components/ContactUs.jsx';
<<<<<<< HEAD
import './App.css';
import NewPage from './components/NewPage.jsx';
=======
import './app.css';
>>>>>>> b35b2a34f3a61a96f5d75d56f124f98f750f7a2f

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
          <Route exact path="/new" element={<NewPage />} />
=======
>>>>>>> b35b2a34f3a61a96f5d75d56f124f98f750f7a2f
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/ourteams" element={<OurTeam />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
