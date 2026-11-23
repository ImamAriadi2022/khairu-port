# 📖 Manga-Style Web Developer Portfolio — Muhammad Al Khairu Akbar Ivan

Website portofolio personal statis bertema **Manga / Komik Klasik Kontras Tinggi (Black & White)** dengan sentuhan modern untuk **Muhammad Al Khairu Akbar Ivan**, seorang Web Developer.

Dibuat menggunakan **React (Vite)**, **Tailwind CSS**, **Framer Motion**, dan **Lucide React**.

---

## 🎨 Konsep & Estetika Desain

- **Manga Aesthetic**: Skema warna kertas manga (`#FAFAFA`) & tinta hitam pekat (`#0A0A0A`), aksen Merah Shonen (`#E63946`) & Kuning Komik (`#FFD166`).
- **Comic Panels**: Border tebal `border-4 border-black` dengan bayangan keras `shadow-[6px_6px_0px_#000000]`.
- **Speech Bubbles & Onomatopoeia**: Balon percakapan dengan segitiga dialog serta teks efek suara manga (*ドドド*, *BAM!*, *CODE!*, *SHING!*).
- **Halftone & Speed Lines**: Pola *screentone* titik-titik komik dan garis aksi radial SVG pada avatar developer.
- **Tipografi Komik**: Kombinasi Google Fonts *Bangers* (judul & onomatopoeia), *Space Grotesk* (heading tebal), *Plus Jakarta Sans* (isi teks), dan *JetBrains Mono* (stats & kode).

---

## 📁 Struktur Bab (Single Page Chapters)

1. **Header Panel (Navbar)**: Logo stempel manga merah (`IVAN 印`), indikator live dev `ONLINE`, navigasi bab (*Ch.01* s/d *Ch.04*), dan menu drawer mobile.
2. **Ch.01 Cover Page (Hero Section)**: Judul nama besar, badge `WEB DEVELOPER`, tagline dalam *speech bubble*, tombol CTA dengan efek *press physics*, dan panel avatar developer beresolusi tinggi.
3. **Ch.01 Character Profile Sheet (About Me)**: Lembar profil karakter databook resmi, stempel hanko `伊万 PASS`, parameter kemampuan (*Class, Clean Code, Bug Extermination, Coffee Intake, dll.*), dan biografi filosofi pengembangan.
4. **Ch.02 Ability & Equipment (Skills / Tech Stack)**: 12 kartu kemampuan yang terbagi menjadi *Core Jutsu (Frontend)* dan *Support Gear (Backend & Tools)* dengan efek hover pop-up.
5. **Ch.03 Story Arcs (Projects Showcase)**: Grid panel komik dengan thumbnail bergaya wireframe komik, label Arc, sound effects, dan **Comic Page Detail Modal** interaktif saat diklik (menampilkan sinopsis, tantangan, solusi teknis, dan metrik).
6. **Ch.04 Final Panel ("TO BE CONTINUED..." / Contact & Footer)**: Banner penutup manga, direct contact channel (Email, Jakarta Base, Jam Respon, Media Sosial), formulir kirim pesan transmisi statis dengan feedback interaktif, dan tombol kembali ke atas (*PAGE TOP*).

---

## 🛠️ Sentralisasi Data (`src/data/portfolioData.js`)

Semua data teks, informasi pribadi, skill, proyek, dan kontak tersimpan di satu file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

Untuk mengubah bio, nama, daftar proyek, atau skill, cukup ubah data di file tersebut tanpa perlu mengedit komponen JSX.

---

## 🚀 Cara Menjalankan Proyek

### 1. Prasyarat
Pastikan sudah terinstal [Node.js](https://nodejs.org/) (versi 18+ disarankan).

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser pada tautan yang muncul (biasanya `http://localhost:3000` atau `http://localhost:5173`).

### 4. Build untuk Production
```bash
npm run build
```
Hasil build siap hosting akan berada di dalam folder `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```
