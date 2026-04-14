/* ===================================
   WEBSITE TEMPLATE - JavaScript Utilities
   =================================== */

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initHeroVideo();
    initHeroAiProposal();
    initStickyCtaBar();
    initSmoothScroll();
    initScrollEffects();
    initForms();
    initChatbot();
    initExternalLinks();
    initGlowTrack();
    initReviewsCarousel();
    initGalleryFilterLightbox();
});

/* ===================================
   HERO AI PROPOSAL BAR (home)
   =================================== */
function initHeroAiProposal() {
    const form = document.getElementById('heroAiProposalForm');
    const input = document.getElementById('heroAiProposalInput');
    const bar = form ? form.querySelector('.hero-ai-proposal-bar') : null;

    if (!form || !input || !bar) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) {
            bar.classList.remove('hero-ai-proposal-bar--pulse');
            void bar.offsetWidth;
            bar.classList.add('hero-ai-proposal-bar--pulse');
            input.focus();
            return;
        }
        try {
            sessionStorage.setItem('heroProposalBrief', text);
        } catch (err) {
            /* ignore quota / private mode */
        }
        window.location.href = 'book/index.html';
    });
}

/* ===================================
   CHATBOT WIDGET
   =================================== */
function initChatbot() {
    const toggleBtn = document.getElementById('chatbotToggle');
    const closeBtn = document.getElementById('chatbotClose');
    const widget = document.getElementById('chatbotWidget');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const messagesBox = document.getElementById('chatbotMessages');

    if (!toggleBtn || !widget || !form || !input || !messagesBox) return;

    function toggleChat() {
        const isHidden = !widget.classList.contains('active');

        if (isHidden) {
            widget.classList.add('active');
            toggleBtn.classList.add('active');
            toggleBtn.classList.remove('chatbot-toggle--attention');
            setTimeout(() => input.focus(), 300);
        } else {
            widget.classList.remove('active');
            toggleBtn.classList.remove('active');
        }
    }

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chatbot-msg ${isUser ? 'chatbot-msg--user' : 'chatbot-msg--bot'}`;
        msgDiv.innerHTML = `<p>${text}</p>`;
        messagesBox.appendChild(msgDiv);
        messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    toggleBtn.addEventListener('click', toggleChat);

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            widget.classList.remove('active');
            toggleBtn.classList.remove('active');
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, true);
        input.value = '';

        // TODO: Replace this mock response with Claude API call
        setTimeout(() => {
            addMessage("Thanks! One of our team will follow up. Call us at (205) 575-0176 for faster service.");
        }, 1000);
    });

    // Auto-open attention pulse after delay if haven't visited before
    if (!sessionStorage.getItem('chatbotSeen')) {
        setTimeout(() => {
            if (!widget.classList.contains('active')) {
                toggleBtn.classList.add('chatbot-toggle--attention');
            }
        }, 8000);
        sessionStorage.setItem('chatbotSeen', 'true');
    }
}

/* ===================================
   HERO VIDEO CAROUSEL
   =================================== */
function initHeroVideo() {
    const videos = document.querySelectorAll('.hero-video');
    if (!videos.length) return;

    const overlapTime = 1.5;

    const firstVideo = videos[0];
    firstVideo.play().catch(error => {
        console.log("Video autoplay prevented:", error);
    });

    videos.forEach((video, index) => {
        video.addEventListener('timeupdate', () => {
            const timeRemaining = video.duration - video.currentTime;

            if (timeRemaining < overlapTime && !video.dataset.transitioning && !video.paused) {
                video.dataset.transitioning = "true";

                const nextIndex = (index + 1) % videos.length;
                const nextVideo = videos[nextIndex];

                nextVideo.currentTime = 0;
                nextVideo.classList.add('active');
                nextVideo.play().catch(e => console.log("Next video play prevented:", e));

                video.classList.remove('active');

                setTimeout(() => {
                    video.pause();
                    video.currentTime = 0;
                    delete video.dataset.transitioning;
                }, overlapTime * 1000);
            }
        });

        video.addEventListener('ended', () => {
            if (!video.dataset.transitioning) {
                const nextIndex = (index + 1) % videos.length;
                const nextVideo = videos[nextIndex];

                video.classList.remove('active');
                nextVideo.classList.add('active');
                nextVideo.play().catch(e => console.log("Next video play prevented:", e));
            }
        });
    });
}

/* ===================================
   STICKY CTA BAR
   =================================== */
function initStickyCtaBar() {
    const bar = document.getElementById('stickyCtaBar');
    if (!bar) return;

    const threshold = 400;
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const scrollY = window.pageYOffset;

        if (scrollY > threshold) {
            bar.classList.add('visible');
        } else {
            bar.classList.remove('visible');
        }
        lastScroll = scrollY;
    }, { passive: true });
}

/* ===================================
   NAVIGATION
   =================================== */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mqMobileNav = window.matchMedia('(max-width: 768px)');

    function closeServicesDropdown() {
        document.querySelectorAll('.nav-item--dropdown.is-open').forEach((item) => {
            item.classList.remove('is-open');
            const btn = item.querySelector('.nav-link--dropdown');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    function closeMobileMenu() {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        closeServicesDropdown();
    }

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const wasOpen = navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(navMenu.classList.contains('active')));
            if (wasOpen) closeServicesDropdown();
        });

        navLinks.forEach((link) => {
            if (link.classList.contains('nav-link--dropdown')) {
                link.addEventListener('click', function (e) {
                    if (mqMobileNav.matches) {
                        // Mobile: Toggle dropdown
                        e.preventDefault();
                        const item = this.closest('.nav-item--dropdown');
                        if (!item) return;
                        const willOpen = !item.classList.contains('is-open');
                        document.querySelectorAll('.nav-item--dropdown').forEach((other) => {
                            if (other !== item) {
                                other.classList.remove('is-open');
                                const b = other.querySelector('.nav-link--dropdown');
                                if (b) b.setAttribute('aria-expanded', 'false');
                            }
                        });
                        if (willOpen) {
                            item.classList.add('is-open');
                            this.setAttribute('aria-expanded', 'true');
                        } else {
                            item.classList.remove('is-open');
                            this.setAttribute('aria-expanded', 'false');
                        }
                    } else {
                        // Desktop: Navigate to services index
                        const isServices = this.textContent.trim().toLowerCase().includes('service');
                        if (isServices) {
                            // Find the closest way to services/index.html (depends on page depth)
                            const currentPath = window.location.pathname;
                            
                            // Let the standard click behavior execute if it's already an <a>, 
                            // otherwise enforce navigation.
                            if (this.tagName !== 'A') {
                                // Determine path relative
                                if (currentPath.includes('/services/')) {
                                    window.location.href = '../services/index.html';
                                } else if (currentPath.includes('/contact/') || currentPath.includes('/our-work/') || currentPath.includes('/blog/') || currentPath.includes('/about/')) {
                                    window.location.href = '../services/index.html';
                                } else {
                                    window.location.href = 'services/index.html';
                                }
                            }
                        }
                    }
                });
                return;
            }
            link.addEventListener('click', function () {
                closeMobileMenu();
            });
        });

        navMenu.querySelectorAll('.nav-dropdown-link').forEach((a) => {
            a.addEventListener('click', function () {
                closeMobileMenu();
            });
        });

        document.addEventListener('click', function (e) {
            if (navbar && !navbar.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    mqMobileNav.addEventListener('change', () => {
        if (!mqMobileNav.matches) closeServicesDropdown();
    });

    // Navbar scroll effect
    if (!navbar) return;
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ===================================
   SMOOTH SCROLL
   =================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navEl = document.getElementById('navbar');
                const navbarHeight = navEl ? navEl.offsetHeight : 0;
                const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   SCROLL EFFECTS
   =================================== */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.service-card, .visual-card, .stat, .contact-card, .gallery-item, .section-header:not(.section-header--on-dark), .blog-card, .value-card, .premium-split-wrap'
    );

    const siblingIndex = new Map();
    animatedElements.forEach((el) => {
        const parent = el.parentElement;
        const count = siblingIndex.get(parent) || 0;
        const delay = Math.min(count * 80, 400);
        siblingIndex.set(parent, count + 1);

        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ===================================
   FORMS
   =================================== */
function initForms() {
    // Quote form
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(this, 'Quote request submitted! We\'ll be in touch soon.');
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const action = this.getAttribute('action') || '';
            if (action.includes('formspree.io') && !action.includes('YOUR_FORM_ID')) {
                submitToFormspree(this, 'Thank you! Your message has been sent.');
            } else {
                handleFormSubmit(this, 'Thank you! Your message has been sent.');
            }
        });
    }

    // Hero Quote Form Expansion
    const heroQuoteBtn = document.getElementById('heroQuoteBtn');
    const heroQuoteContainer = document.getElementById('heroQuoteFormContainer');
    const heroShortForm = document.getElementById('heroShortForm');

    if (heroQuoteBtn && heroQuoteContainer) {
        heroQuoteBtn.addEventListener('click', function () {
            // Hide button
            this.style.display = 'none';
            // Show form
            heroQuoteContainer.classList.add('expanded');
            // Focus first input
            setTimeout(() => {
                const firstInput = heroShortForm.querySelector('#heroName');
                if (firstInput) firstInput.focus();
            }, 300);
        });
    }

    if (heroShortForm) {
        heroShortForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const action = this.getAttribute('action') || '';
            if (action.includes('formspree.io') && !action.includes('YOUR_FORM_ID')) {
                submitToFormspree(this, 'Quote request received! We will call you shortly.');
            } else {
                handleFormSubmit(this, 'Quote request received! We will call you shortly.');
            }
        });
    }
}

function submitToFormspree(form, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                showNotification(successMessage, 'success');
                form.reset();
            } else {
                showNotification('Something went wrong. Please call us or email brian@briancamp.com.', 'error');
            }
        })
        .catch(() => {
            showNotification('Something went wrong. Please call us or email brian@briancamp.com.', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
}

function handleFormSubmit(form, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showNotification(successMessage, 'success');

        // Reset form
        form.reset();

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1500);
}

function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success'
            ? '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
            : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
        }
            </svg>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;

    // Add styles - uses CSS variable for primary color
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success, #525252)' : 'var(--destructive, #171717)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification-content svg {
                width: 24px;
                height: 24px;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .notification-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/* ===================================
   UTILITY FUNCTIONS
   =================================== */

// Phone number formatting (US format)
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        } else if (value.length >= 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        e.target.value = value;
    });
});

/* ===================================
   EXTERNAL LINK PROTECTION
   =================================== */
function initExternalLinks() {
    let recentlyOpened = false;
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (recentlyOpened) return;
            recentlyOpened = true;
            window.open(this.href, '_blank', 'noopener,noreferrer');
            setTimeout(() => { recentlyOpened = false; }, 1000);
        });
    });
}

/* ===================================
   MOUSE-TRACKING GLOW
   =================================== */
function initGlowTrack() {
    /* Omit .service-card — extra overflow:hidden from glow breaks image edges on home tiles */
    const selectors = '.btn, .btn-hero-cta, .btn-cta-outline';
    const elements = document.querySelectorAll(selectors);

    elements.forEach(el => {
        const glow = document.createElement('div');
        glow.className = 'glow-track';
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.appendChild(glow);

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.opacity = '1';
            glow.style.left = x + 'px';
            glow.style.top = y + 'px';
        });

        el.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    });
}

/* ===================================
   REVIEWS CAROUSEL
   =================================== */
function initReviewsCarousel() {
    document.querySelectorAll('[data-reviews-carousel]').forEach((carousel) => {
        const track = carousel.querySelector('[data-reviews-carousel-track]');
        if (!track) return;
        initOneReviewsCarousel(carousel, track);
    });
}

function initOneReviewsCarousel(carousel, track) {
    const gap = 24;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speed = reduceMotion ? 0 : 40;
    const originalCards = Array.from(track.querySelectorAll('.review-card'));
    if (!originalCards.length) return;

    originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    let totalOriginalWidth = 0;
    let offset = 0;
    let isDragging = false;
    let startX = 0;
    let dragStartOffset = 0;
    let lastTime = 0;
    let paused = false;

    function measure() {
        const first = track.querySelector('.review-card');
        if (!first) return;
        const cardWidth = first.offsetWidth;
        totalOriginalWidth = originalCards.length * (cardWidth + gap);
    }

    function wrapOffset() {
        if (totalOriginalWidth > 0) {
            offset = ((offset % totalOriginalWidth) + totalOriginalWidth) % totalOriginalWidth;
        }
    }

    function render() {
        track.style.transform = `translateX(${-offset}px)`;
    }

    function tick(timestamp) {
        if (!paused && !isDragging) {
            if (lastTime) {
                const delta = (timestamp - lastTime) / 1000;
                offset += speed * delta;
                wrapOffset();
                render();
            }
            lastTime = timestamp;
        } else {
            lastTime = 0;
        }
        requestAnimationFrame(tick);
    }

    function getPointerX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function onDragStart(e) {
        isDragging = true;
        startX = getPointerX(e);
        dragStartOffset = offset;
        carousel.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const diff = startX - getPointerX(e);
        offset = dragStartOffset + diff;
        wrapOffset();
        render();
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        carousel.classList.remove('dragging');
    }

    carousel.addEventListener('mousedown', onDragStart);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);

    carousel.addEventListener('touchstart', onDragStart, { passive: true });
    window.addEventListener('touchmove', onDragMove, { passive: true });
    window.addEventListener('touchend', onDragEnd);

    track.addEventListener('dragstart', (e) => e.preventDefault());
    track.addEventListener(
        'click',
        (e) => {
            if (Math.abs(offset - dragStartOffset) > 5) {
                e.preventDefault();
                e.stopPropagation();
            }
        },
        true
    );

    carousel.addEventListener('mouseenter', () => {
        paused = true;
    });
    carousel.addEventListener('mouseleave', () => {
        if (!isDragging) paused = false;
    });

    const onVis = () => {
        paused = document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);

    let resizeTimer;
    const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            measure();
            wrapOffset();
            render();
        }, 200);
    };
    window.addEventListener('resize', onResize);

    measure();
    render();
    requestAnimationFrame(tick);
}

/* ===================================
   GALLERY FILTER + LIGHTBOX
   =================================== */
function initGalleryFilterLightbox() {
    const toolbar = document.querySelector('.gallery-toolbar');
    const items = document.querySelectorAll('[data-gallery-item]');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    // Skip simple filter logic when the gallery pagination system is active.
    // The our-work page inline script handles filtering + pagination together.
    const hasPagination = document.getElementById('showMoreBtn');

    if (toolbar && items.length && !hasPagination) {
        const buttons = toolbar.querySelectorAll('.gallery-filter-btn');
        buttons.forEach((btn) => {
            btn.addEventListener('click', function () {
                const cat = this.getAttribute('data-filter') || 'all';
                buttons.forEach((b) => b.classList.remove('is-active'));
                this.classList.add('is-active');

                items.forEach((item) => {
                    const raw = item.getAttribute('data-category') || '';
                    const itemCats = raw.split(/\s+/).filter(Boolean);
                    const show = cat === 'all' || itemCats.includes(cat);
                    item.classList.toggle('gallery-item--hidden', !show);
                });
            });
        });
    }

    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.removeAttribute('src');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
        el.addEventListener('click', function () {
            const src = this.getAttribute('data-lightbox-src');
            const alt = this.getAttribute('data-lightbox-alt') || '';
            if (src && src.length > 2) openLightbox(src, alt);
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}

// Console branding
console.log('%cWaterstone Companies', 'font-size: 20px; font-weight: bold; color: #0A0A0A;');
console.log('%cOutdoor living, built to last.', 'font-size: 13px; color: #525252;');

/* ===================================
   COUNTER ANIMATION
   =================================== */
function initCounters() {
    const counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-count-to'));
        const suffix = el.getAttribute('data-count-suffix') || '';
        const prefix = el.getAttribute('data-count-prefix') || '';
        const duration = 1800;
        const start = performance.now();

        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = target * ease(progress);
            const display = target % 1 === 0
                ? Math.round(value).toLocaleString()
                : value.toFixed(1);
            el.textContent = prefix + display + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(el => observer.observe(el));
}

/* ===================================
   ENHANCED SCROLL REVEAL
   =================================== */
function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.revealDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}

// Bootstrap new features
document.addEventListener('DOMContentLoaded', function () {
    initCounters();
    initReveal();
});
