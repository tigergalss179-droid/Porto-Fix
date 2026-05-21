// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Clear previous timeout
    clearTimeout(scrollTimeout);
    
    // Update shadow based on scroll position
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    }
    
    // Hide/Show navbar based on scroll direction
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past 100px
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }
    
    lastScroll = currentScroll;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for children
            const children = entry.target.querySelectorAll('.info-card, .about-card, .skill-item, .portfolio-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
    animatedElements.forEach(el => observer.observe(el));
    
    // Observe sections for staggered children animation
    const sections = document.querySelectorAll('.quick-info, .about-content, .skills-content, .portfolio-content');
    sections.forEach(section => observer.observe(section));
    
    // Initialize card animations
    initCardAnimations();
});

// ===== SKILLS PROGRESS BAR ANIMATION =====
const skillsSection = document.querySelector('.skills-content');

if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillObserver.observe(skillsSection);
}

// ===== CV SKILLS ANIMATION =====
const cvSection = document.querySelector('.cv-content');

if (cvSection) {
    const cvSkillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.cv-skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                cvSkillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cvSkillObserver.observe(cvSection);
}

// ===== PORTFOLIO CARD HOVER EFFECT =====
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-12px) scale(1.02)';
        
        // Add tilt effect based on mouse position
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `translateY(-12px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `translateY(-12px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});

// ===== INFO CARD ANIMATION WITH TILT =====
function initCardAnimations() {
    const infoCards = document.querySelectorAll('.info-card, .about-card');

    infoCards.forEach(card => {
        // Set initial state for staggered animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            this.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            this.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// ===== TYPING EFFECT FOR TAGLINE (Optional Enhancement) =====
const tagline = document.querySelector('.hero-text .tagline');

if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }, 800);
}

// ===== PARALLAX EFFECT FOR HERO IMAGE =====
const heroImage = document.querySelector('.hero-image');

if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
    });
}

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
// This feature is disabled to prevent all menu items from getting underline on scroll
// Active state is now only set in HTML based on current page

// ===== BUTTON RIPPLE EFFECT WITH ENHANCED ANIMATION =====
const buttons = document.querySelectorAll('.btn, .btn-small');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add magnetic effect
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Add ripple CSS dynamically with enhanced styles
const style = document.createElement('style');
style.textContent = `
    .btn, .btn-small {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== LAZY LOADING IMAGES =====
// Disabled to prevent images from disappearing
// Images now load normally without fade animation

// ===== SCROLL TO TOP BUTTON WITH ENHANCED ANIMATION =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 16px;
    background: linear-gradient(135deg, #5D69E2, #8C4A9E);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    box-shadow: 0 8px 24px rgba(93, 105, 226, 0.3);
    backdrop-filter: blur(10px);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
        scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.transform = 'translateY(10px) scale(0.8)';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.1) rotate(10deg)';
    this.style.boxShadow = '0 12px 32px rgba(93, 105, 226, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    this.style.boxShadow = '0 8px 24px rgba(93, 105, 226, 0.3)';
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello! Welcome to Muhammad Galih Seto\'s Portfolio', 'color: #5D69E2; font-size: 20px; font-weight: bold;');
console.log('%cInterested in CyberSec and Networking', 'color: #7B5BB1; font-size: 14px;');
console.log('%c🎭 Easter Egg: Try clicking my photo on the homepage!', 'color: #8C4A9E; font-size: 12px; font-style: italic;');

// ===== SECRET PHOTO MODAL FUNCTIONS =====
function openSecretPhoto() {
    const modal = document.getElementById('secretPhotoModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add click hint animation to image wrapper
        const imageWrapper = document.querySelector('.hero-image .image-wrapper');
        if (imageWrapper) {
            imageWrapper.style.cursor = 'pointer';
        }
    }
}

function closeSecretPhoto() {
    const modal = document.getElementById('secretPhotoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('secretPhotoModal');
    if (event.target === modal) {
        closeSecretPhoto();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSecretPhoto();
    }
});

// ===== DARK THEME TOGGLE =====
function toggleDarkTheme() {
    const body = document.body;
    const themeText = document.getElementById('themeText');
    const themeBtn = document.querySelector('.theme-toggle-btn i');
    const heroImage = document.getElementById('heroProfileImage');
    
    body.classList.toggle('dark-theme');
    
    // Update button text and icon
    if (body.classList.contains('dark-theme')) {
        themeText.textContent = 'Aktifkan Light Mode';
        themeBtn.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
        
        // Change hero profile image to dark theme version
        if (heroImage) {
            heroImage.style.opacity = '0';
            setTimeout(() => {
                heroImage.src = 'https://i.imgur.com/LDwsSic.png';
                heroImage.style.opacity = '1';
            }, 300);
        }
        
        // Show success message
        showThemeNotification('🌙 Dark Mode Activated!');
    } else {
        themeText.textContent = 'Aktifkan Dark Mode';
        themeBtn.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
        
        // Change hero profile image back to light theme version
        if (heroImage) {
            heroImage.style.opacity = '0';
            setTimeout(() => {
                heroImage.src = 'https://i.imgur.com/mcW08Ge.jpg';
                heroImage.style.opacity = '1';
            }, 300);
        }
        
        // Show success message
        showThemeNotification('☀️ Light Mode Activated!');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeText = document.getElementById('themeText');
    const themeBtn = document.querySelector('.theme-toggle-btn i');
    const heroImage = document.getElementById('heroProfileImage');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeText) themeText.textContent = 'Aktifkan Light Mode';
        if (themeBtn) themeBtn.className = 'fas fa-sun';
        
        // Set dark theme profile image on load
        if (heroImage) {
            heroImage.src = 'https://i.imgur.com/LDwsSic.png';
        }
    }
    
    // Add cursor pointer hint to hero image
    const imageWrapper = document.querySelector('.hero-image .image-wrapper');
    if (imageWrapper) {
        imageWrapper.style.cursor = 'pointer';
        imageWrapper.title = '🎭 Click me for a surprise!';
    }
});

// Show theme notification
function showThemeNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #5D69E2, #8C4A9E);
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(93, 105, 226, 0.4);
        z-index: 9999;
        font-weight: 600;
        font-size: 1.1rem;
        animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 2500);
}

// ===== SMOOTH PAGE TRANSITIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Add page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== ENHANCED CURSOR EFFECT (SMOOTH VERSION) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #5D69E2;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    transform: translate(-50%, -50%);
    display: none;
    will-change: transform;
`;

const cursorDot = document.createElement('div');
cursorDot.className = 'custom-cursor-dot';
cursorDot.style.cssText = `
    width: 6px;
    height: 6px;
    background: #5D69E2;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, background 0.3s ease;
    transform: translate(-50%, -50%);
    display: none;
    will-change: transform;
`;

document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

// Only show custom cursor on desktop
if (window.innerWidth > 768) {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
    
    // Smooth cursor movement using lerp (linear interpolation)
    let cursorPos = { x: 0, y: 0 };
    let cursorDotPos = { x: 0, y: 0 };
    let mousePos = { x: 0, y: 0 };
    
    document.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
    });
    
    // Smooth animation loop
    function animateCursor() {
        // Lerp for smooth following (cursor ring)
        cursorPos.x += (mousePos.x - cursorPos.x) * 0.15;
        cursorPos.y += (mousePos.y - cursorPos.y) * 0.15;
        
        // Lerp for cursor dot (slower for trailing effect)
        cursorDotPos.x += (mousePos.x - cursorDotPos.x) * 0.25;
        cursorDotPos.y += (mousePos.y - cursorDotPos.y) * 0.25;
        
        // Apply positions
        cursor.style.left = cursorPos.x + 'px';
        cursor.style.top = cursorPos.y + 'px';
        cursorDot.style.left = cursorDotPos.x + 'px';
        cursorDot.style.top = cursorDotPos.y + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Expand cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .clickable-card, .info-card, .portfolio-card, .skill-item, .about-card, .hobby-item, .tag');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = '#8C4A9E';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
            cursorDot.style.background = '#8C4A9E';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderColor = '#5D69E2';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.background = '#5D69E2';
        });
    });
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
        el.style.cursor = 'none';
    });
}

// ===== PARALLAX SCROLL EFFECT FOR SECTIONS =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero section
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
    
    // Parallax for info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== GALLERY MODAL FUNCTIONS =====
function openMugGallery() {
    const modal = document.getElementById('mugGalleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeGallery() {
    const modal = document.getElementById('mugGalleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// ===== LIGHTBOX FUNCTIONS =====
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightbox && lightboxImage && lightboxCaption) {
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== PHOTO LIGHTBOX FUNCTIONS (for Gallery Page) =====
function openPhotoLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('photoLightbox');
    const lightboxImage = document.getElementById('photoLightboxImage');
    const lightboxCaption = document.getElementById('photoLightboxCaption');
    
    if (lightbox && lightboxImage && lightboxCaption) {
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePhotoLightbox() {
    const lightbox = document.getElementById('photoLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== SIDEBAR FUNCTIONS =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when sidebar is open
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// ===== INFO MODAL FUNCTIONS =====
function openInfoModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeInfoModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close info modals when clicking outside
window.addEventListener('click', function(event) {
    const modals = ['educationModal', 'focusModal', 'goalsModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('mugGalleryModal');
    const lightboxModal = document.getElementById('lightboxModal');
    const photoLightbox = document.getElementById('photoLightbox');
    
    if (event.target === galleryModal) {
        closeGallery();
    }
    
    if (event.target === lightboxModal) {
        closeLightbox();
    }
    
    if (event.target === photoLightbox) {
        closePhotoLightbox();
    }
});

// Close modals with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGallery();
        closeLightbox();
        closePhotoLightbox();
        
        // Close info modals
        closeInfoModal('education');
        closeInfoModal('focus');
        closeInfoModal('goals');
        
        // Close sidebar
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    }
});


// ===== PHONE FUNCTIONS =====
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;

// Stack Tower Game Variables
let canvas, ctx;
let gameRunning = false;
let gameStarted = false;
let stackScore = 0;
let bestScore = 0;
let blocks = [];
let currentBlock = null;
let blockSpeed = 2;
let blockWidth = 80;
let blockHeight = 20;
let direction = 1;
let animationId = null;

// Load best score from localStorage
if (localStorage.getItem('stackTowerBest')) {
    bestScore = parseInt(localStorage.getItem('stackTowerBest'));
}

function initStackGame() {
    // Show loading screen
    const gameLoading = document.getElementById('gameLoading');
    const gameContent = document.getElementById('gameContent');
    const loadingText = document.getElementById('loadingText');
    
    if (gameLoading) gameLoading.style.display = 'flex';
    if (gameContent) gameContent.style.display = 'none';
    
    // Loading messages
    const messages = [
        'Initializing Simulation...',
        'Loading Physics Engine...',
        'Preparing Blocks...',
        'Almost Ready...',
        'Launching Game...'
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (loadingText && messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
            messageIndex++;
        }
    }, 400);
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        clearInterval(messageInterval);
        if (gameLoading) gameLoading.style.display = 'none';
        if (gameContent) gameContent.style.display = 'block';
        
        // Initialize canvas
        canvas = document.getElementById('gameCanvas');
        if (canvas) {
            ctx = canvas.getContext('2d');
            resetStackGame();
            updateBestScore();
        }
    }, 2000);
}

function resetStackGame() {
    // Cancel any existing animation
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    gameRunning = false;
    gameStarted = false;
    stackScore = 0;
    blocks = [];
    blockSpeed = 2;
    blockWidth = 80;
    direction = 1;
    
    // Update UI
    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameOverlay').style.display = 'flex';
    document.getElementById('gameOverOverlay').style.display = 'none';
    document.getElementById('stackButton').disabled = false;
    
    // Add base block
    blocks.push({
        x: (canvas.width - blockWidth) / 2,
        y: canvas.height - blockHeight - 10,
        width: blockWidth,
        height: blockHeight
    });
    
    // Create first moving block
    createNewBlock();
    
    // Draw initial state
    drawGame();
}

function createNewBlock() {
    const lastBlock = blocks[blocks.length - 1];
    currentBlock = {
        x: 0,
        y: lastBlock.y - blockHeight - 10,
        width: lastBlock.width,
        height: blockHeight,
        speed: blockSpeed
    };
    direction = Math.random() > 0.5 ? 1 : -1;
}

function drawGame() {
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw stacked blocks
    blocks.forEach((block, index) => {
        const gradient = ctx.createLinearGradient(0, block.y, 0, block.y + block.height);
        const hue = (index * 30) % 360;
        gradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
        gradient.addColorStop(1, `hsl(${hue}, 70%, 50%)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(block.x, block.y, block.width, block.height);
        
        // Add border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(block.x, block.y, block.width, block.height);
    });
    
    // Draw current moving block
    if (currentBlock && gameRunning) {
        const gradient = ctx.createLinearGradient(0, currentBlock.y, 0, currentBlock.y + currentBlock.height);
        const hue = (blocks.length * 30) % 360;
        gradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
        gradient.addColorStop(1, `hsl(${hue}, 70%, 50%)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(currentBlock.x, currentBlock.y, currentBlock.width, currentBlock.height);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(currentBlock.x, currentBlock.y, currentBlock.width, currentBlock.height);
    }
}

function updateGame() {
    if (!gameRunning || !currentBlock) return;
    
    // Move block
    currentBlock.x += currentBlock.speed * direction;
    
    // Bounce off walls
    if (currentBlock.x <= 0) {
        currentBlock.x = 0;
        direction = 1;
    } else if (currentBlock.x + currentBlock.width >= canvas.width) {
        currentBlock.x = canvas.width - currentBlock.width;
        direction = -1;
    }
    
    drawGame();
    animationId = requestAnimationFrame(updateGame);
}

function stackBlock() {
    if (!gameStarted) {
        // Start game
        gameStarted = true;
        gameRunning = true;
        document.getElementById('gameOverlay').style.display = 'none';
        updateGame();
        return;
    }
    
    if (!gameRunning || !currentBlock) return;
    
    const lastBlock = blocks[blocks.length - 1];
    
    // Calculate overlap
    const overlapLeft = Math.max(currentBlock.x, lastBlock.x);
    const overlapRight = Math.min(currentBlock.x + currentBlock.width, lastBlock.x + lastBlock.width);
    const overlapWidth = overlapRight - overlapLeft;
    
    // Check if there's overlap
    if (overlapWidth <= 5) {
        // Game over - no overlap or too small
        gameOver();
        return;
    }
    
    // Perfect stack bonus
    const tolerance = 5;
    const perfectStack = Math.abs(currentBlock.x - lastBlock.x) < tolerance;
    
    if (perfectStack) {
        stackScore += 10; // Bonus points for perfect stack
        // Keep the same width for perfect stack
        blocks.push({
            x: lastBlock.x,
            y: currentBlock.y,
            width: lastBlock.width,
            height: blockHeight
        });
    } else {
        stackScore += 1;
        // Add the overlapping part as new block
        blocks.push({
            x: overlapLeft,
            y: currentBlock.y,
            width: overlapWidth,
            height: blockHeight
        });
    }
    
    // Update score
    document.getElementById('gameScore').textContent = stackScore;
    
    // Increase difficulty gradually
    if (blocks.length % 5 === 0) {
        blockSpeed = Math.min(blockSpeed + 0.5, 6); // Cap at 6
    }
    
    // Scroll view if tower is getting tall
    if (blocks.length > 8) {
        const scrollAmount = blockHeight + 10;
        blocks.forEach(block => {
            block.y += scrollAmount;
        });
    }
    
    // Create new block
    createNewBlock();
    
    // Continue animation
    drawGame();
}

function gameOver() {
    gameRunning = false;
    
    // Cancel animation
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    // Update best score
    if (stackScore > bestScore) {
        bestScore = stackScore;
        localStorage.setItem('stackTowerBest', bestScore);
        updateBestScore();
    }
    
    // Show game over overlay
    document.getElementById('finalScore').textContent = stackScore;
    document.getElementById('gameOverOverlay').style.display = 'flex';
    document.getElementById('stackButton').disabled = true;
}

function restartStackGame() {
    resetStackGame();
}

function updateBestScore() {
    document.getElementById('gameBest').textContent = bestScore;
}

// Initialize game when app opens
document.addEventListener('DOMContentLoaded', () => {
    // Game will be initialized when opened
});

// Schedule data untuk setiap hari
const scheduleData = {
    senin: {
        icon: '📚',
        day: 'Senin',
        type: 'weekday',
        activities: [
            '🏫 Sekolah / pembelajaran jurusan SIJA',
            '🌐 Praktik atau belajar networking & IT',
            '💪 Workout / olahraga ringan',
            '📝 Mengerjakan tugas atau project pribadi',
            '🎮 Istirahat & hiburan (musik, game, dll)'
        ]
    },
    selasa: {
        icon: '💻',
        day: 'Selasa',
        type: 'weekday',
        activities: [
            '🏫 Sekolah / pembelajaran jurusan SIJA',
            '🌐 Praktik atau belajar networking & IT',
            '💪 Workout / olahraga ringan',
            '📝 Mengerjakan tugas atau project pribadi',
            '🎮 Istirahat & hiburan (musik, game, dll)'
        ]
    },
    rabu: {
        icon: '🌐',
        day: 'Rabu',
        type: 'weekday',
        activities: [
            '🏫 Sekolah / pembelajaran jurusan SIJA',
            '🌐 Praktik atau belajar networking & IT',
            '💪 Workout / olahraga ringan',
            '📝 Mengerjakan tugas atau project pribadi',
            '🎮 Istirahat & hiburan (musik, game, dll)'
        ]
    },
    kamis: {
        icon: '💪',
        day: 'Kamis',
        type: 'weekday',
        activities: [
            '🏫 Sekolah / pembelajaran jurusan SIJA',
            '🌐 Praktik atau belajar networking & IT',
            '💪 Workout / olahraga ringan',
            '📝 Mengerjakan tugas atau project pribadi',
            '🎮 Istirahat & hiburan (musik, game, dll)'
        ]
    },
    jumat: {
        icon: '🔍',
        day: 'Jumat',
        type: 'weekday',
        activities: [
            '🏫 Sekolah / pembelajaran jurusan SIJA',
            '🌐 Praktik atau belajar networking & IT',
            '💪 Workout / olahraga ringan',
            '📝 Mengerjakan tugas atau project pribadi',
            '🎮 Istirahat & hiburan (musik, game, dll)'
        ]
    },
    sabtu: {
        icon: '🎮',
        day: 'Sabtu',
        type: 'weekend',
        activities: [
            '📚 Belajar mandiri (TryHackMe, networking, atau eksplor teknologi)',
            '💻 Mengembangkan project pribadi',
            '🚴 Bersepeda / workout',
            '🎬 Editing atau eksplor ide kreatif',
            '😴 Istirahat & quality time'
        ]
    },
    minggu: {
        icon: '😴',
        day: 'Minggu',
        type: 'weekend',
        activities: [
            '📚 Belajar mandiri (TryHackMe, networking, atau eksplor teknologi)',
            '💻 Mengembangkan project pribadi',
            '🚴 Bersepeda / workout',
            '🎬 Editing atau eksplor ide kreatif',
            '😴 Istirahat & quality time'
        ]
    }
};

function showDaySchedule(day) {
    const scheduleApp = document.getElementById('scheduleApp');
    const scheduleDetailScreen = document.getElementById('scheduleDetailScreen');
    const scheduleDetailTitle = document.getElementById('scheduleDetailTitle');
    const scheduleDetailContent = document.getElementById('scheduleDetailContent');
    const data = scheduleData[day];
    
    if (!scheduleDetailScreen || !data) return;
    
    // Hide calendar, show detail screen
    scheduleApp.classList.remove('active');
    scheduleDetailScreen.classList.add('active');
    
    // Update title
    scheduleDetailTitle.textContent = `${data.icon} ${data.day}`;
    
    // Create schedule content
    let activitiesHTML = data.activities.map(activity => 
        `<li>${activity}</li>`
    ).join('');
    
    let categoryLabel = data.type === 'weekday' ? 'Senin - Jumat' : 'Weekend';
    let categoryColor = data.type === 'weekday' ? 'var(--gradient-start)' : '#f5576c';
    
    scheduleDetailContent.innerHTML = `
        <div class="schedule-detail-card">
            <div class="schedule-category" style="background: ${categoryColor};">
                <i class="fas fa-calendar-${data.type === 'weekday' ? 'week' : 'day'}"></i> ${categoryLabel}
            </div>
            <div class="schedule-day-header">
                <div class="schedule-day-icon">${data.icon}</div>
                <h2>${data.day}</h2>
            </div>
            <div class="schedule-activities-wrapper">
                <h4><i class="fas fa-list-ul"></i> Kegiatan Hari Ini</h4>
                <ul class="schedule-activities-list">
                    ${activitiesHTML}
                </ul>
            </div>
        </div>
    `;
}

function backToCalendar() {
    const scheduleApp = document.getElementById('scheduleApp');
    const scheduleDetailScreen = document.getElementById('scheduleDetailScreen');
    
    if (scheduleApp && scheduleDetailScreen) {
        scheduleDetailScreen.classList.remove('active');
        scheduleApp.classList.add('active');
    }
}

function openPhone() {
    const phoneModal = document.getElementById('phoneModal');
    if (phoneModal) {
        phoneModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updatePhoneTime();
        // Update time every minute
        setInterval(updatePhoneTime, 60000);
    }
}

function closePhone() {
    const phoneModal = document.getElementById('phoneModal');
    if (phoneModal) {
        phoneModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Close any open app
        closeApp();
    }
}

function updatePhoneTime() {
    const now = new Date();
    const timeElement = document.getElementById('phoneTime');
    const dateElement = document.getElementById('phoneDate');
    
    if (timeElement) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
    
    if (dateElement) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const date = now.getDate();
        dateElement.textContent = `${dayName}, ${monthName} ${date}`;
    }
}

function openApp(appName) {
    const phoneHome = document.getElementById('phoneHome');
    const scheduleApp = document.getElementById('scheduleApp');
    const tasksApp = document.getElementById('tasksApp');
    const gameApp = document.getElementById('gameApp');
    
    // Hide home screen
    if (phoneHome) phoneHome.classList.remove('active');
    
    // Show selected app
    if (appName === 'schedule' && scheduleApp) {
        scheduleApp.classList.add('active');
    } else if (appName === 'tasks' && tasksApp) {
        tasksApp.classList.add('active');
        updateTaskProgress();
    } else if (appName === 'game' && gameApp) {
        gameApp.classList.add('active');
        initStackGame(); // Initialize Stack Tower game with loading
    }
}

function closeApp() {
    const phoneHome = document.getElementById('phoneHome');
    const scheduleApp = document.getElementById('scheduleApp');
    const tasksApp = document.getElementById('tasksApp');
    const gameApp = document.getElementById('gameApp');
    
    // Hide all apps
    if (scheduleApp) scheduleApp.classList.remove('active');
    if (tasksApp) tasksApp.classList.remove('active');
    if (gameApp) gameApp.classList.remove('active');
    
    // Show home screen
    if (phoneHome) phoneHome.classList.add('active');
}

// Tasks App Functions
function updateTaskProgress() {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const totalTasks = checkboxes.length;
    let completedTasks = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completedTasks++;
        }
    });
    
    const percentage = (completedTasks / totalTasks) * 100;
    
    const progressFill = document.getElementById('taskProgress');
    const taskCompleted = document.getElementById('taskCompleted');
    const taskTotal = document.getElementById('taskTotal');
    
    if (progressFill) progressFill.style.width = percentage + '%';
    if (taskCompleted) taskCompleted.textContent = completedTasks;
    if (taskTotal) taskTotal.textContent = totalTasks;
}

// Add event listeners to checkboxes
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTaskProgress);
    });
});

// Game Functions
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const scoreDisplay = document.getElementById('score');
    
    if (!guessInput || !feedback) return;
    
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = '⚠️ Masukkan angka antara 1-100!';
        feedback.style.color = '#f5576c';
        return;
    }
    
    attempts++;
    score = Math.max(0, score - 10);
    
    if (attemptsDisplay) attemptsDisplay.textContent = attempts;
    if (scoreDisplay) scoreDisplay.textContent = score;
    
    if (guess === randomNumber) {
        feedback.textContent = `🎉 Benar! Angkanya ${randomNumber}! Score: ${score}`;
        feedback.style.color = '#4facfe';
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        feedback.textContent = '📈 Terlalu rendah! Coba angka lebih besar.';
        feedback.style.color = '#f093fb';
    } else {
        feedback.textContent = '📉 Terlalu tinggi! Coba angka lebih kecil.';
        feedback.style.color = '#f5576c';
    }
    
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    score = 100;
    
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const scoreDisplay = document.getElementById('score');
    
    if (guessInput) {
        guessInput.value = '';
        guessInput.disabled = false;
        guessInput.focus();
    }
    if (feedback) {
        feedback.textContent = '';
    }
    if (attemptsDisplay) attemptsDisplay.textContent = '0';
    if (scoreDisplay) scoreDisplay.textContent = '100';
}

// Close phone with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const phoneModal = document.getElementById('phoneModal');
        if (phoneModal && phoneModal.classList.contains('active')) {
            closePhone();
        }
    }
});
