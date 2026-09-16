"""Generate official CV PDF from the same content as View CV (ResumeModal).

Run: python3 generate_cv_pdf.py
Writes: public/SimranTamrakar.pdf (+ legacy mirror)
"""

from pathlib import Path
from fpdf import FPDF

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "public" / "SimranTamrakar.pdf"
LEGACY = ROOT / "public" / "Simran_Tamrakar_QA_CV.pdf"


def clean(t: str) -> str:
    return (
        t.replace("\u2014", "-")
        .replace("\u2013", "-")
        .replace("\u2019", "'")
        .replace("\u2022", "-")
        .replace("\u00b7", "|")
    )


# Keep in sync with src/data/portfolioData.js (View CV)
CV = {
    "name": "Simran Tamrakar",
    "title": "QA Engineer",
    "contact": "+977 9843707272  |  simrantamrakar77@gmail.com  |  Github  |  LinkedIn  |  Portfolio",
    "summary": (
        "QA Engineer with hands-on experience testing web and mobile applications across HRM, ERP, sales, "
        "finance, and e-commerce domains. Experienced in functional, regression, API, UI, UAT, cross-platform, "
        "and exploratory testing, with a strong focus on requirement analysis, defect investigation, and "
        "end-to-end business workflows. Currently developing practical test automation skills with Playwright and Cypress."
    ),
    "education": [
        {
            "school": "Deerwalk Institute of Technology, Tribhuvan University",
            "degree": "B.Sc. Computer Science & Information Technology - Kathmandu, Nepal",
            "year": "2020 - 2024",
        },
        {
            "school": "Kathmandu Secondary School",
            "degree": "+2 Science - Kathmandu, Nepal",
            "year": "2019 - 2020",
        },
        {
            "school": "KMC School (Kathmandu Model School)",
            "degree": "SEE / Schooling - Kathmandu, Nepal",
            "year": "Until 2018",
        },
    ],
    "experience": [
        {
            "role": "QA Associate - Infocom Solutions Pvt. Ltd.",
            "period": "August 2025 - Present",
            "bullets": [
                "Analyze requirements and business workflows and design test coverage for functional, regression, integration, UI, and API testing across HRM, ERP, sales, and finance applications.",
                "Investigate and document defects with clear reproduction steps, expected vs. actual results, supporting evidence, and relevant technical information; collaborate with developers through resolution and retesting.",
                "Support test planning, requirement clarification, regression validation, and release validation across web and mobile applications.",
            ],
        },
        {
            "role": "QA Engineer Intern - Infocom Solutions Pvt. Ltd.",
            "period": "March 2025 - August 2025",
            "bullets": [
                "Executed functional, regression, and UI testing to identify and document software defects.",
                "Created and maintained test cases based on functional requirements and user stories.",
                "Collaborated with developers to reproduce defects, verify fixes, and improve product quality.",
            ],
        },
    ],
    "projects": [
        "Bizlevate HRM - Multi-tenant HR management platform covering employee management, attendance, leave, payroll, onboarding/offboarding, appraisal, and organizational workflows.",
        "PrimeSales 360 - Field-sales application supporting sales representatives and distribution workflows.",
        "Salesmania - Supervisor approval app for ASM/DCM roles covering expense and travel workflows.",
        "TREMS - Financial dashboard application for reporting and operational views.",
        "CQNoval - Mobile/web ERP application for finance, HR, procurement, and inventory.",
        "ESpOT - Mobile/web application covered in QA testing engagements.",
        "E-commerce Platform - E-commerce web platform covering product catalog, storefront, and reseller-related flows.",
    ],
    "skills": [
        (
            "Manual Testing",
            "Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, UAT Testing, Web & Mobile Application Testing, Test Case Design, Test Case Documentation, Test Plan, Test Strategy, Requirement Analysis, RTM, Bug Reporting, Defect Lifecycle Management, Cross-Browser Testing, Cross-Device Testing",
        ),
        (
            "Automation and API Testing",
            "Playwright, Cypress, Postman, API Testing, JMeter",
        ),
        (
            "Tools and Platforms",
            "JIRA, ClickUp, Git, Android Studio, ADB, MS Office",
        ),
        ("Methodologies", "Agile, Scrum"),
    ],
    "activities": [
        {
            "title": "Teaching Fellow - Deerwalk Teaching Fellowship Program",
            "date": "August 2024",
            "desc": "Conducted computer literacy and foundational IT sessions.",
        },
        {
            "title": "Volunteer - DWIT Job Fair",
            "date": "March 2023 & March 2024",
            "desc": "Company onboarding, student registration, event operations.",
        },
        {
            "title": "President - DWIT Social Service Club",
            "date": "July 2022 - July 2023",
            "desc": "Led community initiatives, blood donation drives, educational outreach.",
        },
    ],
    "languages": "English - Professional Working Proficiency; Nepali - Native / Bilingual; Hindi - Professional Working Proficiency",
}


class CVPDF(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, str(self.page_no()), align="C")


def build():
    pdf = CVPDF(format="A4")
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.set_left_margin(16)
    pdf.set_right_margin(16)

    def h1(t):
        pdf.set_font("Helvetica", "B", 18)
        pdf.set_text_color(20, 20, 20)
        pdf.cell(0, 8, clean(t), new_x="LMARGIN", new_y="NEXT")

    def h2(t):
        pdf.set_font("Helvetica", "", 11)
        pdf.set_text_color(13, 148, 136)
        pdf.cell(0, 6, clean(t), new_x="LMARGIN", new_y="NEXT")

    def section(t):
        pdf.ln(3)
        pdf.set_font("Helvetica", "B", 11)
        pdf.set_text_color(13, 148, 136)
        pdf.cell(0, 6, clean(t).upper(), new_x="LMARGIN", new_y="NEXT")
        y = pdf.get_y()
        pdf.set_draw_color(13, 148, 136)
        pdf.line(16, y, 194, y)
        pdf.ln(3)

    def body(t):
        pdf.set_x(16)
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(50, 50, 50)
        pdf.multi_cell(178, 4.8, clean(t))

    def bold_line(left, right=""):
        pdf.set_x(16)
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(20, 20, 20)
        if right:
            pdf.cell(125, 5, clean(left))
            pdf.set_font("Helvetica", "", 9)
            pdf.set_text_color(100, 80, 140)
            pdf.cell(53, 5, clean(right), align="R", new_x="LMARGIN", new_y="NEXT")
        else:
            pdf.cell(0, 5, clean(left), new_x="LMARGIN", new_y="NEXT")

    def bullets(items):
        for b in items:
            pdf.set_x(16)
            pdf.set_font("Helvetica", "", 9.5)
            pdf.set_text_color(50, 50, 50)
            pdf.multi_cell(178, 4.6, "- " + clean(b))

    def skill_block(title, text):
        pdf.set_x(16)
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(20, 20, 20)
        pdf.write(4.8, clean(title) + ": ")
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(50, 50, 50)
        pdf.write(4.8, clean(text))
        pdf.ln(6)

    h1(CV["name"])
    h2(CV["title"])
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(70, 70, 70)
    pdf.multi_cell(178, 4.5, clean(CV["contact"]))
    pdf.ln(1)

    section("Professional Summary")
    body(CV["summary"])

    section("Education")
    for edu in CV["education"]:
        bold_line(edu["school"], edu["year"])
        body(edu["degree"])
        pdf.ln(1)

    section("Experience")
    for exp in CV["experience"]:
        bold_line(exp["role"], exp["period"])
        bullets(exp["bullets"])
        pdf.ln(2)

    section("Featured Projects & Applications Tested")
    bullets(CV["projects"])

    section("Skills")
    for title, text in CV["skills"]:
        skill_block(title, text)

    section("Leadership and Extra Curricular Activities")
    for act in CV["activities"]:
        bold_line(act["title"], act["date"])
        body(act["desc"])
        pdf.ln(1)

    section("Languages")
    body(CV["languages"])

    pdf.output(str(OUT))
    LEGACY.write_bytes(OUT.read_bytes())
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
    print(f"Synced {LEGACY.name}")


if __name__ == "__main__":
    build()
