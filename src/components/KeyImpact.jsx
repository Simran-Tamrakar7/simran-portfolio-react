import React from 'react';
import { impactMetrics, qaGovernanceGates, qaThinking } from '../data/portfolioData';
import { IMPACT_ICONS } from './icons';

export function KeyImpact() {
  return (
    <section id="key-impact" className="section-padding key-impact-section">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">SCOPE & CONTRIBUTION</span>
          <h2 className="section-title">QA Scope & Experience</h2>
          <p className="section-description">
            Domains, platforms, and workflows I've worked with across real QA engagements.
          </p>
          <div className="title-bar"></div>
        </div>

        <div className="metric-grid impact-grid" style={{ marginBottom: '3rem' }}>
          {impactMetrics.map((item, idx) => {
            const IconCmp = IMPACT_ICONS[idx % IMPACT_ICONS.length];
            return (
              <div
                key={item.title}
                className="metric-card glass-card impact-card reveal-scale stagger-card"
              >
                <div style={{ marginBottom: '1rem' }}>
                  <span className="metric-icon"><IconCmp size={18} /></span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass-card reveal-up card-padded" style={{ borderRadius: 'var(--radius-lg)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: '700', marginBottom: '0.5rem' }}>
            QA LIFECYCLE
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            My QA Approach
          </h3>
          <p style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            {qaThinking.motto}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-5)' }}>
            {qaGovernanceGates.map((gate, idx) => (
              <div key={gate.title} className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-teal)' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>{gate.title}</h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: 0 }}>{gate.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
