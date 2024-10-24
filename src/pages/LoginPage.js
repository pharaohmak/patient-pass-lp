import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import logoImage from '../assets/PatientPass_Logomark_Wht.png';

function LoginPage() {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(true);
    
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <div className="login-page">
      
      <div className="login-container">
        <img src={logoImage} alt="Patient Pass Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" required />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Sign In</button>
          {showError && (
            <div className="error-message">Invalid email or password</div>
          )}
        </form>
      </div>
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
}

export default LoginPage;
