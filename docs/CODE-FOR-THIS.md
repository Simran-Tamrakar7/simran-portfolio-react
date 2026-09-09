# CODE-FOR-THIS — Portfolio content map

CV is the source of truth. Portfolio positioning is **QA Engineer** (not BA / UI-UX / AI headline).

| Content | Source |
| --- | --- |
| Name, title, hero, tagline, contact, stats, about | `src/data/portfolioData.js` → `personalInfo` |
| Four QA pillars | `fourPillars` (manual, API, defects, release) |
| Experience | `experiences` (Associate QA Engineer / QA Engineer Intern) |
| Featured apps tested | `projectsData` |
| Skills matrix | `skillCategories` (no ISO/CAPA/Kaizen/htop/Trello/Chrome DevTools) |
| Impact + QA gates | `impactMetrics`, `qaGovernanceGates` |
| Education / activities / languages | `educationList`, `extraActivities`, `languagesList` |
| Specializations cards | `certificationsList` |
| Markdown CV mirror | `simran-tamrakar-cv.md` |
| Downloadable PDF | `public/SimranTamrakar.pdf` |

UI sections consume the data modules above; avoid hardcoding career copy in components.
