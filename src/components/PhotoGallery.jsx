import React, { useState, useEffect, useRef } from 'react';
import { profilePhotos, secretProfilePhotos } from '../data/profilePhotos';

// Default interval set to 30 minutes
export function PhotoGallery({ photos = profilePhotos, interval = 30 * 60 * 1000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [flash, setFlash] = useState(false);
  const clickTimesRef = useRef([]);

  const album = unlocked ? [...photos, ...secretProfilePhotos] : photos;

  useEffect(() => {
    if (!album || album.length <= 1) return undefined;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % album.length);
    }, interval);
    return () => clearInterval(timer);
  }, [album.length, unlocked, interval]);

  if (!photos || photos.length === 0) return null;

  const pulse = () => {
    setFlash(true);
    window.setTimeout(() => setFlash(false), 280);
  };

  const handleSecretClick = () => {
    const now = Date.now();
    const recent = clickTimesRef.current.filter((t) => now - t < 600);
    recent.push(now);
    clickTimesRef.current = recent;

    // ponytail: secret = triple-click within 600ms — no UI affordance
    if (recent.length < 3) return;
    clickTimesRef.current = [];

    if (!unlocked) {
      setUnlocked(true);
      setCurrentIndex(photos.length); // jump to first secret photo
      pulse();
      return;
    }

    setCurrentIndex((prev) => (prev + 1) % album.length);
    pulse();
  };

  return (
    <div className="portrait-container">
      <div className="rhombus-glow-wrapper" aria-hidden="true">
        <div className="rhombus-glow rhombus-primary"></div>
        <div className="rhombus-glow rhombus-secondary"></div>
        <div className="glow-accent-dot"></div>
      </div>

      <div
        className={`portrait-card-frame${flash ? ' portrait-secret-flash' : ''}`}
        onClick={handleSecretClick}
        role="presentation"
        style={{ cursor: 'default', userSelect: 'none' }}
      >
        {album.map((photo, index) => (
          <img
            key={photo.id || index}
            src={photo.url}
            alt={photo.alt || photo.title}
            className={`portrait-auto-img ${index === currentIndex ? 'active' : ''}`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
