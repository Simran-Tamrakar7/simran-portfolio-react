export const personalInfo = {
  name: "Simran Tamrakar",
  title: "QA Engineer",
  heroRoles: ["QA Engineer"],
  tagline: "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management. Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM, ERP, sales, and banking applications.",
  email: "simrantamrakar77@gmail.com",
  phone: "+9779843707272",
  phoneDisplay: "+977 9843707272",
  github: "https://github.com/Simran-Tamrakar7",
  linkedin: "https://www.linkedin.com/in/simran-tamrakar-1aa84b349/",
  portfolio: "https://simran-tamrakar-portfolio.vercel.app/",
  portfolioAbout: "https://simran-tamrakar-portfolio.vercel.app/#about",
  domain: "simrantamrakar.com.np",
  githubRepos: {
    react: "https://github.com/Simran-Tamrakar7/simran-portfolio-react",
    classic: "https://github.com/Simran-Tamrakar7/simran-portfolio"
  },
  status: "Available for QA Engineer Roles",
  aboutHeading: "Primary Focus: Software Quality Assurance",
  aboutLead: "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management.",
  professionalSummary: "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management. Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM, ERP, sales, and banking applications.",
  aboutParagraphs: [
    "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management.",
    "Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM, ERP, sales, and banking applications.",
    "At Infocom Solutions, I design and execute test cases, track defects with developers through resolution, and support release validation across HRM, ERP, sales, and banking applications."
  ],
  aboutHighlights: [
    {
      title: "Manual & Functional Testing",
      desc: "Functional, regression, integration, UI, and UAT testing across web and mobile applications."
    },
    {
      title: "API Testing",
      desc: "Postman-based API verification for endpoint contracts, payloads, and status codes."
    },
    {
      title: "Defect Management",
      desc: "Documenting and tracking defects with clear reproduction steps through resolution and verification."
    },
    {
      title: "Release Validation",
      desc: "Test planning, requirement analysis, and release validation so features meet business and quality standards."
    }
  ],
  aboutFacts: [
    { label: "Based in", value: "Kathmandu, Nepal" },
    { label: "Currently", value: "Infocom Solutions [ISPL]" },
    { label: "Studied at", value: "Deerwalk Institute of Technology, Tribhuvan University" },
    { label: "Focus", value: "QA Engineer · Manual · API · Mobile" }
  ],
  productStrategy: {
    discovery: "Requirement Analysis",
    design: "Test Case Design",
    quality: "Manual & API Testing",
    acceleration: "Release Validation"
  },
  lifecycleChips: [
    "01 Manual Testing",
    "02 API Testing",
    "03 Regression & UAT",
    "04 Defect Management"
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
    title: "Manual & Functional Testing",
    description: "Core QA execution across web and mobile applications.",
    badge: "Core Focus",
    highlight: true,
    list: [
      "Functional, regression, smoke, sanity & UAT testing",
      "UI testing and cross-browser / cross-device checks",
      "Boundary value analysis & edge-case design",
      "Black box and exploratory testing"
    ]
  },
  {
    id: "api",
    number: "02",
    iconBg: "bg-blue",
    title: "API Testing",
    description: "Contract and payload verification with Postman.",
    badge: "Core Focus",
    highlight: true,
    list: [
      "Postman API testing",
      "Status code and payload checks",
      "Integration testing support",
      "Release validation for API-backed features"
    ]
  },
  {
    id: "defects",
    number: "03",
    iconBg: "bg-purple",
    title: "Defect Management",
    description: "Clear bug reports from discovery through verification.",
    badge: "Core Focus",
    list: [
      "Defect tracking in ClickUp, Asana & Jira",
      "Reproducible steps, screenshots & logs",
      "Collaboration with developers through resolution",
      "Regression verification after fixes"
    ]
  },
  {
    id: "release",
    number: "04",
    iconBg: "bg-amber",
    title: "Test Planning & Release Validation",
    description: "Aligning test coverage with requirements and release gates.",
    badge: "Core Focus",
    list: [
      "Test plan and test case design",
      "Requirement analysis for testable acceptance",
      "Agile/Scrum sprint collaboration",
      "Smoke, sanity & UAT sign-off support"
    ]
  }
];

export const experiences = [
  {
    id: 1,
    role: "Associate QA Engineer",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "August 2025 – Present",
    current: true,
    bullets: [
      "Designed and executed functional, regression, integration, and API test cases to ensure product quality and reliability.",
      "Identified, documented, and tracked defects using bug-tracking tools, collaborating with developers through resolution and verification.",
      "Participated in test planning, requirement analysis, and release validation to ensure features met business and quality standards."
    ],
    tags: ["Quality Assurance", "Manual Testing", "API Testing", "Regression", "Defect Tracking"]
  },
  {
    id: 2,
    role: "QA Engineer Intern",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "March 2025 – August 2025",
    current: false,
    bullets: [
      "Executed functional, regression, and UI testing to identify and document software defects.",
      "Created and maintained test cases based on functional requirements and user stories.",
      "Collaborated with developers to reproduce bugs, verify fixes, and improve overall product quality."
    ],
    tags: ["Functional Testing", "UI Testing", "Bug Reporting", "Test Cases"]
  }
];

export const projectsData = [
  {
    id: "bizlevate",
    title: "Bizlevate & Bizlevate v2",
    categoryKey: "hrm",
    categoryBadge: "HRM",
    summary: "HRM system covering Employee Management, Attendance, Leave, Payroll, Onboarding/Offboarding, and Appraisal.",
    keyContributions: [
      "End-to-end QA across core HRM modules",
      "Workflow & regression coverage for Bizlevate and v2",
      "Client coordination across the testing lifecycle"
    ],
    tags: ["HRM", "Regression", "Workflow QA"],
    role: "QA Engineer",
    modules: ["Employee Management", "Attendance", "Leave", "Payroll", "Onboarding / Offboarding", "Appraisal"],
    detailedContributions: [
      "Led QA across Bizlevate HRMS modules and v2 comparisons.",
      "Covered attendance, leave, payroll, onboarding/offboarding, and appraisal workflows."
    ],
    techStack: ["Manual QA", "Postman", "ClickUp", "Jira"]
  },
  {
    id: "primesales",
    title: "PrimeSales 360",
    categoryKey: "sales mobile",
    categoryBadge: "Field Sales",
    summary: "Field sales app for Sales Executives/Officers (SESO).",
    keyContributions: ["Shop/route and order flow QA", "Floor stock validation", "Live services testing"],
    tags: ["Mobile", "Sales", "SESO"],
    role: "QA Engineer",
    modules: ["Shop / route management", "Order flow", "Floor stock", "Live services"],
    detailedContributions: ["Tested field sales flows for SESO roles across shop, route, order, and stock paths."],
    techStack: ["Manual QA", "Mobile Testing", "ClickUp"]
  },
  {
    id: "salesmania",
    title: "Salesmania",
    categoryKey: "sales",
    categoryBadge: "Approvals",
    summary: "Supervisor approval app for ASM/DCM roles.",
    keyContributions: ["Expense and travel approval QA", "ASM/DCM role validation", "Field-level defect discovery"],
    tags: ["Approvals", "Sales", "Defects"],
    role: "QA Engineer",
    modules: ["Expense workflows", "Travel workflows", "Supervisor approval chains"],
    detailedContributions: ["Tested supervisor approval workflows for ASM/DCM roles."],
    techStack: ["Manual QA", "UI Testing", "Jira"]
  },
  {
    id: "trems",
    title: "TREMS",
    categoryKey: "banking",
    categoryBadge: "Banking / Finance",
    summary: "Banking/financial dashboard application.",
    keyContributions: ["Dashboard QA", "Financial UI validation"],
    tags: ["Banking", "Dashboard"],
    role: "QA Engineer",
    modules: ["Financial dashboard views", "Reporting surfaces"],
    detailedContributions: ["Performed QA on banking/financial dashboard application flows."],
    techStack: ["Manual QA", "ClickUp"]
  },
  {
    id: "cqnoval",
    title: "CQNoval",
    categoryKey: "erp mobile",
    categoryBadge: "ERP",
    summary: "Mobile/web ERP application for finance, HR, procurement, and inventory.",
    keyContributions: ["Finance / HR / procurement / inventory QA", "Mobile and web coverage"],
    tags: ["ERP", "Mobile", "Finance"],
    role: "QA Engineer",
    modules: ["Finance", "HR", "Procurement", "Inventory"],
    detailedContributions: ["Tested CQNoval ERP flows across finance, HR, procurement, and inventory on mobile and web."],
    techStack: ["Manual QA", "Mobile Testing"]
  },
  {
    id: "espot",
    title: "ESpOT",
    categoryKey: "mobile",
    categoryBadge: "Mobile / Web",
    summary: "Mobile/web application covered in QA testing engagements.",
    keyContributions: ["Mobile/web functional QA"],
    tags: ["Mobile", "Web"],
    role: "QA Engineer",
    modules: ["Mobile app flows", "Web flows"],
    detailedContributions: ["Executed QA on ESpOT mobile and web application flows."],
    techStack: ["Manual QA", "Mobile Testing"]
  },
  {
    id: "ryze",
    title: "Ryze",
    categoryKey: "ecommerce",
    categoryBadge: "E-commerce",
    summary: "E-commerce website for Ryze monitors — product catalog and reseller network (ryzebiz.com).",
    keyContributions: ["Product catalog QA", "Reseller network flow checks"],
    tags: ["E-commerce", "Web"],
    role: "QA Engineer",
    link: "https://ryzebiz.com",
    modules: ["Product catalog", "Reseller network", "Storefront"],
    detailedContributions: ["Tested e-commerce flows for Ryze monitors including catalog and reseller network."],
    techStack: ["Manual QA", "Web Testing"]
  }
];

export const skillCategories = [
  {
    title: "Testing Methodologies & QA Types",
    highlight: true,
    skills: [
      "Manual Web & Mobile Testing",
      "Functional & System Testing",
      "Regression & Smoke Testing",
      "Sanity & Integration Testing",
      "UAT",
      "Black Box & Exploratory Testing",
      "Boundary Value Analysis",
      "Cross-Browser/Cross-Platform Testing",
      "Postman API Testing",
      "Basic Performance Testing (JMeter)"
    ]
  },
  {
    title: "Defect Management & QA Tools",
    highlight: true,
    skills: [
      "ClickUp",
      "Asana",
      "Jira",
      "Postman",
      "Git/GitHub/GitLab",
      "Cypress (E2E — Beginner)",
      "Playwright (E2E — Beginner)",
      "JMeter",
      "Basic SQL",
      "Android Studio & ADB"
    ]
  },
  {
    title: "Domain Knowledge",
    highlight: true,
    skills: [
      "HRMS",
      "ERP",
      "Sales & Distribution Systems",
      "Banking/FinTech Dashboards"
    ]
  },
  {
    title: "Foundations",
    skills: [
      "Python (Intermediate)",
      "HTML5/CSS3",
      "JavaScript",
      "Basic SQL"
    ]
  }
];

export const coreValues = [
  {
    title: "Quality Focus",
    desc: "Comprehensive testing, boundary analysis, zero-defect releases."
  },
  {
    title: "Continuous Growth",
    desc: "Learning automation tools (Cypress, Playwright) and strengthening API testing workflows."
  },
  {
    title: "Team Collaboration",
    desc: "Cross-functional work with developers, PMs, and stakeholders in Agile/Scrum."
  },
  {
    title: "Proven Results",
    desc: "Consistent on-time delivery with zero P0 defect leaks."
  }
];

export const softSkills = [
  { name: "Quick Learner" },
  { name: "Team Player" },
  { name: "Problem Solving" },
  { name: "Clear Communication" },
  { name: "Adaptability" },
  { name: "Entrepreneurial Mindset" }
];

export const educationList = [
  {
    year: "2020 – 2025",
    degree: "B.Sc. Computer Science & Information Technology",
    school: "Deerwalk Institute of Technology, Tribhuvan University",
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
    degree: "SEE / Schooling",
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
    desc: "Conducted computer literacy and foundational IT sessions."
  },
  {
    badge: "Event Logistics",
    role: "Volunteer",
    org: "DWIT Job Fair",
    date: "March 2023 & March 2024",
    desc: "Company onboarding, student registration, event operations."
  },
  {
    badge: "Leadership",
    role: "President",
    org: "DWIT Social Service Club",
    date: "July 2022 – July 2023",
    desc: "Led community initiatives, blood donation drives, educational outreach."
  }
];

export const languagesList = [
  { name: "English", level: "Professional Working Proficiency", fillPercentage: "90%" },
  { name: "Nepali", level: "Native / Bilingual", fillPercentage: "100%" },
  { name: "Hindi", level: "Professional Working Proficiency", fillPercentage: "85%" }
];

export const certificationsList = [
  {
    id: "qa-competency",
    title: "Software Quality Assurance & API Testing",
    issuer: "Primary Specialization",
    year: "Active Practice",
    badge: "Primary Specialization",
    skills: ["Manual Testing", "Postman API Testing", "ClickUp/Asana/Jira", "UAT Sign-off"],
    description: "Test plan creation, bug triage workflows, Postman API contract verification, UAT execution across HRMS & TADA."
  },
  {
    id: "csit-degree",
    title: "B.Sc. Computer Science & Information Technology",
    issuer: "Deerwalk Institute of Technology, Tribhuvan University",
    year: "2020 – 2025",
    badge: "Academic Degree",
    skills: ["Software Engineering", "QA Fundamentals", "Database Systems", "API Architecture"],
    description: "Undergraduate degree in computer science and information technology."
  }
];

export const impactMetrics = [
  { value: "Zero P0", label: "Critical Bugs Leaked", detail: "No critical defects leaked to production across HRMS & TADA releases, backed by boundary value analysis, sanity testing, and UAT sign-off gates." },
  { value: "100+", label: "Test Cases / Module", detail: "Test cases designed per module sprint, covering positive/negative scenarios, multi-tier approval workflows, and edge cases ahead of developer handoff." },
  { value: "30%", label: "Faster Defect Resolution", detail: "Driven by reproducible bug reports (steps, logs, screenshots) and clear collaboration with developers." },
  { value: "100%", label: "API Endpoint QA", detail: "Status codes, response times, schema validation, and financial payload checks for TADA & Payroll." }
];

export const qaGovernanceGates = [
  { title: "Requirement QA", desc: "SRS ambiguity review & boundary condition mapping" },
  { title: "Test Suite Design", desc: "Positive & negative scenario coverage" },
  { title: "API QA", desc: "Endpoint payload, status code & auth verification (Postman)" },
  { title: "Defect Triage", desc: "ClickUp logs with steps, screenshots & logs" },
  { title: "Release Signoff", desc: "Smoke, sanity & UAT signoff before release" }
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
    quote: "Working with Simran is a breeze for developers. Her bug reports are always 100% reproducible, complete with step-by-step notes, screenshots, and exact API contract payload mismatches. It saves us hours of triage.",
    author: "Lead Full-Stack Developer",
    org: "Enterprise Software Division",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    tag: "Defect Management & API Verification"
  },
  {
    id: 3,
    quote: "Simran helps translate ambiguous requirements into clear, testable acceptance criteria and keeps release validation focused on business and quality standards.",
    author: "Agile Scrum Master",
    org: "ERP & TADA Platforms",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    tag: "Requirement Analysis & Release Validation"
  }
];

