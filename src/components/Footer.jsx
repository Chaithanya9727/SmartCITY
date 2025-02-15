// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://surl.li/rrcqtp" alt="City Pulse Logo" className="footer-logo-img" />
        </div>
        <p className="footer-text">
          &copy; 2025 City Pulse. All Rights Reserved.
        </p>
        <div className="footer-socials">
          <a href="https://linkedin.com" className="social-link">LinkedIn</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
          <a href="mailto:info@citypulse.com" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
