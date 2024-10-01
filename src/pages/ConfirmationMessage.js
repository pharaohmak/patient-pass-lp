import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function ConfirmationMessage() {
  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <header className="SignUp-header">
        <div className="confirmation-message">
          <h1>Success!</h1>
          <h3>
          Thank you for choosing PatientPass. We value your time and will be contacting you shortly. 
          </h3>
          <br></br>
          </div>
        </header>
        <Link to="/" className="LoginPage-SignIn-Button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationMessage;