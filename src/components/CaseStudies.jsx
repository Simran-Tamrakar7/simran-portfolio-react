import React from 'react';
import { qaCaseStudies } from '../data/portfolioData';

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">HOW I THINK WHEN TESTING</span>
          <h2 className="section-title">Selected QA Case Studies</h2>
          <p className="section-description">
            Generalized examples of how I approach approvals, API vs UI validation, and cross-platform regression — without confidential product details.
          </p>
          <div className="title-bar"></div>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {qaCaseStudies.map((cs) => (
            <div key={cs.id} className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-teal)', letterSpacing: '0.08em' }}>
                  CASE STUDY {cs.number}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{cs.title}</h3>
              </div>

              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>Problem</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>{cs.problem}</p>

              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>My QA Approach</h4>
              <ul style={{ margin: '0 0 1rem', paddingLeft: '1.1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                {cs.approach.map((step) => (
                  <li key={step} style={{ marginBottom: '0.35rem' }}>{step}</li>
                ))}
              </ul>

              <div className="pill-cloud">
                {cs.tags.map((tag) => (
                  <span key={tag} className="pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
