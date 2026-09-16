import React, { useMemo, useState } from 'react';
import { postmanEndpoints, sampleTestCases } from '../data/portfolioData';

export function InteractiveQASuite() {
  const [activeTab, setActiveTab] = useState('cases');
  const [caseFilter, setCaseFilter] = useState('All');

  const [selectedApi, setSelectedApi] = useState(postmanEndpoints[0]);
  const [apiExecuting, setApiExecuting] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  const [bugForm, setBugForm] = useState({
    title: 'Attendance Shift Overlap Boundary Error on Midnight Check-in',
    module: 'Sample HRM Module',
    severity: 'High',
    steps: '1. Select Night Shift A.\n2. Set device time to 23:59:59.\n3. Trigger Check-in request.\n4. Observe duplicate shift allocation error.'
  });
  const [bugLifecycle, setBugLifecycle] = useState(null);

  const filteredCases = useMemo(() => {
    if (caseFilter === 'All') return sampleTestCases.cases;
    return sampleTestCases.cases.filter((c) => c.type === caseFilter);
  }, [caseFilter]);

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
    setBugLifecycle({ stage: 1, logs: ['[01] Logging defect in ClickUp / Jira...'] });

    setTimeout(() => {
      setBugLifecycle({
        stage: 2,
        logs: [
          '[01] Logging defect in ClickUp / Jira...',
          '[02] Investigation: compared UI behavior with API response.'
        ]
      });
    }, 600);

    setTimeout(() => {
      setBugLifecycle({
        stage: 3,
        logs: [
          '[01] Logging defect in ClickUp / Jira...',
          '[02] Investigation: compared UI behavior with API response.',
          '[03] Developer assigned: fix available on QA staging.'
        ]
      });
    }, 1200);

    setTimeout(() => {
      setBugLifecycle({
        stage: 4,
        logs: [
          '[01] Logging defect in ClickUp / Jira...',
          '[02] Investigation: compared UI behavior with API response.',
          '[03] Developer assigned: fix available on QA staging.',
          '[04] Re-test passed — defect closed after verification.'
        ]
      });
    }, 1800);
  };

  return (
    <section id="qa-suite" className="section-padding qa-suite-section">
      <div className="container section-container">
        <div className="section-header text-center reveal-up">
          <span className="section-subtitle">INTERACTIVE QA PLAYGROUND</span>
          <h2 className="section-title">
            Test Cases, API Demo & <span className="gradient-text">Defect Triage</span>
          </h2>
          <p className="section-description">
            Simulated examples of how I design coverage, validate APIs, and walk defects through triage — not live production systems.
          </p>
        </div>

        <div className="tab-buttons reveal-up" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button className={`tab-btn ${activeTab === 'cases' ? 'active' : ''}`} onClick={() => setActiveTab('cases')}>
            Test Case Examples
          </button>
          <button className={`tab-btn ${activeTab === 'postman' ? 'active' : ''}`} onClick={() => setActiveTab('postman')}>
            Interactive API Testing Demo
          </button>
          <button className={`tab-btn ${activeTab === 'bug-simulator' ? 'active' : ''}`} onClick={() => setActiveTab('bug-simulator')}>
            Defect Triage
          </button>
        </div>

        {activeTab === 'cases' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-teal)', letterSpacing: '0.08em' }}>FEATURE</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.25rem 0 0' }}>{sampleTestCases.feature}</h3>
              </div>
              <div className="filter-pills-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {sampleTestCases.filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setCaseFilter(f)}
                    className={`btn-filter ${caseFilter === f ? 'active' : ''}`}
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '0.65rem 0.5rem', color: 'var(--text-muted)' }}>ID</th>
                    <th style={{ padding: '0.65rem 0.5rem', color: 'var(--text-muted)' }}>Scenario</th>
                    <th style={{ padding: '0.65rem 0.5rem', color: 'var(--text-muted)' }}>Expected Result</th>
                    <th style={{ padding: '0.65rem 0.5rem', color: 'var(--text-muted)' }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCases.map((tc) => (
                    <tr key={tc.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: '700', color: 'var(--accent-teal)', whiteSpace: 'nowrap' }}>{tc.id}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-primary)' }}>{tc.scenario}</td>
                      <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-secondary)' }}>{tc.expected}</td>
                      <td style={{ padding: '0.75rem 0.5rem' }}><span className="pill">{tc.type}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'postman' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
              A simulated API testing demo — request construction, response validation, status-code checks, and assertion logic. Endpoints and tokens are placeholders, not production credentials.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontWeight: '700', color: 'var(--accent-teal)', fontSize: '0.9rem' }}>SELECT DEMO ENDPOINT:</span>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>REQUEST</h4>
                <pre style={{ background: '#090d16', color: '#cbd5e1', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.06)' }}>
{`${selectedApi.method} ${selectedApi.url}

Headers:
${JSON.stringify(selectedApi.headers, null, 2)}

Body:
${JSON.stringify(selectedApi.reqBody, null, 2)}`}
                </pre>
                <button className="btn btn-primary" onClick={handleExecuteApi} disabled={apiExecuting} style={{ marginTop: '1rem' }}>
                  {apiExecuting ? 'Sending…' : 'Send Demo Request'}
                </button>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>RESPONSE</h4>
                {apiResult ? (
                  <pre style={{ background: '#090d16', color: '#10b981', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.06)' }}>
{`HTTP ${selectedApi.resStatus} ${selectedApi.resStatusText} (${selectedApi.resTimeMs}ms)

${JSON.stringify(apiResult, null, 2)}`}
                  </pre>
                ) : (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Click Send Demo Request to see a simulated response and assertion notes.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bug-simulator' && (
          <div className="glass-card card-padded reveal-up" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <form onSubmit={handleSimulateBugTriage} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Title</label>
                <input
                  value={bugForm.title}
                  onChange={(e) => setBugForm({ ...bugForm, title: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                />
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Module</label>
                <input
                  value={bugForm.module}
                  onChange={(e) => setBugForm({ ...bugForm, module: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                />
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Severity</label>
                <input
                  value={bugForm.severity}
                  onChange={(e) => setBugForm({ ...bugForm, severity: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                />
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Steps to Reproduce</label>
                <textarea
                  value={bugForm.steps}
                  onChange={(e) => setBugForm({ ...bugForm, steps: e.target.value })}
                  rows={5}
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Log Bug & Trigger Triage
                </button>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem' }}>Triage Lifecycle</h4>
                {bugLifecycle ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {bugLifecycle.logs.map((log, i) => (
                      <p key={i} style={{ fontSize: '0.85rem', color: log.includes('Re-test') ? '#10b981' : 'var(--text-secondary)', margin: 0 }}>
                        {log}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
                    Fill out the defect form and click Log Bug to watch a sample triage progression.
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
