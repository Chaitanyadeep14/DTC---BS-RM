// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <div className="footer-content slide-up">
        {/* Social Media Icons */}
        <div className="footer-social slide-in">
          <a href="https://www.facebook.com/DelhiTransportCorporation" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon hover-bounce" />
          </a>
          <a href="https://twitter.com/DTCDelhi" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon hover-bounce" />
          </a>
          <a href="https://www.linkedin.com/company/delhi-transport-corporation" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon hover-bounce" />
          </a>
          <a href="https://www.instagram.com/dtc_delhi" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon hover-bounce" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="footer-contact slide-in">
          <p>Contact Us</p>
          <p>Email: contact@dtc.gov.in</p>
          <p>Phone: +91 11 23370388</p>
          <p>Address: DTC Headquarters, I.P. Estate, New Delhi, Delhi 110002</p>
        </div>

        {/* Additional DTC Information */}
        <div className="footer-info slide-in">
          <a href="https://dtc.delhi.gov.in" target="_blank" rel="noopener noreferrer">Official DTC Website</a> | 
          <a href="/fares" target="_blank" rel="noopener noreferrer">Fare Information</a> |
          <a href="/services" target="_blank" rel="noopener noreferrer">Services</a> |
          <a href="/terms-of-service">Terms of Service</a> | 
          <a href="/privacy-policy">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Delhi Transport Corporation (DTC). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
