import React, { useState } from 'react';
import { personalInfo, experiences, skillCategories, educationList, extraActivities, languagesList, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    const element = document.getElementById('printable-cv-document');

    if (window.html2pdf && element) {
      const opt = {
        margin: [0.35, 0.4, 0.4, 0.4],
        filename: 'Simran_Tamrakar_QA_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      window.html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          setIsGenerating(false);
        })
        .catch(err => {
          console.error('PDF generation error:', err);
          setIsGenerating(false);
          window.print();
        });
    } else {
      setIsGenerating(false);
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const sectionTitle = {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.35rem',
    marginBottom: '0.85rem'
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px', width: '92%' }}>
        <div className="modal-header">
          <div>
            <span className="section-subtitle">Official Curriculum Vitae</span>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: 0 }}>
              {personalInfo.name} — QA Engineer CV
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem', gap: '0.4rem' }}
              onClick={handleDownloadPDF}
              disabled={isGenerating}
            >
              {isGenerating ? '⏳ Generating PDF...' : '📥 Download CV PDF'}
            </button>
            <button
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
              onClick={handlePrint}
            >
              🖨️ Print
            </button>
            <button className="btn-icon" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        <div className="modal-body-scroll" style={{ maxHeight: '72vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
          <div id="printable-cv-document" className="cv-document-export" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)' }}>

            <div style={{ borderBottom: '2px solid var(--accent-teal)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {personalInfo.name}
              </h1>
              <h2 style={{ fontSize: '1.05rem', color: 'var(--accent-teal)', fontWeight: '600', margin: '0.25rem 0 0.65rem 0' }}>
                {personalInfo.title}
              </h2>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexWrap: 'wrap', gap: '0.35rem 0.65rem', alignItems: 'center' }}>
                <a href={`tel:${personalInfo.phone}`} className="cv-inline-link">{personalInfo.phoneDisplay}</a>
                <span aria-hidden="true">|</span>
                <a href={`mailto:${personalInfo.email}`} className="cv-inline-link">{personalInfo.email}</a>
                <span aria-hidden="true">|</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cv-inline-link">Github</a>
                <span aria-hidden="true">|</span>
                <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="cv-inline-link">Portfolio</a>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={sectionTitle}>Professional Summary</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.55' }}>
                {personalInfo.professionalSummary}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem', pageBreakInside: 'avoid' }}>
              <h3 style={sectionTitle}>Education</h3>
              {educationList.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{edu.school}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{edu.degree} — {edu.location}</div>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-purple)' }}>{edu.year}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={sectionTitle}>Experience</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {experiences.map(exp => (
                  <div key={exp.id} style={{ pageBreakInside: 'avoid' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                        {exp.role} — <span style={{ color: 'var(--accent-teal)', fontWeight: '600' }}>{exp.company}</span>
                      </h4>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-purple)', background: 'rgba(168, 85, 247, 0.12)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: '0.35rem' }}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={sectionTitle}>Projects / Applications Tested</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {projectsData.map((project) => (
                  <div key={project.id} style={{ pageBreakInside: 'avoid', fontSize: '0.85rem', lineHeight: '1.45' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{project.title}</span>
                    {project.link ? (
                      <>
                        {' — '}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                          {project.link.replace(/^https?:\/\//, '')}
                        </a>
                      </>
                    ) : null}
                    <span style={{ color: 'var(--text-secondary)' }}> — {project.summary}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={sectionTitle}>Leadership and Extra Curricular Activities</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {extraActivities.map((act, idx) => (
                  <div key={idx} style={{ pageBreakInside: 'avoid' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {act.role} — {act.org}
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-purple)' }}>{act.date}</span>
                    </div>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem', pageBreakInside: 'avoid' }}>
              <h3 style={sectionTitle}>Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {skillCategories.map((cat, idx) => (
                  <div key={idx} style={{ fontSize: '0.85rem', lineHeight: '1.45' }}>
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{cat.title}: </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{cat.skills.join(', ')}</span>
                  </div>
                ))}
                <div style={{ fontSize: '0.85rem', lineHeight: '1.45' }}>
                  <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Languages: </span>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {languagesList.map(l => `${l.name} (${l.level})`).join(', ')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <button
            className="btn btn-primary"
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            style={{ gap: '0.4rem' }}
          >
            {isGenerating ? '⏳ Generating PDF...' : '📥 Download CV PDF'}
          </button>
        </div>
      </div>
    </div>
  );
}
