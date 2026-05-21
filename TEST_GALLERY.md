# ✅ Testing Checklist - Fitur Gallery

Panduan untuk testing fitur gallery dan lightbox.

---

## 📋 Pre-Testing Checklist

Sebelum mulai testing, pastikan:

- [ ] Semua file sudah di-save
- [ ] Browser sudah di-refresh (Ctrl + F5)
- [ ] Koneksi internet aktif (untuk load gambar dari Imgur)
- [ ] JavaScript enabled di browser

---

## 🧪 Test Cases

### Test 1: Buka Portfolio Page

**Langkah:**
1. Buka `portfolio.html` di browser
2. Scroll ke bagian portfolio

**Expected Result:**
- ✅ Halaman terbuka tanpa error
- ✅ 2 portfolio card terlihat (Desain Mug & Website Kelompok)
- ✅ Gambar mug terlihat
- ✅ Tombol "Lihat Galeri (2 Foto)" terlihat

**Status:** [ ] Pass [ ] Fail

---

### Test 2: Hover Portfolio Card

**Langkah:**
1. Hover mouse ke portfolio card "Desain Mug"

**Expected Result:**
- ✅ Card terangkat sedikit (translateY)
- ✅ Shadow lebih besar
- ✅ Overlay muncul dengan teks "Klik untuk Lihat Galeri"
- ✅ Smooth animation

**Status:** [ ] Pass [ ] Fail

---

### Test 3: Klik Portfolio Card (Buka Gallery)

**Langkah:**
1. Klik pada gambar portfolio "Desain Mug"
   ATAU
2. Klik tombol "Lihat Galeri (2 Foto)"

**Expected Result:**
- ✅ Gallery modal terbuka
- ✅ Background hitam semi-transparan
- ✅ Judul "Desain Mug - Galeri" terlihat
- ✅ 2 gambar terlihat dalam grid
- ✅ Tombol close (X) terlihat di pojok kanan atas
- ✅ Smooth fade-in animation
- ✅ Scrolling halaman utama disabled

**Status:** [ ] Pass [ ] Fail

---

### Test 4: Hover Gambar di Gallery

**Langkah:**
1. Hover mouse ke salah satu gambar di gallery

**Expected Result:**
- ✅ Gambar zoom sedikit (scale 1.1)
- ✅ Overlay muncul dengan icon search-plus
- ✅ Text caption terlihat
- ✅ Card terangkat (translateY)
- ✅ Shadow berubah warna (biru)
- ✅ Smooth animation

**Status:** [ ] Pass [ ] Fail

---

### Test 5: Klik Gambar (Buka Lightbox)

**Langkah:**
1. Klik pada gambar pertama (Desain Sebelum Jadi)

**Expected Result:**
- ✅ Lightbox modal terbuka
- ✅ Background hitam full screen
- ✅ Gambar ditampilkan besar di tengah
- ✅ Caption "Desain Mug - Sebelum Jadi" terlihat di bawah
- ✅ Tombol close (X) terlihat di atas
- ✅ Zoom-in animation
- ✅ Gallery modal masih terbuka di belakang

**Status:** [ ] Pass [ ] Fail

---

### Test 6: Close Lightbox dengan Tombol X

**Langkah:**
1. Klik tombol X di lightbox

**Expected Result:**
- ✅ Lightbox tertutup
- ✅ Kembali ke gallery modal
- ✅ Smooth fade-out animation

**Status:** [ ] Pass [ ] Fail

---

### Test 7: Close Lightbox dengan ESC Key

**Langkah:**
1. Buka lightbox lagi
2. Tekan tombol ESC di keyboard

**Expected Result:**
- ✅ Lightbox tertutup
- ✅ Gallery modal juga tertutup
- ✅ Kembali ke halaman portfolio

**Status:** [ ] Pass [ ] Fail

---

### Test 8: Close Lightbox dengan Click Outside

**Langkah:**
1. Buka lightbox lagi
2. Klik di area hitam (di luar gambar)

**Expected Result:**
- ✅ Lightbox tertutup
- ✅ Kembali ke gallery modal

**Status:** [ ] Pass [ ] Fail

---

### Test 9: Close Gallery dengan Tombol X

**Langkah:**
1. Pastikan di gallery modal (bukan lightbox)
2. Klik tombol X di pojok kanan atas

**Expected Result:**
- ✅ Gallery modal tertutup
- ✅ Kembali ke halaman portfolio
- ✅ Scrolling halaman enabled kembali

**Status:** [ ] Pass [ ] Fail

---

### Test 10: Close Gallery dengan ESC Key

**Langkah:**
1. Buka gallery modal
2. Tekan tombol ESC

**Expected Result:**
- ✅ Gallery modal tertutup
- ✅ Kembali ke halaman portfolio

**Status:** [ ] Pass [ ] Fail

---

### Test 11: Close Gallery dengan Click Outside

**Langkah:**
1. Buka gallery modal
2. Klik di area hitam (di luar gallery content)

**Expected Result:**
- ✅ Gallery modal tertutup
- ✅ Kembali ke halaman portfolio

**Status:** [ ] Pass [ ] Fail

---

### Test 12: Test Gambar Kedua

**Langkah:**
1. Buka gallery modal
2. Klik gambar kedua (Hasil Jadi)

**Expected Result:**
- ✅ Lightbox terbuka dengan gambar mug hasil jadi
- ✅ Caption "Desain Mug - Hasil Jadi" terlihat
- ✅ Gambar terlihat jelas dan tidak blur

**Status:** [ ] Pass [ ] Fail

---

### Test 13: Responsive - Mobile View

**Langkah:**
1. Tekan F12 (Developer Tools)
2. Tekan Ctrl + Shift + M (Toggle Device Toolbar)
3. Pilih device: iPhone 12 Pro
4. Test semua fungsi gallery

**Expected Result:**
- ✅ Gallery tampil 1 kolom
- ✅ Gambar tidak terlalu besar
- ✅ Tombol close mudah diklik
- ✅ Lightbox responsive
- ✅ Caption terbaca dengan jelas
- ✅ Tidak ada horizontal scroll

**Status:** [ ] Pass [ ] Fail

---

### Test 14: Responsive - Tablet View

**Langkah:**
1. Pilih device: iPad
2. Test semua fungsi gallery

**Expected Result:**
- ✅ Gallery tampil 1 kolom
- ✅ Ukuran gambar proporsional
- ✅ Semua fungsi bekerja normal

**Status:** [ ] Pass [ ] Fail

---

### Test 15: Multiple Browser Test

**Langkah:**
1. Test di Chrome
2. Test di Firefox
3. Test di Edge

**Expected Result:**
- ✅ Semua fungsi bekerja di semua browser
- ✅ Animasi smooth di semua browser
- ✅ Tidak ada visual bug

**Status:** 
- Chrome: [ ] Pass [ ] Fail
- Firefox: [ ] Pass [ ] Fail
- Edge: [ ] Pass [ ] Fail

---

## 🐛 Common Issues & Solutions

### Issue 1: Gallery tidak terbuka

**Kemungkinan Penyebab:**
- JavaScript error
- Function name salah
- ID modal salah

**Cara Check:**
1. Buka Console (F12)
2. Lihat error message
3. Cek apakah ada error merah

**Solusi:**
- Pastikan `script.js` ter-load
- Cek function `openMugGallery()` ada
- Cek ID `mugGalleryModal` benar

---

### Issue 2: Gambar tidak muncul

**Kemungkinan Penyebab:**
- URL gambar salah
- Koneksi internet bermasalah
- Gambar dihapus dari Imgur

**Cara Check:**
1. Klik kanan gambar → "Open image in new tab"
2. Lihat apakah gambar bisa dibuka

**Solusi:**
- Cek URL gambar (harus lengkap dengan https://)
- Pastikan format: `https://i.imgur.com/KODE.png`
- Re-upload gambar ke Imgur jika perlu

---

### Issue 3: Lightbox tidak zoom

**Kemungkinan Penyebab:**
- Function `openLightbox()` tidak dipanggil
- Parameter salah
- ID lightbox salah

**Cara Check:**
1. Buka Console
2. Cek error saat klik gambar

**Solusi:**
- Cek onclick attribute: `onclick="openLightbox('URL', 'Caption')"`
- Pastikan parameter dalam quotes
- Cek ID `lightboxModal` benar

---

### Issue 4: Close button tidak berfungsi

**Kemungkinan Penyebab:**
- Function `closeGallery()` atau `closeLightbox()` tidak ada
- Event listener tidak ter-attach

**Solusi:**
- Cek function ada di `script.js`
- Refresh browser (Ctrl + F5)
- Clear cache

---

### Issue 5: Scrolling tidak disabled saat modal terbuka

**Kemungkinan Penyebab:**
- `document.body.style.overflow = 'hidden'` tidak jalan

**Solusi:**
- Cek function `openMugGallery()` dan `openLightbox()`
- Pastikan line `document.body.style.overflow = 'hidden'` ada

---

### Issue 6: Animation tidak smooth

**Kemungkinan Penyebab:**
- CSS transition tidak ada
- Browser lama

**Solusi:**
- Cek CSS `transition: var(--transition)`
- Update browser ke versi terbaru
- Test di browser lain

---

## 📊 Test Results Summary

**Total Tests:** 15

**Passed:** _____ / 15

**Failed:** _____ / 15

**Pass Rate:** _____ %

---

## ✅ Final Checklist

Sebelum deploy, pastikan:

- [ ] Semua test passed
- [ ] Tidak ada console error
- [ ] Gambar load dengan cepat
- [ ] Responsive di mobile & tablet
- [ ] Bekerja di Chrome, Firefox, Edge
- [ ] Animation smooth
- [ ] Close button berfungsi (X, ESC, click outside)
- [ ] Caption terlihat jelas
- [ ] Tidak ada horizontal scroll

---

## 📝 Notes

Catat issue atau bug yang ditemukan:

```
Issue 1:
- Deskripsi: 
- Browser: 
- Device: 
- Solusi: 

Issue 2:
- Deskripsi: 
- Browser: 
- Device: 
- Solusi: 
```

---

## 🎉 Testing Complete!

Jika semua test passed, fitur gallery siap digunakan!

**Next Steps:**
1. Deploy website
2. Test di production
3. Share ke teman untuk feedback
4. Monitor performance

---

**Happy Testing! 🚀**
