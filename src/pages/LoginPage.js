import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Referencing the existing CSS file

function LoginPage() {
  

  return (
    <div className="LoginPage">
      <div className="LoginPage-container">
        <header className="LoginPage-header">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <p> <br>
            </br></p>
            <button to="/dashboard" className="MainPage-SignIn-Button">Sign In</button>
            <p> </p>
          </form>
        </header>
      </div>
    </div>
  );
}

export default LoginPage;
