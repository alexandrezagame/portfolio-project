import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../stylesheets/Contact.css';
import VerticalNav from './VerticalNav';
import { AboutAccordion } from './AboutAccordion';

const APP_EMAIL = 'zagamealexandre@gmail.com';
const APP_PHONE = '+46 767610630';
const APP_ADDRESS = 'Stockholm, Sweden';

const handleCopy = async (text, e) => {
  e.preventDefault();
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

const ContactBox = ({ icon, title, children, className = '' }) => {
  return (
    <div className={`contact-box ${className}`}>
      <div className="contact-box-header">
        <FontAwesomeIcon icon={icon} className="contact-box-icon" />
        <h3 className="contact-box-title">{title}</h3>
      </div>
      <div className="contact-box-content">
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  const socialLinks = [
    {
      icon: faGithubAlt,
      href: 'https://github.com/zagamealexandre',
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/alexandrezagame/',
      label: 'LinkedIn',
    },
    {
      icon: faMedium,
      href: 'https://medium.com/@alexbacelo/from-sales-to-web-development-a-journey-of-learning-4ee2c826df46?source=friends_link&sk=e7aa09d4694d10caf6a3e90a79ccf4cd',
      label: 'Medium',
    },
  ];

  return (
    <div id="contact" className="contact">
      <VerticalNav />
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-heading">Contact Me</h2>
        </div>
        
        <div className="contact-separator"></div>
        
        <div className="contact-grid">
          <ContactBox
            icon={faEnvelope}
            title="Email"
          >
            <div className="contact-info-row">
              <a
                href={`mailto:${APP_EMAIL}`}
                className="contact-info-link"
                onClick={(e) => handleCopy(APP_EMAIL, e)}
              >
                {APP_EMAIL}
              </a>
            </div>
          </ContactBox>
          
          <ContactBox
            icon={faMapMarkerAlt}
            title="Location"
          >
            <span className="contact-info-text">
              {APP_ADDRESS}
            </span>
          </ContactBox>
          
          <ContactBox
            icon={faPhone}
            title="Phone"
            className="contact-box-last"
          >
            <div className="contact-info-row">
              <a
                href={`tel:${APP_PHONE.replace(/\s/g, '')}`}
                className="contact-info-link"
                onClick={(e) => handleCopy(APP_PHONE, e)}
              >
                {APP_PHONE}
              </a>
            </div>
          </ContactBox>
        </div>
        
        <div className="contact-separator"></div>
        
        <div className="contact-profile-section">
          <div className="contact-profile-image-container">
            <img 
              src="/alex.JPEG" 
              alt="Alex Zagame" 
              className="contact-profile-pic"
            />
          </div>
          <div className="contact-about-accordion-container">
            <AboutAccordion />
          </div>
        </div>
        
        <div className="contact-separator"></div>
        
        <div className="contact-social-section">
          <div className="contact-social-background"></div>
          <div className="contact-social-content">
            <h3 className="contact-social-heading">Find me online</h3>
            <p className="contact-subtitle">
              Get in touch to discuss opportunities, collaborations, or just say hello.
            </p>
            <div className="contact-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <FontAwesomeIcon icon={link.icon} className="contact-social-icon" />
                  <span className="contact-social-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
