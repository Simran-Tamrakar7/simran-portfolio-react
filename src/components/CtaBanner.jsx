import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Download, FileText, Linkedin } from './icons';

export function CtaBanner({ onOpenResume }) {
  return (
    <section className="cta-banner-section section-padding">
      <div className="container section-container">
        <div
          className="glass-card reveal-up card-padded"
          style={{
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
            border: '1px solid rgba(45, 212, 191, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: 'var(--shadow-glow)'
          }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--accent-teal)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              LET'S BUILD HIGH-QUALITY PRODUCTS
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Looking for a QA Engineer?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              I bring manual, API, web, and mobile testing experience with solid defect management across Agile/Scrum and enterprise applications.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem 1.25rem', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a
              href="/SimranTamrakar.pdf"
              download="SimranTamrakar.pdf"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text-link"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <button onClick={onOpenResume} className="btn-text-link">
              <FileText size={18} /> View CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
