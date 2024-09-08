import React, { useEffect, useState } from 'react';
import './MainPage.css'; // Referencing the existing CSS file

function LoginPage() {
  

  return (
    <div className="LoginPage">
      <div className="LoginPage-container">
        <header className="LoginPage-header">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="MainPage-SignIn-Button">Sign In</button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default LoginPage;
