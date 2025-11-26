```markdown
# Herbaprima — Template Website Toko Herbal

Deskripsi singkat
-----------------
Herbaprima adalah template website toko online untuk produk kesehatan herbal (madu, suplemen, dan produk sejenis). Template ini berfokus pada tampilan profesional, modern, dan premium, cocok untuk toko kecil hingga menengah. Template bersifat multipage dan responsive, siap dijalankan statis atau dikembangkan lebih lanjut dengan backend.

Fitur utama
-----------
- Multipage: Beranda (landing), Katalog Produk, Detail Produk, Checkout.
- Layout responsif: Grid produk 4 kolom di desktop, menyesuaikan di tablet/mobil.
- Banner / Hero slider bergaya premium.
- Header dengan navigasi & keranjang belanja (cart) yang disimpan di localStorage.
- Halaman produk: tampilan card (grid 4 kolom) dengan gambar pada card yang dibuat dengan latar belakang warna lembut.
- Bagian "Produk Terlaris" dan "Apa Kata Pelanggan" (review).
- Checkout: formulir Nama, No. HP, Alamat, Catatan; pesan akhir dikirim ke WhatsApp dengan detail pesanan.
- Footer informatif (alamat, kontak, info perusahaan).
- Mudah dikustomisasi: produk disimpan di array di assets/js/main.js.

Struktur proyek
---------------
- index.html                — Halaman beranda (landing)
- products.html             — Katalog produk (grid 4 kolom, filter)
- product.html              — Halaman detail produk (pakai query ?id=)
- checkout.html             — Form checkout dan ringkasan pesanan
- assets/
  - css/style.css           — Styling utama (responsive)
  - js/main.js              — Data produk, logika keranjang, slider, checkout WA
- README.md                 — Dokumen ini
- .gitignore                — File yang diabaikan (opsional)

Cara pakai (jalankan secara lokal)
----------------------------------
1. Clone repository:
   git clone https://github.com/<OWNER>/Herbaprima.git
2. Buka folder project:
   cd Herbaprima
3. Jalankan server statis (opsional tapi direkomendasikan):
   - Dengan Python 3:
     python -m http.server 8000
     lalu buka http://localhost:8000
   - Atau cukup buka file index.html di browser (beberapa fitur yang membutuhkan URL penuh mungkin berbeda)

Konfigurasi cepat
-----------------
- Mengubah daftar produk:
  Buka file assets/js/main.js, ubah array PRODUCTS (nama, harga, deskripsi, kategori, gambar, id).
- Mengubah nomor WhatsApp (tujuan checkout):
  Edit konstanta WHATSAPP_NUMBER di assets/js/main.js (format internasional tanpa tanda +, contoh: 6281234567890).
- Mengganti gambar:
  Ganti URL gambar pada array PRODUCTS di assets/js/main.js atau letakkan file gambar di folder assets/images/ dan update path.

Checkout & WhatsApp
-------------------
- Saat pengguna submit form checkout, aplikasi akan membuat pesan terstruktur yang berisi:
  - Nama pelanggan, No HP, Alamat
  - Daftar item + qty + subtotal
  - Total keseluruhan
  - Catatan opsional
- Pesan otomatis dibuka di WhatsApp Web / App via tautan wa.me. Pastikan WHATSAPP_NUMBER di main.js sudah benar.

Deploy ke GitHub Pages
----------------------
1. Pastikan repository ada di GitHub.
2. Buka Settings → Pages di repo GitHub.
3. Pilih branch: main dan folder root (/) → Save.
4. Setelah beberapa menit, situs akan tersedia di https://<USERNAME>.github.io/Herbaprima/  

Keamanan & peningkatan
----------------------
- Template ini bersifat statis; jika butuh stok real-time, login admin, atau pembayaran online, integrasikan backend (Node/Express, Firebase, atau layanan e-commerce).
- Untuk integrasi pembayaran (Midtrans / Xendit / DOKU), tambahkan endpoint server yang menangani notifikasi & verifikasi transaksi.
- Validasi input pada checkout lebih ketat disarankan untuk produksi.
- Gunakan HTTPS saat deployment (GitHub Pages otomatis menyediakan HTTPS).

Lisensi
-------
Template ini diberikan bebas untuk Anda modifikasi dan gunakan. Jika ada ketentuan lisensi khusus, cantumkan sesuai keinginan.

Kontak
-----
Jika ingin saya bantu membuat repo secara otomatis atau push file, beritahu saya (akan butuh akses). Jika tidak, ikuti petunjuk di bawah untuk membuat repo sendiri.
```