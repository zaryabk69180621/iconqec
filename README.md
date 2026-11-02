# Quality Enhancement Cell (QEC) Website
### Imperial College of Nursing, Kabal Swat
**Target Subdomain:** `qec.iconswat.com`  
**Parent Portal:** `iconswat.com`  

---

## 🌟 Overview
This is a modern, responsive, and standards-compliant official website created for the **Quality Enhancement Cell (QEC)** of **Imperial College of Nursing, Kabal Swat**.

The website has been developed specifically according to the color palette, design philosophy, and academic branding of `iconswat.com`, strictly aligned with:
- **Khyber Medical University (KMU)** Quality Assurance Agency (QAA)
- **Pakistan Nursing and Midwifery Council (PN&MC)**
- **Higher Education Commission (HEC) Pakistan** Quality Assurance criteria
- **Higher Education Regulatory Authority (HERA KPK)**

---

## 📂 Project Structure

```text
iconqec website/
│
├── index.html                    # Complete main homepage for qec.iconswat.com
├── README.md                     # Documentation & management guide
│
├── assets/
│   ├── css/
│   │   └── style.css             # Theme styling, CSS variables matching iconswat.com, responsive layout
│   │
│   ├── js/
│   │   └── main.js               # Photo carousel, feedback form processing, modals, live filter & search
│   │
│   ├── images/                   # High-resolution college photos and logos
│   │   ├── logo.png              # Imperial College of Nursing Official Crest Logo
│   │   ├── buildingclean.png     # College main building in Kabal, Swat
│   │   ├── lablearn.jpeg         # Nursing & Skills Lab training
│   │   ├── classroomlearn.jpeg   # Interactive classroom sessions
│   │   ├── librarystudy.jpeg     # Nursing library & academic research
│   │   ├── orientation.jpeg      # Student orientation & QA seminars
│   │   ├── KMU-Logo.png          # Khyber Medical University Logo
│   │   ├── pnc.png               # Pakistan Nursing & Midwifery Council Logo
│   │   └── hera.png              # HERA KPK Regulatory Authority Logo
│   │
│   └── docs/                     # Downloadable official PDF documents & placeholders
│       ├── Self_Assessment_Report_SAR_BSN.pdf            # Self-Assessment Report (SAR)
│       ├── QEC_Targets_and_Action_Plan_2025_2026.pdf      # Annual QEC Targets & Action Plan
│       ├── Notification_QEC_Officers_Appointment.pdf     # Appointment of QEC Officers
│       ├── Clinical_and_Skills_Lab_QA_Framework.pdf       # Clinical & Skills Lab Monitoring Framework
│       └── HEC_Teacher_and_Course_Evaluation_Proforma.pdf # HEC Proforma-1 Course & Teacher Evaluation
```

---

## 🎯 Key Features & Sections Included

### 1. Photo Carousel / Slider (Hero Section)
- **Interactive features**: Smooth auto-play (6-second interval, pauses on hover), Next/Previous controls, navigation dot indicators, and touch swipe support for mobile.
- **Photos Included**: Loaded with 5 authentic high-res campus photos (`buildingclean.png`, `lablearn.jpeg`, `classroomlearn.jpeg`, `librarystudy.jpeg`, `orientation.jpeg`).
- **How to replace photos later**:
  Open [index.html](file:///home/zar/Desktop/iconqec%20website/index.html) and locate the `<!-- HERO SECTION: PHOTO CAROUSEL / SLIDER -->` section. Simply place your new photos in `assets/images/` and update the `src` attribute in the `<img src="assets/images/your-photo.jpg">` tags.

### 2. About QEC Section
- Official institutional background of QEC at Imperial College of Nursing Kabal, Swat.
- Directorate Quality Policy Quote.
- **Vision & Mission** cards.
- **Core Functions Grid**: Self-Assessment Process, Clinical & Skills Lab Audits, Feedback Elicitation, Faculty Training, Course Files, and Portal Transparency.
- Affiliations strip featuring **KMU, PN&MC, HERA KPK**, and **ICON**.

### 3. News & Notifications Section
- **Establishment of QEC Office Notification** (Ref: `ICON/ADMIN/EST/2025/104`).
- **QEC Officer & Committee Appointment Notification** (Ref: `ICON/QEC/APPT/2025/88`).
- **Clinical & Skills Lab Quality Audit Announcement** (Ref: `ICON/QEC/AUDIT/2025/32`).
- Interactive live category filter (`All`, `Official Notifications`, `QA Audits`, `Academic QA`).
- **Interactive Notification Modal**: Visitors can click "Read Official Notification" to view the full formatted official letterhead and even print it directly.

### 4. Student Feedback & Evaluation System (In-Person Mechanism)
In compliance with **Khyber Medical University (KMU)** and **Higher Education Commission (HEC)** quality standards:
- **No Online Feedback Policy**: We do not collect student feedback via online web forms to guarantee 100% authentic participation, uncompromised student anonymity, and tamper-proof statistical reliability for IQC and KMU reporting.
- **4 Pillars Aligned Strictly with KMU Indicator 3 (Score: 16)**:
  - **3.1 Teacher Evaluation (HEC Proforma-1)**: End-of-semester proformas administered in-class without faculty presence; compiled into Teacher Evaluation Reports.
  - **3.2 Clinical & Skills Lab Training Feedback**: Administered on-site at teaching hospitals and on-campus simulation labs.
  - **3.3 Target Program Surveys**: Standardized surveys (Graduating student survey, Alumni survey, Employer survey, Course review).
  - **3.4 Student Representation in Statutory Meetings**: Direct inclusion of student representatives in statutory official meetings (IQC, Academic Advisory) upon directives of KMU Vice Chancellor & HEC.
- **Downloadable Blank Proformas**: Students and faculty can download official PDF evaluation proformas and review assessment criteria.
- **5-Step Closed-Loop Lifecycle**: From in-person proforma administration to confidential collection, statistical tabulation, IQC review, corrective action plans, and KMU Syndicate reporting.

### 5. Document Downloads Section
Pre-configured with genuine, downloadable official PDF templates that can be viewed in the browser or downloaded with one click:
- **KMU Syndicate Approved Targets & Rating Criteria 2025-2026 (Ref: KMU/SA&A/51st Syndicate/2025/6114)**
- **Self-Assessment Report (SAR) - BSN Program (PDF)**
- **Notification of QEC Officers Appointment (PDF)**
- **Clinical Rotation & Skills Lab QA Framework (PDF)**
- **HEC Proforma-1 Teacher & Course Evaluation Form (PDF)**
- Live document search bar and category filter.
- Document preview modal with an embedded PDF viewer.

### 6. KMU Approved Quality Targets (2025–2026)
Officially approved by the **51st Syndicate Meeting of Khyber Medical University Peshawar** on 23-11-2025 (Ref: `No. KMU/SA&A/51st Syndicate/2025/6114`, Dated: 17/12/2025):
- **100 Cumulative Marks** across 5 Core Quality Indicators:
  1. **QEC Secretariat Establishment (20 Marks)**: Permanent office (10) & staff appointments (10).
  2. **Provision of Clinical & Lab Skills (26 Marks)**: Hospital facilities (13) & institute labs (13) with logbook & attendance evidence.
  3. **Students Feedback (16 Marks)**: Teacher evaluation (4), clinical feedback (4), surveys (4), and statutory student participation (4).
  4. **Empowering the QEC (23 Marks)**: KMU meetings (3), PNQAHE membership (4), media publicity (2), web update (2), QA event organizing (2), PNQAHE international conference (5), KMU regional workshops (5).
  5. **External Evaluation (15 Marks)**: College statistics HES data (5), accreditation & renewal (5), and KMU on-site visit facilitation (5).
- **QEC Rating Criteria Tiers**:
  - **Category W (85% – 100%)**: Top position award & Best Performers Certificate.
  - **Category X (68% – 84%)**: Letter of Appreciation issued.
  - **Category Y (51% – 67%)**: Minimum satisfactory baseline.
- **Terms of Reference (TORs)**: Portal submission deadline up to **15th July, 2026** on `https://faculty.kmu.edu.pk/institute/qec_report`.
- **Interactive Scanned Notification Modal**: Built-in 2-page high-resolution viewer for Page 1 & Page 2 of the official signed and stamped KMU notification.

### 7. Governance Organogram
- Hierarchy detailing Principal Office oversight, Director QEC, Deputy Director QA, and Clinical QA Coordinators.

### 8. QA Helpdesk & Contact Section
- Official college address on Main University Road, Kabal Swat.
- Working hours, contact numbers, email addresses (`qec@iconswat.com`, `info@iconswat.com`), and interactive query form.

---

## 🚀 How to Host at `qec.iconswat.com`

### Option A: Using cPanel / Plesk (Standard Web Hosting)
1. Log into your hosting control panel for `iconswat.com`.
2. Navigate to **Subdomains** (or **Domains**).
3. Create a new subdomain named: `qec` (which maps to `qec.iconswat.com`).
4. Set the document root folder to `public_html/qec` (or your subdomain directory).
5. Upload all the files and folders from this folder (`index.html`, `assets/`, etc.) into `public_html/qec`.
6. Visit `https://qec.iconswat.com` — your QEC website is live!

### Option B: Using Nginx / Apache Virtual Host
Point your server configuration to this directory:
```nginx
server {
    listen 80;
    server_name qec.iconswat.com;
    root /var/www/qec.iconswat.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📄 How to Replace the Placeholder PDF Documents
When you have finalized your signed and stamped official PDFs:
1. Rename your official PDF files to match the filenames in `assets/docs/`:
   - `Self_Assessment_Report_SAR_BSN.pdf`
   - `QEC_Targets_and_Action_Plan_2025_2026.pdf`
   - `Notification_QEC_Officers_Appointment.pdf`
2. Simply overwrite the existing files in `assets/docs/`.
3. All download links and preview buttons on the website will automatically serve your new official files.
