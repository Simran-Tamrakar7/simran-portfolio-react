import React, { useState } from 'react';
import { postmanEndpoints, gherkinSpecs } from '../data/portfolioData';

export function InteractiveQASuite() {
  const [activeTab, setActiveTab] = useState('postman'); // 'postman', 'bug-simulator', 'gherkin'
  
  // Postman State
  const [selectedApi, setSelectedApi] = useState(postmanEndpoints[0]);
  const [apiExecuting, setApiExecuting] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  // Bug Simulator State
  const [bugForm, setBugForm] = useState({
    title: 'Attendance Shift Overlap Boundary Error on Midnight Check-in',
    module: 'Bizlevate HRMS',
    severity: 'P0 Critical',
    steps: '1. Select Night Shift A.\n2. Set device time to 23:59:59.\n3. Trigger Check-in request.\n4. Observe duplicate shift allocation error.'
  });
  const [bugLifecycle, setBugLifecycle] = useState(null);

  const handleExecuteApi = () => {
    setApiExecuting(true);
    setApiResult(null);
    setTimeout(() => {
      setApiResult(selectedApi.resBody);
      setApiExecuting(false);
    }, 500);
  };

  const handleSimulateBugTriage = (e) => {
    e.preventDefault();
    setBugLifecycle({ stage: 1, logs: ['[01] 📝 Logging defect in ClickUp & Jira board...'] });

    setTimeout(() => {
      setBugLifecycle({
        stage: 2,
        logs: [
          '[01] 📝 Logging defect in ClickUp & Jira board...',
          '[02] 🔍 Root Cause Analysis: DevTools payload mismatch identified.'
        ]
      });
    }, 600);

    setTimeout(() => {
      setBugLifecycle({
        stage: 3,
        logs: [
          '[01] 📝 Logging defect in ClickUp & Jira board...',
          '[02] 🔍 Root Cause Analysis: DevTools payload mismatch identified.',
          '[03] ⚡ Developer Assigned: Hotfix patch committed to QA Staging.'
        ]
      });
    }, 1200);

    setTimeout(() => {
      setBugLifecycle({
        stage: 4,
        logs: [
          '[01] 📝 Logging defect in ClickUp & Jira board...',
          '[02] 🔍 Root Cause Analysis: DevTools payload mismatch identified.',
          '[03] ⚡ Developer Assigned: Hotfix patch committed to QA Staging.',
          '✔ [04] 🚀 Re-test Passed: Zero P0 defect leakage confirmed! Closed.'
        ]
      });
    }, 1800);
  };

  return (
    <section id="qa-suite" className="section-padding qa-suite-section">
      <div className="container">
        <div className="section-header text-center reveal-up">
          <span className="section-subtitle">INTERACTIVE QA & BA PLAYGROUND</span>
          <h2 className="section-title">
            Test Automation & <span className="gradient-text">API Testing Suite</span>
          </h2>
          <p className="section-description">
            Explore live API verification, defect triage workflows, and Gherkin requirement specifications in real-time.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="tab-buttons reveal-up" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            className={`tab-btn ${activeTab === 'postman' ? 'active' : ''}`}
            onClick={() => setActiveTab('postman')}
          >
            <span>📡</span> Postman API Inspector
          </button>
          <button
            className={`tab-btn ${activeTab === 'bug-simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('bug-simulator')}
          >
            <span>🐞</span> Interactive Bug Triage
          </button>
          <button
            className={`tab-btn ${activeTab === 'gherkin' ? 'active' : ''}`}
            onClick={() => setActiveTab('gherkin')}
          >
            <span>📄</span> Gherkin BA Specs
          </button>
        </div>

        {/* Tab 1: Postman API Inspector */}
        {activeTab === 'postman' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontWeight: '700', color: 'var(--accent-teal)', fontSize: '0.9rem' }}>SELECT API ENDPOINT:</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', flex: 1 }}>
                {postmanEndpoints.map((api) => (
                  <button
                    key={api.id}
                    onClick={() => { setSelectedApi(api); setApiResult(null); }}
                    className={`btn-filter ${selectedApi.id === api.id ? 'active' : ''}`}
                    style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem' }}
                  >
                    {api.module} ({api.method})
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                <span className="badge-tech" style={{ background: selectedApi.method === 'POST' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(45, 212, 191, 0.2)', color: selectedApi.method === 'POST' ? 'var(--accent-purple)' : 'var(--accent-teal)', fontWeight: '700' }}>
                  {selectedApi.method}
                </span>
                <span>{selectedApi.url}</span>
              </div>
              <button
                onClick={handleExecuteApi}
                disabled={apiExecuting}
                className="btn btn-primary"
                style={{ padding: '0.45rem 1.25rem', fontSize: '0.85rem' }}
              >
                {apiExecuting ? '⏳ Sending Request...' : '▶ Send Request'}
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Request Payload */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  JSON Request Body & Headers
                </h4>
                <pre style={{ background: '#0a0d14', color: '#a7f3d0', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', height: '200px' }}>
                  {JSON.stringify(selectedApi.reqBody, null, 2)}
                </pre>
              </div>

              {/* Response Payload */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Response Data
                  </h4>
                  {apiResult && (
                    <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700' }}>
                      Status: {selectedApi.resStatus} {selectedApi.resStatusText} ({selectedApi.resTimeMs}ms)
                    </span>
                  )}
                </div>
                <pre style={{ background: '#0a0d14', color: apiResult ? '#60a5fa' : '#9ca3af', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', height: '200px' }}>
                  {apiResult ? JSON.stringify(apiResult, null, 2) : '// Click "Send Request" to observe API execution response'}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Bug Simulator */}
        {activeTab === 'bug-simulator' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <form onSubmit={handleSimulateBugTriage} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Defect Title</label>
                  <input
                    type="text"
                    className="form-input"
                    value={bugForm.title}
                    onChange={(e) => setBugForm({ ...bugForm, title: e.target.value })}
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Module</label>
                    <select
                      className="form-input"
                      value={bugForm.module}
                      onChange={(e) => setBugForm({ ...bugForm, module: e.target.value })}
                    >
                      <option value="Bizlevate HRMS">Bizlevate HRMS</option>
                      <option value="TADA Expense">TADA Expense</option>
                      <option value="SalesMania ERP">SalesMania ERP</option>
                      <option value="PrimeSales360">PrimeSales360</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Defect Severity</label>
                    <select
                      className="form-input"
                      value={bugForm.severity}
                      onChange={(e) => setBugForm({ ...bugForm, severity: e.target.value })}
                    >
                      <option value="P0 Critical">P0 Critical</option>
                      <option value="P1 Major">P1 Major</option>
                      <option value="P2 Minor">P2 Minor</option>
                    </select>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Steps to Reproduce</label>
                  <textarea
                    className="form-input"
                    rows="3"
                    value={bugForm.steps}
                    onChange={(e) => setBugForm({ ...bugForm, steps: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  🚀 Log Bug & Trigger Triage Pipeline
                </button>
              </div>

              {/* Triage Log Output */}
              <div style={{ background: '#090d16', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent-teal)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="status-dot"></span> Automated Defect Lifecycle Pipeline
                </h4>
                {bugLifecycle ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {bugLifecycle.logs.map((log, index) => (
                      <div key={index} style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: log.includes('Closed') ? '#10b981' : 'var(--text-primary)', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                        {log}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
                    Fill out the defect form on the left and click "Log Bug & Trigger Triage Pipeline" to watch state progression.
                  </p>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Gherkin BA Specs */}
        {activeTab === 'gherkin' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {gherkinSpecs.map((spec) => (
                <div key={spec.id} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    BA & SRS Requirement Specification
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0.4rem 0 0.75rem 0', color: 'var(--text-primary)' }}>
                    {spec.feature}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                    {spec.userStory}
                  </p>
                  <pre style={{ background: '#090d16', color: '#cbd5e1', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.06)', lineHeight: '1.5' }}>
                    {spec.gherkin}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
