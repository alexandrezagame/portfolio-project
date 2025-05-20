import React from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Get in touch on{' '}
          <a
            href="https://www.linkedin.com/in/alexandrezagame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
