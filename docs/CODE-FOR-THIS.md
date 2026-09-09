# CODE-FOR-THIS — Portfolio content map

CV is the source of truth. Portfolio positioning is **QA Engineer**.

## Layout tokens
- Container: max-width `1200px`, side padding `--space-6` / `--space-4` mobile (`.container` / `.section-container`)
- Section vertical padding: `--space-12` / `--space-8` mobile
- 4-up grids: `.metric-grid`, `.capability-grid`, `.ethos-grid`, `.pillars-grid`, `.impact-grid` → 4 / 2 / 1 columns
- Metric color system: Option A — single teal accent (`.metric-card .value`)

## Icons
Lucide-style SVGs in `src/components/icons.jsx` (no emoji in Key Impact / Ethos / Specializations / LinkedIn CTA).

## CTAs
Primary: Contact Me, Download CV (`/SimranTamrakar.pdf`). Secondary text links: projects, View CV, Copy Email, LinkedIn.

| Content | Source |
| --- | --- |
| Profile copy | `src/data/portfolioData.js` |
| Markdown CV | `simran-tamrakar-cv.md` |
| Downloadable PDF | `public/SimranTamrakar.pdf` |
