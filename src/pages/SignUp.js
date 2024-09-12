import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './MainPage.css';

// Initialize EmailJS with your user ID (public key)
emailjs.init("9TXMY8Fzwhls68TfK");

function ContactUs() {
  const [formData, setFormData] = useState({
    dentalOffice: '',
    email: '',
    insuranceProcess: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Store the form data in local storage
      const submissions = JSON.parse(localStorage.getItem('patientPassSubmissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('patientPassSubmissions', JSON.stringify(submissions));

      // Send email using EmailJS
      const result = await emailjs.send(
        'demo_emailjs',
        'email_template',
        {
          to_name: 'PatientPass Team',
          from_name: formData.dentalOffice,
          from_email: formData.email,
          insurance_process: formData.insuranceProcess,
          message: formData.description
        }
      );

      console.log('EmailJS result:', result);

      // Redirect to confirmation page
      navigate('/confirmation');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <header className="SignUp-header">
          <h1>Schedule a demo</h1>
          <p>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </header>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="dentalOffice"
            value={formData.dentalOffice}
            onChange={handleChange}
            placeholder="Name of Dental Office"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <div className="select-wrapper">
            <select
              name="insuranceProcess"
              value={formData.insuranceProcess}
              onChange={handleChange}
              required
            >
              <option value="" disabled>How do you handle insurance verifications?</option>
              <option value="call">We call insurance companies for patient information</option>
              <option value="company">We have a company who handles verifications for us</option>
              <option value="mixed">We complete most/some verifications and some are done by a company</option>
              <option value="other">Other (Please describe below your insurance verifying process)</option>
            </select>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please leave a description or let us know how we can help."
            rows="3"
          ></textarea>
          <button type="submit" className="LoginPage-SignIn-Button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign Up for Demo'}
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default ContactUs;

