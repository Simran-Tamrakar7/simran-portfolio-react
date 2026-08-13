import React from 'react';

export function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="toast show" role="status" aria-live="polite">
      <span className="toast-icon">✓</span>
      <span id="toast-message">{message}</span>
    </div>
  );
}
