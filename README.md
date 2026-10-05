# 🎨 Portfolio Website - Muhammad Galih Seto

Website portfolio pribadi yang dibangun dengan **Vanilla JavaScript, HTML, dan CSS**.

---

## ✨ Fitur Utama

### 🌐 Multi-Language Support (i18n)
- Bahasa Indonesia & English
- Switch bahasa real-time tanpa reload
- Disimpan di localStorage

### 🌓 Dark/Light Mode
- Toggle tema dengan smooth transition
- Preference tersimpan otomatis
- Icon dinamis (🌙 ↔ ☀️)

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu untuk mobile
- Optimized untuk semua screen size

### 🎯 Interactive Features
- Modal pop-ups (Education, Focus, Goals)
- Image gallery dengan lightbox
- Phone modal dengan mini apps:
  - 📅 Schedule calendar
  - ✅ Task manager dengan progress bar
  - 🎮 Stack Tower game
  - 🔢 Guess Number game

---

## 📁 Struktur File

```
Portfolio/
├── index.html          # Homepage
├── about.html          # About page
├── skills.html         # Skills showcase
├── portfolio.html      # Projects gallery
├── cv.html             # CV/Resume
├── gallery.html        # Photo gallery
├── styles.css          # Main stylesheet
├── script.js           # JavaScript logic
├── translations.js     # i18n translations
└── README.md           # Documentation (file ini)
```

---

## 🚀 Quick Start

### 1. Setup
```bash
# Clone atau download repository
# Tidak perlu npm install, ini pure vanilla!
```

### 2. Test Lokal
```bash
# Buka index.html di browser (double-click atau):
# - Chrome/Firefox/Edge recommended
# - Atau gunakan Live Server (VS Code extension)
```

### 3. Verifikasi
- ✅ Buka browser console (F12)
- ✅ Tidak boleh ada error merah
- ✅ Test: Click cards, ganti bahasa, toggle theme

---

## 🧪 Testing Fitur

### Language Switcher
```
1. Click button EN/ID di navbar
2. Semua teks harus berubah
3. Refresh page → bahasa tersimpan
```

### Theme Toggle
```
1. Click icon moon (🌙) di navbar
2. Website jadi dark mode
3. Icon berubah jadi sun (☀️)
4. Refresh page → theme tersimpan
```

### Info Modals
```
1. Click card "Pendidikan" / "Fokus" / "Tujuan"
2. Modal harus terbuka smooth
3. Click X atau background → modal tertutup
```

---

## 🎨 Customization

### Ganti Warna Tema
Edit `styles.css`:
```css
:root {
    --gradient-start: #667eea;  /* Warna utama */
    --gradient-end: #764ba2;    /* Warna aksen */
    --text-primary: #2d3748;    /* Teks utama */
}
```

### Ganti Foto/Gambar
1. Upload gambar ke [Imgur](https://imgur.com) atau hosting lain
2. Copy link gambar
3. Edit di HTML:
```html
<img src="https://i.imgur.com/YOUR_IMAGE_ID.jpg">
```

### Edit Teks
Untuk teks yang support multi-language:
1. Edit `translations.js`
2. Cari key yang sesuai (contoh: `home.hero.name`)
3. Update teks untuk ID dan EN

---

## 📝 Content Update

### Update Info Cards
Edit `translations.js` → section `home.card`:
```javascript
education: {
    title: "Pendidikan",
    school: "SMK N 7 Semarang",
    major: "Jurusan SIJA"
}
```

### Update Schedule
Edit `script.js` → object `scheduleData`:
```javascript
monday: {
    day: 'Senin',
    icon: '📚',
    activities: ['PKK', 'Matematika', ...]
}
```

---

## 🐛 Troubleshooting

### Fitur tidak bekerja?
```bash
1. Hard refresh: Ctrl+Shift+R
2. Clear cache: F12 → Application → Clear Storage
3. Check console: F12 → Console tab
4. Verify: script.js & translations.js loaded (status 200)
```

### Modal tidak terbuka?
```bash
# Check console untuk error:
# ✅ Tidak boleh ada "is not defined"
# ✅ Semua fungsi harus di window.functionName
```

### Bahasa tidak berubah?
```bash
# Pastikan:
# 1. translations.js loaded
# 2. HTML punya atribut data-i18n="key"
# 3. Key ada di translations.js
```

---

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **LocalStorage** - Persist theme & language
- **Canvas API** - Stack Tower game
- **Intersection Observer** - Scroll animations

---

## 📦 Deployment

### GitHub Pages
```bash
1. Push ke GitHub repository
2. Settings → Pages
3. Source: main branch
4. Save → Wait for build
5. Visit: username.github.io/repo-name
```

### Netlify
```bash
1. Drag & drop folder ke Netlify
2. Atau connect GitHub repo
3. Deploy → Get live URL
```

### Custom Domain
```bash
1. Beli domain (Namecheap, GoDaddy, dll)
2. Point DNS ke hosting
3. Update CNAME/A records
```

---

## 📄 License

Free to use untuk personal portfolio. Jika mau modify atau share, please credit original creator.

---

## 🤝 Support

Ada pertanyaan atau butuh bantuan?
- 📧 Email: [your-email]
- 💬 WhatsApp: [your-number]
- 🐙 GitHub: [your-github]

---

## 📌 Updates

### Latest Version (Oct 2026)
- ✅ Fixed script.js execution crash
- ✅ Fixed all onclick functions (global scope)
- ✅ Fixed theme toggle
- ✅ Fixed language switcher
- ✅ All features 100% functional

### Previous Updates
- i18n implementation (multi-language)
- Dark mode support
- Phone modal with mini apps
- Stack Tower game
- Responsive design improvements

---

**Built with ❤️ by Muhammad Galih Seto**  
**Last Updated:** October 2026  
**Status:** ✅ Production Ready
