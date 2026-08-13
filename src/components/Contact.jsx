import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    onShowToast(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-box glass-card reveal-up">
          <div className="contact-header center">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2 className="contact-headline">Let's Build Something Great Together</h2>
            <p className="contact-subtext">Whether you're looking for a Business Analyst, QA Lead, UI/UX Designer, or AI Workflow Strategist — I'd love to connect.</p>
          </div>

          <div className="contact-cards-grid">
            <a href={`mailto:${personalInfo.email}`} className="contact-method-card">
              <div className="c-icon bg-teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="c-info">
                <span className="c-label">Direct Email</span>
                <span className="c-value">{personalInfo.email}</span>
              </div>
              <span className="c-action">Send Email ↗</span>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="c-icon bg-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="c-info">
                <span className="c-label">LinkedIn</span>
                <span className="c-value">simran-tamrakar-1aa84b349</span>
              </div>
              <span className="c-action">Connect ↗</span>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="c-icon bg-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div className="c-info">
                <span className="c-label">GitHub</span>
                <span className="c-value">Simran-Tamrakar7</span>
              </div>
              <span className="c-action">Follow ↗</span>
            </a>
          </div>

          {/* Quick Message Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Quick Message</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Jane Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. jane@company.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your product, project, or role..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
