import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    dentalOffice: '',
    email: '',
    insuranceProcess: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    try {
      // Store the form data in local storage
      const submissions = JSON.parse(localStorage.getItem('patientPassSubmissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('patientPassSubmissions', JSON.stringify(submissions));

      // Simulating an API call (replace this with your actual API call if needed)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to confirmation page
      navigate('/confirmation');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to user)
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
              <option value="" disabled>Select your current insurance verification process</option>
              <option value="call">We call insurance companies for patient information</option>
              <option value="company">We have a company who handles verifications for us</option>
              <option value="mixed">We complete most/some verifications, and some are done by a company</option>
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
          <button type="submit" className="MainPage-SignUp-Button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign Up for Demo'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;