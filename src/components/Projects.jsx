import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const filterButtons = [
    { label: 'All Apps', value: 'all' },
    { label: 'HRM', value: 'hrm' },
    { label: 'Sales', value: 'sales' },
    { label: 'TADA', value: 'tada' },
    { label: 'ERP', value: 'erp' },
    { label: 'Builds', value: 'build' },
    { label: 'Mobile', value: 'mobile' },
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
      <div className="container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">APPLICATIONS TESTED</span>
          <h2 className="section-title">Projects & Applications</h2>
          <p className="section-description">Enterprise apps tested at Infocom plus selected builds merged from the classic portfolio (Pathwise, LifeOS, and more).</p>
          <div className="title-bar"></div>
        </div>

        {/* Filter buttons */}
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

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card reveal-scale stagger-card">
              <div className="project-card-header">
                <span className="project-category-badge">{project.categoryBadge}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>

              <div className="project-contributions">
                <span className="contrib-label">Key Contributions:</span>
                <ul>
                  {project.keyContributions.map((contrib, idx) => (
                    <li key={idx}>{contrib}</li>
                  ))}
                </ul>
              </div>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
                <button
                  className="btn-text"
                  onClick={() => onOpenModal(project)}
                >
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
