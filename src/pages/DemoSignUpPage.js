import React, { useEffect, useState } from 'react';
import './MainPage.css'; // Referencing the existing CSS file

function DemoSignUpPage() {
  

  return (
    <div className="DemoSignUpPage">
      <div className="DemoSignUpPage-container">
        <header className="DemoSignUpPage-header">
          <h1>Create Account</h1>
          <form>
            <input type="text" placeholder="Name of Dental Office" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Create Password" required />
            <input type="verify password" placeholder="Verify Password" required />
            <button type="submit" className="MainPage-DemoSignUp-Button">Sign Up for Demo</button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default DemoSignUpPage;
