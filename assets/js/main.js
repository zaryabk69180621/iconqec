/**
 * IMPERIAL COLLEGE OF NURSING, KABAL SWAT
 * Quality Enhancement Cell (QEC) - Official Portal Script
 * Target: qec.iconswat.com
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. HERO PHOTO CAROUSEL / SLIDER
       ========================================================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const carouselContainer = document.querySelector('.carousel-container');

    let currentSlide = 0;
    let slideInterval = null;
    const slideDuration = 6000; // 6 seconds per slide

    function goToSlide(index) {
        if (!slides.length) return;
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startAutoPlay();
        });
    });

    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 40) {
                nextSlide();
                startAutoPlay();
            }
            if (touchEndX > touchStartX + 40) {
                prevSlide();
                startAutoPlay();
            }
        }
    }

    startAutoPlay();

    /* ==========================================================================
       2. NAVIGATION & MOBILE DRAWER
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const mainHeader = document.querySelector('.main-header');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       3. NEWS & NOTIFICATIONS FILTER
       ========================================================================== */
    const newsFilterBtns = document.querySelectorAll('.news-filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    newsFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            newsFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            newsCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       4. FEEDBACK SECTION TABS & SUB-SWITCH
       ========================================================================== */
    // Main Feedback Tabs (Clinical & Skills vs Classes Feedback)
    const feedbackTabBtns = document.querySelectorAll('.feedback-tab-btn');
    const feedbackTabPanels = document.querySelectorAll('.feedback-tab-panel');

    feedbackTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            feedbackTabBtns.forEach(b => b.classList.remove('active'));
            feedbackTabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Sub-switch for Skills Lab vs Clinical Rotation Feedback
    const subSwitchBtns = document.querySelectorAll('.sub-switch-btn');
    const skillsLabQuestions = document.getElementById('skillsLabQuestions');
    const clinicalQuestions = document.getElementById('clinicalQuestions');
    const clinicalSubCategoryInput = document.getElementById('clinicalSubCategoryInput');

    subSwitchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subSwitchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.getAttribute('data-mode');
            if (clinicalSubCategoryInput) {
                clinicalSubCategoryInput.value = mode;
            }

            if (mode === 'skills') {
                if (skillsLabQuestions) skillsLabQuestions.style.display = 'block';
                if (clinicalQuestions) clinicalQuestions.style.display = 'none';
            } else {
                if (skillsLabQuestions) skillsLabQuestions.style.display = 'none';
                if (clinicalQuestions) clinicalQuestions.style.display = 'block';
            }
        });
    });

    /* ==========================================================================
       5. FORM SUBMISSIONS & VALIDATION
       ========================================================================== */
    // Helper function to generate tracking ID
    function generateTrackingId(prefix = 'ICON-QEC') {
        const rand = Math.floor(1000 + Math.random() * 9000);
        const year = new Date().getFullYear();
        return `${prefix}-${year}-${rand}`;
    }

    // Toast alert helper
    function showToast(message, isSuccess = true) {
        let toast = document.getElementById('toastAlert');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toastAlert';
            toast.className = 'toast-alert';
            document.body.appendChild(toast);
        }

        toast.innerHTML = `
            <i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }

    // Modal Receipt Helper
    const receiptModal = document.getElementById('receiptModal');
    const receiptDetails = document.getElementById('receiptDetails');
    const receiptCloseBtn = document.getElementById('receiptCloseBtn');

    if (receiptCloseBtn && receiptModal) {
        receiptCloseBtn.addEventListener('click', () => {
            receiptModal.classList.remove('active');
        });
    }

    // 1. Clinical & Skills Lab Form Submission
    const clinicalFeedbackForm = document.getElementById('clinicalFeedbackForm');
    if (clinicalFeedbackForm) {
        clinicalFeedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const program = document.getElementById('clinProgram').value;
            const semester = document.getElementById('clinSemester').value;
            const subCategory = document.getElementById('clinicalSubCategoryInput').value;
            const anonymous = document.getElementById('clinAnonCheckbox').checked;
            const studentName = anonymous ? 'Anonymous Nursing Student' : (document.getElementById('clinStudentName').value || 'Registered Student');
            const comments = document.getElementById('clinComments').value || 'No additional remarks provided.';

            const trackingId = generateTrackingId('CLIN-LAB');
            const submitDate = new Date().toLocaleString();

            // Populate receipt modal
            if (receiptDetails && receiptModal) {
                receiptDetails.innerHTML = `
                    <div class="receipt-box">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #cbd5e1; padding-bottom:0.75rem;">
                            <div>
                                <span class="badge badge-red">Confirmed Record</span>
                                <h4 style="margin:0.25rem 0 0 0; color:var(--deep-blue);">Evaluation Receipt</h4>
                            </div>
                            <div style="text-align:right;">
                                <strong style="color:var(--primary-red); font-size:1.1rem; font-family:monospace;">${trackingId}</strong><br>
                                <small style="color:var(--text-muted);">${submitDate}</small>
                            </div>
                        </div>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Category:</strong> ${subCategory === 'skills' ? 'Skills & Simulation Lab Training' : 'Hospital Clinical Rotation'}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Academic Program:</strong> ${program}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Semester / Cohort:</strong> ${semester}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Student Identity:</strong> ${studentName} ${anonymous ? '<span class="confidential-tag" style="margin-left:0.5rem;"><i class="fas fa-lock"></i> Protected</span>' : ''}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Suggestions / Notes:</strong> "${comments}"</p>
                        <div style="margin-top:1.25rem; padding:0.75rem; background:rgba(42,55,125,0.06); border-radius:6px; font-size:0.82rem; color:var(--deep-blue);">
                            <i class="fas fa-shield-alt"></i> Recorded in Imperial College of Nursing QEC Quality Database. Used for semester clinical audits & lab equipment calibration.
                        </div>
                    </div>
                `;
                receiptModal.classList.add('active');
            }

            showToast('Feedback submitted successfully! Thank you for enhancing our clinical standards.');
            clinicalFeedbackForm.reset();
        });
    }

    // 2. Classes / Course & Teacher Feedback Form Submission
    const classroomFeedbackForm = document.getElementById('classroomFeedbackForm');
    if (classroomFeedbackForm) {
        classroomFeedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const program = document.getElementById('classProgram').value;
            const semester = document.getElementById('classSemester').value;
            const courseName = document.getElementById('courseName').value || 'Specified Course';
            const teacherName = document.getElementById('teacherName').value || 'Faculty Instructor';
            const comments = document.getElementById('classComments').value || 'Constructive feedback recorded.';

            const trackingId = generateTrackingId('TEACH-QA');
            const submitDate = new Date().toLocaleString();

            if (receiptDetails && receiptModal) {
                receiptDetails.innerHTML = `
                    <div class="receipt-box">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #cbd5e1; padding-bottom:0.75rem;">
                            <div>
                                <span class="badge badge-blue">HEC Proforma-1 Form</span>
                                <h4 style="margin:0.25rem 0 0 0; color:var(--deep-blue);">Teacher & Course Feedback Slip</h4>
                            </div>
                            <div style="text-align:right;">
                                <strong style="color:var(--deep-blue); font-size:1.1rem; font-family:monospace;">${trackingId}</strong><br>
                                <small style="color:var(--text-muted);">${submitDate}</small>
                            </div>
                        </div>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Course / Subject:</strong> ${courseName}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Faculty Instructor:</strong> ${teacherName}</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Program & Semester:</strong> ${program} (${semester})</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Evaluation Standard:</strong> HEC Quality Assurance Agency (QAA) Compliance</p>
                        <p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong>Qualitative Remarks:</strong> "${comments}"</p>
                        <div style="margin-top:1.25rem; padding:0.75rem; background:rgba(194,32,40,0.06); border-radius:6px; font-size:0.82rem; color:var(--primary-red);">
                            <i class="fas fa-lock"></i> Strictly Confidential. Aggregated ratings will be reflected in the Annual Self-Assessment Report (SAR).
                        </div>
                    </div>
                `;
                receiptModal.classList.add('active');
            }

            showToast('Course & Teacher evaluation submitted successfully! Thank you.');
            classroomFeedbackForm.reset();
        });
    }

    // 3. Contact & Helpdesk Form
    const qecContactForm = document.getElementById('qecContactForm');
    if (qecContactForm) {
        qecContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you! Your query has been forwarded to the QEC Secretariat.');
            qecContactForm.reset();
        });
    }

    /* ==========================================================================
       6. DOWNLOADS SECTION SEARCH & FILTER
       ========================================================================== */
    const docSearchInput = document.getElementById('docSearchInput');
    const docFilterBtns = document.querySelectorAll('.doc-filter-btn');
    const downloadCards = document.querySelectorAll('.download-card');

    function filterDocs() {
        const query = (docSearchInput ? docSearchInput.value : '').toLowerCase().trim();
        const activeBtn = document.querySelector('.doc-filter-btn.active');
        const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

        downloadCards.forEach(card => {
            const title = (card.querySelector('h4') ? card.querySelector('h4').textContent : '').toLowerCase();
            const desc = (card.querySelector('.doc-desc') ? card.querySelector('.doc-desc').textContent : '').toLowerCase();
            const category = card.getAttribute('data-category') || '';

            const matchesQuery = !query || title.includes(query) || desc.includes(query);
            const matchesCategory = activeFilter === 'all' || category === activeFilter;

            if (matchesQuery && matchesCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (docSearchInput) {
        docSearchInput.addEventListener('input', filterDocs);
    }

    docFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            docFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterDocs();
        });
    });

    /* ==========================================================================
       7. OFFICIAL NOTIFICATIONS MODAL
       ========================================================================== */
    const notifModal = document.getElementById('notifModal');
    const notifModalTitle = document.getElementById('notifModalTitle');
    const notifModalBody = document.getElementById('notifModalBody');
    const notifModalClose = document.getElementById('notifModalClose');
    const notifReadBtns = document.querySelectorAll('.read-notif-btn');

    const notificationData = {
        'establishment': {
            title: 'OFFICIAL NOTIFICATION: ESTABLISHMENT OF QEC OFFICE',
            ref: 'ICON/ADMIN/EST/2025/104',
            date: 'August 15, 2025',
            content: `
                <div style="text-align:center; margin-bottom:1.5rem; border-bottom:2px solid var(--primary-red); padding-bottom:1rem;">
                    <h3 style="color:var(--deep-blue); margin-bottom:0.25rem;">IMPERIAL COLLEGE OF NURSING</h3>
                    <p style="margin:0; font-weight:600; color:var(--text-dark);">Kabal, Swat — Khyber Pakhtunkhwa, Pakistan</p>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Affiliated with Khyber Medical University (KMU) & Recognized by PN&MC</p>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem; font-size:0.9rem;">
                    <span><strong>Ref No:</strong> ICON/ADMIN/EST/2025/104</span>
                    <span><strong>Dated:</strong> August 15, 2025</span>
                </div>
                <h4 style="text-align:center; text-decoration:underline; margin-bottom:1.5rem; color:var(--primary-red);">NOTIFICATION</h4>
                <p>In pursuant to the guidelines of the <strong>Higher Education Commission (HEC) Pakistan</strong> and <strong>Khyber Medical University (KMU) Quality Assurance Agency (QAA)</strong>, it is hereby notified that the <strong>Quality Enhancement Cell (QEC)</strong> of Imperial College of Nursing Kabal, Swat has been formally established with immediate effect.</p>
                <p>The QEC shall function as an independent quality assurance monitoring body directly accountable to the Executive Directorate and Principal, with the following mandate:</p>
                <ul style="list-style:disc; margin-left:1.5rem; margin-bottom:1.25rem; font-size:0.95rem;">
                    <li style="margin-bottom:0.5rem;">To institute and conduct regular Self-Assessment Process (SAP) across all nursing programs including Generic BSN and Post-RN BSN.</li>
                    <li style="margin-bottom:0.5rem;">To design, administer, and analyze comprehensive student feedback elicitation for Clinical Rotations, Skills & Simulation Labs, and Academic Classrooms.</li>
                    <li style="margin-bottom:0.5rem;">To conduct periodic audits of the Nursing Skills Lab, Anatomy Museum, Library, and affiliated Clinical Teaching Hospital facilities.</li>
                    <li style="margin-bottom:0.5rem;">To maintain the official public institutional portal at <strong>qec.iconswat.com</strong> for quality transparency and public dissemination of QA targets.</li>
                </ul>
                <div style="margin-top:2rem; display:flex; justify-content:space-between; align-items:flex-end;">
                    <div>
                        <small style="color:var(--text-muted);">Copy forwarded to:<br>1. Worthy Principal Office<br>2. Director QEC, KMU Peshawar<br>3. Registrar, PN&MC Islamabad<br>4. Notice Board / College Portal</small>
                    </div>
                    <div style="text-align:center;">
                        <p style="margin-bottom:0.25rem;"><strong>Principal / Managing Director</strong></p>
                        <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Imperial College of Nursing, Kabal Swat</p>
                    </div>
                </div>
            `
        },
        'appointment': {
            title: 'OFFICE ORDER: APPOINTMENT OF QEC OFFICERS',
            ref: 'ICON/QEC/APPT/2025/88',
            date: 'August 20, 2025',
            content: `
                <div style="text-align:center; margin-bottom:1.5rem; border-bottom:2px solid var(--deep-blue); padding-bottom:1rem;">
                    <h3 style="color:var(--deep-blue); margin-bottom:0.25rem;">IMPERIAL COLLEGE OF NURSING</h3>
                    <p style="margin:0; font-weight:600; color:var(--text-dark);">Office of the Principal / Executive Director</p>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Main University Road, Kabal Swat</p>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem; font-size:0.9rem;">
                    <span><strong>Ref No:</strong> ICON/QEC/APPT/2025/88</span>
                    <span><strong>Dated:</strong> August 20, 2025</span>
                </div>
                <h4 style="text-align:center; text-decoration:underline; margin-bottom:1.5rem; color:var(--deep-blue);">OFFICE ORDER: NOTIFICATION OF QEC TEAM</h4>
                <p>The Competent Authority is pleased to notify the appointment of the following officers and faculty members to constitute the executive team of the Quality Enhancement Cell (QEC) at Imperial College of Nursing, Kabal Swat:</p>
                <div style="margin:1.5rem 0; overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <tr style="background:var(--light-gray); text-align:left;">
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Designation</th>
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Appointed Officer</th>
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Role in QEC</th>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Director QEC</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Prof. / Dr. QA In-charge</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Overall Strategic QA Leadership & KMU Liaison</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Deputy Director / QEC Officer</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Senior Nursing Faculty</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">SAR Coordination & Student Feedback Elicitation</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Clinical QA Coordinator</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Clinical Nursing Supervisor</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Skills Lab & Hospital Rotation Audits</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Data Analyst & Portal In-charge</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">IT / Institutional Research Officer</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Management of qec.iconswat.com Repository</td>
                        </tr>
                    </table>
                </div>
                <p>All departmental heads, lab supervisors, and clinical instructors are directed to extend full cooperation to the QEC officers in executing their institutional QA mandate.</p>
                <div style="margin-top:2rem; text-align:right;">
                    <p style="margin-bottom:0.25rem;"><strong>By Order of the Principal</strong></p>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Imperial College of Nursing, Kabal Swat</p>
                </div>
            `
        },
        'audit': {
            title: 'QA AUDIT: CLINICAL ROTATION & SKILLS LAB REVIEW',
            ref: 'ICON/QEC/AUDIT/2025/32',
            date: 'September 12, 2025',
            content: `
                <div style="text-align:center; margin-bottom:1.5rem; border-bottom:2px solid var(--primary-red); padding-bottom:1rem;">
                    <h3 style="color:var(--deep-blue); margin-bottom:0.25rem;">IMPERIAL COLLEGE OF NURSING</h3>
                    <p style="margin:0; font-weight:600; color:var(--text-dark);">Quality Enhancement Cell — Clinical QA Wing</p>
                </div>
                <h4 style="text-align:center; color:var(--primary-red); margin-bottom:1rem;">SCHEDULE OF CLINICAL & SKILLS LAB QUALITY AUDIT</h4>
                <p>Notice is hereby given that the Quality Enhancement Cell (QEC) will be conducting its bi-annual comprehensive inspection and quality audit across all practical learning stations:</p>
                <ul style="list-style:disc; margin-left:1.5rem; margin-bottom:1.5rem;">
                    <li><strong>Skills Simulation Lab:</strong> Calibration of CPR mannequins, intravenous simulators, OSCE station consumables, and sterilization equipment.</li>
                    <li><strong>Clinical Teaching Hospital:</strong> Student clinical logbook verification, preceptor interaction records, patient-to-student exposure metrics, and occupational safety measures.</li>
                    <li><strong>Feedback Mechanism:</strong> Student elicitation forms will be deployed via the digital portal at qec.iconswat.com.</li>
                </ul>
            `
        }
    };

    notifReadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const notifKey = btn.getAttribute('data-notif');
            const data = notificationData[notifKey];

            if (data && notifModal && notifModalTitle && notifModalBody) {
                notifModalTitle.textContent = data.title;
                notifModalBody.innerHTML = data.content;
                notifModal.classList.add('active');
            }
        });
    });

    if (notifModalClose && notifModal) {
        notifModalClose.addEventListener('click', () => {
            notifModal.classList.remove('active');
        });
    }

    // Close modals on clicking backdrop
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    /* ==========================================================================
       8. FAQ ACCORDION
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    /* ==========================================================================
       9. QUICK PREVIEW DOCUMENT MODAL
       ========================================================================== */
    const docPreviewBtns = document.querySelectorAll('.preview-doc-btn');
    const docModal = document.getElementById('docPreviewModal');
    const docModalTitle = document.getElementById('docModalTitle');
    const docModalFrame = document.getElementById('docModalFrame');
    const docModalDownload = document.getElementById('docModalDownload');
    const docModalClose = document.getElementById('docModalClose');

    docPreviewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const docUrl = btn.getAttribute('data-url');
            const docTitle = btn.getAttribute('data-title');

            if (docModal && docModalTitle && docModalFrame && docModalDownload) {
                docModalTitle.textContent = docTitle || 'Official QEC Document';
                docModalFrame.src = docUrl;
                docModalDownload.href = docUrl;
                docModal.classList.add('active');
            }
        });
    });

    if (docModalClose && docModal) {
        docModalClose.addEventListener('click', () => {
            docModal.classList.remove('active');
            if (docModalFrame) docModalFrame.src = '';
        });
    }

    // Print Receipt Helper
    const printReceiptBtn = document.getElementById('printReceiptBtn');
    if (printReceiptBtn) {
        printReceiptBtn.addEventListener('click', () => {
            window.print();
        });
    }

    console.log('ICON QEC Portal Initialized Successfully for qec.iconswat.com');
});
