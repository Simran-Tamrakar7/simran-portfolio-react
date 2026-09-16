export const personalInfo = {
  name: "Simran Tamrakar",
  title: "QA Engineer",
  heroRoles: ["Software Quality Assurance Engineer"],
  tagline: "QA Engineer with hands-on experience testing web and mobile applications across HRM, ERP, sales, finance, and e-commerce domains. Experienced in functional, regression, API, UI, UAT, cross-platform, and exploratory testing, with a strong focus on requirement analysis, defect investigation, and end-to-end business workflows.",
  automationNote: "Currently developing practical test automation skills with Playwright and Cypress, building on a strong foundation in manual and API testing.",
  email: "simrantamrakar77@gmail.com",
  phone: "+9779843707272",
  phoneDisplay: "+977 9843707272",
  github: "https://github.com/Simran-Tamrakar7",
  linkedin: "https://www.linkedin.com/in/simran-tamrakar-1aa84b349/",
  portfolio: "https://simran-tamrakar-portfolio.vercel.app/",
  status: "Available for QA Engineer Roles",
  aboutHeading: "Primary Focus: Software Quality Assurance",
  aboutLead: "I'm a QA Engineer focused on understanding how products work, where they can fail, and how those risks can be validated before release.",
  professionalSummary: "QA Engineer with hands-on experience testing web and mobile applications across HRM, ERP, sales, finance, and e-commerce domains. Experienced in functional, regression, API, UI, UAT, cross-platform, and exploratory testing, with a strong focus on requirement analysis, defect investigation, and end-to-end business workflows. Currently developing practical test automation skills with Playwright and Cypress.",
  aboutParagraphs: [
    "I'm a QA Engineer focused on understanding how products work, where they can fail, and how those risks can be validated before release.",
    "My experience spans web and mobile applications across HRM, ERP, sales, finance, and e-commerce domains. I work across the QA lifecycle — from requirement analysis and test design to execution, defect investigation, retesting, and release validation.",
    "I'm also building toward automation with Playwright and Cypress, with the goal of combining strong QA fundamentals with maintainable automated testing."
  ],
  aboutFacts: [
    { label: "Based in", value: "Kathmandu, Nepal" },
    { label: "Current Role", value: "Associate QA Engineer" },
    { label: "Education", value: "B.Sc. CSIT" },
    { label: "Focus", value: "Manual Testing · API Testing · Web & Mobile QA · Test Automation" }
  ],
  productStrategy: {
    discovery: "Requirement Analysis",
    design: "Test Coverage Design",
    quality: "Manual & API Testing",
    acceleration: "Release Validation"
  },
  lifecycleChips: [
    "01 Understand",
    "02 Design Coverage",
    "03 Execute Testing",
    "04 Investigate & Verify"
  ]
};

export const fourPillars = [
  {
    id: "mindset",
    number: "01",
    iconBg: "bg-teal",
    title: "Quality Mindset",
    description: "I look beyond happy-path scenarios to identify edge cases, unexpected behavior, validation gaps, and workflow inconsistencies.",
    badge: "Core Focus",
    highlight: true,
    list: []
  },
  {
    id: "requirements",
    number: "02",
    iconBg: "bg-blue",
    title: "Product & Requirement Understanding",
    description: "I analyze requirements from a testing perspective and translate business workflows into practical test scenarios — positive, negative, boundary, role-based, and integration cases.",
    badge: "Core Focus",
    highlight: true,
    list: []
  },
  {
    id: "execution",
    number: "03",
    iconBg: "bg-purple",
    title: "Hands-on QA Execution",
    description: "Experience across functional, regression, smoke, sanity, integration, UI, UAT, exploratory, cross-browser, and cross-device testing for web and mobile applications.",
    badge: "Core Focus",
    list: []
  },
  {
    id: "api",
    number: "04",
    iconBg: "bg-amber",
    title: "API & Data Validation",
    description: "Hands-on API testing with Postman — request/response validation, status codes, payload verification, authentication checks, and comparing API behavior with frontend results.",
    badge: "Core Focus",
    list: []
  },
  {
    id: "defects",
    number: "05",
    iconBg: "bg-teal",
    title: "Defect Investigation",
    description: "I focus on reproducible, developer-friendly defects with clear steps, expected vs. actual results, evidence, and relevant logs or API information.",
    list: []
  },
  {
    id: "workflows",
    number: "06",
    iconBg: "bg-blue",
    title: "Business Workflow Testing",
    description: "Experience testing multi-step workflows involving roles, approvals, attendance, leave, expenses, TADA, sales, inventory, payroll, and other interconnected business processes.",
    list: []
  },
  {
    id: "growth",
    number: "07",
    iconBg: "bg-amber",
    title: "Automation Growth",
    description: "Currently strengthening automation skills with Playwright and Cypress while building on existing manual and API testing experience.",
    list: []
  }
];

export const experiences = [
  {
    id: 1,
    role: "Associate QA Engineer",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "08/2025 - Present",
    current: true,
    bullets: [
      "Designed and executed functional, regression, integration, and API test cases to ensure product quality and reliability.",
      "Identified, documented, and tracked defects using bug-tracking tools, collaborating with developers through resolution and verification.",
      "Participated in test planning, requirement analysis, and release validation to ensure features met business and quality standards."
    ],
    tags: ["Manual Testing", "API Testing", "Regression", "Defect Tracking", "Release Validation"]
  },
  {
    id: 2,
    role: "QA Engineer Intern",
    company: "Infocom Solutions Pvt. Ltd.",
    period: "03/2025 - 08/2025",
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
    title: "Bizlevate HRM",
    categoryKey: "hrm",
    categoryBadge: "HRM",
    summary: "Multi-tenant HR management platform covering employee management, attendance, leave, payroll, onboarding/offboarding, appraisal, and organizational workflows.",
    keyContributions: [
      "End-to-end functional and regression testing across core HRM modules",
      "Role, permission, and approval workflow validation",
      "API validation and release support"
    ],
    tags: ["HRM", "Regression", "Workflow QA", "API"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "API", "Regression", "Mobile", "Web"],
    whatITest: ["Employee Management", "Attendance", "Leave", "Payroll", "Approval Workflows", "Roles & Permissions", "Mobile App", "Web App", "API"],
    modules: ["Employee Management", "Attendance", "Leave", "Payroll", "Onboarding / Offboarding", "Appraisal"],
    detailedContributions: [
      "Performed end-to-end functional and regression testing across core HRM modules.",
      "Tested employee roles, permissions, approval workflows, and organization-specific behavior.",
      "Validated attendance, leave, payroll, onboarding, and appraisal workflows.",
      "Tested web and mobile application behavior across supported devices and browsers.",
      "Performed API validation using Postman for application workflows.",
      "Investigated defects, documented reproducible scenarios, and collaborated with developers through resolution.",
      "Supported requirement clarification and release validation."
    ],
    techStack: ["Manual QA", "Postman", "ClickUp", "Jira", "Mobile Testing"]
  },
  {
    id: "primesales",
    title: "PrimeSales 360",
    categoryKey: "sales mobile",
    categoryBadge: "Field Sales",
    summary: "Field-sales application supporting sales representatives and distribution workflows.",
    keyContributions: [
      "Sales, shop visit, route, order, and inventory workflow QA",
      "Role-based behavior across sales and supervisory roles",
      "API and frontend/backend discrepancy investigation"
    ],
    tags: ["Mobile", "Sales", "Regression", "API"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "API", "Regression", "Mobile", "Web"],
    whatITest: ["Orders", "Shop Visits", "Routes", "Inventory", "TADA", "Expenses", "Attendance", "Reports", "Role-based Access"],
    modules: ["Shop / route management", "Order flow", "Inventory", "TADA / expenses", "Attendance", "Reporting"],
    detailedContributions: [
      "Tested sales, shop visit, route, order, inventory, and field-service workflows.",
      "Validated role-based behavior across sales and supervisory roles.",
      "Tested TADA, expenses, attendance, and reporting workflows.",
      "Performed regression testing across mobile and web changes.",
      "Validated API responses and investigated discrepancies between frontend and backend data.",
      "Reported and tracked defects through resolution and verified fixes before release."
    ],
    techStack: ["Manual QA", "Mobile Testing", "Postman", "ClickUp"]
  },
  {
    id: "salesmania",
    title: "Salesmania",
    categoryKey: "sales",
    categoryBadge: "Approvals",
    summary: "Supervisor approval app for ASM/DCM roles covering expense and travel workflows.",
    keyContributions: [
      "Expense and travel approval QA",
      "ASM/DCM role validation",
      "Field-level defect discovery"
    ],
    tags: ["Approvals", "Sales", "Roles"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "Regression", "UI"],
    whatITest: ["Expense Approvals", "Travel Approvals", "ASM/DCM Roles", "Approval Chains"],
    modules: ["Expense workflows", "Travel workflows", "Supervisor approval chains"],
    detailedContributions: [
      "Tested supervisor approval workflows for ASM/DCM roles.",
      "Validated expense and travel approval chains and role-based access.",
      "Documented and tracked field-level defects through resolution."
    ],
    techStack: ["Manual QA", "UI Testing", "Jira"]
  },
  {
    id: "trems",
    title: "TREMS",
    categoryKey: "finance",
    categoryBadge: "Finance",
    summary: "Financial dashboard application for reporting and operational views.",
    keyContributions: [
      "Dashboard and financial UI validation",
      "Reporting surface checks"
    ],
    tags: ["Finance", "Dashboard"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "UI"],
    whatITest: ["Financial Dashboard", "Reporting Surfaces"],
    modules: ["Financial dashboard views", "Reporting surfaces"],
    detailedContributions: [
      "Performed QA on financial dashboard application flows and reporting surfaces."
    ],
    techStack: ["Manual QA", "ClickUp"]
  },
  {
    id: "cqnoval",
    title: "CQNoval",
    categoryKey: "erp mobile",
    categoryBadge: "ERP",
    summary: "Mobile/web ERP application for finance, HR, procurement, and inventory.",
    keyContributions: [
      "Finance / HR / procurement / inventory QA",
      "Mobile and web coverage"
    ],
    tags: ["ERP", "Mobile", "Finance"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "Mobile", "Web", "Regression"],
    whatITest: ["Finance", "HR", "Procurement", "Inventory"],
    modules: ["Finance", "HR", "Procurement", "Inventory"],
    detailedContributions: [
      "Tested CQNoval ERP flows across finance, HR, procurement, and inventory on mobile and web."
    ],
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
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "Mobile", "Web"],
    whatITest: ["Mobile App Flows", "Web Flows"],
    modules: ["Mobile app flows", "Web flows"],
    detailedContributions: [
      "Executed functional QA on ESpOT mobile and web application flows."
    ],
    techStack: ["Manual QA", "Mobile Testing"]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    categoryKey: "ecommerce",
    categoryBadge: "E-commerce",
    summary: "E-commerce web platform covering product catalog, storefront, and reseller-related flows.",
    keyContributions: [
      "Product catalog QA",
      "Storefront and reseller flow checks"
    ],
    tags: ["E-commerce", "Web"],
    role: "Associate QA Engineer",
    testingTypes: ["Manual", "Web"],
    whatITest: ["Product Catalog", "Reseller Network", "Storefront"],
    modules: ["Product catalog", "Reseller network", "Storefront"],
    detailedContributions: [
      "Tested e-commerce catalog, storefront, and reseller-related flows across web."
    ],
    techStack: ["Manual QA", "Web Testing"]
  }
];

export const skillCategories = [
  {
    title: "QA",
    highlight: true,
    skills: [
      "Functional Testing",
      "Regression Testing",
      "UAT",
      "Exploratory Testing",
      "API Testing",
      "UI Testing",
      "Mobile Testing",
      "Smoke & Sanity",
      "Integration Testing",
      "Cross-browser / Cross-device"
    ]
  },
  {
    title: "Automation",
    highlight: true,
    skills: [
      "Playwright — Beginner",
      "Cypress — Beginner",
      "Python",
      "JavaScript"
    ]
  },
  {
    title: "API",
    highlight: true,
    skills: [
      "Postman",
      "REST API",
      "JSON",
      "Request/Response Validation",
      "Status Codes",
      "Payload Checks"
    ]
  },
  {
    title: "Management",
    highlight: true,
    skills: [
      "Jira",
      "ClickUp",
      "Asana"
    ]
  },
  {
    title: "Supporting",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "ADB",
      "Basic SQL"
    ]
  },
  {
    title: "Domain Exposure",
    skills: [
      "HRM",
      "ERP",
      "Sales & Distribution",
      "Finance",
      "E-commerce"
    ]
  }
];

/** Skills block for Interactive CV / downloadable CV wording */
export const cvSkillCategories = [
  {
    title: "Manual Testing",
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
    title: "Automation and API Testing",
    skills: [
      "Playwright",
      "Cypress",
      "Postman",
      "API Testing",
      "JMeter"
    ]
  },
  {
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
    title: "Methodologies",
    skills: [
      "Agile",
      "Scrum"
    ]
  }
];

/** Techniques I can explain in an interview — no filler techniques */
export const testingTechniques = [
  "Positive Testing",
  "Negative Testing",
  "Boundary Value Analysis",
  "Equivalence Partitioning",
  "Exploratory Testing",
  "Role & Permission Testing",
  "Workflow Testing",
  "Regression Testing"
];

export const qaCaseStudies = [
  {
    id: "approvals",
    number: "01",
    title: "Approval Workflow Testing",
    problem: "Complex approval workflows required different behavior based on user roles and hierarchy.",
    approach: [
      "Reviewed role and permission requirements.",
      "Created positive and negative scenarios for each approval stage.",
      "Tested unauthorized modification attempts.",
      "Verified behavior across different hierarchy levels.",
      "Retested fixes and performed regression around affected workflows."
    ],
    tags: ["Permissions", "Role Hierarchy", "Approval Flow", "Edge Cases", "Regression"]
  },
  {
    id: "api-ui",
    number: "02",
    title: "API vs UI Data Validation",
    problem: "Displayed application data did not always match the corresponding API response.",
    approach: [
      "Reproduced the discrepancy through the UI.",
      "Identified the corresponding API endpoint.",
      "Compared request parameters and response payload.",
      "Checked whether the issue originated from API data, frontend mapping, or filtering.",
      "Documented evidence for developer investigation.",
      "Verified the fix through API + UI retesting."
    ],
    tags: ["Postman", "API Testing", "Data Validation", "Debugging", "Defect Investigation"]
  },
  {
    id: "regression",
    number: "03",
    title: "Mobile & Web Regression",
    problem: "Changes released across web and mobile applications required validation without breaking existing workflows.",
    approach: [
      "Reviewed changed functionality.",
      "Identified impacted modules.",
      "Executed targeted regression.",
      "Checked different devices/browser combinations.",
      "Verified critical user journeys.",
      "Performed smoke/sanity validation after fixes."
    ],
    tags: ["Regression", "Mobile QA", "Web QA", "Cross-platform Testing"]
  }
];

export const sampleTestCases = {
  feature: "Employee Attendance",
  filters: ["All", "Positive", "Negative", "Boundary", "Role-based", "API"],
  cases: [
    { id: "TC-001", scenario: "Valid check-in within permitted location", expected: "Attendance recorded successfully", type: "Positive" },
    { id: "TC-002", scenario: "Check-in without location permission", expected: "Validation message shown; check-in blocked", type: "Negative" },
    { id: "TC-003", scenario: "Duplicate check-in for the same shift", expected: "Duplicate prevented with clear message", type: "Negative" },
    { id: "TC-004", scenario: "Check-in for invalid / inactive employee", expected: "Request rejected", type: "Negative" },
    { id: "TC-005", scenario: "Check-in just outside permitted geo-fence", expected: "Location validation triggered", type: "Boundary" },
    { id: "TC-006", scenario: "Employee without attendance permission attempts check-in", expected: "Access denied based on role", type: "Role-based" },
    { id: "TC-007", scenario: "POST attendance API with valid payload", expected: "200/201 with attendance id in response", type: "API" },
    { id: "TC-008", scenario: "POST attendance API with missing employee_id", expected: "4xx validation error", type: "API" }
  ]
};

export const currentlyBuilding = [
  {
    title: "Test Automation — Playwright",
    stack: "Playwright · Python · pytest",
    desc: "Building reusable E2E tests, fixtures, assertions, locators, and page-object structures."
  },
  {
    title: "Cypress",
    stack: "Cypress · JavaScript",
    desc: "Building E2E testing knowledge and understanding Cypress's testing workflow through practice projects."
  },
  {
    title: "API Automation",
    stack: "Postman → automated checks",
    desc: "Moving from manual Postman validation toward automated API checks."
  },
  {
    title: "QA Engineering Practices",
    stack: "Test maintainability · Test structure · Automation strategy",
    desc: "Strengthening test architecture, maintainability, test structure, and automation strategy."
  }
];

/** Real GitHub learning repos only — no invented Playwright framework link */
export const githubProjects = [
  {
    id: "cypress-learning",
    title: "Cypress Learning",
    tech: ["Cypress", "JavaScript"],
    bullets: [
      "E2E testing practice",
      "Assertions and fixtures",
      "Commands and test organization",
      "Building familiarity with Cypress workflow"
    ],
    url: "https://github.com/Simran-Tamrakar7/Cypress-Learning"
  },
  {
    id: "mac-cypress",
    title: "Mac Cypress Automation",
    tech: ["Cypress", "JavaScript"],
    bullets: [
      "Hands-on Cypress setup on macOS",
      "Early automation practice",
      "Exploring assertions and selectors",
      "Learning maintainable test structure"
    ],
    url: "https://github.com/Simran-Tamrakar7/Mac-Cypress_Automation"
  }
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

/** CV-only education (site Education section still uses educationList) */
export const cvEducationList = [
  {
    year: "2020 - 2025",
    degree: "Bsc. CSIT",
    school: "Deerwalk Institute of Technology, Tribhuvan University",
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
  { name: "Nepali", level: "Native", fillPercentage: "100%" },
  { name: "English", level: "Fluent", fillPercentage: "90%" },
  { name: "Hindi", level: "Fluent", fillPercentage: "85%" }
];

/** Official CV summary — matches SimranTamrakar.pdf */
export const cvProfessionalSummary =
  "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect management. Skilled in test case design, regression testing, requirement analysis, and release validation, with hands-on experience across Agile/Scrum environments and enterprise HRM, ERP, sales, and banking applications.";

/** Leadership copy as on official CV */
export const cvExtraActivities = [
  {
    role: "Teaching Fellowship",
    org: "Deerwalk Teaching Fellowship Program",
    date: "08/2024",
    desc: "Conducted computer literacy and foundational IT sessions for students, fostering technical awareness."
  },
  {
    role: "Event Logistics",
    org: "Deerwalk Job Fair",
    date: "03/2023 & 03/2024",
    desc: "Facilitated company onboarding, student registration, and event operations for technology recruitment fairs."
  },
  {
    role: "President",
    org: "DWIT Social Service Club",
    date: "07/2022 - 07/2023",
    desc: "Led community initiatives, blood donation drives, educational outreach, and coordinated student volunteers."
  }
];

export const certificationsList = [
  {
    id: "qa-competency",
    title: "Software Quality Assurance & API Testing",
    issuer: "Primary Focus",
    year: "Active Practice",
    badge: "Primary Focus",
    skills: ["Manual Testing", "Postman API Testing", "ClickUp / Asana / Jira", "Release Validation"],
    description: "Test planning, defect investigation, Postman API verification, and UAT / release validation across HRM and related enterprise apps."
  },
  {
    id: "csit-degree",
    title: "B.Sc. Computer Science & Information Technology",
    issuer: "Deerwalk Institute of Technology, Tribhuvan University",
    year: "2020 – 2025",
    badge: "Academic Degree",
    skills: ["Software Engineering", "QA Fundamentals", "Database Systems"],
    description: "Undergraduate degree in computer science and information technology."
  }
];

/** Scope & contribution cards — credible over invented KPIs */
export const impactMetrics = [
  {
    title: "Multiple Application Domains",
    detail: "Tested applications across HRM, ERP, sales & distribution, finance, e-commerce, and field-sales workflows."
  },
  {
    title: "Web & Mobile Coverage",
    detail: "Hands-on testing across web and mobile applications, including functional, regression, UI, cross-browser, and cross-device validation."
  },
  {
    title: "API Testing",
    detail: "Used Postman to validate API requests, responses, status codes, payloads, authentication, and API-backed application workflows."
  },
  {
    title: "Complex Business Workflows",
    detail: "Tested workflows involving roles and permissions, approval hierarchies, attendance, leave, expenses, TADA, payroll, inventory, orders, and sales processes."
  },
  {
    title: "Defect Lifecycle",
    detail: "Experienced in identifying, documenting, tracking, retesting, and closing defects in collaboration with development teams."
  },
  {
    title: "Automation Growth",
    detail: "Building practical test automation skills with Playwright and Cypress alongside existing manual QA experience."
  }
];

/** My QA Approach — real lifecycle, not “zero defect delivery” */
export const qaGovernanceGates = [
  { title: "Understand", desc: "What is the feature supposed to do? Review requirements, workflows, roles, and validations." },
  { title: "Question", desc: "What could go wrong? What assumptions or gaps exist in the requirement?" },
  { title: "Design", desc: "Create positive, negative, boundary, role-based, and integration scenarios." },
  { title: "Test", desc: "Execute functional, regression, smoke, sanity, UI, API, and exploratory testing." },
  { title: "Investigate", desc: "Is the issue UI, API, data, permission, workflow, or integration related? Document evidence." },
  { title: "Verify", desc: "Retest the fix and surrounding functionality for regressions." },
  { title: "Improve", desc: "Identify coverage gaps that can improve coverage and reduce the risk of regressions in future releases." }
];

export const qaThinking = {
  motto: "Understand → Question → Design → Test → Investigate → Verify → Improve",
  steps: [
    { title: "Understand", desc: "What is the feature supposed to do?" },
    { title: "Question", desc: "What could go wrong? What assumptions exist?" },
    { title: "Design", desc: "Plan positive, negative, boundary, role-based, and integration coverage." },
    { title: "Test", desc: "Execute scenarios across UI, API, and real-world workflows." },
    { title: "Investigate", desc: "Is the issue UI, API, data, permission, workflow, or integration related?" },
    { title: "Verify", desc: "Retest the fix and surrounding functionality." },
    { title: "Improve", desc: "Identify gaps that can improve coverage and reduce the risk of regressions in future releases." }
  ]
};

export const postmanEndpoints = [
  {
    id: 'api-attendance',
    name: 'POST /api/v1/hrms/attendance/check-in',
    module: 'Bizlevate HRMS',
    method: 'POST',
    url: 'https://demo.qa-sample.local/v1/attendance/check-in',
    headers: { 'Authorization': 'Bearer <sample-token>', 'Content-Type': 'application/json' },
    reqBody: {
      employee_id: "EMP-DEMO-001",
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
    url: 'https://demo.qa-sample.local/v1/tada/expenses/reimburse',
    headers: { 'Authorization': 'Bearer <sample-token>', 'Content-Type': 'application/json' },
    reqBody: {
      claim_id: "CLM-8812",
      amount_npr: 4500,
      category: "TRAVEL_MEALS",
      receipt_urls: ["https://demo.qa-sample.local/receipts/sample.png"]
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
    url: 'https://demo.qa-sample.local/v1/payroll/calculate-tax',
    headers: { 'Authorization': 'Bearer <sample-token>', 'Content-Type': 'application/json' },
    reqBody: {
      employee_id: "EMP-DEMO-001",
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

export const testimonials = [
  {
    id: 1,
    quote: "Simran brings a careful eye for edge cases and clear defect reports. Her Postman checks and structured bug notes helped the team catch workflow issues earlier in Bizlevate HRMS.",
    author: "Senior QA Lead & Product Manager",
    org: "Infocom Solutions / Bizlevate HRMS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    tag: "Quality Assurance"
  },
  {
    id: 2,
    quote: "Her bug reports are easy for developers to act on — clear steps, screenshots, and API details when relevant. That cuts down triage time.",
    author: "Lead Full-Stack Developer",
    org: "Enterprise Software Division",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    tag: "Defect Management"
  },
  {
    id: 3,
    quote: "Simran helps translate ambiguous requirements into clear, testable scenarios and keeps release validation focused on business workflows and quality expectations.",
    author: "Agile Scrum Master",
    org: "ERP & TADA Platforms",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    tag: "Requirement Analysis & Release Validation"
  }
];
