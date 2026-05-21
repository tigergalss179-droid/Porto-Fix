# 📋 Panduan Info Cards Clickable

Dokumentasi lengkap untuk fitur info cards yang clickable di homepage.

---

## 🎯 Fitur Baru

### Clickable Info Cards
3 info cards di homepage sekarang bisa di-click untuk menampilkan detail lengkap:

1. **📚 Pendidikan** - SMK N 7 Semarang
2. **🛡️ Fokus** - Cyber Security & Networking
3. **🌍 Cita-cita** - Career Goals

---

## 🎨 Visual Effects

### Hover Effects
Saat hover pada card:
- ✅ Card terangkat lebih tinggi (translateY -15px)
- ✅ Scale sedikit membesar (1.02)
- ✅ Shadow lebih besar dengan warna biru
- ✅ Background gradient muncul
- ✅ Icon beranimasi pulse dengan glow effect
- ✅ Hint "Click untuk detail" muncul

### Click Effects
Saat card di-click:
- ✅ Modal popup dengan fade animation
- ✅ Content zoom in smooth
- ✅ Background overlay gelap (95% opacity)
- ✅ Body scroll disabled

---

## 📸 Modal Structure

### 1. Education Modal (Pendidikan)

**Header:**
- Icon: Graduation cap
- Title: "Pendidikan"
- Background: Gradient blue-purple

**Content:**
- **Image:** Foto sekolah (placeholder)
- **Caption:** "Semarang, Jawa Tengah"
- **Title:** SMK Negeri 7 Semarang
- **Subtitle:** Jurusan SIJA
- **Description:** 
  > "Focused on routing, network configuration, and building reliable infrastructure systems..."

**Highlights:**
- Network Configuration & Routing
- Infrastructure Systems
- Cisco Packet Tracer
- Network Security Basics

---

### 2. Focus Modal (Fokus)

**Header:**
- Icon: Shield
- Title: "Fokus Keahlian"
- Background: Gradient blue-purple

**Content:**
- **Image:** Cyber Security & Networking (placeholder)
- **Caption:** "Cyber Security & Networking"
- **Title:** Cyber Security & Networking
- **Subtitle:** Keamanan Jaringan & Infrastruktur
- **Description:**
  > "Saya fokus pada bidang keamanan jaringan dan pengelolaan infrastruktur IT..."

**Highlights:**
- Network Security & Firewall
- Routing & Switching
- Infrastructure Management
- Network Monitoring & Troubleshooting

---

### 3. Goals Modal (Cita-cita)

**Header:**
- Icon: Globe
- Title: "Career Goals"
- Background: Gradient blue-purple

**Content:**
- **Image:** Europe / International (placeholder)
- **Caption:** "Europe & International"
- **Title:** International Career in IT
- **Subtitle:** Network Engineer / Infrastructure Specialist
- **Description:**
  > "My long-term goal is to build a career in the IT industry, particularly in network infrastructure and system operations. I aim to work in an international environment, especially in Europe..."

**Highlights:**
- Network Engineer / Infrastructure Specialist
- International Work Environment (Europe)
- Design & Manage Network Systems
- Global Experience & Professional Growth

---

## 🖼️ Cara Mengganti Foto

### File: `index.html`

**Cari bagian modal yang ingin diubah:**

#### Education Modal (line ~120)
```html
<div class="modal-image">
    <img src="https://via.placeholder.com/800x400/5D69E2/ffffff?text=SMK+N+7+Semarang" alt="SMK N 7 Semarang">
    <div class="image-caption">
        <i class="fas fa-map-marker-alt"></i> Semarang, Jawa Tengah
    </div>
</div>
```

**Ganti dengan:**
```html
<div class="modal-image">
    <img src="https://i.imgur.com/FOTO_SEKOLAH.jpg" alt="SMK N 7 Semarang">
    <div class="image-caption">
        <i class="fas fa-map-marker-alt"></i> Semarang, Jawa Tengah
    </div>
</div>
```

#### Focus Modal (line ~160)
```html
<div class="modal-image">
    <img src="https://via.placeholder.com/800x400/7B5BB1/ffffff?text=Cyber+Security+%26+Networking" alt="Cyber Security & Networking">
    <div class="image-caption">
        <i class="fas fa-shield-alt"></i> Cyber Security & Networking
    </div>
</div>
```

**Ganti dengan:**
```html
<div class="modal-image">
    <img src="https://i.imgur.com/FOTO_CYBERSEC.jpg" alt="Cyber Security & Networking">
    <div class="image-caption">
        <i class="fas fa-shield-alt"></i> Cyber Security & Networking
    </div>
</div>
```

#### Goals Modal (line ~200)
```html
<div class="modal-image">
    <img src="https://via.placeholder.com/800x400/8C4A9E/ffffff?text=Europe+%2F+International+Career" alt="Career Goals">
    <div class="image-caption">
        <i class="fas fa-map-marked-alt"></i> Europe & International
    </div>
</div>
```

**Ganti dengan:**
```html
<div class="modal-image">
    <img src="https://i.imgur.com/FOTO_EUROPE.jpg" alt="Career Goals">
    <div class="image-caption">
        <i class="fas fa-map-marked-alt"></i> Europe & International
    </div>
</div>
```

---

## 📝 Cara Edit Konten

### Edit Deskripsi

**File:** `index.html`

**Cari bagian `modal-description` dan edit:**

```html
<p class="modal-description">
    Tulis deskripsi Anda di sini...
</p>
```

### Edit Highlights

**Cari bagian `modal-highlights` dan edit:**

```html
<div class="highlight-item">
    <i class="fas fa-check-circle"></i>
    <span>Highlight baru Anda</span>
</div>
```

**Untuk menambah highlight:**
Copy paste blok `highlight-item` dan ubah teksnya.

---

## 🎨 Kustomisasi

### Mengubah Warna Modal Header

**File:** `styles.css`

Cari `.modal-header`:

```css
.modal-header {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
}
```

### Mengubah Ukuran Modal

**File:** `styles.css`

Cari `.info-modal-content`:

```css
.info-modal-content {
    max-width: 900px;  /* Ubah angka ini */
    width: 90%;
}
```

### Mengubah Tinggi Gambar

**File:** `styles.css`

Cari `.modal-image img`:

```css
.modal-image img {
    height: 300px;  /* Ubah angka ini */
}
```

---

## 🎯 Tips Foto

### Ukuran Optimal

**Education (Sekolah):**
- Ukuran: 800x400px atau 1200x600px
- Format: JPG
- Ukuran file: < 500KB
- Contoh: Foto gedung sekolah, gerbang, atau kelas

**Focus (Cyber Security):**
- Ukuran: 800x400px
- Format: JPG/PNG
- Contoh: 
  - Network diagram
  - Server room
  - Cisco equipment
  - Abstract tech background

**Goals (Europe/International):**
- Ukuran: 800x400px
- Format: JPG
- Contoh:
  - Peta Eropa
  - Kota modern (London, Amsterdam, Berlin)
  - Office building internasional
  - Abstract global network

### Sumber Foto Gratis

**Jika tidak punya foto sendiri:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

**Keyword search:**
- "school building"
- "network security"
- "europe city"
- "modern office"
- "technology"

---

## 🐛 Troubleshooting

### Modal tidak muncul?

**Solusi:**
1. Cek console (F12) untuk error
2. Pastikan function `openInfoModal()` ada di script.js
3. Pastikan ID modal benar (educationModal, focusModal, goalsModal)
4. Clear cache browser

### Foto tidak muncul?

**Solusi:**
1. Cek URL foto (harus lengkap dengan https://)
2. Buka link di browser baru untuk test
3. Pastikan foto tidak dihapus dari Imgur
4. Cek format file (JPG/PNG)

### Modal tidak close?

**Solusi:**
1. Cek function `closeInfoModal()` di script.js
2. Test close dengan:
   - Tombol X
   - ESC key
   - Click di luar modal
3. Refresh browser

### Hover effect tidak smooth?

**Solusi:**
1. Cek CSS transition di `.clickable-card`
2. Test di browser lain
3. Update browser ke versi terbaru

---

## ✅ Testing Checklist

### Visual Effects
- [ ] Hover card → terangkat & glow
- [ ] Hover icon → pulse animation
- [ ] Hint "Click untuk detail" muncul
- [ ] Cursor berubah jadi pointer

### Modal Functionality
- [ ] Click Education card → modal muncul
- [ ] Click Focus card → modal muncul
- [ ] Click Goals card → modal muncul
- [ ] Modal fade in smooth
- [ ] Content zoom in smooth
- [ ] Background overlay gelap

### Modal Content
- [ ] Header dengan icon & title
- [ ] Image terlihat
- [ ] Caption di bawah image
- [ ] Title & subtitle
- [ ] Description terbaca
- [ ] Highlights terlihat (4 items)

### Close Modal
- [ ] Click X button → modal close
- [ ] Press ESC → modal close
- [ ] Click outside → modal close
- [ ] Body scroll enabled kembali

### Responsive
- [ ] Desktop → modal 900px width
- [ ] Tablet → modal 95% width
- [ ] Mobile → modal full width
- [ ] Image height responsive
- [ ] Highlights 1 column di mobile

---

## 📱 Responsive Behavior

### Desktop (> 968px)
- Modal: 900px width, centered
- Image: 300px height
- Highlights: 2 columns
- Close button: 50x50px

### Tablet (600-968px)
- Modal: 95% width
- Image: 250px height
- Highlights: 2 columns
- Close button: 40x40px

### Mobile (< 600px)
- Modal: 95% width, full height scroll
- Image: 200px height
- Highlights: 1 column
- Close button: 40x40px
- Padding reduced

---

## 🎯 Best Practices

### Content Writing

**Do's:**
- ✅ Gunakan bahasa profesional
- ✅ Fokus pada achievements & skills
- ✅ Hubungkan dengan career goals
- ✅ Specific dan measurable
- ✅ Positive tone

**Don'ts:**
- ❌ Terlalu casual
- ❌ Terlalu panjang (keep it concise)
- ❌ Typos dan grammar errors
- ❌ Irrelevant information

### Photo Selection

**Do's:**
- ✅ High quality images
- ✅ Relevant to content
- ✅ Professional looking
- ✅ Good lighting
- ✅ Clear and sharp

**Don'ts:**
- ❌ Blurry photos
- ❌ Too dark/bright
- ❌ Irrelevant images
- ❌ Low resolution
- ❌ Watermarked images

---

## 🚀 Future Enhancements

### Potential Additions:
- [ ] Add video content (optional)
- [ ] Add image gallery (multiple photos)
- [ ] Add timeline/milestones
- [ ] Add certificates/achievements
- [ ] Add testimonials

### Not Recommended:
- ❌ Too many modals (keep it 3-4 max)
- ❌ Auto-play videos
- ❌ Too much animation
- ❌ Heavy images (slow loading)

---

## 📊 Performance Tips

### Optimize Images:
1. Compress dengan TinyPNG
2. Resize ke ukuran optimal (800x400px)
3. Use JPG for photos, PNG for graphics
4. Max 500KB per image

### Loading Speed:
- Modal loads on demand (not on page load)
- Images lazy load
- Smooth animations (CSS only)
- No external dependencies

---

## 🎉 Feature Complete!

**Status:** ✅ Ready to use

**What You Get:**
- ✅ 3 clickable info cards
- ✅ Smooth hover effects with glow
- ✅ Professional modals with details
- ✅ Image + content + highlights
- ✅ Multiple ways to close
- ✅ Fully responsive
- ✅ Smooth animations

**Next Steps:**
1. Upload your real photos
2. Edit content to match your story
3. Test all interactions
4. Deploy and share!

---

© 2026 Muhammad Galih Seto. Made with ❤️
