import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Instagram is a brand icon
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Envelope is a solid icon
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Email Icon */}
        <a href="mailto:akashdep988@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="social-icon" />
        </a>
        {/* Twitter Icon */}
        <a href="https://x.com/Akashdp500" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" />
        </a>
        {/* Instagram Icon */}
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
        </a>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/akash-deep-00a876201/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
