import React from 'react';
import { impactMetrics } from '../data/portfolioData';

export function KeyImpact() {
  const detailedImpacts = [
    {
      value: "Zero P0",
      title: "Production Defect Leakage",
      subtitle: "100% Stability across HRMS & TADA Releases",
      icon: "🛡️",
      badgeColor: "var(--accent-teal)",
      glowBg: "rgba(45, 212, 191, 0.12)",
      borderColor: "rgba(45, 212, 191, 0.35)",
      details: [
        "Rigorous boundary value analysis & sanity testing",
        "Pre-release UAT verification & sign-off gates",
        "Zero critical crashes reported post-deployment"
      ]
    },
    {
      value: "100+",
      title: "Test Cases / Module Sprint",
      subtitle: "Exhaustive Functional & API Test Coverage",
      icon: "🧪",
      badgeColor: "var(--accent-blue)",
      glowBg: "rgba(59, 130, 246, 0.12)",
      borderColor: "rgba(59, 130, 246, 0.35)",
      details: [
        "Comprehensive positive & negative test scenarios",
        "Multi-tier approval workflow & authorization checks",
        "Edge-case discovery prior to developer handoff"
      ]
    },
    {
      value: "30%",
      title: "Faster Defect Resolution",
      subtitle: "AI-Accelerated Triage & Clear Bug Logs",
      icon: "⚡",
      badgeColor: "var(--accent-amber)",
      glowBg: "rgba(245, 158, 11, 0.12)",
      borderColor: "rgba(245, 158, 11, 0.35)",
      details: [
        "Reproducible step-by-step bug reports in ClickUp",
        "Console logs, network payloads & screenshots attached",
        "GenAI prompt templates for rapid test scenario writing"
      ]
    },
    {
      value: "100%",
      title: "API Endpoint QA Coverage",
      subtitle: "Postman Integration & Payload Verification",
      icon: "📡",
      badgeColor: "var(--accent-purple)",
      glowBg: "rgba(168, 85, 247, 0.12)",
      borderColor: "rgba(168, 85, 247, 0.35)",
      details: [
        "HTTP status codes, response times & schema validation",
        "Postman collection scripts for automated assertions",
        "Financial calculation payload verification for TADA & Payroll"
      ]
    }
  ];

  return (
    <section id="key-impact" className="section-padding key-impact-section">
      <div className="container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">MEASURABLE VALUE & RESULTS</span>
          <h2 className="section-title">Key Performance & Quality Impact</h2>
          <p className="section-description">
            Quantifiable quality milestones achieved across enterprise HRMS, ERP, and TADA platform releases.
          </p>
          <div className="title-bar"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'var(--grid-gap-main)', marginBottom: '3rem' }}>
          {detailedImpacts.map((item, idx) => (
            <div
              key={idx}
              className="glass-card impact-card reveal-scale stagger-card card-padded"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: `1px solid ${item.borderColor}`,
                background: `linear-gradient(145deg, ${item.glowBg} 0%, var(--bg-card) 100%)`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                <span
                  style={{
                    background: item.glowBg,
                    color: item.badgeColor,
                    border: `1px solid ${item.borderColor}`,
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  Verified Metric
                </span>
              </div>

              <div className="impact-metric-val" style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: item.badgeColor, lineHeight: '1.1', marginBottom: '0.5rem' }}>
                {item.value}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {item.title}
              </h3>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: '500' }}>
                {item.subtitle}
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <ul style={{ paddingLeft: '0', listStyle: 'none', margin: '0' }}>
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.45rem', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: '1.4' }}>
                      <span style={{ color: item.badgeColor, fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Workflow Banner */}
        <div className="glass-card reveal-up card-padded" style={{ borderRadius: 'var(--radius-lg)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: '700', marginBottom: '0.5rem' }}>
            QA GOVERNANCE & QUALITY GATES
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.25rem' }}>
            How I Enforce Zero Defect Delivery
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--grid-gap-compact)' }}>
            <div className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-teal)' }}>STAGE 01</span>
              <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>Requirement QA</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>SRS ambiguity review & boundary condition mapping.</p>
            </div>
            <div className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-blue)' }}>STAGE 02</span>
              <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>Test Suite Design</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>100+ positive & negative test scenarios designed.</p>
            </div>
            <div className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-purple)' }}>STAGE 03</span>
              <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>Postman API QA</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Endpoint payload, status code & auth verification.</p>
            </div>
            <div className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-amber)' }}>STAGE 04</span>
              <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>Defect Triage</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>ClickUp logs with steps, screenshots & logs.</p>
            </div>
            <div className="card-padded-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-teal)' }}>STAGE 05</span>
              <h4 style={{ fontSize: '0.95rem', margin: '0.3rem 0', fontWeight: '700' }}>Release Signoff</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Smoke, sanity & UAT signoff for zero P0 releases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
