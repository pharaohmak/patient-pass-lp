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
        {/* 
<nav>
  <ul>
    <li><a href="#product">Product</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#resources">Resources</a></li>
  </ul>
</nav>
*/}
        <div className="auth-buttons">
        <Link to="/login" className="btn btn-primary">Sign In</Link>
        </div>
      </header>
      
      <main className="main-content">
         {/* 
<nav></nav>
        <h1 className="main-title">The Future of Insurance Verification</h1>
        */}
        <br></br>
        <br></br>
        <div className="content-wrapper">
          <div className="image-and-text-container">
            <div className="image-content">
              <img src={dashboardMockup} alt="Patient Pass Dashboard" className="dashboard-image" />
            </div>
            <div className="text-content">
            <div className="taglines">
  <h2 className="tagline-1">No more calls.</h2>
  <h2 className="tagline-2">No more hassle.</h2>
  <h2 className="tagline-3">No more denials.</h2>
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