import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/no-bg-logo.png';
import './MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
      
        <header className="MainPage-header">
          <img src={logo} className="MainPage-logo" alt="logo" />
          <p>
            <code>Welcome to the future of insurance verification.</code>
          </p>
          <Link to="/login" className="MainPage-SignIn-Button">Sign In</Link>
        </header>
      </div>
  );
}

export default MainPage;
