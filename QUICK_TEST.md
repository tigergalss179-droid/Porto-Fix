# ✅ Quick Testing Guide

## 🚀 Cara Test Website

### 1. Buka File
```
Double-click: index.html
Atau: Klik kanan → Open with Browser
```

---

## ✅ Test Checklist (5 Menit)

### Gallery Section (Section 5)
- [ ] Scroll ke section Gallery
- [ ] Pastikan hanya ada **3 foto** (Gym, Cycling, Travel)
- [ ] Hover di atas foto → harus ada zoom effect
- [ ] Click foto → lightbox/modal harus muncul
- [ ] Close lightbox → berfungsi

**✅ Hasil yang Diharapkan:**
- 3 foto horizontal (desktop)
- 1 foto per baris (mobile)
- Smooth hover animation
- Lightbox works

---

### Visual Flow & Transitions
- [ ] Scroll dari Home → CV
- [ ] Perhatikan section separators (garis + icon)
- [ ] Section numbers (01-06) pulsing
- [ ] Hover di section number → rotate effect
- [ ] Separator icon → pulse animation

**✅ Hasil yang Diharapkan:**
- Smooth scroll
- Separators terlihat jelas
- Section numbers animated
- No jarring transitions

---

### CV Section (Section 6)
- [ ] Scroll ke section CV
- [ ] Layout: Sidebar (biru) + Main content (putih)
- [ ] Photo profile bulat di sidebar
- [ ] Skills & contact terlihat rapi
- [ ] Hover contact items → geser kanan
- [ ] Responsive (coba resize browser)

**✅ Hasil yang Diharapkan:**
- 2 kolom di desktop
- 1 kolom stack di mobile
- Gradient sidebar smooth
- Hover effects works

---

### Portfolio Section (Section 4)
- [ ] Scroll ke section Portfolio
- [ ] Layout: 2 cards atas, 1 card bawah (centered)
- [ ] Hover card → naik sedikit
- [ ] Images zoom on hover
- [ ] Click image → modal muncul

**✅ Hasil yang Diharapkan:**
- Asymmetric layout terlihat bagus
- Smooth hover animations
- Modal/lightbox works

---

### Theme Toggle
- [ ] Click icon moon/sun (navbar)
- [ ] Dark mode on/off
- [ ] Semua section adapt ke dark mode
- [ ] Gallery tetap terlihat bagus
- [ ] CV sidebar tetap terlihat bagus

**✅ Hasil yang Diharapkan:**
- Smooth theme transition
- All sections readable
- No broken styles

---

### Language Switcher
- [ ] Click flag icon (navbar)
- [ ] Switch ID ↔ EN
- [ ] Navigation text berubah
- [ ] Home section text berubah
- [ ] Gallery text tetap (fixed)

**✅ Hasil yang Diharapkan:**
- Text changes instantly
- No layout shifts
- Gallery stays consistent

---

### Mobile Responsive
- [ ] Resize browser ke < 768px
- [ ] Hamburger menu muncul
- [ ] Gallery: 1 kolom
- [ ] Portfolio: 1 kolom
- [ ] CV: 1 kolom stack
- [ ] Section indicators lebih kecil

**✅ Hasil yang Diharapkan:**
- Mobile menu works
- All sections stack properly
- No horizontal scroll
- Touch-friendly

---

### Navigation
- [ ] Click navbar links → smooth scroll
- [ ] Click section indicators (dots) → jump to section
- [ ] Keyboard arrows → scroll sections
- [ ] Active state updates

**✅ Hasil yang Diharapkan:**
- Smooth scroll to sections
- Active indicators update
- Keyboard navigation works

---

## 🐛 Cek Console (Developer Tools)

### Buka Console:
- **Chrome/Edge:** F12 atau Ctrl+Shift+I
- **Firefox:** F12
- **Safari:** Cmd+Option+I

### Check:
- [ ] No red errors
- [ ] No 404 not found
- [ ] No JavaScript errors
- [ ] Fonts loaded
- [ ] Images loaded

**✅ Hasil yang Diharapkan:**
- Console clean (no errors)
- Only info messages (if any)

---

## 🎯 Performance Check

### Loading:
- [ ] Page loads < 3 seconds
- [ ] Images load progressively
- [ ] No layout shift
- [ ] Smooth initial animation

### Scrolling:
- [ ] 60fps smooth scroll
- [ ] No lag or stutter
- [ ] Animations don't block scroll
- [ ] Section indicators update smoothly

---

## ❌ Bugs to Look For

### Gallery:
- ❌ Masih ada 9 foto? (seharusnya 3)
- ❌ Categories still showing? (seharusnya tidak ada)
- ❌ Lightbox not working?
- ❌ Photos not loading?

### Layout:
- ❌ CV sidebar broken?
- ❌ Portfolio cards overlapping?
- ❌ Text overflow?
- ❌ Horizontal scroll on mobile?

### Functionality:
- ❌ Theme toggle not working?
- ❌ Language switcher broken?
- ❌ Navigation not scrolling?
- ❌ Modals not opening?

---

## ✅ Jika Semua Test Passed

**Congratulations! Website optimized successfully! 🎉**

### What to Do Next:
1. Replace placeholder images dengan foto asli
2. Update CV content dengan data terbaru
3. Add more portfolio projects (opsional)
4. Deploy ke hosting (Netlify/Vercel/GitHub Pages)

---

## 🆘 Jika Ada Error

### Common Fixes:

**Gallery masih 9 foto:**
- Refresh browser dengan Ctrl+F5 (hard refresh)
- Clear browser cache

**Styling broken:**
- Check styles.css loaded
- Check browser console for errors
- Try different browser

**JavaScript not working:**
- Check script.js loaded
- Check console for errors
- Disable browser extensions

**Images not loading:**
- Check internet connection (placeholders need internet)
- Check image URLs valid
- Try hard refresh

---

## 📞 Test Summary

Total test time: **~5 menit**

Quick pass/fail checklist:
- [ ] Gallery simplified (3 photos)
- [ ] Smooth scrolling works
- [ ] CV layout fixed
- [ ] Portfolio layout good
- [ ] Theme toggle works
- [ ] Language switcher works
- [ ] Mobile responsive
- [ ] No console errors

**All checked? You're good to go! 🚀**
