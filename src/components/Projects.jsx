import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const filterButtons = [
    { label: 'All Apps', value: 'all' },
    { label: 'HRM', value: 'hrm' },
    { label: 'Sales', value: 'sales' },
    { label: 'ERP', value: 'erp' },
    { label: 'Finance', value: 'finance' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'E-commerce', value: 'ecommerce' },
  ];

  const filteredProjects = projectsData.filter(proj => {
    if (filter === 'all') return true;
    return proj.categoryKey.includes(filter);
  });

  const getCount = (value) => {
    if (value === 'all') return projectsData.length;
    return projectsData.filter(proj => proj.categoryKey.includes(value)).length;
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container section-container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">APPLICATIONS TESTED</span>
          <h2 className="section-title">Applications Tested</h2>
          <p className="section-description">
            Product → role → what I tested. Quick scan for recruiters; open details for fuller QA contributions.
          </p>
          <div className="title-bar"></div>
        </div>

        <div className="project-filters reveal-up">
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              className={`filter-btn ${filter === btn.value ? 'active' : ''}`}
              onClick={() => setFilter(btn.value)}
            >
              {btn.label} <span style={{ opacity: 0.75, fontSize: '0.8rem', marginLeft: '0.2rem' }}>({getCount(btn.value)})</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card reveal-scale stagger-card">
              <div className="project-card-header">
                <span className="project-category-badge">{project.categoryBadge}</span>
                <h3 className="project-title">{project.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: '600', margin: '0.35rem 0 0' }}>
                  My Role: {project.role}
                </p>
              </div>
              <p className="project-summary">{project.summary}</p>

              {project.testingTypes?.length > 0 && (
                <div style={{ marginBottom: '0.75rem' }}>
                  <span className="contrib-label">Testing:</span>
                  <div className="pill-cloud" style={{ marginTop: '0.35rem' }}>
                    {project.testingTypes.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.whatITest?.length > 0 && (
                <div style={{ marginBottom: '0.85rem' }}>
                  <span className="contrib-label">What I Test:</span>
                  <div className="pill-cloud" style={{ marginTop: '0.35rem' }}>
                    {project.whatITest.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
                <button className="btn-text" onClick={() => onOpenModal(project)}>
                  Details <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
