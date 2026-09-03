import React from 'react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">Simran<span className="highlight">.</span></a>
          <p>Senior Business Analyst & QA Documentation Specialist</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send Email">Email</a>
          </div>
          <p>&copy; {currentYear} {personalInfo.name}. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
}
