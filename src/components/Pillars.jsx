import React from 'react';
import { fourPillars } from '../data/portfolioData';

export function Pillars() {
  const getIconSvg = (id) => {
    switch (id) {
      case 'ba':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
      case 'qa':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
      case 'design':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
      case 'ai':
        return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
      default:
        return null;
    }
  };

  return (
    <section id="pillars" className="section-padding pillars-section">
      <div className="container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">FOUR CORE CAPABILITIES</span>
          <h2 className="section-title">What I Bring To The Table</h2>
          <p className="section-description">A unique blend of analytical rigor, user-centric design, rigorous QA standards, and cutting-edge GenAI workflows.</p>
          <div className="title-bar"></div>
        </div>

        <div className="pillars-grid">
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
