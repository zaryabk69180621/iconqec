/**
 * Quality Enhancement Cell (QEC) Website
 * Imperial College of Nursing, Kabal Swat
 * Target Subdomain: qec.iconswat.com
 * Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. HERO PHOTO CAROUSEL / SLIDER
       ========================================================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const sliderContainer = document.querySelector('.carousel-container');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayTimer = null;
    const autoPlayInterval = 6000; // 6 seconds per slide

    function goToSlide(index) {
        if (totalSlides === 0) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (index + totalSlides) % totalSlides;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoPlay();
        });
    });

    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoPlay);
        sliderContainer.addEventListener('mouseleave', startAutoPlay);

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', (e) => {
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

        // Toggle dropdown in mobile view
        document.querySelectorAll('.dropdown-toggle').forEach(dropToggle => {
            dropToggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 1080) {
                    e.preventDefault();
                    const parent = dropToggle.closest('.nav-dropdown');
                    if (parent) {
                        parent.classList.toggle('active');
                    }
                }
            });
        });
    }

    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (mainHeader) {
            if (window.scrollY > 30) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
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
    const newsFilterBtns = document.querySelectorAll('.news-filter-btn:not(.doc-filter-btn)');
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
       4. KMU TARGETS VIEW SWITCHER (CARDS VS MATRIX TABLE)
       ========================================================================== */
    const viewCardsBtn = document.getElementById('viewCardsBtn');
    const viewTableBtn = document.getElementById('viewTableBtn');
    const kmuCardsView = document.getElementById('kmuCardsView');
    const kmuTableView = document.getElementById('kmuTableView');

    if (viewCardsBtn && viewTableBtn && kmuCardsView && kmuTableView) {
        viewCardsBtn.addEventListener('click', () => {
            viewCardsBtn.classList.add('active');
            viewTableBtn.classList.remove('active');
            kmuCardsView.style.display = 'block';
            kmuTableView.style.display = 'none';
        });

        viewTableBtn.addEventListener('click', () => {
            viewTableBtn.classList.add('active');
            viewCardsBtn.classList.remove('active');
            kmuCardsView.style.display = 'none';
            kmuTableView.style.display = 'block';
        });
    }

    /* ==========================================================================
       5. KMU OFFICIAL NOTIFICATION SCAN MODAL VIEWER
       ========================================================================== */
    const kmuScanModal = document.getElementById('kmuScanModal');
    const kmuScanModalClose = document.getElementById('kmuScanModalClose');
    const btnViewKmuScan = document.getElementById('btnViewKmuScan');
    const newsOpenKmuScanBtn = document.getElementById('newsOpenKmuScanBtn');
    const btnPreviewKmuScanDoc = document.getElementById('btnPreviewKmuScanDoc');

    const btnPage1 = document.getElementById('btnPage1');
    const btnPage2 = document.getElementById('btnPage2');
    const kmuScanImg = document.getElementById('kmuScanImg');

    function openKmuScanModal(page = 1) {
        if (kmuScanModal) {
            setKmuScanPage(page);
            kmuScanModal.classList.add('active');
        }
    }

    function closeKmuScanModal() {
        if (kmuScanModal) {
            kmuScanModal.classList.remove('active');
        }
    }

    function setKmuScanPage(pageNum) {
        if (!kmuScanImg) return;
        if (pageNum === 1) {
            kmuScanImg.src = 'assets/images/kmu-targets-page-1.png';
            kmuScanImg.alt = 'KMU Approved Targets Page 1 (Indicators 1 to 4.4)';
            if (btnPage1) btnPage1.classList.add('active');
            if (btnPage2) btnPage2.classList.remove('active');
        } else {
            kmuScanImg.src = 'assets/images/kmu-targets-page-2.png';
            kmuScanImg.alt = 'KMU Approved Targets Page 2 (Indicators 4.5 to 5.3, Rating & TORs)';
            if (btnPage1) btnPage1.classList.remove('active');
            if (btnPage2) btnPage2.classList.add('active');
        }
    }

    if (btnViewKmuScan) btnViewKmuScan.addEventListener('click', () => openKmuScanModal(1));
    if (newsOpenKmuScanBtn) newsOpenKmuScanBtn.addEventListener('click', () => openKmuScanModal(1));
    if (btnPreviewKmuScanDoc) btnPreviewKmuScanDoc.addEventListener('click', () => openKmuScanModal(1));

    if (btnPage1) btnPage1.addEventListener('click', () => setKmuScanPage(1));
    if (btnPage2) btnPage2.addEventListener('click', () => setKmuScanPage(2));

    if (kmuScanModalClose) {
        kmuScanModalClose.addEventListener('click', closeKmuScanModal);
    }

    /* ==========================================================================
       6. CONTACT & HELPDESK FORM
       ========================================================================== */
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

    const qecContactForm = document.getElementById('qecContactForm');
    if (qecContactForm) {
        qecContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you! Your query has been forwarded to the QEC Secretariat.');
            qecContactForm.reset();
        });
    }

    /* ==========================================================================
       7. DOWNLOADS SECTION SEARCH & FILTER
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
       8. OFFICIAL NOTIFICATIONS MODAL
       ========================================================================== */
    const notifModal = document.getElementById('notifModal');
    const notifModalTitle = document.getElementById('notifModalTitle');
    const notifModalBody = document.getElementById('notifModalBody');
    const notifModalClose = document.getElementById('notifModalClose');
    const notifReadBtns = document.querySelectorAll('.read-notif-btn[data-notif]');

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
                    <li style="margin-bottom:0.5rem;">To design, administer, and analyze comprehensive in-person student feedback elicitation for Clinical Rotations, Skills & Simulation Labs, and Academic Classrooms.</li>
                    <li style="margin-bottom:0.5rem;">To conduct periodic audits of the Nursing Skills Lab, Anatomy Museum, Library, and affiliated Clinical Teaching Hospital facilities.</li>
                    <li style="margin-bottom:0.5rem;">To maintain the official public institutional portal at <strong>qec.iconswat.com</strong> for quality transparency and public dissemination of KMU approved QA targets.</li>
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
                <p>The Competent Authority is pleased to notify the appointment of the following officers and faculty members to constitute the executive team of the Quality Enhancement Cell (QEC) at Imperial College of Nursing, Kabal Swat (KMU Approved Indicator 1.2):</p>
                <div style="margin:1.5rem 0; overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <tr style="background:var(--light-gray); text-align:left;">
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Designation</th>
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Appointed Officer</th>
                            <th style="padding:0.75rem; border:1px solid #cbd5e1;">Role in QEC</th>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Head of QEC</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Prof. / Dr. QA In-charge</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Overall Strategic QA Leadership & KMU Liaison</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Officers QEC (2)</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Senior Nursing Faculty Officers</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">SAR Coordination & In-Person Student Feedback</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Clinical QA Coordinator</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Clinical Nursing Supervisor</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Skills Lab & Hospital Rotation Audits</td>
                        </tr>
                        <tr>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;"><strong>Support Staff / IT Officer</strong></td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">IT / Record Assistant</td>
                            <td style="padding:0.75rem; border:1px solid #cbd5e1;">Management of qec.iconswat.com & Data Archiving</td>
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
                <p>Notice is hereby given that the Quality Enhancement Cell (QEC) will be conducting its bi-annual comprehensive inspection and quality audit across all practical learning stations (KMU Indicator 2):</p>
                <ul style="list-style:disc; margin-left:1.5rem; margin-bottom:1.5rem;">
                    <li><strong>Skills Simulation Lab:</strong> Calibration of CPR mannequins, intravenous simulators, OSCE station consumables, and sterilization equipment.</li>
                    <li><strong>Clinical Teaching Hospital:</strong> Student clinical logbook verification, preceptor interaction records, patient-to-student exposure metrics, and occupational safety measures.</li>
                    <li><strong>Feedback Mechanism:</strong> Standardized physical evaluation proformas administered directly in wards and labs by QEC Secretariat.</li>
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
       9. FAQ ACCORDION
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
       10. QUICK PREVIEW DOCUMENT MODAL
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

    console.log('ICON QEC Portal Initialized Successfully for qec.iconswat.com (KMU Syndicate Targets 2025-2026)');
});
