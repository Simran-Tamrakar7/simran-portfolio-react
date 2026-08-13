import React from 'react';
import { experiences } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="section-header center reveal-up">
          <span className="section-subtitle">CAREER TIMELINE</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-bar"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    {exp.current && <span className="role-badge current">Current Role</span>}
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <div className="timeline-period">{exp.period}</div>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
