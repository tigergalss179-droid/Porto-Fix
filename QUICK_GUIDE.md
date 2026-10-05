# 🚀 Quick Guide - Portfolio Website

## 📋 Ringkasan Cepat

Website portfolio Vanilla JS dengan fitur:
- ✅ Multi-language (ID/EN)
- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ Interactive modals & games

---

## 🧪 Testing (2 Menit)

### 1. Test Utama
```bash
# Buka index.html di browser
# Tekan F12 (Console)

Expected:
✅ "✅ script.js loaded successfully"
❌ NO "is not defined" errors
```

### 2. Test Fitur
```
✅ Click card Pendidikan → Modal terbuka
✅ Click button EN → Bahasa berubah
✅ Click icon moon → Dark mode aktif
```

---

## 🔧 Troubleshooting

### Jika ada error:
```bash
1. Hard refresh: Ctrl+Shift+R
2. Clear cache: F12 → Application → Clear Storage
3. Check console: F12 → Console tab
```

### Common Issues:
```
❌ "is not defined" → Hard refresh browser
❌ Bahasa tidak berubah → Check translations.js loaded
❌ Theme tidak save → Check localStorage enabled
```

---

## 🎨 Customization

### Ganti Warna:
Edit `styles.css`:
```css
:root {
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
}
```

### Ganti Teks:
Edit `translations.js`:
```javascript
id: {
    home: {
        hero: {
            name: "Your Name",
            tagline: "Your Tagline"
        }
    }
}
```

### Ganti Gambar:
1. Upload ke [Imgur](https://imgur.com)
2. Copy link
3. Edit HTML: `<img src="https://i.imgur.com/YOUR_ID.jpg">`

---

## 📦 Deployment

### Option 1: GitHub Pages
```bash
1. Push to GitHub
2. Settings → Pages → Enable
3. Visit: username.github.io/repo-name
```

### Option 2: Netlify
```bash
1. Drag & drop folder
2. Get instant URL
```

---

## 📁 File Penting

```
index.html          # Homepage
script.js           # JavaScript logic (JANGAN EDIT!)
translations.js     # Translations (EDIT INI untuk teks)
styles.css          # Styling (EDIT INI untuk warna)
README.md           # Full documentation
```

---

## 📞 Need Help?

**Jika masih error:**
1. Screenshot console (F12)
2. Screenshot error message
3. Kirim ke developer

---

**Last Updated:** October 2026  
**Status:** ✅ Production Ready
