import React from 'react';
import { certificationsList, impactMetrics } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Specializations & Education Section */}
        <div>
          <div className="section-header center reveal-up">
            <span className="section-subtitle">QA SPECIALIZATIONS & EDUCATION</span>
            <h2 className="section-title">Core QA Competencies & Academic Degree</h2>
            <p className="section-description">
              Combining a 4-year B.Sc. Computer Science & IT degree with hands-on enterprise QA testing specializations and AI-assisted workflows.
            </p>
            <div className="title-bar"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--grid-gap-main)' }}>
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="glass-card cert-card reveal-scale stagger-card card-padded"
                style={{
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
                    <span
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        background: cert.id === 'qa-competency' ? 'rgba(45, 212, 191, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                        color: cert.id === 'qa-competency' ? 'var(--accent-teal)' : 'var(--accent-purple)',
                        border: cert.id === 'qa-competency' ? '1px solid rgba(45, 212, 191, 0.3)' : '1px solid rgba(168, 85, 247, 0.3)'
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-teal)', marginBottom: '0.85rem' }}>
                    {cert.issuer} • {cert.year}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.3rem 0.7rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          fontSize: '0.775rem',
                          color: 'var(--text-secondary)',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
