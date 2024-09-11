import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function ConfirmationMessage() {
  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <header className="SignUp-header">
          <h1>Thank You!</h1>
          <p>
            Thank you for choosing PatientPass. We will be contacting you shortly.
          </p>
        </header>
        <Link to="/" className="MainPage-SignUp-Button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationMessage;