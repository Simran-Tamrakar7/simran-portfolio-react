export const personalInfo = {
  name: "Simran Tamrakar",
  title: "QA Engineer",
  tagline: "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management across Agile/Scrum and enterprise HRM/ERP/sales applications.",
  email: "simrantamrakar77@gmail.com",
  phone: "+9779843707272",
  phoneDisplay: "+977 9843707272",
  github: "https://github.com/Simran-Tamrakar7",
  linkedin: "https://www.linkedin.com/in/simran-tamrakar-1aa84b349/",
  portfolio: "https://simral-tamrakar-portfolio.vercel.app/",
  portfolioAbout: "https://simral-tamrakar-portfolio.vercel.app/#about",
  domain: "simrantamrakar.com.np",
  githubRepos: {
    react: "https://github.com/Simran-Tamrakar7/simran-portfolio-react",
    classic: "https://github.com/Simran-Tamrakar7/simran-portfolio"
  },
  status: "Available for QA Engineer Roles",
  aboutHeading: "Quality as a craft, not a gate.",
  aboutLead: "I work at the seam between building and verifying — writing automation that catches real bugs, shipping small products, and documenting paths so others can learn faster than I did. This site merges my classic static portfolio with the React QA showcase.",
  professionalSummary: "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management. Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM/ERP/sales applications.",
  aboutParagraphs: [
    "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management. Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM/ERP/sales applications.",
    "Currently Associate QA Engineer at Infocom Solutions — designing and executing functional, regression, integration, and API tests across HRM, sales, and ERP apps, tracking defects in JIRA, and documenting workflow/approval logic for regression coverage."
  ],
  aboutFacts: [
    { label: "Based in", value: "Kathmandu, Nepal" },
    { label: "Currently", value: "Infocom Solutions [ISPL]" },
    { label: "Studied at", value: "Deerwalk Institute of Technology" },
    { label: "Focus", value: "QA · Automation · Web" }
  ],
  stats: [
    { number: "9+", label: "Applications Tested" },
    { number: "HRM / ERP / Sales", label: "Enterprise Domains" },
    { number: "Agile / Scrum", label: "Delivery Model" }
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
    role: "Associate QA Engineer",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "August 2025 – Present",
    current: true,
    bullets: [
      "Designed and executed functional, regression, integration, and API test cases across HRM, sales, and ERP applications to ensure product quality and reliability.",
      "Identified, documented, and tracked defects using JIRA, collaborating with developers through resolution and verification.",
      "Participated in test planning, requirement analysis, and release validation to ensure features met business and quality standards.",
      "Documented test workflows and approval logic across sales and travel/expense modules to support QA coverage and regression planning (e.g., distributor order approval hierarchy, TADA workflow stages)."
    ],
    tags: ["HRM", "Sales", "ERP", "API Testing", "JIRA", "Release Validation"]
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
    tags: ["Functional Testing", "UI Testing", "Test Cases", "Bug Verification"]
  }
];

export const projectsData = [
  {
    id: "bizlevate",
    title: "Bizlevate & Bizlevate v2",
    categoryKey: "hrm",
    categoryBadge: "HRM",
    summary: "HRM system covering Employee Management, Attendance, Leave, Payroll, Onboarding/Offboarding, and Appraisal. Tested workflows across modules; documented functional comparisons to support regression coverage.",
    keyContributions: [
      "Workflow testing across core HRM modules",
      "Functional comparison docs for Bizlevate vs v2",
      "Regression coverage support for HR workflows"
    ],
    tags: ["HRM", "Regression", "Workflow QA"],
    role: "Associate QA Engineer",
    modules: [
      "Employee Management",
      "Attendance",
      "Leave",
      "Payroll",
      "Onboarding / Offboarding",
      "Appraisal"
    ],
    detailedContributions: [
      "Tested workflows across HRM modules for Bizlevate and Bizlevate v2.",
      "Documented functional comparisons to support regression coverage."
    ],
    techStack: ["Manual QA", "JIRA", "Regression Testing"]
  },
  {
    id: "primesales",
    title: "PrimeSales 360",
    categoryKey: "sales mobile",
    categoryBadge: "Field Sales",
    summary: "Field sales app for Sales Executives/Officers (SESO). Tested shop/route management, order flow, floor stock, and live services.",
    keyContributions: [
      "Shop and route management QA",
      "Order flow and floor stock testing",
      "Live services validation"
    ],
    tags: ["Mobile", "Sales", "SESO"],
    role: "Associate QA Engineer",
    modules: [
      "Shop / route management",
      "Order flow",
      "Floor stock",
      "Live services"
    ],
    detailedContributions: [
      "Tested shop/route management, order flow, floor stock, and live services for SESO users."
    ],
    techStack: ["Manual QA", "Mobile Testing", "JIRA"]
  },
  {
    id: "salesmania",
    title: "Salesmania",
    categoryKey: "sales",
    categoryBadge: "Approvals",
    summary: "Supervisor approval app for ASM/DCM roles. Tested expense, travel, and approval workflows; identified validation and field-level defects.",
    keyContributions: [
      "Expense and travel approval workflow QA",
      "ASM/DCM role validation",
      "Field-level defect identification"
    ],
    tags: ["Approvals", "Sales", "Defects"],
    role: "Associate QA Engineer",
    modules: [
      "Expense workflows",
      "Travel workflows",
      "Supervisor approval chains"
    ],
    detailedContributions: [
      "Tested expense, travel, and approval workflows for ASM/DCM roles.",
      "Identified validation and field-level defects."
    ],
    techStack: ["Manual QA", "JIRA", "UI Testing"]
  },
  {
    id: "tada",
    title: "TADA",
    categoryKey: "tada sales",
    categoryBadge: "Travel & Expense",
    summary: "Travel and expense management system. Tested and mapped 8-stage workflow logic to support edge-case coverage.",
    keyContributions: [
      "Mapped 8-stage TADA workflow logic",
      "Edge-case coverage for approvals",
      "Regression planning support"
    ],
    tags: ["TADA", "Workflow", "Expense"],
    role: "Associate QA Engineer",
    modules: [
      "8-stage travel/expense workflow",
      "Approval stages",
      "Edge-case scenarios"
    ],
    detailedContributions: [
      "Tested and mapped 8-stage workflow logic to support edge-case coverage."
    ],
    techStack: ["Manual QA", "Workflow Mapping", "JIRA"]
  },
  {
    id: "trems",
    title: "TREMS",
    categoryKey: "banking",
    categoryBadge: "Banking / Finance",
    summary: "Banking/financial dashboard application included in QA testing coverage.",
    keyContributions: [
      "Dashboard QA coverage",
      "Banking/financial UI validation"
    ],
    tags: ["Banking", "Dashboard"],
    role: "Associate QA Engineer",
    modules: ["Financial dashboard views", "Reporting surfaces"],
    detailedContributions: [
      "Performed QA on banking/financial dashboard application flows."
    ],
    techStack: ["Manual QA", "JIRA"]
  },
  {
    id: "cqnoval",
    title: "CQNoval",
    categoryKey: "erp",
    categoryBadge: "ERP",
    summary: "Integrated ERP solution (Flutter-based) for finance, HR, procurement, and inventory management, with dashboards and reporting.",
    keyContributions: [
      "Finance / HR / procurement / inventory QA",
      "Dashboard and reporting checks",
      "Flutter mobile/web coverage"
    ],
    tags: ["ERP", "Flutter", "Finance"],
    role: "Associate QA Engineer",
    modules: [
      "Finance",
      "HR",
      "Procurement",
      "Inventory",
      "Dashboards & reporting"
    ],
    detailedContributions: [
      "Tested integrated ERP flows across finance, HR, procurement, and inventory, including dashboards and reporting."
    ],
    techStack: ["Manual QA", "Flutter App Testing", "JIRA"]
  },
  {
    id: "espot",
    title: "ESpOT (Espot Club)",
    categoryKey: "mobile",
    categoryBadge: "Social / Mobile",
    summary: "Social/networking mobile app tested as part of QA engagements.",
    keyContributions: [
      "Mobile functional QA",
      "Social/networking flow checks"
    ],
    tags: ["Mobile", "Social"],
    role: "QA Engineer",
    modules: ["Mobile app flows", "Networking features"],
    detailedContributions: [
      "Executed QA on social/networking mobile app flows."
    ],
    techStack: ["Manual QA", "Mobile Testing"]
  },
  {
    id: "telescope",
    title: "Telescope",
    categoryKey: "other",
    categoryBadge: "Application QA",
    // ponytail: CV left Telescope description blank — keep honest stub until you fill product/testing detail.
    summary: "Application included in QA portfolio — product scope and test focus to be detailed.",
    keyContributions: [
      "Included in applications-tested list"
    ],
    tags: ["QA"],
    role: "QA Engineer",
    modules: ["Scope TBD"],
    detailedContributions: [
      "Placeholder pending product/testing description."
    ],
    techStack: ["Manual QA"]
  },
  {
    id: "ryze",
    title: "Ryze",
    categoryKey: "ecommerce",
    categoryBadge: "E-commerce",
    summary: "E-commerce website for Ryze monitors (ryzebiz.com).",
    keyContributions: [
      "E-commerce site QA",
      "Product/storefront validation"
    ],
    tags: ["E-commerce", "Web"],
    role: "QA Engineer",
    link: "https://ryzebiz.com",
    modules: ["Storefront", "Product pages"],
    detailedContributions: [
      "Tested e-commerce website flows for Ryze monitors."
    ],
    techStack: ["Manual QA", "Web Testing"]
  },
  {
    id: "pathwise",
    title: "Pathwise",
    categoryKey: "build live",
    categoryBadge: "Flagship · Live",
    summary: "A learning OS for craft skills — manuals, chaptered paths, and a Today hub. Built with Next.js and Tailwind; strong focus on Playwright, Cypress, API testing, and career-ready tracks.",
    keyContributions: [
      "Live learning product on Vercel",
      "Playwright / Cypress / API testing focus",
      "Chaptered learning paths"
    ],
    tags: ["Next.js", "Tailwind", "Learning"],
    role: "Builder",
    link: "https://pathwise-learn.vercel.app",
    github: "https://github.com/Simran-Tamrakar7/Pathwise",
    modules: ["Today hub", "Chaptered paths", "Craft manuals"],
    detailedContributions: [
      "Built and shipped Pathwise as a learning OS with strong QA/automation focus."
    ],
    techStack: ["Next.js", "Tailwind", "Playwright", "Cypress"]
  },
  {
    id: "lifeos",
    title: "LifeOS",
    categoryKey: "build",
    categoryBadge: "Build",
    summary: "Premium personal productivity operating system in TypeScript.",
    keyContributions: ["TypeScript productivity OS"],
    tags: ["TypeScript"],
    role: "Builder",
    github: "https://github.com/Simran-Tamrakar7/lifeos",
    modules: ["Productivity workflows"],
    detailedContributions: ["Built a personal productivity operating system in TypeScript."],
    techStack: ["TypeScript"]
  },
  {
    id: "kasthakarobar",
    title: "Kasthakarobar",
    categoryKey: "build ecommerce",
    categoryBadge: "Ecommerce",
    summary: "Ecommerce storefront work — product flows, UI, and checkout shape.",
    keyContributions: ["Storefront / checkout flow work"],
    tags: ["JavaScript", "HTML"],
    role: "Builder",
    github: "https://github.com/Simran-Tamrakar7/Kasthakarobar",
    modules: ["Product flows", "Checkout UI"],
    detailedContributions: ["Worked ecommerce product flows, UI, and checkout shape."],
    techStack: ["JavaScript", "HTML"]
  },
  {
    id: "ledger",
    title: "Ledger App",
    categoryKey: "build",
    categoryBadge: "Build",
    summary: "TypeScript ledger application for tracking money cleanly.",
    keyContributions: ["Money tracking ledger"],
    tags: ["TypeScript"],
    role: "Builder",
    github: "https://github.com/Simran-Tamrakar7/ledger-app",
    modules: ["Ledger entries"],
    detailedContributions: ["Built a TypeScript ledger for clean money tracking."],
    techStack: ["TypeScript"]
  },
  {
    id: "bizlevate-manual",
    title: "Bizlevate HRMS Manual",
    categoryKey: "build hrm",
    categoryBadge: "QA · Docs",
    summary: "Training manuals and testing work around an HRMS product — documentation meets verification.",
    keyContributions: ["HRMS training manuals", "QA documentation"],
    tags: ["QA", "Docs", "Python"],
    role: "QA Engineer",
    github: "https://github.com/Simran-Tamrakar7/Bizlevate-1-HRMS-Manual",
    modules: ["Training manuals", "Verification notes"],
    detailedContributions: ["Documented HRMS training manuals tied to testing work."],
    techStack: ["QA", "Docs", "Python"]
  },
  {
    id: "student-mgmt",
    title: "Student Management System",
    categoryKey: "build",
    categoryBadge: "Academic",
    summary: "Academic project — full student records flow for Project-II.",
    keyContributions: ["Student records flow"],
    tags: ["HTML", "Academic"],
    role: "Builder",
    github: "https://github.com/Simran-Tamrakar7/Student_Management_System",
    modules: ["Student records"],
    detailedContributions: ["Built full student records flow for academic Project-II."],
    techStack: ["HTML"]
  }
];

export const skillCategories = [
  {
    icon: "🛡️",
    title: "Manual Testing",
    highlight: true,
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "UAT Testing",
      "Web & Mobile Application Testing",
      "Test Case Design",
      "Test Case Documentation",
      "Test Plan",
      "Test Strategy",
      "Requirement Analysis",
      "RTM",
      "Bug Reporting",
      "Defect Lifecycle Management",
      "Cross-Browser Testing",
      "Cross-Device Testing"
    ]
  },
  {
    icon: "⚡",
    title: "Automation and API Testing",
    highlight: true,
    skills: [
      "Playwright",
      "Cypress",
      "Postman",
      "API Testing",
      "JMeter"
    ]
  },
  {
    icon: "🛠️",
    title: "Tools and Platforms",
    skills: [
      "JIRA",
      "ClickUp",
      "Git",
      "Android Studio",
      "ADB",
      "MS Office"
    ]
  },
  {
    icon: "📊",
    title: "Methodologies",
    skills: [
      "Agile",
      "Scrum"
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
    degree: "B.Sc. CSIT",
    school: "Deerwalk Institute of Technology, Tribhuvan University",
    location: "Kathmandu, Nepal"
  }
];

export const extraActivities = [
  {
    badge: "Mentorship",
    role: "Teaching Fellowship",
    org: "Deerwalk Teaching Fellowship Program",
    date: "August 2024",
    desc: "Conducted computer literacy and foundational IT sessions for students."
  },
  {
    badge: "Event Logistics",
    role: "Event Logistics",
    org: "Deerwalk Job Fair",
    date: "March 2023 & March 2024",
    desc: "Facilitated company onboarding, student registration, and event operations."
  },
  {
    badge: "Leadership",
    role: "President",
    org: "DWIT Social Service Club",
    date: "July 2022 – July 2023",
    desc: "Led community initiatives and coordinated student volunteers."
  }
];

export const languagesList = [
  { name: "Nepali", level: "Native", fillPercentage: "100%" },
  { name: "English", level: "Fluent", fillPercentage: "95%" }
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

