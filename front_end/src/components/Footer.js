import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
        <p className="header-subtitle">Developed By <a href="https://github.com/SuryaNarayananDev" target="_blank" rel="noopener noreferrer">👉 Suryanarayanan 👈</a></p>
   
      <div className="footer-content">
        <span className="footer-title">Connect with me:</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/suryanarayanandev67/" className="footer-link linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SuryaNarayananDev" className="footer-link github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/surya_narayanan_dev/" className="footer-link instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Suryanarayanan. All rights to Publilc 😉.</div>
    </footer>
  );
}

export default Footer;
