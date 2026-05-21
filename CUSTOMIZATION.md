# 🎨 Panduan Kustomisasi Website

Panduan lengkap untuk mengubah dan menyesuaikan website sesuai kebutuhan Anda.

---

## 1. Mengubah Warna Tema

### Lokasi: `styles.css` (baris 13-18)

```css
:root {
    --gradient-start: #5D69E2;  /* Warna awal gradient */
    --gradient-mid: #7B5BB1;    /* Warna tengah gradient */
    --gradient-end: #8C4A9E;    /* Warna akhir gradient */
    --text-dark: #2c3e50;       /* Warna teks gelap */
    --text-light: #7f8c8d;      /* Warna teks terang */
}
```

### Contoh Tema Alternatif:

**Tema Biru Ocean:**
```css
--gradient-start: #2E3192;
--gradient-mid: #1BFFFF;
--gradient-end: #00D4FF;
```

**Tema Sunset:**
```css
--gradient-start: #FF6B6B;
--gradient-mid: #FFE66D;
--gradient-end: #FF6B9D;
```

**Tema Forest:**
```css
--gradient-start: #134E5E;
--gradient-mid: #71B280;
--gradient-end: #134E5E;
```

**Tema Dark Purple:**
```css
--gradient-start: #360033;
--gradient-mid: #0b8793;
--gradient-end: #360033;
```

---

## 2. Mengubah Foto Profil

### Cara 1: Menggunakan URL Imgur (Recommended)

1. Upload foto ke https://imgur.com
2. Klik kanan foto → "Copy image address"
3. Ganti URL di file HTML:

**File yang perlu diubah:**
- `index.html` (baris ~50)
- `cv.html` (baris ~30 dan ~60)

```html
<!-- Ganti URL ini -->
<img src="https://i.imgur.com/mcW08Ge.jpg" alt="Muhammad Galih Seto">

<!-- Dengan URL foto Anda -->
<img src="https://i.imgur.com/FOTO_ANDA.jpg" alt="Nama Anda">
```

### Cara 2: Menggunakan File Lokal

1. Simpan foto di folder yang sama dengan file HTML
2. Rename foto menjadi `profile.jpg`
3. Ganti URL:

```html
<img src="profile.jpg" alt="Nama Anda">
```

---

## 3. Mengubah Informasi Pribadi

### Homepage (`index.html`)

**Nama:**
```html
<h1 class="fade-in">Nama Anda</h1>
```

**Tagline:**
```html
<p class="tagline fade-in-delay">Tagline Anda</p>
```

**Deskripsi:**
```html
<p class="description fade-in-delay-2">
    Deskripsi diri Anda di sini...
</p>
```

### About Me (`about.html`)

Edit bagian-bagian berikut sesuai data Anda:
- Riwayat Keluarga (baris ~40)
- Riwayat Pendidikan (baris ~55)
- Hobi (baris ~85)
- Minat (baris ~110)
- Cita-cita (baris ~125)
- Kelebihan Diri (baris ~140)

---

## 4. Mengubah Skills & Persentase

### File: `skills.html` dan `cv.html`

**Format:**
```html
<div class="skill-item fade-in">
    <div class="skill-header">
        <div class="skill-info">
            <i class="fab fa-html5"></i>  <!-- Icon -->
            <h3>Nama Skill</h3>
        </div>
        <span class="skill-percentage">70%</span>  <!-- Persentase -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="70"></div>  <!-- Sama dengan persentase -->
    </div>
</div>
```

**Menambah Skill Baru:**
1. Copy paste satu blok `skill-item`
2. Ubah nama skill
3. Ubah icon (cari di https://fontawesome.com)
4. Ubah persentase (2 tempat: `skill-percentage` dan `data-progress`)

---

## 5. Menambah/Mengubah Portfolio

### File: `portfolio.html`

**Format Portfolio Card:**
```html
<div class="portfolio-card fade-in">
    <div class="portfolio-image">
        <img src="URL_GAMBAR" alt="Judul Project">
        <div class="portfolio-overlay">
            <div class="overlay-content">
                <h3>Judul Project</h3>
                <p>Lihat Detail</p>
            </div>
        </div>
    </div>
    <div class="portfolio-info">
        <div class="portfolio-header">
            <h3>Judul Project</h3>
            <span class="portfolio-category">
                <i class="fas fa-code"></i> Kategori
            </span>
        </div>
        <p class="portfolio-description">
            Deskripsi project Anda...
        </p>
        <div class="portfolio-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
        <div class="portfolio-actions">
            <a href="URL_PROJECT" target="_blank" class="btn-small btn-primary">
                <i class="fas fa-external-link-alt"></i> Lihat Project
            </a>
        </div>
    </div>
</div>
```

**Menambah Project Baru:**
1. Copy paste satu blok `portfolio-card`
2. Ubah gambar, judul, deskripsi
3. Ubah tags sesuai teknologi yang digunakan
4. Tambahkan link project

---

## 6. Mengubah Social Media Links

### File: `index.html` (baris ~60)

```html
<div class="social-links fade-in-delay-3">
    <a href="https://linkedin.com/in/username" class="social-icon">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/username" class="social-icon">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://instagram.com/username" class="social-icon">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="mailto:email@example.com" class="social-icon">
        <i class="fas fa-envelope"></i>
    </a>
</div>
```

**Ganti:**
- `username` dengan username media sosial Anda
- `email@example.com` dengan email Anda

**Menambah Social Media Lain:**
```html
<!-- Twitter -->
<a href="https://twitter.com/username" class="social-icon">
    <i class="fab fa-twitter"></i>
</a>

<!-- WhatsApp -->
<a href="https://wa.me/628123456789" class="social-icon">
    <i class="fab fa-whatsapp"></i>
</a>

<!-- YouTube -->
<a href="https://youtube.com/@username" class="social-icon">
    <i class="fab fa-youtube"></i>
</a>
```

---

## 7. Mengubah Font

### Cara 1: Menggunakan Google Fonts

1. Pilih font di https://fonts.google.com
2. Tambahkan di `<head>` semua file HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

3. Ubah di `styles.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Font Recommendations:
- **Modern**: Poppins, Inter, Montserrat
- **Elegant**: Playfair Display, Cormorant
- **Techy**: Roboto Mono, Fira Code
- **Friendly**: Nunito, Quicksand

---

## 8. Mengubah Ukuran Font

### File: `styles.css`

**Heading:**
```css
.hero-text h1 {
    font-size: 3.5rem;  /* Ubah angka ini */
}

.page-header h1 {
    font-size: 3rem;  /* Ubah angka ini */
}
```

**Body Text:**
```css
body {
    font-size: 16px;  /* Ubah angka ini */
}

.description {
    font-size: 1.1rem;  /* Ubah angka ini */
}
```

---

## 9. Menambah Halaman Baru

### Langkah-langkah:

1. **Buat file HTML baru** (contoh: `contact.html`)

2. **Copy struktur dari file lain:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Nama Anda</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Copy navbar dari file lain -->
    
    <!-- Konten halaman Anda -->
    
    <!-- Copy footer dari file lain -->
    
    <script src="script.js"></script>
</body>
</html>
```

3. **Tambahkan link di navbar** (semua file HTML):
```html
<ul class="nav-menu">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Me</a></li>
    <li><a href="skills.html">Skills</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="cv.html">CV</a></li>
    <li><a href="contact.html">Contact</a></li>  <!-- Baru -->
</ul>
```

---

## 10. Mengubah Animasi

### File: `styles.css`

**Kecepatan Animasi:**
```css
.fade-in {
    animation: fadeIn 0.8s ease-out forwards;  /* Ubah 0.8s */
}
```

**Delay Animasi:**
```css
.fade-in-delay {
    animation: fadeIn 0.8s ease-out 0.2s forwards;  /* Ubah 0.2s */
}
```

**Menonaktifkan Animasi:**
Hapus atau comment class `fade-in` di HTML:
```html
<!-- Sebelum -->
<h1 class="fade-in">Judul</h1>

<!-- Sesudah -->
<h1>Judul</h1>
```

---

## 11. Mengubah Logo

### File: Semua HTML (navbar)

**Text Logo:**
```html
<div class="logo">MGS</div>  <!-- Ubah teks ini -->
```

**Image Logo:**
```html
<div class="logo">
    <img src="logo.png" alt="Logo" style="height: 40px;">
</div>
```

---

## 12. Mengubah Footer

### File: Semua HTML (bagian footer)

```html
<footer>
    <div class="container">
        <p>&copy; 2024 Nama Anda. All rights reserved.</p>
        <!-- Tambahkan konten lain di sini -->
    </div>
</footer>
```

**Menambah Social Links di Footer:**
```html
<footer>
    <div class="container">
        <div class="social-links">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
        </div>
        <p>&copy; 2024 Nama Anda. All rights reserved.</p>
    </div>
</footer>
```

---

## 13. Tips Kustomisasi

### ✅ Do's:
- Backup file sebelum edit
- Test setiap perubahan di browser
- Gunakan warna yang kontras dan mudah dibaca
- Pastikan responsive di mobile
- Konsisten dengan tema

### ❌ Don'ts:
- Jangan ubah struktur HTML jika tidak paham
- Jangan gunakan terlalu banyak warna
- Jangan gunakan font yang sulit dibaca
- Jangan lupa save file setelah edit

---

## 🆘 Troubleshooting

### Perubahan tidak muncul?
1. Save file (Ctrl + S)
2. Refresh browser (Ctrl + F5)
3. Clear cache browser

### CSS berantakan?
1. Cek syntax CSS (kurung kurawal, titik koma)
2. Gunakan validator: https://jigsaw.w3.org/css-validator/

### JavaScript error?
1. Buka Console (F12)
2. Lihat error message
3. Cek syntax JavaScript

---

## 📚 Resources

- **Icons**: https://fontawesome.com
- **Colors**: https://coolors.co
- **Fonts**: https://fonts.google.com
- **Images**: https://unsplash.com
- **Gradients**: https://cssgradient.io

---

**Selamat berkreasi! 🎨**

Jangan takut untuk bereksperimen dan membuat website yang benar-benar mencerminkan kepribadian Anda!
