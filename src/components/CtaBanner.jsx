import React from 'react';
import { personalInfo } from '../data/portfolioData';

export function CtaBanner({ onOpenResume, onShowToast }) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      if (onShowToast) onShowToast('Email copied to clipboard! 📋');
    });
  };

  return (
    <section className="cta-banner-section section-padding">
      <div className="container">
        <div
          className="glass-card reveal-up card-padded"
          style={{
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.12) 0%, rgba(168, 85, 247, 0.1) 100%)',
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
              Looking for a QA Associate or Business Analyst?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              I bring end-to-end quality ownership, SRS documentation expertise, and AI-accelerated QA workflows to engineering teams.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>💼</span> Connect on LinkedIn
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>📋</span> Copy Email
            </button>
            <a
              href="/Simran_Tamrakar_QA_CV.pdf"
              download="Simran_Tamrakar_QA_CV.pdf"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>📥</span> Download CV PDF
            </a>
            <button
              onClick={onOpenResume}
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>📄</span> View CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
