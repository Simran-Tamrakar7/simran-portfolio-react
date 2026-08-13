export const personalInfo = {
  name: "Simran Tamrakar",
  title: "QA Associate & Quality Assurance Specialist (HRMS, ERP & API Testing)",
  tagline: "Driving end-to-end software quality assurance, manual test execution, and Postman API verification — leveraging complementary skills in requirement analysis and AI tools.",
  email: "simrantamrakar77@gmail.com",
  github: "https://github.com/Simran-Tamrakar7",
  linkedin: "https://www.linkedin.com/in/simran-tamrakar-1aa84b349/",
  status: "Available for QA Associate & Quality Assurance Roles",
  aboutHeading: "Primary Focus: End-to-End Software Quality Assurance",
  aboutParagraphs: [
    "Quality Assurance is my primary specialty. I specialize in end-to-end software quality assurance — authoring structured test plans, executing manual, regression, and API test suites, and managing the complete defect lifecycle across web, mobile, and API systems.",
    "To maximize my effectiveness as a QA Specialist, I leverage complementary cross-disciplinary skills: analyzing software requirements (BA support), evaluating UI/UX usability, and utilizing AI prompts to generate comprehensive edge-case scenarios.",
    "Currently at Bizlevate and Infocom Solutions, I own quality assurance for enterprise applications including the flagship Bizlevate HRMS (Attendance, Leave, Payroll, Onboarding, Offboarding, Appraisal) and the TADA Travel & Expense Management Platform. I collaborate closely with developers to uncover edge cases early, validate API contracts in Postman, and ensure zero P0 critical bugs reach production."
  ],
  stats: [
    { number: "100+", label: "Test Cases / Module Sprint" },
    { number: "Zero P0", label: "Critical Bugs Leaked to Prod" },
    { number: "100%", label: "End-to-End QA Ownership" }
  ]
};

export const fourPillars = [
  {
    id: "qa",
    number: "01",
    iconBg: "bg-teal",
    title: "Quality Assurance (QA) & Testing",
    description: "PRIMARY FOCUS: End-to-end quality ownership across web, mobile, and API layers to prevent defects before release.",
    badge: "Primary Core Focus",
    highlight: true,
    list: [
      "Functional, Regression, Smoke, Sanity & UAT Testing",
      "Postman API testing, status & payload contract checks",
      "Boundary Value Analysis & Edge-case test design",
      "Defect tracking & RCA lifecycle in ClickUp, Asana & Jira"
    ]
  },
  {
    id: "ba",
    number: "02",
    iconBg: "bg-blue",
    title: "Requirements & BA Support",
    description: "COMPLEMENTARY SKILL: Reviewing SRS requirements to eliminate ambiguity early and design testable specifications.",
    badge: "Complementary Skill",
    list: [
      "Software Requirement Specification (SRS) review & QA input",
      "Feature comparison matrices & business flow validation",
      "Process mapping, workflow diagrams & state transition testing",
      "Agile Scrum sprint alignment & cross-team collaboration"
    ]
  },
  {
    id: "design",
    number: "03",
    iconBg: "bg-purple",
    title: "UI/UX & Usability Testing",
    description: "COMPLEMENTARY SKILL: Evaluating interface designs for accessibility, responsiveness, and intuitive user workflows.",
    badge: "Complementary Skill",
    list: [
      "HR Admin Dashboards & User Management usability QA",
      "Cross-browser & cross-device responsive UI testing",
      "Figma mockup review & visual inconsistency detection",
      "Usability-focused heuristic evaluations"
    ]
  },
  {
    id: "ai",
    number: "04",
    iconBg: "bg-amber",
    title: "AI-Assisted QA Workflows",
    description: "COMPLEMENTARY SKILL: Accelerating test scenario generation and bug triage using GenAI prompt engineering.",
    badge: "Complementary Skill",
    list: [
      "Prompt engineering for automated test scenario generation",
      "AI-driven screenshot-to-bug step extraction",
      "Rapid prototype review via v0.dev & Bolt.new",
      "Accelerated test matrix creation with ChatGPT"
    ]
  }
];

export const experiences = [
  {
    id: 1,
    role: "QA Associate",
    company: "Infocom Solutions Pvt. Ltd. (Bizlevate & Enterprise Products)",
    period: "August 2025 – Present",
    current: true,
    bullets: [
      "Lead end-to-end software quality assurance and manual test execution for the flagship Bizlevate HRMS across 7 core modules: Attendance, Leave, Payroll, Employee Lifecycle, Onboarding, Offboarding, and Performance Appraisal.",
      "Own quality assurance delivery for enterprise software products spanning HRMS, ERP (SalesMania), and Travel & Expense Management (TADA).",
      "Perform rigorous API testing in Postman to validate endpoint contracts, response payloads, HTTP status codes, and database sync.",
      "Design, maintain, and execute comprehensive test plans, manual test cases, boundary edge-case scenarios, and regression test suites.",
      "Log, prioritize, and triage high-severity defects in ClickUp, Asana, and Jira, collaborating closely with developers during daily standups and sprint planning to maintain zero P0 critical bugs in production.",
      "Utilize GenAI prompt engineering to accelerate test case generation, edge-case discovery, and defect reproduction steps."
    ],
    tags: ["Quality Assurance", "Manual Testing", "API Testing (Postman)", "Bizlevate HRMS", "ClickUp / Jira / Asana", "Defect Triage", "Regression Suite"]
  },
  {
    id: 2,
    role: "QA Intern",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "March 2025 – August 2025",
    current: false,
    bullets: [
      "Gained rigorous hands-on experience in functional, UI, regression, and smoke testing across web and mobile platforms.",
      "Authored clear, reproducible bug reports with steps, screenshots, and browser network logs to streamline developer resolution.",
      "Executed test suites for key enterprise software platforms including Bizlevate HRMS, PrimeSales360, and SalesMania."
    ],
    tags: ["Functional Testing", "UI Testing", "Bug Reporting", "PrimeSales360", "SalesMania", "Cross-Browser Testing"]
  }
];

export const projectsData = [
  {
    id: "bizlevate",
    title: "Bizlevate HRMS",
    categoryKey: "hrms",
    categoryBadge: "Flagship Enterprise QA",
    summary: "Complete HRMS suite covering Attendance, Leave, Payroll, Employee Lifecycle, Claims, KYC, Dashboard, HR Administration, and Approval workflows.",
    keyContributions: [
      "End-to-End QA ownership across 7 core HRMS modules",
      "Authored 100+ manual & boundary test scenarios per sprint",
      "Postman API validation for leave & payroll calculations"
    ],
    tags: ["End-to-End QA", "API Testing", "Bug Tracking", "HRMS"],
    role: "QA Associate",
    modules: [
      "Attendance & Shift Management (Roster views, overtime rules, geo-fencing)",
      "Leave Management (Multi-tier approvals, policy calculations, leave balances)",
      "Payroll Processing (Tax computations, allowance breakdowns, automated payslips)",
      "Employee Lifecycle (Onboarding tasks, document KYC, Offboarding clearances)",
      "Performance Appraisal (Quarterly reviews, goal tracking, feedback cycles)",
      "HR Admin Dashboard (User tables, dynamic filtering, role-based access)"
    ],
    detailedContributions: [
      "Designed manual test suites covering 100+ edge cases across approval workflows and tax calculations.",
      "Executed Postman API testing to verify endpoint authorization and financial calculation responses.",
      "Logged and tracked defects in ClickUp and Asana, conducting daily re-tests and pre-release sign-offs.",
      "Reviewed SRS specifications to identify ambiguous requirements before code implementation."
    ],
    techStack: ["Postman", "ClickUp", "Asana", "Manual QA", "Chrome DevTools", "SQL", "GenAI Tools"]
  },
  {
    id: "primesales",
    title: "PrimeSales360 & TADA",
    categoryKey: "tada sales",
    categoryBadge: "ERP & Expense QA",
    summary: "Comprehensive sales automation and travel expense management system (TADA) featuring reimbursement rules, multi-tier approvals, and sales order processing.",
    keyContributions: [
      "End-to-end QA validation of TADA reimbursement formulas",
      "API payload & status code validation using Postman",
      "Regression testing of multi-level manager approvals"
    ],
    tags: ["TADA QA", "Expense Claims", "Postman API", "Defect Lifecycle"],
    role: "QA Associate",
    modules: [
      "TADA (Travel & Expense Management: Daily allowance, travel receipts, distance claims)",
      "Expense Claim Reimbursements & Multi-level Manager Approvals",
      "Sales Order Dashboard & Financial Reports",
      "Payroll & Compensation Synchronization"
    ],
    detailedContributions: [
      "Led end-to-end testing execution for TADA expense approval workflows.",
      "Validated complex financial formulas for daily allowance rates and distance reimbursements.",
      "Executed API integration testing using Postman to verify backend data payloads and response codes.",
      "Tracked and managed defects in ClickUp & Jira, ensuring zero critical bugs during client releases."
    ],
    techStack: ["Postman API", "ClickUp", "Jira", "Manual QA", "Chrome DevTools", "SQL"]
  },
  {
    id: "salesmania",
    title: "SalesMania",
    categoryKey: "sales",
    categoryBadge: "Distributor QA",
    summary: "Sales order processing, inventory stock movement, and distributor operations management software.",
    keyContributions: [
      "Inventory stock reduction & order pipeline QA",
      "Distributor portal access control & cross-browser QA",
      "Authored step-by-step reproducible defect logs"
    ],
    tags: ["Inventory QA", "Distributor Portal", "Mobile Testing", "Bug Reporting"],
    role: "QA Intern",
    modules: [
      "Inventory Stock Control & Movement Tracking",
      "Distributor Portal & Bulk Order Placement",
      "Product Catalogue & Pricing Tier Management",
      "Real-time Sales Analytics & Exportable Reports"
    ],
    detailedContributions: [
      "Performed functional, regression, and cross-browser testing across desktop and mobile browsers.",
      "Verified distributor access controls and inventory deduction logic upon order submission.",
      "Documented reproducible bug reports with step-by-step logs, reducing developer resolution time by 30%."
    ],
    techStack: ["Manual QA", "Mobile Testing", "ClickUp", "Asana", "Cross-Browser Testing"]
  },
  {
    id: "hrmcomparison",
    title: "HRM QA Test & Feature Matrix",
    categoryKey: "analysis hrms",
    categoryBadge: "QA Test Strategy",
    summary: "Comprehensive QA test strategy and feature comparison matrix evaluating workflow coverage and gap analysis across HRMS versions.",
    keyContributions: [
      "Formulated 20+ page QA matrix across Leave & Attendance",
      "Mapped boundary test cases for shift roster scheduling",
      "Identified risk areas and prioritized backlog testing"
    ],
    tags: ["QA Test Strategy", "Gap Analysis", "Feature Matrix", "Risk Assessment"],
    role: "QA Associate / BA",
    modules: [
      "Leave & Attendance Module Gap Analysis",
      "UI/UX Usability Pattern Benchmarking",
      "Role & Permissions Hierarchy Evaluation",
      "Data Export & Integration Capabilities"
    ],
    detailedContributions: [
      "Structured a 20+ page comparative matrix evaluating test coverage and user pain points.",
      "Highlighted crucial workflow gaps in roster scheduling and shift swapping.",
      "Presented strategic recommendations directly to engineering leads to prioritize test coverage."
    ],
    techStack: ["QA Matrix", "Requirement Analysis", "Workflow Flowcharts", "ClickUp"]
  }
];

export const skillCategories = [
  {
    icon: "🛡️",
    title: "Testing Methodologies & QA Types (Primary Core)",
    highlight: true,
    skills: [
      "Manual Web & Mobile Testing",
      "Functional & System Testing",
      "Regression & Smoke Testing",
      "Sanity & Integration Testing",
      "User Acceptance Testing (UAT)",
      "Black Box & Exploratory Testing",
      "Ad-hoc & Boundary Value Analysis",
      "Compatibility Testing (Cross-Browser / Cross-Platform)",
      "Postman API Testing",
      "UI/UX & Basic Performance Testing (JMeter)"
    ]
  },
  {
    icon: "🛠️",
    title: "Defect Management & QA Tools (Primary Tools)",
    highlight: true,
    skills: [
      "ClickUp",
      "Asana",
      "Jira",
      "Trello",
      "Postman API",
      "Chrome DevTools (Network & Recorder)",
      "Git / GitHub / GitLab",
      "Cypress (E2E Testing - Intermediate)",
      "Playwright (E2E Testing - Beginner)",
      "JMeter (Performance Testing)",
      "SQL / MySQL",
      "htop (Server Monitoring)"
    ]
  },
  {
    icon: "📊",
    title: "Requirements & BA Support (Complementary Skill)",
    skills: [
      "SRS Requirement Review",
      "Test Plan Creation",
      "Test Case Design & Matrix",
      "Bug Reporting & RCA (Root Cause Analysis)",
      "Process Mapping & Flowcharts",
      "Agile Project Management / Scrum",
      "Lean Processes & User Story Verification"
    ]
  },
  {
    icon: "🎨",
    title: "UI/UX & Usability Testing (Complementary Skill)",
    skills: [
      "Usability QA",
      "Cross-Browser Testing",
      "Mobile Device Testing",
      "Wireframing Review (Figma)",
      "Responsive UI Verification",
      "Heuristic Evaluations"
    ]
  },
  {
    icon: "⚡",
    title: "AI & Emerging Technologies (Complementary Skill)",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Test Scenario Generation",
      "ChatGPT for QA Scenarios & Edge Cases",
      "v0.dev Prototyping Audit",
      "AI Bug Step Extraction"
    ]
  },
  {
    icon: "📜",
    title: "Quality Standards & Technical Foundations",
    skills: [
      "ISO 9001 Quality Standards (Foundational)",
      "Internal Auditing Principles",
      "CAPA Development (Corrective/Preventive Action)",
      "Kaizen & Continuous Improvement (CI)",
      "Python (Intermediate)",
      "HTML5 / CSS3",
      "JavaScript"
    ]
  }
];

export const coreValues = [
  {
    icon: "🎯",
    title: "Quality Focus",
    desc: "Dedicated to ensuring software excellence through comprehensive testing methodologies, boundary analysis, and zero-defect production releases."
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    desc: "Always learning and adapting to new technologies, test automation tools (Cypress, Playwright), and AI-driven QA workflows."
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    desc: "Strong experience collaborating with cross-functional dev teams, product managers, and stakeholders in Agile Scrum environments."
  },
  {
    icon: "🚀",
    title: "Proven Results",
    desc: "Track record of delivering high-quality software products on time with zero P0 critical defect leaks to production."
  }
];

export const softSkills = [
  { icon: "🧠", name: "Quick Learner" },
  { icon: "🤝", name: "Team Player" },
  { icon: "🎯", name: "Problem Solving" },
  { icon: "💬", name: "Clear Communication" },
  { icon: "🔄", name: "Adaptability" },
  { icon: "🚀", name: "Entrepreneurial Mindset" }
];

export const educationList = [
  {
    year: "2020 – 2025",
    degree: "B.Sc. Computer Science and Information Technology (CSIT)",
    school: "Deerwalk Institute of Technology",
    location: "Kathmandu, Nepal"
  },
  {
    year: "2019 – 2020",
    degree: "+2 Science",
    school: "Kathmandu Secondary School",
    location: "Kathmandu, Nepal"
  },
  {
    year: "Until 2018",
    degree: "Secondary Education Examination (SEE / Schooling)",
    school: "KMC School (Kathmandu Model School)",
    location: "Kathmandu, Nepal"
  }
];

export const extraActivities = [
  {
    badge: "Mentorship",
    role: "Teaching Fellow",
    org: "Deerwalk Teaching Fellowship Program",
    date: "August 2024",
    desc: "Conducted computer literacy and foundational IT sessions for students, fostering technical awareness."
  },
  {
    badge: "Event Logistics",
    role: "Volunteer",
    org: "DWIT Job Fair",
    date: "March 2023 & March 2024",
    desc: "Facilitated company onboarding, student registration, and event operations for tech recruitment fairs."
  },
  {
    badge: "Leadership",
    role: "President",
    org: "DWIT Social Service Club",
    date: "July 2022 – July 2023",
    desc: "Led community initiatives, blood donation drives, educational outreach, and team coordination across student volunteers."
  }
];

export const languagesList = [
  { name: "English", level: "Professional Working Proficiency", fillPercentage: "90%" },
  { name: "Nepali", level: "Native / Bilingual Proficiency", fillPercentage: "100%" },
  { name: "Hindi", level: "Professional Working Proficiency", fillPercentage: "85%" }
];

export const certificationsList = [
  {
    id: "qa-competency",
    title: "Software Quality Assurance & API Testing",
    issuer: "Practical Hands-on Expertise (Bizlevate & Infocom)",
    year: "Active Practice",
    badge: "Primary QA Specialization",
    icon: "🛡️",
    skills: ["Manual Testing", "Postman API Testing", "ClickUp / Asana / Jira", "UAT Sign-off"],
    description: "Hands-on engineering expertise in test plan creation, bug triage workflows, Postman API contract verification, and UAT execution across HRMS & TADA platforms."
  },
  {
    id: "genai-competency",
    title: "AI-Assisted QA & Prompt Engineering",
    issuer: "Applied Practical Workflow",
    year: "Active Practice",
    badge: "Complementary Specialization",
    icon: "⚡",
    skills: ["Prompt Structuring", "ChatGPT for QA", "v0.dev Audit", "Edge-Case Generation"],
    description: "Practical proficiency in prompt design, rapid UI evaluation, AI-generated test scenarios, and leveraging LLMs to streamline defect reproduction steps."
  },
  {
    id: "csit-degree",
    title: "B.Sc. Computer Science & Information Technology",
    issuer: "Deerwalk Institute of Technology",
    year: "2020 – 2025",
    badge: "Academic Degree",
    icon: "🎓",
    skills: ["Software Engineering", "QA Fundamentals", "Database Systems", "API Architecture"],
    description: "4-year academic degree in computer science, software engineering, database design, testing fundamentals, and web technologies."
  }
];

export const impactMetrics = [
  { value: "100+", label: "Test Cases / Module", detail: "Designed per sprint for edge-case coverage and API contract checks" },
  { value: "Zero P0", label: "Critical Bugs Leaked", detail: "Maintained zero critical defect leaks into production releases" },
  { value: "30%", label: "Faster Defect Triage", detail: "Achieved via structured ClickUp / Asana bug reports & AI prompt templates" },
  { value: "100%", label: "API & Endpoint QA", detail: "Full Postman API payload, authorization & status code verification" }
];

export const postmanEndpoints = [
  {
    id: 'api-attendance',
    name: 'POST /api/v1/hrms/attendance/check-in',
    module: 'Bizlevate HRMS',
    method: 'POST',
    url: 'https://api.bizlevate.com/v1/attendance/check-in',
    headers: { 'Authorization': 'Bearer eyJhbGciOi...', 'Content-Type': 'application/json' },
    reqBody: {
      employee_id: "EMP-2025-089",
      shift_code: "NIGHT_SHIFT_A",
      timestamp: "2026-08-13T09:00:00Z",
      geo_location: { lat: 27.7172, lng: 85.3240 }
    },
    resStatus: 200,
    resStatusText: "OK",
    resTimeMs: 24,
    resBody: {
      status: "SUCCESS",
      code: 200,
      data: {
        attendance_id: "ATT-99214",
        check_in_status: "ON_TIME",
        shift_verified: true,
        geo_fencing_pass: true
      },
      qa_assertion: "✔ Status Code == 200 OK | ✔ Geo-Fence Coordinates in Allowed Radius"
    }
  },
  {
    id: 'api-tada',
    name: 'POST /api/v1/tada/expenses/reimburse',
    module: 'TADA Expense Management',
    method: 'POST',
    url: 'https://api.bizlevate.com/v1/tada/expenses/reimburse',
    headers: { 'Authorization': 'Bearer eyJhbGciOi...', 'Content-Type': 'application/json' },
    reqBody: {
      claim_id: "CLM-8812",
      amount_npr: 4500,
      category: "TRAVEL_MEALS",
      receipt_urls: ["https://cdn.tada.app/receipts/rec_8812.png"]
    },
    resStatus: 201,
    resStatusText: "CREATED",
    resTimeMs: 38,
    resBody: {
      status: "SUCCESS",
      code: 201,
      data: {
        claim_id: "CLM-8812",
        approval_tier: "LEVEL_2_MANAGER",
        tax_deduction: 0,
        net_payable: 4500
      },
      qa_assertion: "✔ Status Code == 201 Created | ✔ Manager Approval Chain Triggered"
    }
  },
  {
    id: 'api-payroll-boundary',
    name: 'PUT /api/v1/payroll/calculate-tax (Boundary Test)',
    module: 'Bizlevate Payroll',
    method: 'PUT',
    url: 'https://api.bizlevate.com/v1/payroll/calculate-tax',
    headers: { 'Authorization': 'Bearer eyJhbGciOi...', 'Content-Type': 'application/json' },
    reqBody: {
      employee_id: "EMP-2025-089",
      gross_annual_salary: 1200000,
      ssf_contribution: 132000,
      marital_status: "SINGLE"
    },
    resStatus: 200,
    resStatusText: "OK",
    resTimeMs: 19,
    resBody: {
      status: "SUCCESS",
      code: 200,
      data: {
        taxable_income: 1068000,
        slab_tax_1pc: 5000,
        slab_tax_10pc: 20000,
        total_monthly_tds: 14583.33
      },
      qa_assertion: "✔ Boundary Value Analysis: Income Slab Boundary Tax Formula Validated"
    }
  }
];

export const gherkinSpecs = [
  {
    id: 'spec-1',
    feature: 'Bizlevate HRMS — Shift Roster & Geo-Fenced Check-In',
    userStory: 'As an Employee, I want to record my attendance via geo-fencing so that my shift hours are logged accurately.',
    gherkin: `FEATURE: Attendance Geo-Fenced Validation

  SCENARIO: Employee checks in within office GPS coordinates
    GIVEN the employee is within 50 meters of Head Office (27.7172, 85.3240)
    AND the employee shift is active for "DAY_SHIFT_A"
    WHEN the employee clicks "Check In" on mobile app
    THEN the API should respond with HTTP 200 OK
    AND the attendance log should record "ON_TIME"
    AND a notification should trigger to the HR Roster Dashboard.

  SCENARIO: Employee checks in outside geo-fence (Boundary Edge Case)
    GIVEN the employee GPS distance is 150 meters (greater than 50m limit)
    WHEN the employee clicks "Check In"
    THEN the API should reject with HTTP 422 Unprocessable Entity
    AND the UI should display prompt: "Location out of office bounds. Request Remote Access."`
  },
  {
    id: 'spec-2',
    feature: 'TADA Travel & Expense — Multi-Tier Approval Chain',
    userStory: 'As a Team Lead, I want to review expense claims exceeding NPR 5,000 so that financial limits are enforced.',
    gherkin: `FEATURE: Expense Claim Multi-Tier Approval Threshold

  SCENARIO: Claim amount under NPR 5,000 (Single Approval)
    GIVEN an employee submits a travel claim of NPR 3,500
    WHEN the claim is submitted
    THEN it requires approval ONLY from Line Manager (Tier 1).

  SCENARIO: Claim amount equals or exceeds NPR 5,000 (Tier 2 Approval Escalation)
    GIVEN an employee submits a travel claim of NPR 12,000
    WHEN the claim is submitted
    THEN the status sets to "PENDING_TIER_2_FINANCE"
    AND Finance Admin receives an escalation email trigger.`
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Simran possesses an exceptional eye for detail and end-to-end quality ownership. Her Postman API testing and structured ClickUp bug reports helped our team catch edge cases early in Bizlevate HRMS, achieving zero P0 defect leaks to production.",
    author: "Senior QA Lead & Product Manager",
    org: "Infocom Solutions / Bizlevate HRMS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    tag: "Quality Assurance & Leadership"
  },
  {
    id: 2,
    quote: "Working with Simran is a breeze for developers. Her bug reports are always 100% reproducible, complete with step-by-step notes, Chrome DevTools network logs, and exact API contract payload mismatches. It saves us hours of triage.",
    author: "Lead Full-Stack Developer",
    org: "Enterprise Software Division",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    tag: "Defect Management & API Verification"
  },
  {
    id: 3,
    quote: "Simran bridges requirement gaps effortlessly. By combining her Business Analysis background with AI prompt engineering, she helps translate ambiguous client specifications into clear, testable acceptance criteria.",
    author: "Agile Scrum Master",
    org: "ERP & TADA Platforms",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    tag: "BA & Requirement Specifications"
  }
];

