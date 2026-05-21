# 🎬 Animation & Effects Quick Reference

## 📚 Table of Contents
1. [Keyframe Animations](#keyframe-animations)
2. [Easing Functions](#easing-functions)
3. [Hover Effects](#hover-effects)
4. [Entrance Animations](#entrance-animations)
5. [Scroll Animations](#scroll-animations)
6. [Interactive Effects](#interactive-effects)
7. [Glassmorphism Recipes](#glassmorphism-recipes)
8. [Shadow Presets](#shadow-presets)

---

## 🎨 Keyframe Animations

### fadeIn
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Usage */
animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
```

### slideInLeft
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-60px) rotate(-5deg);
    }
    to {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }
}

/* Usage */
animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

### slideInRight
```css
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(60px) rotate(5deg);
    }
    to {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }
}

/* Usage */
animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

### pulse
```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.08);
    }
}

/* Usage */
animation: pulse 3s ease-in-out infinite;
```

### float
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Usage */
animation: float 3s ease-in-out infinite;
```

### shimmer
```css
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

/* Usage */
animation: shimmer 2s infinite;
```

### scaleIn
```css
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8) rotate(-10deg);
    }
    to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}

/* Usage */
animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### slideUp
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Usage */
animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

### galaxyMove
```css
@keyframes galaxyMove {
    0%, 100% {
        background-position: 0% 0%;
        transform: scale(1) rotate(0deg);
    }
    25% {
        background-position: 100% 0%;
        transform: scale(1.05) rotate(90deg);
    }
    50% {
        background-position: 100% 100%;
        transform: scale(1) rotate(180deg);
    }
    75% {
        background-position: 0% 100%;
        transform: scale(1.05) rotate(270deg);
    }
}

/* Usage */
animation: galaxyMove 20s ease-in-out infinite;
```

### gradientShift
```css
@keyframes gradientShift {
    0%, 100% { 
        opacity: 0.3; 
        transform: scale(1); 
    }
    50% { 
        opacity: 0.6; 
        transform: scale(1.1); 
    }
}

/* Usage */
animation: gradientShift 8s ease-in-out infinite;
```

---

## ⏱️ Easing Functions

### Standard Easing
```css
/* Smooth & Professional */
--transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Usage */
transition: var(--transition);
```

### Bounce Easing
```css
/* Playful & Energetic */
--transition-bounce: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Usage */
transition: var(--transition-bounce);
```

### Timing Recommendations
```css
/* Fast - Small interactions */
transition: all 0.15s ease;

/* Medium - Cards, buttons */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Slow - Modals, large sections */
transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

/* Ambient - Background effects */
animation: float 20s ease-in-out infinite;
```

---

## 🎯 Hover Effects

### Card Hover (Standard)
```css
.card {
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 50px rgba(93, 105, 226, 0.25);
}
```

### Card Hover (3D Tilt)
```javascript
card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    this.style.transform = `
        translateY(-10px) 
        scale(1.02) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
    `;
});

card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
});
```

### Button Hover (Magnetic)
```javascript
button.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
});

button.addEventListener('mouseleave', function() {
    this.style.transform = 'translate(0, 0) scale(1)';
});
```

### Icon Hover
```css
.icon {
    transition: var(--transition-bounce);
}

.icon:hover {
    transform: scale(1.2) rotate(10deg);
}
```

### Image Hover
```css
.image-wrapper {
    overflow: hidden;
    transition: var(--transition);
}

.image-wrapper:hover {
    transform: rotate(0deg) scale(1.05);
}

.image-wrapper img {
    transition: var(--transition);
}

.image-wrapper:hover img {
    transform: scale(1.1);
}
```

### Shimmer Effect
```css
.element::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
}

.element:hover::before {
    left: 100%;
}
```

---

## 🚀 Entrance Animations

### Staggered Children
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.child');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // 100ms delay per child
            });
        }
    });
}, { threshold: 0.1 });

// Initial state
children.forEach(child => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(30px) scale(0.95)';
    child.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

observer.observe(section);
```

### Page Load Animation
```javascript
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});
```

### Modal Open
```css
.modal {
    animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8) rotate(-10deg);
    }
    to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}
```

---

## 📜 Scroll Animations

### Parallax Effect
```javascript
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero image parallax
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
    
    // Cards parallax (variable speed)
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});
```

### Navbar Hide/Show
```javascript
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});
```

### Scroll to Top Button
```javascript
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

---

## 🎮 Interactive Effects

### Ripple Effect
```javascript
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
    
    setTimeout(() => ripple.remove(), 600);
});
```

```css
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
```

### Custom Cursor
```javascript
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Expand on interactive elements
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});
```

```css
.custom-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid #5D69E2;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.15s ease;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
}
```

---

## 🪟 Glassmorphism Recipes

### Standard Glass Card
```css
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 24px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}
```

### Heavy Glass (Modals)
```css
.glass-modal {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 32px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
}
```

### Light Glass (Navbar)
```css
.glass-navbar {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 24px rgba(93, 105, 226, 0.08);
}
```

### Glass Button
```css
.glass-button {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(93, 105, 226, 0.2);
    border-radius: 12px;
}
```

---

## 🌑 Shadow Presets

### Light Shadow
```css
box-shadow: 0 4px 12px rgba(93, 105, 226, 0.08);
```

### Medium Shadow
```css
box-shadow: 0 8px 24px rgba(93, 105, 226, 0.15);
```

### Heavy Shadow
```css
box-shadow: 0 16px 48px rgba(93, 105, 226, 0.25);
```

### Hover Shadow
```css
box-shadow: 0 24px 60px rgba(93, 105, 226, 0.3);
```

### Glow Effect
```css
box-shadow: 0 0 20px rgba(93, 105, 226, 0.5);
```

### Layered Shadow
```css
box-shadow: 
    0 4px 12px rgba(93, 105, 226, 0.08),
    0 8px 24px rgba(93, 105, 226, 0.12),
    0 16px 48px rgba(93, 105, 226, 0.15);
```

---

## 🎨 Gradient Presets

### Primary Gradient
```css
background: linear-gradient(135deg, #5D69E2, #8C4A9E);
```

### Background Gradient
```css
background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%);
```

### Overlay Gradient
```css
background: radial-gradient(circle, rgba(93, 105, 226, 0.15) 0%, transparent 70%);
```

### Text Gradient
```css
background: linear-gradient(135deg, #5D69E2, #8C4A9E);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 📏 Spacing Scale

```css
/* Padding/Margin Scale */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 5rem;    /* 80px */
```

---

## 🔤 Typography Scale

```css
/* Font Sizes */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
--text-5xl: 3rem;     /* 48px */
--text-6xl: 4rem;     /* 64px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

---

## 🎯 Border Radius Scale

```css
/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-3xl: 28px;
--radius-4xl: 32px;
```

---

**Created:** May 20, 2026  
**Version:** 2.0  
**Type:** Quick Reference Guide  
**Status:** Complete ✅
