import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
/*
import Dashboard from './pages/Dashboard';
*/
import ConfirmationMessage from './pages/ConfirmationMessage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/demo" element={<SignUp />} />
        {/*
        <Route path="/dashboard" element={<Dashboard />} />
  */}
        <Route path="/confirmation" element={<ConfirmationMessage />} />
      </Routes>
    </div>
  );
}

export default App;