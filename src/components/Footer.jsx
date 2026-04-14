import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import logoImg from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoImg} alt="Global Science Institute" className="footer-logo-img" />
            <span className="footer-logo-text">
              <span className="logo-accent">Global</span> Science Institute
            </span>
          </Link>
          <p className="footer-desc">
            Nurturing the next generation of scientists and engineers with world-class coaching for JEE, NEET, and MHT-CET.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/results">Results</Link>
          <Link to="/asat">ASAT Exam</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 7249511729</p>
          <p>📧 info@globalscience.in</p>
          <p>📍 Karmala | Wakad | Rahatani</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Global Science Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
