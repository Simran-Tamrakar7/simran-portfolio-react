import React, { useState } from 'react';
import { personalInfo, experiences, skillCategories, educationList, certificationsList } from '../data/portfolioData';

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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px', width: '92%' }}>
        <div className="modal-header">
          <div>
            <span className="section-subtitle">Official Curriculum Vitae</span>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: 0 }}>
              {personalInfo.name} — Quality Assurance CV
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

        {/* Printable/Exportable Document Area */}
        <div className="modal-body-scroll" style={{ maxHeight: '72vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
          
          <div id="printable-cv-document" className="cv-document-export" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)' }}>
            
            {/* Header Document Banner */}
            <div style={{ borderBottom: '2px solid var(--accent-teal)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {personalInfo.name}
                  </h1>
                  <h2 style={{ fontSize: '1.05rem', color: 'var(--accent-teal)', fontWeight: '600', margin: '0.25rem 0 0.5rem 0' }}>
                    {personalInfo.title}
                  </h2>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div>📧 {personalInfo.email}</div>
                  <div>💼 linkedin.com/in/simran-tamrakar-1aa84b349</div>
                  <div>💻 github.com/Simran-Tamrakar7</div>
                  <div>📍 Kathmandu, Nepal</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0 0', lineHeight: '1.5', fontStyle: 'italic' }}>
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Work Experience */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                Professional Quality Assurance Experience
              </h3>
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

            {/* Technical Skills & Competencies */}
            <div style={{ marginBottom: '1.5rem', pageBreakInside: 'avoid' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                QA Testing Competencies & Technical Skills
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
                {skillCategories.map((cat, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                      {cat.icon} {cat.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      {cat.skills.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Specialized Training */}
            <div style={{ marginBottom: '1.5rem', pageBreakInside: 'avoid' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                Certifications & Specializations
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {certificationsList.map((cert) => (
                  <div key={cert.id} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)' }}>{cert.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-teal)' }}>{cert.issuer} ({cert.year})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div style={{ pageBreakInside: 'avoid' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                Education & Qualifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {educationList.map((edu, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-teal)' }}>{edu.school} — {edu.year}</div>
                  </div>
                ))}
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

