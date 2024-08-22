import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import OurTeam from './components/OurTeam.jsx';
import ContactUs from './components/ContactUs.jsx';
import './App.css';
import NewPage from './components/NewPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/New" element={<NewPage />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/OurTeam" element={<OurTeam />} />
          <Route exact path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
