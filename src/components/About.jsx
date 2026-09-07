import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhotoGallery } from './PhotoGallery';

export function About() {
  const headingParts = personalInfo.aboutHeading.split(':');
  const headingLead = headingParts[0]?.trim() || personalInfo.aboutHeading;
  const headingAccent = headingParts.slice(1).join(':').trim();

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-hero-layout">
          <div className="about-text-content reveal-left">
            <span className="section-subtitle">BACKGROUND & PHILOSOPHY</span>
            <h2 className="about-main-heading">
              {headingLead}
              {headingAccent ? (
                <>
                  :{' '}
                  <span className="gradient-text">{headingAccent}</span>
                </>
              ) : null}
            </h2>
            <p className="about-lead-text">{personalInfo.aboutLead}</p>

            {personalInfo.aboutParagraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="about-lead-text" style={{ marginTop: '0.85rem' }}>
                {paragraph}
              </p>
            ))}

            <ul className="about-facts-list">
              {personalInfo.aboutFacts.map((fact) => (
                <li key={fact.label}>
                  <span className="about-fact-label">{fact.label}</span>
                  <strong className="about-fact-value">{fact.value}</strong>
                </li>
              ))}
            </ul>

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
          {personalInfo.aboutHighlights.map((item) => (
            <div key={item.title} className="highlight-card stagger-card">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
