import React from 'react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container section-container">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">Simran<span className="highlight">.</span></a>
          <p>{personalInfo.title}</p>
          <p style={{ marginTop: '0.35rem' }}>
            <a href={`tel:${personalInfo.phone}`} className="cv-inline-link">{personalInfo.phoneDisplay}</a>
            {' · '}
            <a href={`mailto:${personalInfo.email}`} className="cv-inline-link">{personalInfo.email}</a>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">Github</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send Email">Email</a>
            <a href={`tel:${personalInfo.phone}`} aria-label="Call Phone">Phone</a>
          </div>
          <p>&copy; {currentYear} {personalInfo.name}. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
}
