import React from 'react';
import { testimonials } from '../data/portfolioData';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header text-center reveal-up">
          <span className="section-subtitle">RECOMMENDATIONS & ENDORSEMENTS</span>
          <h2 className="section-title">
            What Engineering <span className="gradient-text">Leads Say</span>
          </h2>
          <p className="section-description">
            Feedback on my software quality assurance standards, API verification accuracy, and cross-functional team collaboration.
          </p>
        </div>

        <div className="grid grid-3 reveal-up" style={{ gap: '1.5rem' }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card card-padded"
              style={{
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '3rem', opacity: '0.15', fontFamily: 'serif', lineHeight: '1' }}>
                “
              </div>

              <div>
                <span className="badge-tech" style={{ background: 'rgba(45, 212, 191, 0.12)', color: 'var(--accent-teal)', marginBottom: '1rem', display: 'inline-block' }}>
                  {t.tag}
                </span>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.65', color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <img
                  src={t.avatar}
                  alt={t.author}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-teal)' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                    {t.author}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {t.org}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
