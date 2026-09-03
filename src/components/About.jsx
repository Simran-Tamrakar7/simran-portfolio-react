import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { PhotoGallery } from './PhotoGallery';

export function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-hero-layout">
          {/* Left Column: Title & Intro Bio */}
          <div className="about-text-content reveal-left">
            <h2 className="about-main-heading">
              About <span className="gradient-text">me</span>
            </h2>
            <p className="about-lead-text">
              I'm a QA Engineer passionate about software quality across web, mobile, and API layers. I design test cases, run regression and release validation, analyze requirements, and manage defects through resolution in Agile/Scrum teams.
            </p>

            <div className="stats-row">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Auto-fading Portrait with Glowing Rhombus Backdrop (30 min transition) */}
          <div className="about-portrait-content reveal-right">
            <PhotoGallery interval={30 * 60 * 1000} />
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="about-highlights-grid reveal-up">
          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <div>
              <h4>Business Requirements & Specs</h4>
              <p>Writing comprehensive SRS docs, feature comparison matrices, and visual flowcharts for enterprise software.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <div>
              <h4>Admin Dashboard & UI/UX Design</h4>
              <p>Designing high-density data tables, calendar roster management screens, and intuitive admin panels in Figma.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <h4>Comprehensive QA Ownership</h4>
              <p>Manual, Functional, Regression, API (Postman), Mobile, and UAT testing with defect tracking in ClickUp.</p>
            </div>
          </div>

          <div className="highlight-card stagger-card">
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <div>
              <h4>AI-Assisted Workflow Acceleration</h4>
              <p>Leveraging ChatGPT, v0.dev, Bolt.new & Lovable.dev for rapid UI prototyping and prompt-engineered QA suites.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
