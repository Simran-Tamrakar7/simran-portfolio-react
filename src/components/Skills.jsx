import React, { useState } from 'react';
import { skillCategories, coreValues, softSkills } from '../data/portfolioData';
import { ETHOS_ICONS, SKILL_CAT_ICONS } from './icons';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = ['All', 'Testing & QA', 'Tools', 'Domain', 'Foundations'];

  const filteredCategories = skillCategories.filter(cat => {
    const title = cat.title.toLowerCase();
    let matchesTab = true;
    if (activeFilter === 'Testing & QA') matchesTab = title.includes('testing methodologies') || title.includes('qa types');
    else if (activeFilter === 'Tools') matchesTab = title.includes('tools') || title.includes('defect');
    else if (activeFilter === 'Domain') matchesTab = title.includes('domain');
    else if (activeFilter === 'Foundations') matchesTab = title.includes('foundations');

    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const catMatches = cat.title.toLowerCase().includes(q);
      const skillMatches = cat.skills.some(s => s.toLowerCase().includes(q));
      matchesSearch = catMatches || skillMatches;
    }

    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">SKILLS MATRIX & COMPETENCIES</span>
          <h2 className="section-title">Tools & QA Core Capabilities</h2>
          <p className="section-description">A categorized, filterable overview of technical skills, QA methodologies, and tools I use daily.</p>
          <div className="title-bar"></div>
        </div>

        <div className="glass-card reveal-up card-padded" style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%)', border: '1px solid rgba(45, 212, 191, 0.25)' }}>
          <div className="metric-grid" style={{ textAlign: 'center' }}>
            <div>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary)', display: 'block' }}>100+</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Test Cases / Module</span>
            </div>
            <div>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary)', display: 'block' }}>API Ready</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Postman Endpoint Testing</span>
            </div>
            <div>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary)', display: 'block' }}>Zero P0</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Critical Bugs Leaked</span>
            </div>
            <div>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary)', display: 'block' }}>30% Faster</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Defect Resolution Turnaround</span>
            </div>
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

        <div className="skills-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--grid-gap-main)', marginBottom: '3rem' }}>
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

        <div className="reveal-up" style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-subtitle">ETHOS & WORK ETHIC</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              Core Values & Soft Skills
            </h3>
          </div>

          <div className="ethos-grid" style={{ marginBottom: '2rem' }}>
            {coreValues.map((val, idx) => {
              const EthosIcon = ETHOS_ICONS[idx % ETHOS_ICONS.length];
              return (
                <div key={idx} className="glass-card stagger-card card-padded-sm" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    <EthosIcon size={18} />
                  </div>
                  <h4 style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="glass-card card-padded" style={{ borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-teal)', display: 'block', marginBottom: '0.75rem' }}>
              Key Interpersonal Proficiencies
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {softSkills.map((sk, idx) => (
                <span
                  key={idx}
                  className="pill"
                >
                  {sk.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
