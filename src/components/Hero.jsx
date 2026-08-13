import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export function Hero({ onCopyEmail, onOpenResume }) {
  const [testState, setTestState] = useState({
    running: false,
    completed: false,
    logs: [
      '// Click "Run QA Suite" to trigger automated verification',
      'const execution = await qaEngine.runFullVerification();'
    ]
  });

  const handleRunTests = () => {
    if (testState.running) return;
    setTestState({ running: true, completed: false, logs: ['[INIT] Connecting to Postman API Test Suite...'] });

    setTimeout(() => {
      setTestState(prev => ({
        ...prev,
        logs: [...prev.logs, '✔ [PASS] 200 OK — Auth & Authorization Tokens Verified (14ms)']
      }));
    }, 600);

    setTimeout(() => {
      setTestState(prev => ({
        ...prev,
        logs: [...prev.logs, '✔ [PASS] Boundary Value Analysis — 100k Records Payload Intact']
      }));
    }, 1200);

    setTimeout(() => {
      setTestState(prev => ({
        ...prev,
        logs: [...prev.logs, '✔ [PASS] UI Roster & Dashboard Cross-Browser Sanity Gate']
      }));
    }, 1800);

    setTimeout(() => {
      setTestState({
        running: false,
        completed: true,
        logs: [
          '✔ [PASS] 200 OK — Auth & Authorization Tokens (14ms)',
          '✔ [PASS] Boundary Value Analysis — 100k Payload Intact',
          '✔ [PASS] UI Roster & Dashboard Cross-Browser Sanity',
          '🚀 [SUCCESS] ZERO P0 Defect Leakage Verified!'
        ]
      });
    }, 2400);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content reveal-left">
          <div className="status-badge">
            <span className="status-dot"></span> {personalInfo.status}
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-title">
            QA Associate <span className="divider">|</span> Business Analyst <span className="divider">|</span> UI/UX & AI Workflows
          </h2>

          <p className="hero-tagline">
            "{personalInfo.tagline}"
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a
              href="/Simran_Tamrakar_QA_CV.pdf"
              download="Simran_Tamrakar_QA_CV.pdf"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>📥</span> Download CV PDF
            </a>
            <button className="btn btn-outline" onClick={onOpenResume}>
              <span>📄 View Interactive CV</span>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => onCopyEmail(personalInfo.email, 'Email copied to clipboard!')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Email</span>
            </button>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon-btn" aria-label="Send Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-right">
          <div className="hero-card-stack">
            <div className="glass-card main-hero-card">
              <div className="card-header-bar">
                <div className="dots"><span></span><span></span><span></span></div>
                <span className="card-title-sub">QA Execution Sandbox</span>
                <button
                  onClick={handleRunTests}
                  disabled={testState.running}
                  className="btn-text"
                  style={{
                    fontSize: '0.75rem',
                    background: testState.completed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(45, 212, 191, 0.15)',
                    color: testState.completed ? '#10b981' : 'var(--accent-teal)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {testState.running ? '⏳ Executing...' : testState.completed ? '✔ Suite Passed' : '▶ Run QA Suite'}
                </button>
              </div>
              <div className="card-body-content">
                <div className="lifecycle-chip-grid">
                  <div className="lifecycle-chip active"><span className="chip-num">01</span> Requirements & BA</div>
                  <div className="lifecycle-chip active"><span className="chip-num">02</span> UI/UX Prototyping</div>
                  <div className="lifecycle-chip active"><span className="chip-num">03</span> End-to-End QA</div>
                  <div className="lifecycle-chip active"><span className="chip-num">04</span> GenAI Workflows</div>
                </div>
                <div className="code-preview-box" style={{ minHeight: '130px' }}>
                  {testState.logs.map((logLine, idx) => (
                    <p
                      key={idx}
                      className="code-line"
                      style={{
                        fontSize: '0.8rem',
                        color: logLine.includes('SUCCESS') ? '#10b981' : logLine.includes('PASS') ? 'var(--accent-teal)' : 'var(--text-secondary)'
                      }}
                    >
                      {logLine}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
