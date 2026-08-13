import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const targets = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-scale, .reveal-left, .reveal-right, .stagger-card, .timeline-item, .skills-card, .project-card, .cert-card, .pillar-card, .impact-card'
      );
      targets.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-observe if DOM changes dynamically
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
