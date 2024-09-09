import React, { useEffect, useState } from 'react';
import './MainPage.css'; // Referencing the existing CSS file

function ContactUs() {
  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <header className="SignUp-header">
          <h1>Schedule a demo</h1>
          <p>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </header>
        <form>
          <input type="text" placeholder="Name of Dental Office" required />
          <input type="text" placeholder="Email" required />
          <div className="select-wrapper">
            <select required>
              <option value="" disabled selected>Select your current insurance verification process</option>
              <option value="call">We call insurance companies for patient information</option>
              <option value="company">We have a company who handles verifications for us</option>
              <option value="mixed">We complete most/some verifications, and some are done by a company</option>
              <option value="other">Other (Please describe below your insurance verifying process)</option>
            </select>
          </div>
          <textarea placeholder="Please leave a description or let us know how we can help." rows="3"></textarea>
          <button type="submit" className="MainPage-SignUp-Button">Sign Up for Demo</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;