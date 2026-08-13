import React, { useState, useEffect } from 'react';
import { profilePhotos } from '../data/profilePhotos';

// Default interval set to 30 minutes (30 * 60 * 1000 ms = 1,800,000 ms)
export function PhotoGallery({ photos = profilePhotos, interval = 30 * 60 * 1000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!photos || photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [photos, interval]);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="portrait-container">
      {/* Glowing Rotated Rhombus Backdrop matching screenshot design */}
      <div className="rhombus-glow-wrapper" aria-hidden="true">
        <div className="rhombus-glow rhombus-primary"></div>
        <div className="rhombus-glow rhombus-secondary"></div>
        <div className="glow-accent-dot"></div>
      </div>

      {/* Main Portrait Card (Auto-fading after set time, no carousel buttons) */}
      <div className="portrait-card-frame">
        {photos.map((photo, index) => (
          <img
            key={photo.id || index}
            src={photo.url}
            alt={photo.alt || photo.title}
            className={`portrait-auto-img ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
