"""Generate official CV PDF (matches View CV) with clickable contact links.

Run: python3 generate_cv_pdf.py
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


CV = {
    "name": "Simran Tamrakar",
    "title": "QA Engineer",
    "links": [
        {"label": "+977 9843707272", "url": "tel:+9779843707272"},
        {"label": "simrantamrakar77@gmail.com", "url": "mailto:simrantamrakar77@gmail.com"},
        {"label": "Github", "url": "https://github.com/Simran-Tamrakar7"},
        {"label": "LinkedIn", "url": "https://www.linkedin.com/in/simran-tamrakar-1aa84b349/"},
        {"label": "Portfolio", "url": "https://simran-tamrakar-portfolio.vercel.app/"},
    ],
    "summary": (
        "QA Engineer with experience in manual testing, API testing, web and mobile application testing, and defect "
        "management. Skilled in test case design, regression testing, requirement analysis, and release validation, with "
        "hands-on experience across Agile/Scrum environments and enterprise HRM, ERP, sales, and banking applications."
    ),
    "education": [
        {
            "school": "Deerwalk Institute of Technology, Tribhuvan University",
            "degree": "Bsc. CSIT - Kathmandu, Nepal",
            "year": "2020 - 2025",
        },
    ],
    "experience": [
        {
            "role": "Associate QA Engineer - Infocom Solutions Pvt. Ltd.",
            "period": "08/2025 - Present",
            "bullets": [
                "Designed and executed functional, regression, integration, and API test cases to ensure product quality and reliability.",
                "Identified, documented, and tracked defects using bug-tracking tools, collaborating with developers through resolution and verification.",
                "Participated in test planning, requirement analysis, and release validation to ensure features met business and quality standards.",
            ],
        },
        {
            "role": "QA Engineer Intern - Infocom Solutions Pvt. Ltd.",
            "period": "03/2025 - 08/2025",
            "bullets": [
                "Executed functional, regression, and UI testing to identify and document software defects.",
                "Created and maintained test cases based on functional requirements and user stories.",
                "Collaborated with developers to reproduce bugs, verify fixes, and improve overall product quality.",
            ],
        },
    ],
    "activities": [
        {
            "title": "Teaching Fellowship - Deerwalk Teaching Fellowship Program",
            "date": "08/2024",
            "desc": "Conducted computer literacy and foundational IT sessions for students, fostering technical awareness.",
        },
        {
            "title": "Event Logistics - Deerwalk Job Fair",
            "date": "03/2023 & 03/2024",
            "desc": "Facilitated company onboarding, student registration, and event operations for technology recruitment fairs.",
        },
        {
            "title": "President - DWIT Social Service Club",
            "date": "07/2022 - 07/2023",
            "desc": "Led community initiatives, blood donation drives, educational outreach, and coordinated student volunteers.",
        },
    ],
    "skills": [
        (
            "Manual Testing",
            "Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, UAT Testing, Web & Mobile Application Testing, Test Case Design, Test Case Documentation, Test Plan, Test Strategy, Requirement Analysis, RTM, Bug Reporting, Defect Lifecycle Management, Cross-Browser Testing, Cross-Device Testing",
        ),
        ("Automation and API Testing", "Playwright, Cypress, Postman, API Testing, JMeter"),
        ("Tools and Platforms", "JIRA, ClickUp, Git, Android Studio, ADB, MS Office"),
        ("Methodologies", "Agile, Scrum"),
        ("Languages", "Nepali (Native), English (Fluent), Hindi (Fluent)"),
    ],
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

    # Centered header + clickable links
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 8, clean(CV["name"]), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(13, 148, 136)
    pdf.cell(0, 6, clean(CV["title"]), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

    pdf.set_font("Helvetica", "", 9)
    sep = "  |  "
    parts = []
    for i, item in enumerate(CV["links"]):
        parts.append(item)
        if i < len(CV["links"]) - 1:
            parts.append({"label": sep, "url": None})

    total_w = sum(pdf.get_string_width(clean(p["label"])) for p in parts)
    page_w = pdf.w - pdf.l_margin - pdf.r_margin
    pdf.set_x(pdf.l_margin + max(0, (page_w - total_w) / 2))
    y = pdf.get_y()
    for part in parts:
        label = clean(part["label"])
        w = pdf.get_string_width(label)
        if part["url"]:
            pdf.set_text_color(13, 148, 136)
            pdf.cell(w, 5, label, link=part["url"])
        else:
            pdf.set_text_color(70, 70, 70)
            pdf.cell(w, 5, label)
    pdf.set_y(y + 6)
    pdf.ln(2)

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

    section("Leadership and Extra Curricular Activities")
    for act in CV["activities"]:
        bold_line(act["title"], act["date"])
        body(act["desc"])
        pdf.ln(1)

    section("Skills")
    for title, text in CV["skills"]:
        skill_block(title, text)

    pdf.output(str(OUT))
    LEGACY.write_bytes(OUT.read_bytes())
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
