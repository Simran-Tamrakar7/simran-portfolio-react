import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhotoGallery } from './PhotoGallery';

export function About() {
  const headingParts = personalInfo.aboutHeading.split(':');
  const headingLead = headingParts[0]?.trim() || personalInfo.aboutHeading;
  const headingAccent = headingParts.slice(1).join(':').trim();

  return (
    <section id="about" className="section-padding about-section">
      <div className="container section-container">
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
              <p key={paragraph.slice(0, 48)} className="about-lead-text" style={{ marginTop: '0.85rem' }}>
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
          </div>

          <div className="about-portrait-content reveal-right">
            <PhotoGallery interval={30 * 60 * 1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
