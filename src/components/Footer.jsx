import React from 'react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">Simran<span className="highlight">.</span></a>
          <p>QA Engineer — Manual, API & Mobile Testing</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">Github</a>
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">Portfolio</a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send Email">Email</a>
            <a href={`tel:${personalInfo.phone}`} aria-label="Call Phone">Phone</a>
          </div>
          <p>&copy; {currentYear} {personalInfo.name}. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
}
