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

### 4. Feedback Elicitation Portals
Includes two interactive portals accessible via tabs and the navigation bar:
- **Clinical & Skills Lab Feedback Elicitation**:
  - Sub-switch to toggle between **Skills Lab Evaluation** and **Hospital Clinical Rotation Evaluation**.
  - Parameters: Mannequins and simulator condition, demonstrator guidance, time for hands-on practice, consumables availability, hygiene, and hospital preceptor mentorship.
  - Option to submit with student name or as **100% Anonymous**.
  - Instant validation, automated submission receipt generation with unique tracking ID (`CLIN-LAB-2025-XXXX`), and printable receipt slip.
- **Classes / Course & Teacher Feedback Elicitation**:
  - Full compliance with **HEC Quality Assurance Agency (QAA) Proforma-1**.
  - Rating metrics for teacher punctuality, syllabus completion, concept clarity, AV aids, and grading transparency.
  - Generates confirmation slip with tracking ID (`TEACH-QA-2025-XXXX`).

### 5. Document Downloads Section
Pre-configured with genuine, downloadable official PDF templates that can be viewed in the browser or downloaded with one click:
- **Self-Assessment Report (SAR) - BSN Program (PDF)**
- **QEC Strategic Targets & Action Plan 2025-2026 (PDF)**
- **Notification of QEC Officers Appointment (PDF)**
- **Clinical Rotation & Skills Lab QA Framework (PDF)**
- **HEC Proforma-1 Teacher & Course Evaluation Form (PDF)**
- Live document search bar and category filter.
- Document preview modal with an embedded PDF viewer.

### 6. Targets Timeline & Strategic Roadmap
- Visual 4-Quarter milestone roadmap for HEC compliance and quality enhancement.

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
