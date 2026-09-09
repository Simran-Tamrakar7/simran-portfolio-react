import React from 'react';
import { fourPillars } from '../data/portfolioData';

export function Pillars() {
  const getIconSvg = (id) => {
    switch (id) {
      case 'qa':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
      case 'api':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
      case 'defects':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
      case 'release':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
      default:
        return null;
    }
  };

  return (
    <section id="pillars" className="section-padding pillars-section">
      <div className="container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">QA CORE CAPABILITIES</span>
          <h2 className="section-title">What I Bring To The Table</h2>
          <p className="section-description">Manual testing, API verification, defect management, and release validation — aligned to a QA Engineer profile.</p>
          <div className="title-bar"></div>
        </div>

        <div className="pillars-grid capability-grid">
          {fourPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`pillar-card glass-card reveal-scale stagger-card ${pillar.highlight ? 'highlight-pillar' : ''}`}
            >
              {pillar.badge && <div className="pillar-badge">{pillar.badge}</div>}
              <div className="pillar-number">{pillar.number}</div>
              <div className="pillar-header">
                <div className={`pillar-icon ${pillar.iconBg}`}>
                  {getIconSvg(pillar.id)}
                </div>
                <h3>{pillar.title}</h3>
              </div>
              <p className="pillar-desc">{pillar.description}</p>
              <ul className="pillar-list">
                {pillar.list.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
