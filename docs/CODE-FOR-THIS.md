# CODE-FOR-THIS — Portfolio content map

Where profile copy lives so updates stay one-place:

| Content | Source |
| --- | --- |
| Name, title, hero roles, tagline, contact, stats, about | `src/data/portfolioData.js` → `personalInfo` |
| Four pillars (QA / BA / UI-UX / AI) | `fourPillars` |
| Experience | `experiences` |
| Featured apps tested | `projectsData` |
| Skills matrix | `skillCategories`, `coreValues`, `softSkills` |
| Impact + QA gates | `impactMetrics`, `qaGovernanceGates` |
| Education / activities / languages | `educationList`, `extraActivities`, `languagesList` |
| Specializations cards | `certificationsList` |
| Markdown CV mirror | `simran-tamrakar-cv.md` |
| Downloadable PDF | `public/SimranTamrakar.pdf` |

UI sections consume the data modules above; avoid hardcoding career copy in components.
