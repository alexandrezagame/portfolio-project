import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/Contact.css';
import { AboutAccordion } from './AboutAccordion';

const APP_EMAIL = 'zagamealexandre@gmail.com';
const APP_PHONE = '+46 767610630';
const APP_ADDRESS = 'Stockholm, Sweden';

const handleCopy = async (text) => {
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
  return (
    <div id="contact" className="contact">
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
                onClick={() => handleCopy(APP_EMAIL)}
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
                onClick={() => handleCopy(APP_PHONE)}
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
      </div>
    </div>
  );
};

export default Contact;
