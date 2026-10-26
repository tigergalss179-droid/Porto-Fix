// ===== GLOBAL VARIABLES =====
let currentLanguage = localStorage.getItem('language') || 'id';
let isDarkMode = localStorage.getItem('theme') === 'dark';

// ===== TRANSLATIONS OBJECT (Fallback jika translations.js gagal load) =====
if (typeof translations === 'undefined') {
    window.translations = {
        id: {
            nav: {
                logo: "Galih",
                home: "Home",
                about: "About Me",
                skills: "Skills",
                portfolio: "Portfolio",
                cv: "CV"
            },
            home: {
                hero: {
                    name: "Muhammad Galih Seto",
                    tagline: "Interested in CyberSec and Networking",
                    description: "Berfokus mengembangkan kemampuan di bidang network engineering sebagai persiapan menghadapi dunia kerja di industri IT.",
                    btn_portfolio: "Lihat Portfolio",
                    btn_cv: "Download CV"
                },
                card: {
                    education: {
                        title: "Pendidikan",
                        school: "SMK N 7 Semarang",
                        major: "Jurusan SIJA"
                    },
                    focus: {
                        title: "Fokus",
                        text: "Cyber Security"
                    },
                    goals: {
                        title: "Tujuan",
                        text: "Network Engineer"
                    },
                    hint: "Click untuk detail"
                }
            }
        },
        en: {
            nav: {
                logo: "Galih",
                home: "Home",
                about: "About Me",
                skills: "Skills",
                portfolio: "Portfolio",
                cv: "CV"
            },
            home: {
                hero: {
                    name: "Muhammad Galih Seto",
                    tagline: "Interested in CyberSec and Networking",
                    description: "Focused on developing network engineering skills as preparation for a career in the IT industry.",
                    btn_portfolio: "View Portfolio",
                    btn_cv: "Download CV"
                },
                card: {
                    education: {
                        title: "Education",
                        school: "SMK N 7 Semarang",
                        major: "SIJA Major"
                    },
                    focus: {
                        title: "Focus",
                        text: "Cyber Security"
                    },
                    goals: {
                        title: "Goals",
                        text: "Network Engineer"
                    },
                    hint: "Click for details"
                }
            }
        }
    };
}

// ===== UTILITY FUNCTIONS =====
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// ===== THEME TOGGLE FUNCTION (GLOBAL SCOPE) =====
window.toggleDarkTheme = function() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update icon
    const themeIcon = document.querySelector('#themeToggleNav i');
    if (themeIcon) {
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    console.log('Theme toggled:', isDarkMode ? 'dark' : 'light');
};

// ===== LANGUAGE SWITCHER FUNCTION (GLOBAL SCOPE) =====
window.changeLanguage = function(lang) {
    if (!lang || (lang !== 'id' && lang !== 'en')) {
        console.error('Invalid language:', lang);
        return;
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            // Check if element has innerHTML with HTML tags
            if (element.querySelector('*')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    console.log('Language changed to:', lang);
};

// ===== INFO MODAL FUNCTIONS (GLOBAL SCOPE) =====
window.openInfoModal = function(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened:', type);
    } else {
        console.error('Modal not found:', type + 'Modal');
    }
};

window.closeInfoModal = function() {
    const modals = document.querySelectorAll('.info-modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    console.log('All modals closed');
};

// ===== SECRET PHOTO MODAL (GLOBAL SCOPE) =====
window.openSecretPhoto = function() {
    const modal = document.getElementById('secretPhotoModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeSecretPhoto = function() {
    const modal = document.getElementById('secretPhotoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// ===== GALLERY FUNCTIONS (GLOBAL SCOPE) =====
window.openMugGallery = function() {
    const modal = document.getElementById('mugGalleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeGallery = function() {
    const modal = document.getElementById('mugGalleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

window.openLightbox = function(index) {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Additional lightbox logic here
    }
};

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

window.openPhotoLightbox = function(src) {
    const modal = document.getElementById('photoLightbox');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const img = modal.querySelector('img');
        if (img) img.src = src;
    }
};

window.closePhotoLightbox = function() {
    const modal = document.getElementById('photoLightbox');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// ===== SIDEBAR TOGGLE (GLOBAL SCOPE) =====
window.toggleSidebar = function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
};

// ===== PHONE MODAL FUNCTIONS (GLOBAL SCOPE) =====
window.openPhone = function() {
    const phoneModal = document.getElementById('phoneModal');
    if (phoneModal) {
        phoneModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updatePhoneTime();
        setInterval(updatePhoneTime, 60000);
    }
};

window.closePhone = function() {
    const phoneModal = document.getElementById('phoneModal');
    if (phoneModal) {
        phoneModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        closeApp();
    }
};

window.updatePhoneTime = function() {
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
};

window.openApp = function(appName) {
    const phoneHome = document.getElementById('phoneHome');
    const scheduleApp = document.getElementById('scheduleApp');
    const tasksApp = document.getElementById('tasksApp');
    const gameApp = document.getElementById('gameApp');
    
    if (phoneHome) phoneHome.classList.remove('active');
    
    if (appName === 'schedule' && scheduleApp) {
        scheduleApp.classList.add('active');
    } else if (appName === 'tasks' && tasksApp) {
        tasksApp.classList.add('active');
        updateTaskProgress();
    } else if (appName === 'game' && gameApp) {
        gameApp.classList.add('active');
        initStackGame();
    }
};

window.closeApp = function() {
    const phoneHome = document.getElementById('phoneHome');
    const scheduleApp = document.getElementById('scheduleApp');
    const tasksApp = document.getElementById('tasksApp');
    const gameApp = document.getElementById('gameApp');
    
    if (scheduleApp) scheduleApp.classList.remove('active');
    if (tasksApp) tasksApp.classList.remove('active');
    if (gameApp) gameApp.classList.remove('active');
    
    if (phoneHome) phoneHome.classList.add('active');
};

// ===== SCHEDULE DATA =====
const scheduleData = {
    monday: {
        day: 'Senin',
        icon: '📚',
        type: 'weekday',
        activities: ['PKK', 'Matematika', 'Bahasa Inggris', 'ASJ', 'ASJ', 'ASJ']
    },
    tuesday: {
        day: 'Selasa',
        icon: '💻',
        type: 'weekday',
        activities: ['Bahasa Indonesia', 'Pendidikan Pancasila', 'Pendidikan Agama', 'TKJ', 'TKJ', 'TKJ']
    },
    wednesday: {
        day: 'Rabu',
        icon: '🔧',
        type: 'weekday',
        activities: ['SKJ', 'PJOK', 'PJOK', 'Bahasa Jawa', 'ASJ', 'ASJ']
    },
    thursday: {
        day: 'Kamis',
        icon: '🌐',
        type: 'weekday',
        activities: ['TKJ', 'TKJ', 'TKJ', 'TKJ', 'TKJ', 'TKJ']
    },
    friday: {
        day: 'Jumat',
        icon: '🎯',
        type: 'weekday',
        activities: ['ASJ', 'ASJ', 'ASJ', 'ASJ', 'ASJ', 'PKWU']
    },
    saturday: {
        day: 'Sabtu',
        icon: '🎮',
        type: 'weekend',
        activities: ['Istirahat', 'Main Game', 'Nonton Film', 'Ngoding', 'Quality Time with Family']
    },
    sunday: {
        day: 'Minggu',
        icon: '😴',
        type: 'weekend',
        activities: ['Tidur', 'Ibadah', 'Refreshing', 'Persiapan Minggu Depan']
    }
};

window.showDaySchedule = function(day) {
    const scheduleApp = document.getElementById('scheduleApp');
    const scheduleDetailScreen = document.getElementById('scheduleDetailScreen');
    const scheduleDetailTitle = document.getElementById('scheduleDetailTitle');
    const scheduleDetailContent = document.getElementById('scheduleDetailContent');
    const data = scheduleData[day];
    
    if (!scheduleDetailScreen || !data) return;
    
    scheduleApp.classList.remove('active');
    scheduleDetailScreen.classList.add('active');
    scheduleDetailTitle.textContent = `${data.icon} ${data.day}`;
    
    let activitiesHTML = data.activities.map(activity => `<li>${activity}</li>`).join('');
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
                <ul class="schedule-activities-list">${activitiesHTML}</ul>
            </div>
        </div>
    `;
};

window.backToCalendar = function() {
    const scheduleApp = document.getElementById('scheduleApp');
    const scheduleDetailScreen = document.getElementById('scheduleDetailScreen');
    
    if (scheduleApp && scheduleDetailScreen) {
        scheduleDetailScreen.classList.remove('active');
        scheduleApp.classList.add('active');
    }
};

// ===== TASKS APP FUNCTIONS =====
window.updateTaskProgress = function() {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const totalTasks = checkboxes.length;
    let completedTasks = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) completedTasks++;
    });
    
    const progressBar = document.getElementById('taskProgress');
    const progressText = document.getElementById('taskProgressText');
    
    if (progressBar) {
        const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        progressBar.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${completedTasks}/${totalTasks} Selesai`;
    }
};

// ===== STACK TOWER GAME =====
let canvas, ctx;
let blocks = [];
let currentBlock = null;
let gameRunning = false;
let gameStarted = false;
let stackScore = 0;
let blockSpeed = 2;
let blockWidth = 80;
let direction = 1;
let bestScore = parseInt(localStorage.getItem('stackTowerBest')) || 0;
const blockHeight = 20;
let animationId = null;

window.initStackGame = function() {
    const gameLoading = document.getElementById('gameLoading');
    const gameContent = document.getElementById('gameContent');
    const loadingText = document.getElementById('loadingText');
    
    if (gameLoading) gameLoading.style.display = 'flex';
    if (gameContent) gameContent.style.display = 'none';
    
    const messages = ['Initializing...', 'Loading Physics...', 'Preparing Blocks...', 'Almost Ready...', 'Launching Game...'];
    let messageIndex = 0;
    
    const messageInterval = setInterval(() => {
        if (loadingText && messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
            messageIndex++;
        }
    }, 400);
    
    setTimeout(() => {
        clearInterval(messageInterval);
        if (gameLoading) gameLoading.style.display = 'none';
        if (gameContent) gameContent.style.display = 'block';
        
        canvas = document.getElementById('gameCanvas');
        if (canvas) {
            ctx = canvas.getContext('2d');
            resetStackGame();
            updateBestScore();
        }
    }, 2000);
};

window.resetStackGame = function() {
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
    
    const scoreEl = document.getElementById('gameScore');
    const overlayEl = document.getElementById('gameOverlay');
    const gameOverEl = document.getElementById('gameOverOverlay');
    const stackBtn = document.getElementById('stackButton');
    
    if (scoreEl) scoreEl.textContent = '0';
    if (overlayEl) overlayEl.style.display = 'flex';
    if (gameOverEl) gameOverEl.style.display = 'none';
    if (stackBtn) stackBtn.disabled = false;
    
    if (canvas) {
        blocks.push({
            x: (canvas.width - blockWidth) / 2,
            y: canvas.height - blockHeight - 10,
            width: blockWidth,
            height: blockHeight
        });
        
        createNewBlock();
        drawGame();
    }
};

window.createNewBlock = function() {
    const lastBlock = blocks[blocks.length - 1];
    currentBlock = {
        x: 0,
        y: lastBlock.y - blockHeight - 10,
        width: lastBlock.width,
        height: blockHeight,
        speed: blockSpeed
    };
    direction = Math.random() > 0.5 ? 1 : -1;
};

window.drawGame = function() {
    if (!ctx || !canvas) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    blocks.forEach((block, index) => {
        const gradient = ctx.createLinearGradient(0, block.y, 0, block.y + block.height);
        const hue = (index * 30) % 360;
        gradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
        gradient.addColorStop(1, `hsl(${hue}, 70%, 50%)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(block.x, block.y, block.width, block.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(block.x, block.y, block.width, block.height);
    });
    
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
};

window.updateGame = function() {
    if (!gameRunning || !currentBlock) return;
    
    currentBlock.x += direction * currentBlock.speed;
    
    if (currentBlock.x <= 0 || currentBlock.x + currentBlock.width >= canvas.width) {
        direction *= -1;
    }
    
    drawGame();
    animationId = requestAnimationFrame(updateGame);
};

window.stackBlock = function() {
    if (!gameStarted) {
        gameStarted = true;
        gameRunning = true;
        const overlay = document.getElementById('gameOverlay');
        if (overlay) overlay.style.display = 'none';
        updateGame();
        return;
    }
    
    if (!gameRunning || !currentBlock) return;
    
    const lastBlock = blocks[blocks.length - 1];
    const overlapLeft = Math.max(currentBlock.x, lastBlock.x);
    const overlapRight = Math.min(currentBlock.x + currentBlock.width, lastBlock.x + lastBlock.width);
    const overlapWidth = overlapRight - overlapLeft;
    
    if (overlapWidth <= 5) {
        gameOver();
        return;
    }
    
    const tolerance = 5;
    const perfectStack = Math.abs(currentBlock.x - lastBlock.x) < tolerance;
    
    if (perfectStack) {
        stackScore += 10;
        blocks.push({
            x: lastBlock.x,
            y: currentBlock.y,
            width: lastBlock.width,
            height: blockHeight
        });
    } else {
        stackScore += 5;
        blocks.push({
            x: overlapLeft,
            y: currentBlock.y,
            width: overlapWidth,
            height: blockHeight
        });
        blockWidth = overlapWidth;
    }
    
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = stackScore;
    
    if (blocks.length % 5 === 0) {
        blockSpeed += 0.5;
    }
    
    createNewBlock();
};

window.gameOver = function() {
    gameRunning = false;
    
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    if (stackScore > bestScore) {
        bestScore = stackScore;
        localStorage.setItem('stackTowerBest', bestScore);
        updateBestScore();
    }
    
    const finalScoreEl = document.getElementById('finalScore');
    const gameOverEl = document.getElementById('gameOverOverlay');
    const stackBtn = document.getElementById('stackButton');
    
    if (finalScoreEl) finalScoreEl.textContent = stackScore;
    if (gameOverEl) gameOverEl.style.display = 'flex';
    if (stackBtn) stackBtn.disabled = true;
};

window.restartStackGame = function() {
    resetStackGame();
};

window.updateBestScore = function() {
    const bestEl = document.getElementById('gameBest');
    if (bestEl) bestEl.textContent = bestScore;
};

// ===== GUESS NUMBER GAME =====
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;

window.checkGuess = function() {
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
};

window.resetGame = function() {
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
        feedback.textContent = '🎯 Tebak angka antara 1-100';
        feedback.style.color = '#4facfe';
    }
    
    if (attemptsDisplay) attemptsDisplay.textContent = '0';
    if (scoreDisplay) scoreDisplay.textContent = '100';
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!');
    
    // Apply saved theme
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('#themeToggleNav i');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    }
    
    // Apply saved language
    changeLanguage(currentLanguage);
    
    // Theme toggle button event listener
    const themeToggleBtn = document.getElementById('themeToggleNav');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleDarkTheme);
    }
    
    // Language buttons event listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = ['educationModal', 'focusModal', 'goalsModal', 'mugGalleryModal', 'lightboxModal', 'photoLightbox', 'secretPhotoModal'];
        
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (event.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // Task checkboxes event listeners
    const taskCheckboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTaskProgress);
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
    fadeElements.forEach(el => observer.observe(el));
    
    console.log('All event listeners attached successfully!');
});

// ===== LOG SUCCESSFUL LOAD =====
console.log('✅ script.js loaded successfully - All functions are in global scope');


// ===== SINGLE-PAGE SCROLL ENHANCEMENTS =====

// Smooth scroll to section with offset for fixed navbar
window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const targetPosition = section.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
};

// Enhanced scroll spy for navigation and indicators
function updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'gallery', 'cv'];
    const indicators = document.querySelectorAll('.section-indicator');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    
    let currentSection = 'home'; // default
    
    // Find which section is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const rect = section.getBoundingClientRect();
            // Section is considered active if its top is within viewport or above
            if (rect.top <= navbarHeight + 100) {
                currentSection = sections[i];
                break;
            }
        }
    }
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        const isActive = sections[index] === currentSection;
        indicator.classList.toggle('active', isActive);
    });
    
    // Update nav links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href === '#' + currentSection;
        link.classList.toggle('active', isActive);
    });
}

// Throttled scroll handler for performance with RAF + passive
let scrollTicking = false;
window.addEventListener('scroll', function() {
    if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(function() {
            updateActiveSection();
            scrollTicking = false;
        });
    }
}, { passive: true });

// Update on page load
window.addEventListener('load', function() {
    updateActiveSection();
    
    // Trigger intersection observer for fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => fadeObserver.observe(el));
});

// Handle hash in URL on page load
window.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);
    }
});

// Update URL hash when scrolling (without triggering scroll) - Optimized with passive
let hashUpdateTimeout;
let hashTicking = false;
window.addEventListener('scroll', function() {
    if (!hashTicking) {
        clearTimeout(hashUpdateTimeout);
        hashUpdateTimeout = setTimeout(function() {
            const sections = ['home', 'about', 'skills', 'portfolio', 'gallery', 'cv'];
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= navbarHeight + 100) {
                        // Update URL without scrolling
                        if (window.location.hash !== '#' + sections[i]) {
                            history.replaceState(null, null, '#' + sections[i]);
                        }
                        break;
                    }
                }
            }
            hashTicking = false;
        }, 300);
        hashTicking = true;
    }
}, { passive: true });

// Prevent default anchor link behavior and use smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
});

// Keyboard navigation for sections
window.addEventListener('keydown', function(e) {
    // Alt + Arrow keys to navigate sections
    if (e.altKey) {
        const sections = ['home', 'about', 'skills', 'portfolio', 'gallery', 'cv'];
        const currentHash = window.location.hash.substring(1) || 'home';
        const currentIndex = sections.indexOf(currentHash);
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            e.preventDefault();
            scrollToSection(sections[currentIndex + 1]);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            scrollToSection(sections[currentIndex - 1]);
        }
    }
});

// Add section transition effects
window.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.full-section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

console.log('✅ Single-page scroll enhancements loaded');


// ===== PRINT CV FUNCTION (ONLY CV SECTION) =====
window.printCV = function() {
    // Store original styles
    const originalBodyClass = document.body.className;
    const sections = document.querySelectorAll('.full-section:not(#cv)');
    const navbar = document.querySelector('.navbar');
    const separators = document.querySelectorAll('.section-separator');
    const indicators = document.querySelector('.section-indicators');
    const sectionNumbers = document.querySelectorAll('.section-number');
    const cvSection = document.getElementById('cv');
    
    // Hide everything except CV section
    sections.forEach(section => section.style.display = 'none');
    if (navbar) navbar.style.display = 'none';
    separators.forEach(sep => sep.style.display = 'none');
    if (indicators) indicators.style.display = 'none';
    sectionNumbers.forEach(num => num.style.display = 'none');
    
    // Add print class to CV section
    if (cvSection) {
        cvSection.style.padding = '0';
        cvSection.style.minHeight = 'auto';
    }
    
    // Add print-mode class
    document.body.classList.add('print-mode');
    
    // Print
    window.print();
    
    // Restore everything after print dialog closes
    setTimeout(() => {
        sections.forEach(section => section.style.display = '');
        if (navbar) navbar.style.display = '';
        separators.forEach(sep => sep.style.display = '');
        if (indicators) indicators.style.display = '';
        sectionNumbers.forEach(num => num.style.display = '');
        
        if (cvSection) {
            cvSection.style.padding = '';
            cvSection.style.minHeight = '';
        }
        
        document.body.className = originalBodyClass;
    }, 500);
};
