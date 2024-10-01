import React, { useState } from 'react';
import './MainPage.css';

function LoginPage() {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(true);
    
    // Hide the error message after 3 seconds
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage-container">
        <header className="LoginPage-header">
          <h1>Clinic Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="LoginPage-SignIn-Button">Sign In</button>
            {showError && (
              <div className="error-message">Invalid username or password</div>
            )}
          </form>
        </header>
      </div>
    </div>
  );
}

export default LoginPage;