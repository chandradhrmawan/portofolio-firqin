export const siteData = {
  // ===== Identity =====
  name: 'Ratu Firqin Fu\'adiyah',
  role: 'Graphic Designer',
  location: 'Bogor, Indonesia',
  email: 'ratu.firqinfuadiyah@gmail.com',
  phone: '08588-7973-673',
  profileImage: '/images/profile.png',

  // ===== Hero =====
  hero: {
    tagline: 'Designing with Purpose. Communicating with Clarity.',
    subtitle: 'Graphic Designer · Visual Identity · Branding',
    ctaPrimary: 'See My Work',
    ctaSecondary: 'Get in Touch',
  },

  // ===== About =====
  about: {
    summary:
      'Experienced graphic designer with a background in social media content, promotional materials, key visuals & logo design. Skilled in Adobe Creative Suite, Canva, Ibis Paint & CapCut. Driven by impact, continuous improvement, and practical problem-solving.',
    skills: [
      'Adobe Illustrator',
      'Photoshop',
      'InDesign',
      'Canva',
      'CapCut',
      'Ibis Paint',
      'Brand Identity',
      'Key Visual',
      'Social Media Design',
    ],
  },

  // ===== Work Experience =====
  experience: [
    {
      title: 'Freelance Graphic Designer',
      company: 'Self-Employed',
      period: 'Jan 2024 – Present',
      current: true,
      bullets: [
        'Promotional materials (poster, flyer, banner) untuk klien F&B, e-commerce, elektronik',
        'Logo & visual identity untuk event musik',
        'Key visual untuk event korporat',
        'Konten video pendek untuk sosial media',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'PT SeaBank Indonesia',
      period: 'Mar 2023 – Des 2023',
      current: false,
      bullets: [
        'Brand compliance design untuk kampanye sosial media',
        'Layout & sizing untuk berbagai aset digital',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'PT Rashif Indonesia',
      period: 'Mei 2021 – Sep 2022',
      current: false,
      bullets: [
        'Desain materi cetak: brosur, banner, signage',
        'Presentasi mockup ke klien',
        'Dukungan desain untuk kampanye & event marketing',
      ],
    },
    {
      title: 'Head of Animation',
      company: 'PT Infection Studio',
      period: 'Jun 2020 – Agu 2020',
      current: false,
      bullets: [
        'Storyboard & coloring komik',
        'Ilustrasi untuk buku & majalah',
        'Koordinasi tim ilustrasi mingguan',
      ],
    },
  ],

  // ===== Portfolio =====
  portfolio: [
    { id: 1, title: 'Brand Identity — Music Festival', category: 'Brand Identity', year: '2024', color: 'from-rose-500 to-orange-400', image: '/images/portfolio-1.png' },
    { id: 2, title: 'Social Media Campaign — F&B', category: 'Social Media', year: '2024', color: 'from-violet-500 to-fuchsia-400', image: '/images/portfolio-2.png' },
    { id: 3, title: 'Event Key Visual — Corporate', category: 'Event', year: '2024', color: 'from-cyan-500 to-blue-400', image: '/images/portfolio-3.png' },
    { id: 4, title: 'Print Materials — Brochure Set', category: 'Print', year: '2023', color: 'from-emerald-500 to-teal-400', image: '/images/portfolio-4.png' },
    { id: 5, title: 'Digital Campaign — SeaBank', category: 'Social Media', year: '2023', color: 'from-amber-500 to-yellow-400' },
    { id: 6, title: 'Short Video Content — Product', category: 'Video', year: '2024', color: 'from-pink-500 to-rose-400' },
    { id: 7, title: 'Logo Design — Startup', category: 'Brand Identity', year: '2024', color: 'from-indigo-500 to-purple-400' },
    { id: 8, title: 'Banner & Signage — Retail', category: 'Print', year: '2022', color: 'from-red-500 to-pink-400' },
  ],

  portfolioCategories: ['All', 'Social Media', 'Brand Identity', 'Event', 'Print', 'Video'],

  // ===== Skills =====
  tools: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Canva',
    'Ibis Paint',
    'CapCut',
  ],
  softSkills: [
    'Attention to Detail',
    'Brand Compliance',
    'Cross-functional Collaboration',
    'Working Under Pressure',
    'Creative Problem Solving',
  ],

  // ===== Education =====
  education: {
    degree: 'Bachelor of Arts',
    university: 'Universitas Pembangunan Jaya',
    period: 'Agu 2018 – Okt 2022',
  },

  // ===== Navigation =====
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
