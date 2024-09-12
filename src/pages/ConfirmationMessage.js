import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function ConfirmationMessage() {
  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <header className="SignUp-header">
          <h1>Success!</h1>
          <h3>
          Thank you for choosing PatientPass. We value your time and will be contacting you shortly. 
          </h3>
        </header>
        <Link to="/" className="MainPage-SignUp-Button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationMessage;