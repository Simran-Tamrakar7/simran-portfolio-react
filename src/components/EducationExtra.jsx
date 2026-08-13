import React from 'react';
import { educationList, extraActivities, languagesList } from '../data/portfolioData';

export function EducationExtra() {
  return (
    <section id="education" className="section-padding edu-extra-section">
      <div className="container">
        <div className="grid-2col">
          {/* Education Column */}
          <div className="edu-column reveal-left">
            <div className="section-header left">
              <span className="section-subtitle">ACADEMIC BACKGROUND</span>
              <h2 className="section-title">Education</h2>
              <div className="title-bar"></div>
            </div>

            <div className="card-list">
              {educationList.map((edu, idx) => (
                <div key={idx} className="edu-card glass-card stagger-card">
                  <div className="edu-year">{edu.year}</div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-school">{edu.school}</h4>
                  <p className="edu-location">{edu.location}</p>
                  {edu.desc && <p className="edu-desc">{edu.desc}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Extra Activities Column */}
          <div className="extra-column reveal-right">
            <div className="section-header left">
              <span className="section-subtitle">LEADERSHIP & INITIATIVES</span>
              <h2 className="section-title">Extra Activities</h2>
              <div className="title-bar"></div>
            </div>

            <div className="card-list">
              {extraActivities.map((act, idx) => (
                <div key={idx} className="extra-card glass-card stagger-card">
                  <div className="extra-badge">{act.badge}</div>
                  <h3 className="extra-role">{act.role}</h3>
                  <h4 className="extra-org">{act.org}</h4>
                  <span className="extra-date">{act.date}</span>
                  <p className="extra-desc">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Bar */}
        <div className="languages-box glass-card margin-top-lg reveal-up">
          <h3 className="lang-title">🌐 Languages</h3>
          <div className="lang-grid">
            {languagesList.map((lang, idx) => (
              <div key={idx} className="lang-item">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
                <div className="lang-bar">
                  <div className="bar-fill" style={{ width: lang.fillPercentage }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
