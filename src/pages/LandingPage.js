import React from 'react';
import './LandingPage.css';
import './MakramLanding.css'
import dashboardMockup from '../assets/laptop.png';
import logoImage from '../assets/PatientPass_Primary_Wht.png';
import serviceImage from '../assets/serviceImage.png'
import nexhealth from '../assets/nexhealthLogo.svg';
import vyne from '../assets/vyneLogo.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="Patient Pass Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="#" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Sign In</Link>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>The Future of Insurance Verification</h1>
          <p>Effortlessly verify patient insurance and reduce administrative burdens.</p>
          <Link to="/demo" className="btn btn-primary">Request a Demo</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-benefits">
            <h3 className="benefits-heading">Why Choose Patient Pass?</h3>
            <ul className="benefits-list">
              <li><strong>Efficiency:</strong> Automate tasks and free up valuable time for patient care.</li>
              <li><strong>Security:</strong> Advanced data protection to ensure compliance and patient trust.</li>
              <li><strong>Innovation:</strong> Leveraging technology that grows with modern dental practices.</li>
              <li><strong>Customization:</strong> Flexible solutions tailored to fit your unique practice needs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="image-and-text-container">
            <div className="image-content">
              <img src={dashboardMockup} alt="Patient Pass Dashboard" className="dashboard-image" />
            </div>
            <div className="text-content">
              <h2 className="say-goodbye">Say goodbye to</h2>
              <div className="taglines">
                <h2 className="tagline tagline-1"><span className="strikethrough">Insurance Calls</span></h2>
                <h2 className="tagline tagline-2"><span className="strikethrough">Headaches</span></h2>
                <h2 className="tagline tagline-3"><span className="strikethrough">Denials</span></h2>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Call to Action Banner Section */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Dental Practice?</h2>
          <p className="cta-text">
            Experience the freedom of streamlined insurance verification and improved patient care. Join us in revolutionizing dental practice management today!
          </p>
          <Link to="/demo" className="btn btn-cta">Request a Demo</Link>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview-section">
        <div className="service-overview-content">
          <div className="service-image">
            <img src={serviceImage} alt="Service Overview" className="service-img" />
          </div>
          <div className="service-description">
            <h2 className="service-title">Transform Your Practice with Patient Pass</h2>
            <p className="service-text">
              Our comprehensive solutions are designed to streamline insurance verification, improve patient management, and enhance overall clinic efficiency. With Patient Pass, you can focus on what truly matters—providing exceptional care to your patients.
            </p>
            <ul className="service-benefits">
              <li>✅ Streamlined workflows for your staff</li>
              <li>✅ Enhanced patient satisfaction through timely responses</li>
              <li>✅ Comprehensive support to ensure smooth operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Our Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Automated Verification</h3>
            <p className="feature-description">Eliminate manual insurance verification and reduce administrative workload.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3 className="feature-title">Real-Time Updates</h3>
            <p className="feature-description">Receive instant insurance status updates to streamline patient care.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Secure & Compliant</h3>
            <p className="feature-description">Ensure patient data protection with compliance to industry standards.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3 className="feature-title">Customizable Solutions</h3>
            <p className="feature-description">Tailor Patient Pass to the specific needs of your dental practice.</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
        <h2 className="impact-title">The Impact of Patient Pass</h2>
        <div className="impact-content">
          <div className="impact-statistic">
            <h3 className="statistic-number">30%</h3>
            <p className="statistic-description">Reduction in administrative workload</p>
          </div>
          <div className="impact-statistic">
            <h3 className="statistic-number">95%</h3>
            <p className="statistic-description">Increase in patient satisfaction ratings</p>
          </div>
          <div className="impact-statistic">
            <h3 className="statistic-number">80%</h3>
            <p className="statistic-description">Faster insurance verification times</p>
          </div>
          <div className="impact-statistic">
            <h3 className="statistic-number">20%</h3>
            <p className="statistic-description">Increase in clinic revenue within the first year</p>
          </div>
        </div>
        <p className="impact-summary">
          By implementing Patient Pass, dental practices can significantly enhance their operational efficiency and improve patient interactions. Our clients report remarkable improvements in their workflow, allowing them to focus more on providing excellent dental care.
        </p>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">"Patient Pass has completely transformed our office! The automated insurance verification saves us hours each day, and our patients love the streamlined experience."</p>
            <p className="client-name">- Dr. John Smith</p>
            <p className="client-position">Owner, Smith Dental Clinic</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"We've seen a noticeable increase in patient satisfaction since implementing Patient Pass. Their system is secure, efficient, and easy for our staff to use."</p>
            <p className="client-name">- Dr. Emily Turner</p>
            <p className="client-position">Director, Turner Family Dentistry</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Using Patient Pass has allowed us to focus on patient care rather than paperwork. It's a game-changer for our practice."</p>
            <p className="client-name">- Dr. Miguel Lopez</p>
            <p className="client-position">Founder, Lopez Smiles Dental</p>
          </div>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="partner-banner">
        <p>Trusted by Leading Partners</p>
        <div className="brand-logos">
          <img src={vyne} alt="Vyne" />
          <img src={nexhealth} alt="Nexhealth" />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="subscribe-content">
          <h2 className="subscribe-title">Stay Updated with Patient Pass</h2>
          <p className="subscribe-text">Subscribe to receive the latest news, updates, and exclusive offers on how Patient Pass is transforming dental practice management.</p>
          <form className="subscribe-form">
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">


          <div className='footer-links'>
            <div className="footer-contact">
              <div className="footer-logo">
                <img src={logoImage} alt="Patient Pass Logo" className="footer-logo-image" />
              </div>
              <p className="footer-message">
                Committed to revolutionizing patient care processes for dental practices worldwide. Join us in creating a seamless and efficient experience for both patients and clinics.
              </p>
              <p>Email: <a href="mailto:info@patientpass.com" className="footer-link">info@patientpass.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></p>
              <p>Address: 123 Dental Ave, Suite 100, City, State, ZIP</p>
            </div>
            <div className='footer-contact__container'>

              <div className="footer-contact">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Links</h3>
                <ul>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                  <li>
                    <Link to="#" className='footer-link'>Link </Link>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="footer-links">
            <Link to="#" className="footer-link">Terms of Service</Link>
            <Link to="#" className="footer-link">Privacy Policy</Link>
          </nav>
          <div className="footer-year">
            <p>&copy; 2024 Patient Pass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;