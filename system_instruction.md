# 🎨 Prompt: Portfolio Website Branding — Ratu Firqin Fu'adiyah

## 📌 Konteks & Tujuan

Buat sebuah **website portofolio personal** yang berfungsi sebagai platform branding profesional untuk seorang **Graphic Designer berpengalaman** bernama **Ratu Firqin Fu'adiyah**. Website ini harus mencerminkan kepribadian kreatif, profesional, dan dinamis sesuai dengan latar belakang kerjanya di industri desain visual.

Framework yang digunakan: **Antigravity**

---

## 👤 Identitas Pemilik

| Data | Detail |
|------|--------|
| **Nama** | Ratu Firqin Fu'adiyah |
| **Lokasi** | Bogor, Indonesia |
| **Email** | ratu.firqinfuadiyah@gmail.com |
| **Telepon** | 08588-7973-673 |
| **Role** | Graphic Designer / Freelance Creative |

---

## 🎯 Arah Estetika & Branding

Gunakan arah desain **editorial-luxury meets bold brutalism** — bersih namun memiliki karakter kuat. Hindari tampilan generik atau template biasa.

### Palet Warna
- **Warna Utama:** Hitam pekat `#0D0D0D` atau putih bersih `#F5F5F0`
- **Aksen:** Merah bata `#C0392B` atau kuning tembaga `#D4A843` — pilih salah satu untuk konsistensi
- **Netral:** Abu-abu warm `#8B8B8B`
- Gunakan kontras tinggi dan nuansa editorial

### Tipografi
- **Display/Heading:** Font serif dramatis seperti *Playfair Display*, *Freight Display*, atau *Cormorant Garamond* — bold, prestisius
- **Body Text:** Font sans-serif bersih seperti *DM Sans* atau *Neue Haas Grotesk*
- **Aksen/Label:** Monospace kecil seperti *IBM Plex Mono* untuk label kategori & tag

### Mood & Atmosfer
- Minimalis namun *opinionated*
- Elemen tipografi besar yang mendominasi
- White space yang generous
- Subtle grain/noise texture di background
- Micro-animation halus pada hover dan scroll reveal

---

## 🗂️ Struktur Halaman

### 1. `Hero Section`
- Nama **RATU FIRQIN FU'ADIYAH** dalam tipografi besar dan bold, di-layout secara asimetris
- Tagline singkat, contoh: *"Designing with Purpose. Communicating with Clarity."*
- Subtitle: `Graphic Designer · Visual Identity · Branding`
- Subtle animasi: text fade-in staggered + parallax ringan
- CTA Button: **"See My Work"** dan **"Get in Touch"**

---

### 2. `About Section`
- Foto profil (placeholder bisa berupa shape geometris elegan)
- Paragraf singkat dari summary CV:
  > Experienced graphic designer with a background in social media content, promotional materials, key visuals & logo design. Skilled in Adobe Creative Suite, Canva, Ibis Paint & CapCut. Driven by impact, continuous improvement, and practical problem-solving.
- Skills Tags (dalam chip/badge): `Adobe Illustrator`, `Photoshop`, `InDesign`, `Canva`, `CapCut`, `Ibis Paint`, `Brand Identity`, `Key Visual`, `Social Media Design`

---

### 3. `Work Experience Section`
Tampilkan dalam layout **timeline horizontal atau card grid** yang elegan.

#### Entri yang harus ditampilkan:

**🔹 Freelance Graphic Designer** *(Jan 2024 – Present)*
- Promotional materials (poster, flyer, banner) untuk klien F&B, e-commerce, elektronik
- Logo & visual identity untuk event musik
- Key visual untuk event korporat
- Konten video pendek untuk sosial media

**🔹 Graphic Designer — PT SeaBank Indonesia** *(Mar 2023 – Des 2023)*
- Brand compliance design untuk kampanye sosial media
- Layout & sizing untuk berbagai aset digital

**🔹 Graphic Designer — PT Rashif Indonesia** *(Mei 2021 – Sep 2022)*
- Desain materi cetak: brosur, banner, signage
- Presentasi mockup ke klien
- Dukungan desain untuk kampanye & event marketing

**🔹 Head of Animation — PT Infection Studio** *(Jun 2020 – Agu 2020)*
- Storyboard & coloring komik
- Ilustrasi untuk buku & majalah
- Koordinasi tim ilustrasi mingguan

---

### 4. `Portfolio / Projects Section`
- Grid **Masonry atau 2-3 kolom** untuk menampilkan karya
- Setiap card memiliki: thumbnail, judul proyek, kategori tag, tahun
- Hover effect: overlay dengan deskripsi singkat + tombol "View"
- Kategori filter: `All` | `Social Media` | `Brand Identity` | `Event` | `Print` | `Video`

> ⚠️ **Placeholder:** Gunakan gambar placeholder bergradien atau pattern geometris elegan sambil menunggu aset nyata dari pemilik.

---

### 5. `Skills & Tools Section`
Tampilkan dalam layout yang visual dan tidak membosankan — bisa berupa **marquee/scrolling ticker** atau **icon grid** dengan animasi reveal.

**Tools:**
- Adobe Photoshop
- Adobe Illustrator
- Adobe InDesign
- Canva
- Ibis Paint
- CapCut

**Soft Skills:**
- Attention to Detail
- Brand Compliance
- Cross-functional Collaboration
- Working Under Pressure
- Creative Problem Solving

---

### 6. `Education Section`
- **Bachelor of Arts** — Universitas Pembangunan Jaya *(Agu 2018 – Okt 2022)*
- Tampilkan dengan desain simpel namun elegan: garis timeline atau card minimalis

---

### 7. `Contact Section`
- Heading besar: *"Let's Work Together"*
- Tampilkan: Email, Nomor Telepon, Lokasi (Bogor, Indonesia)
- CTA Button: **"Send Me an Email"** → mailto link
- Form kontak opsional: Nama, Email, Pesan, Tombol Kirim
- Background kontras dengan section lainnya (bisa full dark atau full light)

---

### 8. `Footer`
- Nama & copyright: `© 2025 Ratu Firqin Fu'adiyah`
- Link navigasi cepat
- Social media icons (Instagram, LinkedIn, Behance — placeholder)

---

## ⚙️ Spesifikasi Teknis (Antigravity)

```
Framework : Antigravity
Output    : Static Site / SSG
Bahasa    : English (dengan opsi Bahasa Indonesia)
Responsive: Mobile-first, breakpoints: sm / md / lg / xl
Animation : CSS transitions + scroll-reveal (Intersection Observer)
Fonts     : Google Fonts atau variable fonts
Icons     : Lucide Icons atau Heroicons
```

### Komponen Antigravity yang Disarankan:
- `<Layout>` — untuk struktur halaman konsisten
- `<Section>` — pembungkus tiap blok konten
- `<Grid>` — untuk portfolio & skills
- `<Card>` — untuk proyek & pengalaman kerja
- `<Button>` — CTA yang dapat dikustomisasi
- `<Typography>` — heading & body text dengan scale yang konsisten
- `<Tag / Badge>` — untuk skill dan kategori
- `<Timeline>` *(jika tersedia)* — untuk work experience

---

## 🚀 Deliverable yang Diharapkan

- [ ] Satu halaman penuh (Single Page Application / One-page scroll)
- [ ] Navigasi sticky dengan smooth scroll ke tiap section
- [ ] Responsive di desktop, tablet, dan mobile
- [ ] Loading animasi halus saat pertama kali dibuka
- [ ] Dark/Light mode toggle *(opsional, nilai tambah)*
- [ ] Semua teks editable dengan mudah melalui data/config file

---

## 💡 Catatan Tambahan untuk Developer

> - Prioritaskan **visual identity yang kuat** — website ini adalah wajah profesional Ratu sebagai desainer
> - Jangan gunakan template generik; setiap detail (spacing, shadow, radius) harus terasa *disengaja*
> - Gunakan animasi **secukupnya** — kesan premium datang dari ketenangan, bukan keramaian
> - Pastikan performa baik (Lighthouse score ≥ 90)
> - Siapkan slot untuk **Behance / Dribbble embed** di section Portfolio di masa mendatang