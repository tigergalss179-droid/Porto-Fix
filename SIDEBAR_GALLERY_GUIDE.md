## 📚 Panduan Sidebar & Gallery Hobi

Dokumentasi lengkap untuk fitur sidebar dan gallery hobi.

---

## 🎯 Fitur Baru

### 1. Sidebar Menu
Floating sidebar yang bisa diakses dari semua halaman dengan quick links ke:
- 📧 Email Contact
- 📸 Gallery Hobi
- 🛍️ Shop (s.id)
- 📱 Social Media

### 2. Gallery Hobi
Halaman khusus untuk menampilkan foto-foto hobi Anda dalam kategori:
- 💪 Gym & Workout
- 🚴 Bersepeda
- ✈️ Liburan & Traveling

---

## 🎨 Cara Menggunakan Sidebar

### Membuka Sidebar
1. **Klik tombol floating** di pojok kiri bawah (icon bars)
2. **Sidebar slide dari kiri**
3. **Background overlay muncul**

### Menutup Sidebar
- Klik tombol X di sidebar
- Klik di area overlay (di luar sidebar)
- Tekan tombol ESC di keyboard

### Fitur Sidebar
- ✅ Smooth slide animation
- ✅ Responsive di semua device
- ✅ Quick access ke kontak, gallery, shop
- ✅ Social media links
- ✅ Active state untuk halaman saat ini

---

## 📸 Cara Menambah Foto ke Gallery

### Langkah-langkah:

1. **Upload Foto ke Imgur**
   - Kunjungi https://imgur.com
   - Upload foto hobi Anda
   - Copy link foto (format: `https://i.imgur.com/KODE.jpg`)

2. **Edit file `gallery.html`**

Cari bagian kategori yang sesuai (Gym, Sepeda, atau Liburan):

```html
<!-- Contoh untuk kategori Gym -->
<div class="gallery-photo" onclick="openPhotoLightbox('URL_FOTO_ANDA', 'Caption Foto')">
    <img src="URL_FOTO_ANDA" alt="Deskripsi">
    <div class="photo-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

3. **Ganti Placeholder**
   - Ganti `https://via.placeholder.com/...` dengan URL foto Anda
   - Ganti caption sesuai deskripsi foto
   - Ganti alt text untuk accessibility

### Contoh Lengkap:

**BEFORE (Placeholder):**
```html
<div class="gallery-photo" onclick="openPhotoLightbox('https://via.placeholder.com/800x600/5D69E2/ffffff?text=Gym+Photo+1', 'Workout Session 1')">
    <img src="https://via.placeholder.com/400x300/5D69E2/ffffff?text=Gym+1" alt="Gym 1">
    <div class="photo-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

**AFTER (Foto Anda):**
```html
<div class="gallery-photo" onclick="openPhotoLightbox('https://i.imgur.com/ABC123.jpg', 'Workout di Gym Pagi Hari')">
    <img src="https://i.imgur.com/ABC123.jpg" alt="Workout Gym">
    <div class="photo-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

---

## 🎨 Menambah Kategori Baru

Jika ingin menambah kategori hobi lain (misal: Futsal, Gaming, dll):

### 1. Copy Template Kategori

```html
<!-- Category: Nama Hobi Baru -->
<div class="gallery-category fade-in">
    <div class="category-header">
        <div class="category-icon">
            <i class="fas fa-ICON-NAME"></i>  <!-- Ganti icon -->
        </div>
        <div class="category-info">
            <h2>Nama Hobi</h2>
            <p>Deskripsi hobi Anda</p>
        </div>
    </div>
    <div class="category-gallery">
        <!-- Foto 1 -->
        <div class="gallery-photo" onclick="openPhotoLightbox('URL_FOTO_1', 'Caption 1')">
            <img src="URL_FOTO_1" alt="Deskripsi 1">
            <div class="photo-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
        
        <!-- Foto 2 -->
        <div class="gallery-photo" onclick="openPhotoLightbox('URL_FOTO_2', 'Caption 2')">
            <img src="URL_FOTO_2" alt="Deskripsi 2">
            <div class="photo-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
        
        <!-- Tambah foto lain sesuai kebutuhan -->
    </div>
</div>
```

### 2. Pilih Icon yang Sesuai

**Icon Hobi Populer:**
- Futsal/Bola: `fas fa-futbol`
- Gaming: `fas fa-gamepad`
- Musik: `fas fa-music`
- Fotografi: `fas fa-camera`
- Membaca: `fas fa-book`
- Memasak: `fas fa-utensils`
- Berenang: `fas fa-swimming-pool`
- Hiking: `fas fa-hiking`

Cari icon lain di: https://fontawesome.com/icons

---

## 🎨 Kustomisasi Sidebar

### Mengubah Warna Sidebar

**File: `styles.css`**

Cari bagian `.sidebar-header`:

```css
.sidebar-header {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
}
```

Ubah dengan warna pilihan Anda:

```css
/* Biru Ocean */
background: linear-gradient(135deg, #2E3192, #00D4FF);

/* Sunset */
background: linear-gradient(135deg, #FF6B6B, #FF6B9D);

/* Dark */
background: linear-gradient(135deg, #2c3e50, #34495e);
```

### Mengubah Posisi Tombol Sidebar

**File: `styles.css`**

Cari bagian `.sidebar-toggle`:

```css
.sidebar-toggle {
    left: 20px;    /* Jarak dari kiri */
    bottom: 30px;  /* Jarak dari bawah */
}
```

**Pindah ke kanan bawah:**
```css
.sidebar-toggle {
    right: 20px;   /* Ganti left dengan right */
    bottom: 30px;
    left: auto;    /* Reset left */
}
```

**Pindah ke kiri atas:**
```css
.sidebar-toggle {
    left: 20px;
    top: 100px;    /* Ganti bottom dengan top */
    bottom: auto;  /* Reset bottom */
}
```

### Mengubah Lebar Sidebar

**File: `styles.css`**

Cari bagian `.sidebar`:

```css
.sidebar {
    width: 320px;  /* Ubah angka ini */
}
```

**Rekomendasi:**
- Mobile-friendly: 280px - 320px
- Standard: 320px - 350px
- Wide: 350px - 400px

---

## 📱 Responsive Behavior

### Desktop (> 968px)
- Sidebar: 320px width
- Gallery: 3-4 kolom grid
- Tombol floating di kiri bawah

### Tablet (600px - 968px)
- Sidebar: 320px width (overlay full screen)
- Gallery: 2-3 kolom grid
- Tombol floating di kiri bawah

### Mobile (< 600px)
- Sidebar: Full width (100vw)
- Gallery: 1-2 kolom grid
- Tombol floating di kiri bawah

---

## 🎯 Tips & Best Practices

### Foto Gallery

**Ukuran Optimal:**
- Thumbnail: 400x300 px
- Full size: 800x600 px atau 1200x900 px
- Format: JPG (untuk foto), PNG (untuk screenshot)
- Ukuran file: < 500 KB per foto

**Jumlah Foto:**
- Minimal: 3 foto per kategori
- Optimal: 6-9 foto per kategori
- Maksimal: 12 foto per kategori

**Caption yang Baik:**
- Singkat dan deskriptif
- Jelaskan konteks foto
- Tambahkan lokasi/waktu jika relevan

**Contoh:**
- ✅ "Workout Chest Day di Gym Pagi"
- ✅ "Cycling ke Pantai Parangtritis"
- ✅ "Liburan ke Bali - Pantai Kuta"
- ❌ "Foto 1"
- ❌ "IMG_1234"

### Sidebar Links

**Email:**
- Gunakan format `mailto:email@example.com`
- Email akan buka di email client default

**External Links:**
- Tambahkan `target="_blank"` untuk buka tab baru
- Tambahkan `rel="noopener noreferrer"` untuk keamanan

**Active State:**
- Tambahkan class `active` di link halaman saat ini
- Contoh: Di gallery.html, link Gallery punya class `active`

---

## 🐛 Troubleshooting

### Sidebar tidak muncul?

**Solusi:**
1. Cek console (F12) untuk error
2. Pastikan `script.js` ter-load
3. Pastikan function `toggleSidebar()` ada
4. Clear cache browser

### Foto tidak muncul di gallery?

**Solusi:**
1. Cek URL foto (harus lengkap dengan https://)
2. Pastikan link Imgur benar
3. Buka link di browser baru untuk test
4. Pastikan foto tidak dihapus dari Imgur

### Lightbox tidak zoom?

**Solusi:**
1. Cek function `openPhotoLightbox()` di script.js
2. Pastikan parameter benar: `openPhotoLightbox('URL', 'Caption')`
3. Cek ID `photoLightbox` ada di HTML
4. Refresh browser

### Sidebar tidak close dengan ESC?

**Solusi:**
1. Cek event listener ESC key di script.js
2. Pastikan tidak ada conflict dengan event lain
3. Test di browser lain

---

## ✅ Checklist Implementasi

### Sidebar
- [ ] Tombol floating terlihat di semua halaman
- [ ] Sidebar slide smooth dari kiri
- [ ] Overlay background muncul
- [ ] Link email berfungsi (buka email client)
- [ ] Link gallery berfungsi (ke gallery.html)
- [ ] Link shop berfungsi (buka s.id di tab baru)
- [ ] Social media links berfungsi
- [ ] Close dengan X button
- [ ] Close dengan click overlay
- [ ] Close dengan ESC key
- [ ] Responsive di mobile

### Gallery
- [ ] Halaman gallery.html bisa diakses
- [ ] 3 kategori terlihat (Gym, Sepeda, Liburan)
- [ ] Foto placeholder terlihat
- [ ] Hover effect berfungsi
- [ ] Click foto buka lightbox
- [ ] Lightbox zoom berfungsi
- [ ] Caption terlihat di lightbox
- [ ] Close lightbox berfungsi
- [ ] Responsive di mobile

---

## 🚀 Next Steps

1. **Upload Foto Anda:**
   - Upload foto hobi ke Imgur
   - Ganti placeholder di gallery.html
   - Test di browser

2. **Kustomisasi:**
   - Ubah warna sidebar (opsional)
   - Tambah kategori hobi lain (opsional)
   - Sesuaikan caption foto

3. **Test:**
   - Test sidebar di semua halaman
   - Test gallery di desktop & mobile
   - Test semua links berfungsi

4. **Deploy:**
   - Upload semua file ke hosting
   - Test di production
   - Share website!

---

## 📞 Butuh Bantuan?

Jika ada masalah:
1. Baca bagian Troubleshooting di atas
2. Check console browser (F12) untuk error
3. Test di browser lain
4. Clear cache dan cookies

---

**Selamat menggunakan fitur sidebar dan gallery! 🎉**

Website Anda sekarang lebih interaktif dan personal!

---

© 2026 Muhammad Galih Seto. Made with ❤️
