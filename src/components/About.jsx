import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhotoGallery } from './PhotoGallery';

export function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-hero-layout">
          <div className="about-text-content reveal-left">
            <span className="section-subtitle">ABOUT</span>
            <h2 className="about-main-heading">
              {personalInfo.aboutHeading.split(',')[0]},
              <span className="gradient-text"> {personalInfo.aboutHeading.split(',').slice(1).join(',').trim()}</span>
            </h2>
            <p className="about-lead-text">{personalInfo.aboutLead}</p>

            <ul className="about-facts-list">
              {personalInfo.aboutFacts.map((fact) => (
                <li key={fact.label}>
                  <span className="about-fact-label">{fact.label}</span>
                  <strong className="about-fact-value">{fact.value}</strong>
                </li>
              ))}
            </ul>

            <div className="about-source-links">
              <a href={personalInfo.portfolioAbout} className="btn btn-primary">
                Live About ↗
              </a>
              <a
                href={personalInfo.githubRepos.react}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                React repo
              </a>
              <a
                href={personalInfo.githubRepos.classic}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Classic repo
              </a>
            </div>

            <div className="stats-row">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-portrait-content reveal-right">
            <PhotoGallery interval={30 * 60 * 1000} />
          </div>
        </div>

        <div className="about-highlights-grid reveal-up">
          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <h4>Enterprise QA Ownership</h4>
              <p>Manual, functional, regression, API (Postman), mobile, and UAT testing across HRM, ERP, and sales apps with JIRA defect tracking.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div>
              <h4>Builder Projects</h4>
              <p>Shipped and documented products like Pathwise, LifeOS, Kasthakarobar, and academic systems — merged from the classic portfolio.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div>
              <h4>Docs Meet Verification</h4>
              <p>Test planning, requirement analysis, release validation, and HRMS manuals that keep QA coverage reproducible.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div>
              <h4>One Live Portfolio</h4>
              <p>
                Content from{' '}
                <a href={personalInfo.githubRepos.classic} target="_blank" rel="noopener noreferrer" className="cv-inline-link">simran-portfolio</a>
                {' '}and{' '}
                <a href={personalInfo.githubRepos.react} target="_blank" rel="noopener noreferrer" className="cv-inline-link">simran-portfolio-react</a>
                {' '}lives at{' '}
                <a href={personalInfo.portfolioAbout} className="cv-inline-link">#about</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
