import os

def generate_pdf():
    os.makedirs('public', exist_ok=True)
    pdf_path = os.path.join('public', 'Simran_Tamrakar_QA_CV.pdf')
    
    # We will generate a high-quality valid PDF 1.4 document for Simran Tamrakar
    content_lines = [
        "BT",
        "/F2 20 Tf",
        "50 750 Td",
        "(SIMRAN TAMRAKAR) Tj",
        "0 -22 Td",
        "/F1 11 Tf",
        "(QA Associate & Quality Assurance Specialist) Tj",
        "0 -15 Td",
        "/F1 9 Tf",
        "(Email: simrantamrakar77@gmail.com | Location: Kathmandu, Nepal) Tj",
        "0 -12 Td",
        "(LinkedIn: linkedin.com/in/simran-tamrakar-1aa84b349 | GitHub: github.com/Simran-Tamrakar7) Tj",
        "0 -25 Td",
        
        # Section 1: Executive Summary
        "/F2 12 Tf",
        "(PROFESSIONAL SUMMARY) Tj",
        "0 -15 Td",
        "/F1 9.5 Tf",
        "(Quality Assurance Specialist with hands-on experience in manual test execution,) Tj",
        "0 -13 Td",
        "(API validation using Postman, and end-to-end bug tracking across HRMS, ERP & TADA systems.) Tj",
        "0 -13 Td",
        "(Proven track record of designing 100+ test scenarios per module and maintaining zero P0 defects.) Tj",
        "0 -22 Td",
        
        # Section 2: Experience
        "/F2 12 Tf",
        "(PROFESSIONAL EXPERIENCE) Tj",
        "0 -16 Td",
        "/F2 10 Tf",
        "(QA Associate - Infocom Solutions Pvt. Ltd. (Bizlevate HRMS)) Tj",
        "350 0 Td",
        "(Aug 2025 - Present) Tj",
        "-350 -14 Td",
        "/F1 9 Tf",
        "(- Lead end-to-end QA for Bizlevate HRMS across 7 modules: Attendance, Leave, Payroll, Onboarding.) Tj",
        "0 -13 Td",
        "(- Perform Postman API contract verification, HTTP status codes, and database sync checks.) Tj",
        "0 -13 Td",
        "(- Own QA delivery for enterprise applications including TADA Expense Management & SalesMania.) Tj",
        "0 -13 Td",
        "(- Log, triage, and manage high-priority defects in ClickUp, Asana, and Jira during daily standups.) Tj",
        "0 -13 Td",
        "(- Leverage GenAI prompt engineering to accelerate edge-case discovery & defect reproduction.) Tj",
        "0 -20 Td",
        
        "/F2 10 Tf",
        "(QA Intern - Infocom Solutions Pvt. Ltd.) Tj",
        "350 0 Td",
        "(Mar 2025 - Aug 2025) Tj",
        "-350 -14 Td",
        "/F1 9 Tf",
        "(- Executed functional, UI, smoke, and regression test suites across web and mobile browsers.) Tj",
        "0 -13 Td",
        "(- Authored reproducible bug reports with steps, screenshots, and browser network log traces.) Tj",
        "0 -13 Td",
        "(- Tested key enterprise software platforms including PrimeSales360, SalesMania, and HRMS.) Tj",
        "0 -22 Td",
        
        # Section 3: Skills
        "/F2 12 Tf",
        "(CORE QA COMPETENCIES & TECHNICAL SKILLS) Tj",
        "0 -16 Td",
        "/F1 9 Tf",
        "(- Testing Types: Manual Testing, API Testing (Postman), Functional, Regression, Smoke, UAT, BVA) Tj",
        "0 -13 Td",
        "(- Tools & Platforms: ClickUp, Asana, Jira, Postman API, Chrome DevTools, Git, Cypress, Playwright) Tj",
        "0 -13 Td",
        "(- Complementary Skills: SRS Requirement Review, UI/UX Usability QA, Prompt Engineering (ChatGPT/v0)) Tj",
        "0 -13 Td",
        "(- Database & Systems: SQL / MySQL, HTML5/CSS3, JavaScript, Python) Tj",
        "0 -22 Td",
        
        # Section 4: Education
        "/F2 12 Tf",
        "(EDUCATION & DEGREES) Tj",
        "0 -16 Td",
        "/F2 9.5 Tf",
        "(B.Sc. Computer Science and Information Technology (CSIT)) Tj",
        "350 0 Td",
        "(2020 - 2025) Tj",
        "-350 -13 Td",
        "/F1 9 Tf",
        "(Deerwalk Institute of Technology - Kathmandu, Nepal) Tj",
        "0 -16 Td",
        "/F2 9.5 Tf", font_change := "(+2 Science High Schooling)",
        "(+2 Science High Schooling) Tj",
        "350 0 Td",
        "(2019 - 2020) Tj",
        "-350 -13 Td",
        "/F1 9 Tf",
        "(Kathmandu Secondary School - Kathmandu, Nepal) Tj",
        "ET"
    ]
    
    stream_content = "\n".join(content_lines)
    stream_len = len(stream_content)

    pdf_body = f"""%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Length {stream_len} >>
stream
{stream_content}
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
0000000391 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
{450 + stream_len}
%%EOF
"""

    with open(pdf_path, 'wb') as f:
        f.write(pdf_body.encode('latin1'))

    print(f"PDF generated successfully at {pdf_path}")

if __name__ == '__main__':
    generate_pdf()
