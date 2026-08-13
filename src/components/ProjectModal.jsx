import React, { useEffect } from 'react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal active" role="dialog" aria-hidden="false">
      <div className="modal-overlay" onClick={onClose} tabIndex={-1}></div>
      <div className="modal-content glass-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>

        <div className="modal-header">
          <span className="project-category-badge">{project.categoryBadge}</span>
          <h2 className="modal-project-title">{project.title}</h2>
          <span className="modal-role-badge">Role: {project.role}</span>
        </div>

        <div className="modal-body-section">
          <h4>Overview</h4>
          <p>{project.summary}</p>
        </div>

        <div className="modal-body-section">
          <h4>Key Modules Covered</h4>
          <ul className="modal-bullet-list">
            {project.modules.map((mod, idx) => (
              <li key={idx}><span className="bullet">✓</span> {mod}</li>
            ))}
          </ul>
        </div>

        <div className="modal-body-section">
          <h4>My Specific Contributions</h4>
          <ul className="modal-bullet-list">
            {project.detailedContributions.map((contrib, idx) => (
              <li key={idx}><span className="bullet">★</span> {contrib}</li>
            ))}
          </ul>
        </div>

        <div className="modal-body-section">
          <h4>Tech & Tools Used</h4>
          <div className="pill-cloud">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
