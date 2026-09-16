# CODE-FOR-THIS — Portfolio content map

**Live URL only:** https://simran-tamrakar-portfolio.vercel.app/

| Content | Source |
| --- | --- |
| Profile / CV copy | `src/data/portfolioData.js` |
| What I Bring | `fourPillars` |
| QA Scope & Approach | `impactMetrics`, `qaGovernanceGates`, `qaThinking` |
| Case studies | `qaCaseStudies` |
| Playground (cases / API demo / triage) | `sampleTestCases`, `postmanEndpoints` |
| Skills (site) | `skillCategories`, `testingTechniques` |
| Skills (CV view / PDF) | `cvSkillCategories` — keep View CV & `generate_cv_pdf.py` in sync |
| Currently Building | `currentlyBuilding` |
| GitHub automation repos | `githubProjects` |
| About photo gallery | `src/data/profilePhotos.js` + `public/images/profile/` |
| Markdown CV | `simran-tamrakar-cv.md` |
| Downloadable PDF | `public/SimranTamrakar.pdf` — official uploaded CV (do not stub-regenerate) |
| View CV | `ResumeModal.jsx` mirrors official CV data (`cvProfessionalSummary`, `cvEducationList`, `cvExtraActivities`, `cvSkillCategories`) |
| Layout tokens / 4-col grids | `src/index.css` |
| Icons | `src/components/icons.jsx` |

Contact links on site: phone, email, GitHub, LinkedIn only (no secondary portfolio/repo URLs).

**Positioning:** Hero = Software Quality Assurance Engineer; employment title = QA Associate; B.Sc. dates = 2020–2024; gallery = 1–2 professional photos.
