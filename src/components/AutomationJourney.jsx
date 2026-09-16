import React from 'react';
import { currentlyBuilding } from '../data/portfolioData';

export function AutomationJourney() {
  return (
    <section id="automation" className="section-padding">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">TRAJECTORY</span>
          <h2 className="section-title">Currently Building</h2>
          <p className="section-description">
            Where I'm deliberately growing — practical automation on top of manual and API QA.
          </p>
          <div className="title-bar"></div>
        </div>

        <div className="capability-grid" style={{ gap: 'var(--grid-gap-main)' }}>
          {currentlyBuilding.map((item) => (
            <div key={item.title} className="glass-card card-padded reveal-scale stagger-card" style={{ borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.4rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-teal)', marginBottom: '0.65rem' }}>{item.stack}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
