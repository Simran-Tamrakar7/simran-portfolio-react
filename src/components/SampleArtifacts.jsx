import React, { useState } from 'react';
import { sampleArtifacts } from '../data/portfolioData';

export default function SampleArtifacts({ onShowToast }) {
  const [activeTab, setActiveTab] = useState(sampleArtifacts[0].id);

  const currentArtifact = sampleArtifacts.find(a => a.id === activeTab) || sampleArtifacts[0];

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(currentArtifact.snippet);
    if (onShowToast) {
      onShowToast(`Copied ${currentArtifact.title} sample to clipboard!`);
    }
  };

  return (
    <section id="artifacts" className="section-padding bg-secondary-dark relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-purple mb-3">Live Work Artifacts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Sample Deliverables & Documentation
          </h2>
          <p className="text-secondary text-base">
            Explore sanitized real-world artifacts showing how I document requirements, log defects in ClickUp, and write Postman API test assertions.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sampleArtifacts.map(artifact => (
            <button
              key={artifact.id}
              onClick={() => setActiveTab(artifact.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${
                activeTab === artifact.id
                  ? 'bg-gradient-teal text-white shadow-glow-teal'
                  : 'bg-card border border-subtle text-secondary hover:border-teal'
              }`}
            >
              <span>{artifact.icon}</span>
              <span>{artifact.title}</span>
            </button>
          ))}
        </div>

        {/* Code / Artifact Viewer Card */}
        <div className="glass-card rounded-2xl border border-subtle p-6 overflow-hidden relative">
          <div className="flex flex-wrap justify-between items-center pb-4 border-b border-subtle mb-4 gap-3">
            <div>
              <span className="badge badge-teal mb-1">{currentArtifact.badge}</span>
              <h3 className="text-lg font-bold text-primary">{currentArtifact.subtitle}</h3>
            </div>
            <button
              onClick={handleCopySnippet}
              className="btn btn-secondary text-xs flex items-center gap-1.5"
            >
              📋 Copy Sample Code
            </button>
          </div>

          {/* Snippet Viewer Box */}
          <div className="bg-primary-dark rounded-xl p-5 border border-subtle overflow-x-auto font-mono text-xs text-teal-light leading-relaxed">
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {currentArtifact.snippet}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
