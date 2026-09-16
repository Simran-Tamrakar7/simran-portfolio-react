import React, { useState } from 'react';
import { skillCategories, testingTechniques } from '../data/portfolioData';
import { SKILL_CAT_ICONS } from './icons';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = ['All', 'QA', 'Automation', 'API', 'Management', 'Supporting', 'Domain'];

  const filteredCategories = skillCategories.filter(cat => {
    const title = cat.title.toLowerCase();
    let matchesTab = true;
    if (activeFilter === 'QA') matchesTab = title === 'qa';
    else if (activeFilter === 'Automation') matchesTab = title.includes('automation');
    else if (activeFilter === 'API') matchesTab = title === 'api';
    else if (activeFilter === 'Management') matchesTab = title.includes('management');
    else if (activeFilter === 'Supporting') matchesTab = title.includes('supporting');
    else if (activeFilter === 'Domain') matchesTab = title.includes('domain');

    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      matchesSearch = cat.title.toLowerCase().includes(q) || cat.skills.some(s => s.toLowerCase().includes(q));
    }

    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">QA SKILLS & TOOLS</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-description">
            What I use day to day — separated so recruiters can scan QA, API, automation, and tools quickly.
          </p>
          <div className="title-bar"></div>
        </div>

        <div className="glass-card reveal-up card-padded" style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-teal)', display: 'block', marginBottom: '0.75rem' }}>
            Testing Techniques I Use
          </span>
          <div className="pill-cloud">
            {testingTechniques.map((t) => (
              <span key={t} className="pill highlight-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="reveal-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div className="filter-pills-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  background: activeFilter === tab ? 'var(--gradient-primary)' : 'var(--bg-card)',
                  color: activeFilter === tab ? '#ffffff' : 'var(--text-secondary)',
                  border: activeFilter === tab ? 'none' : '1px solid var(--border-color)',
                  boxShadow: activeFilter === tab ? 'var(--shadow-glow)' : 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', minWidth: '220px' }}>
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem'
              }}
            />
          </div>
        </div>

        <div className="skills-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--grid-gap-main)' }}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, idx) => {
              const CatIcon = SKILL_CAT_ICONS[cat.title];
              return (
                <div
                  key={idx}
                  className={`skill-category-card glass-card skills-card reveal-scale stagger-card card-padded ${cat.highlight ? 'highlight-skill' : ''}`}
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <div className="skill-cat-header">
                    <div className="skill-icon-box">{CatIcon ? <CatIcon size={18} /> : null}</div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>{cat.title}</h3>
                  </div>
                  <div className="pill-cloud">
                    {cat.skills.map((skill, sIdx) => {
                      const isMatched = searchQuery.trim() !== '' && skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={sIdx}
                          className={`pill ${cat.highlight ? 'highlight-pill' : ''}`}
                          style={{
                            background: isMatched ? 'var(--accent-teal)' : undefined,
                            color: isMatched ? '#0b0f19' : undefined,
                            fontWeight: isMatched ? 'bold' : undefined
                          }}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
