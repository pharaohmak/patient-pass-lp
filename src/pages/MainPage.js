import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/no-bg-logo.png';
import './MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
      
        <header className="MainPage-header">
          <img src={logo} className="MainPage-logo" alt="logo" />
          <div className="MainPage-subheader">
            <code>Welcome to the future of insurance verification.</code>
         </div>
          <div className="MainPage-buttons">
          <Link to="/demo" className="MainPage-DemoSignUp-Button">Get Demo</Link>
          <Link to="/login" className="MainPage-SignIn-Button">Sign In</Link>
        </div>
        </header>
      </div>
  );
}

export default MainPage;
