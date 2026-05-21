# 🖼️ Panduan Fitur Gallery Portfolio

Dokumentasi lengkap untuk fitur gallery dan lightbox pada portfolio.

---

## 🎯 Fitur yang Tersedia

### 1. Gallery Modal
- Menampilkan multiple gambar dalam satu portfolio
- Grid layout yang responsive
- Hover effect yang smooth
- Click untuk zoom ke gambar

### 2. Lightbox
- Zoom gambar full screen
- Caption untuk setiap gambar
- Close dengan tombol X, ESC, atau click di luar gambar
- Animasi smooth zoom in/out

---

## 📸 Cara Kerja

### Portfolio Card → Gallery Modal → Lightbox

1. **User click portfolio card** "Desain Mug"
2. **Gallery modal terbuka** menampilkan 2 gambar:
   - Desain sebelum jadi
   - Hasil jadi (mug fisik)
3. **User click salah satu gambar**
4. **Lightbox terbuka** dengan gambar full screen
5. **User bisa close** dengan:
   - Click tombol X
   - Tekan ESC
   - Click di luar gambar

---

## 🎨 Cara Menambah Gambar ke Gallery

### Langkah-langkah:

1. **Upload gambar ke Imgur**
   - Kunjungi https://imgur.com
   - Upload gambar Anda
   - Copy link gambar (format: `https://i.imgur.com/KODE.png`)

2. **Edit file `portfolio.html`**

Cari bagian gallery grid (sekitar baris 90-110):

```html
<div class="gallery-grid">
    <!-- Gambar 1 -->
    <div class="gallery-item" onclick="openLightbox('URL_GAMBAR_1', 'Caption Gambar 1')">
        <img src="URL_GAMBAR_1" alt="Deskripsi">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Judul Gambar 1</p>
        </div>
    </div>
    
    <!-- Gambar 2 -->
    <div class="gallery-item" onclick="openLightbox('URL_GAMBAR_2', 'Caption Gambar 2')">
        <img src="URL_GAMBAR_2" alt="Deskripsi">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Judul Gambar 2</p>
        </div>
    </div>
</div>
```

3. **Untuk menambah gambar ke-3, ke-4, dst:**

Copy paste blok `gallery-item` dan ubah:
- `URL_GAMBAR` dengan link Imgur Anda
- `Caption` dengan deskripsi gambar
- `Judul Gambar` dengan judul singkat

```html
<!-- Gambar 3 (BARU) -->
<div class="gallery-item" onclick="openLightbox('https://i.imgur.com/KODE3.png', 'Caption Gambar 3')">
    <img src="https://i.imgur.com/KODE3.png" alt="Deskripsi">
    <div class="gallery-item-overlay">
        <i class="fas fa-search-plus"></i>
        <p>Judul Gambar 3</p>
    </div>
</div>
```

---

## 🎨 Cara Membuat Gallery untuk Portfolio Lain

### Contoh: Membuat gallery untuk "Website Kelompok"

1. **Buat modal baru di `portfolio.html`** (sebelum tag `</body>`):

```html
<!-- Website Gallery Modal -->
<div id="websiteGalleryModal" class="gallery-modal">
    <span class="gallery-close" onclick="closeWebsiteGallery()">&times;</span>
    <div class="gallery-content">
        <h2 class="gallery-title">Website Kelompok - Galeri</h2>
        <div class="gallery-grid">
            <div class="gallery-item" onclick="openLightbox('URL_SCREENSHOT_1', 'Homepage')">
                <img src="URL_SCREENSHOT_1" alt="Homepage">
                <div class="gallery-item-overlay">
                    <i class="fas fa-search-plus"></i>
                    <p>Homepage</p>
                </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('URL_SCREENSHOT_2', 'Game Page')">
                <img src="URL_SCREENSHOT_2" alt="Game Page">
                <div class="gallery-item-overlay">
                    <i class="fas fa-search-plus"></i>
                    <p>Game Page</p>
                </div>
            </div>
            <!-- Tambah gambar lain di sini -->
        </div>
    </div>
</div>
```

2. **Update portfolio card** untuk Website Kelompok:

```html
<div class="portfolio-actions">
    <a href="https://game-journal-review.page.gd/" target="_blank" class="btn-small btn-primary">
        <i class="fas fa-external-link-alt"></i> Lihat Website
    </a>
    <button class="btn-small btn-secondary" onclick="openWebsiteGallery()">
        <i class="fas fa-images"></i> Lihat Screenshot
    </button>
</div>
```

3. **Tambahkan JavaScript functions** di `script.js`:

```javascript
// Website Gallery Functions
function openWebsiteGallery() {
    const modal = document.getElementById('websiteGalleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeWebsiteGallery() {
    const modal = document.getElementById('websiteGalleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
```

4. **Update event listener** di `script.js`:

```javascript
window.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('mugGalleryModal');
    const websiteGalleryModal = document.getElementById('websiteGalleryModal');
    const lightboxModal = document.getElementById('lightboxModal');
    
    if (event.target === galleryModal) {
        closeGallery();
    }
    
    if (event.target === websiteGalleryModal) {
        closeWebsiteGallery();
    }
    
    if (event.target === lightboxModal) {
        closeLightbox();
    }
});
```

---

## 🎨 Kustomisasi Tampilan

### Mengubah Warna Overlay

**File: `styles.css`**

Cari bagian `.gallery-item-overlay`:

```css
.gallery-item-overlay {
    background: linear-gradient(135deg, rgba(93, 105, 226, 0.9), rgba(140, 74, 158, 0.9));
}
```

Ubah warna sesuai keinginan:

```css
/* Biru Ocean */
background: linear-gradient(135deg, rgba(46, 49, 146, 0.9), rgba(0, 212, 255, 0.9));

/* Sunset */
background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(255, 107, 157, 0.9));

/* Dark */
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(50, 50, 50, 0.9));
```

### Mengubah Ukuran Gambar di Gallery

**File: `styles.css`**

Cari bagian `.gallery-item img`:

```css
.gallery-item img {
    height: 400px;  /* Ubah angka ini */
}
```

### Mengubah Jumlah Kolom Gallery

**File: `styles.css`**

Cari bagian `.gallery-grid`:

```css
.gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    /* Ubah 400px untuk mengatur lebar minimum setiap kolom */
}
```

**Untuk 3 kolom tetap:**
```css
grid-template-columns: repeat(3, 1fr);
```

**Untuk 2 kolom tetap:**
```css
grid-template-columns: repeat(2, 1fr);
```

---

## 🎯 Tips & Best Practices

### 1. Ukuran Gambar Optimal

**Untuk Gallery:**
- Lebar: 800-1200 px
- Tinggi: 600-900 px
- Format: JPG (untuk foto), PNG (untuk screenshot)
- Ukuran file: < 500 KB per gambar

**Untuk Lightbox:**
- Resolusi tinggi OK (akan auto-resize)
- Maksimal 2 MB per gambar
- Compress dengan TinyPNG jika terlalu besar

### 2. Jumlah Gambar

**Recommended:**
- 2-4 gambar per portfolio (ideal)
- Maksimal 6 gambar (agar tidak terlalu banyak)
- Pilih gambar terbaik yang representatif

### 3. Caption yang Baik

**Do:**
- Singkat dan deskriptif
- Jelaskan apa yang ditampilkan
- Gunakan bahasa yang jelas

**Contoh:**
- ✅ "Desain Sebelum Jadi"
- ✅ "Hasil Akhir Produk"
- ✅ "Homepage - Desktop View"
- ❌ "Gambar 1"
- ❌ "Screenshot"

### 4. Urutan Gambar

**Recommended:**
- Before → After (sebelum → sesudah)
- Process → Result (proses → hasil)
- Overview → Detail (umum → detail)
- Chronological (urutan waktu)

---

## 🐛 Troubleshooting

### Gallery tidak terbuka?

**Solusi:**
1. Cek console browser (F12) untuk error
2. Pastikan ID modal benar (`mugGalleryModal`)
3. Pastikan function `openMugGallery()` ada di `script.js`
4. Clear cache browser (Ctrl + Shift + Delete)

### Gambar tidak muncul di gallery?

**Solusi:**
1. Cek URL gambar (harus lengkap dengan https://)
2. Pastikan link Imgur benar (ada `i.` dan ekstensi)
3. Buka link gambar di browser baru (test akses)
4. Pastikan gambar tidak dihapus dari Imgur

### Lightbox tidak zoom?

**Solusi:**
1. Cek function `openLightbox()` di `script.js`
2. Pastikan parameter benar: `openLightbox('URL', 'Caption')`
3. Cek ID lightbox modal (`lightboxModal`)
4. Refresh browser

### Gallery berantakan di mobile?

**Solusi:**
1. Cek responsive CSS di `styles.css`
2. Test dengan device toolbar (F12 → Ctrl+Shift+M)
3. Pastikan `@media` queries ada
4. Compress gambar jika terlalu besar

### Close button tidak berfungsi?

**Solusi:**
1. Cek function `closeGallery()` dan `closeLightbox()`
2. Pastikan event listener ESC key ada
3. Pastikan click outside event ada
4. Clear cache dan refresh

---

## 📱 Responsive Behavior

### Desktop (> 968px)
- Gallery: 2 kolom grid
- Gambar: 400px tinggi
- Lightbox: 90% viewport

### Tablet (600px - 968px)
- Gallery: 1 kolom grid
- Gambar: 300px tinggi
- Lightbox: 90% viewport

### Mobile (< 600px)
- Gallery: 1 kolom grid
- Gambar: 250px tinggi
- Lightbox: 95% viewport
- Font size lebih kecil

---

## 🎨 Contoh Implementasi Lengkap

### Portfolio dengan 4 Gambar:

```html
<div class="gallery-grid">
    <!-- Gambar 1: Sketch -->
    <div class="gallery-item" onclick="openLightbox('https://i.imgur.com/sketch.png', 'Sketsa Awal')">
        <img src="https://i.imgur.com/sketch.png" alt="Sketsa">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Sketsa Awal</p>
        </div>
    </div>
    
    <!-- Gambar 2: Design -->
    <div class="gallery-item" onclick="openLightbox('https://i.imgur.com/design.png', 'Desain Digital')">
        <img src="https://i.imgur.com/design.png" alt="Desain">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Desain Digital</p>
        </div>
    </div>
    
    <!-- Gambar 3: Mockup -->
    <div class="gallery-item" onclick="openLightbox('https://i.imgur.com/mockup.png', 'Mockup Produk')">
        <img src="https://i.imgur.com/mockup.png" alt="Mockup">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Mockup Produk</p>
        </div>
    </div>
    
    <!-- Gambar 4: Final -->
    <div class="gallery-item" onclick="openLightbox('https://i.imgur.com/final.png', 'Hasil Akhir')">
        <img src="https://i.imgur.com/final.png" alt="Final">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus"></i>
            <p>Hasil Akhir</p>
        </div>
    </div>
</div>
```

---

## 🚀 Fitur Tambahan (Advanced)

### 1. Navigation Arrows di Lightbox

Tambahkan tombol prev/next untuk navigasi antar gambar di lightbox.

### 2. Thumbnail Preview

Tampilkan thumbnail semua gambar di bawah lightbox.

### 3. Download Button

Tambahkan tombol download untuk setiap gambar.

### 4. Share Button

Tambahkan tombol share ke social media.

### 5. Zoom In/Out

Tambahkan kontrol zoom untuk gambar di lightbox.

**Catatan:** Fitur-fitur advanced ini memerlukan JavaScript tambahan.

---

## 📞 Butuh Bantuan?

Jika ada masalah dengan gallery:
1. Cek console browser (F12) untuk error
2. Baca bagian Troubleshooting di atas
3. Test di browser lain
4. Clear cache dan cookies

---

**Selamat menggunakan fitur gallery! 🎉**

Fitur ini akan membuat portfolio Anda lebih interaktif dan profesional!
