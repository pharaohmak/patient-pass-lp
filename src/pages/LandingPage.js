import React from 'react';
import './LandingPage.css';
import dashboardMockup from '../assets/laptop.png';
import logoImage from '../assets/PatientPass_Primary_Wht.png';
import nexhealth from '../assets/nexhealthLogo.svg';
import vyne from '../assets/vyneLogo.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Patient Pass Logo" className="logo" />
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Sign In</Link>
        </div>
      </header>
      
      <main className="main-content">
        <br></br>
        <br></br>
        <div className="content-wrapper">
          <div className="image-and-text-container">
            <div className="image-content">
              <img src={dashboardMockup} alt="Patient Pass Dashboard" className="dashboard-image" />
            </div>
            <div className="text-content">
              <div className="taglines">
                <h2 className="tagline tagline-1"><span className="strikethrough">Calls</span></h2>
                <h2 className="tagline tagline-2"><span className="strikethrough">Headaches</span></h2>
                <h2 className="tagline tagline-3"><span className="strikethrough">Denials</span></h2>
              </div>
            </div>
          </div>
          <h1 className="main-title">The Future of Insurance Verification</h1>
          <div className="cta-buttons">
            <Link to="/demo" className="btn btn-primary">Request a Demo</Link>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>Partnered with</p>
        <div className="brand-logos">
          <img src={vyne} alt="Vyne" />
          <img src={nexhealth} alt="Nexhealth" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;