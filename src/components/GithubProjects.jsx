import React from 'react';
import { githubProjects } from '../data/portfolioData';

export function GithubProjects() {
  return (
    <section id="github-projects" className="section-padding">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">AUTOMATION PRACTICE</span>
          <h2 className="section-title">QA Automation Projects</h2>
          <p className="section-description">
            Real Cypress learning repos on GitHub. A Playwright project will be added once there's a clean, real repo to show.
          </p>
          <div className="title-bar"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--grid-gap-main)' }}>
          {githubProjects.map((proj) => (
            <div key={proj.id} className="glass-card card-padded reveal-scale stagger-card" style={{ borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{proj.title}</h3>
              <div className="pill-cloud" style={{ marginBottom: '0.85rem' }}>
                {proj.tech.map((t) => (
                  <span key={t} className="pill highlight-pill">{t}</span>
                ))}
              </div>
              <ul style={{ margin: '0 0 1.25rem', paddingLeft: '1.1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.55, flex: 1 }}>
                {proj.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: '0.3rem' }}>{b}</li>
                ))}
              </ul>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start' }}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
