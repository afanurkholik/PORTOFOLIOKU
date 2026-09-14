import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// ===== SEMUA DATA & TERJEMAHAN DI SINI =====
const allData = {
  en: {
    // Navigation
    nav: { work: 'Work', ai: 'AI', about: 'About', cv: 'CV', contact: 'Contact' },
    
    // Hero
    hero: {
      eyebrow: 'CREATIVE × TECHNOLOGY × AI',
      headline: 'I CREATE THINGS PEOPLE SEE.',
      subheadline: 'And build systems that make things work.',
      description: 'I work across visual content, creative production, studio operations, technical workflows, and AI-powered digital projects.',
      btnWork: 'VIEW MY WORK',
      btnAI: 'EXPLORE AI PROJECTS',
      meta1: 'SALATIGA — INDONESIA',
      meta2: 'CREATIVE / TECH / AI',
      meta3: 'AVAILABLE FOR SELECTED PROJECTS'
    },
    
    // Work Section
    work: {
      title: 'SELECTED WORK',
      subtitle: "A selection of creative and production work I've worked on over the years.",
      viewAll: 'VIEW ALL WORK →',
      projects: [
        {
          id: 'p1',
          title: 'Graduation Photography',
          category: 'Photography · Event Coverage',
          description: 'Documented annual graduation ceremonies for more than 1,000 graduates, covering large-scale events through photography.',
          metadata: ['4 YEARS', '1,000+ GRADUATES', 'PHOTOGRAPHY', 'EVENT COVERAGE'],
          slug: 'graduation-photography'
        },
        {
          id: 'p2',
          title: 'School Content Production',
          category: 'Photo · Video · Design · Social Media',
          description: 'Produced visual content for a school environment, including posters, banners, announcements, social media content, photography, and video. Supported an environment where annual applicants consistently exceeded the ~200 student enrollment target.',
          metadata: ['4 YEARS', 'PHOTO · VIDEO · DESIGN', 'SOCIAL MEDIA'],
          slug: 'school-content'
        },
        {
          id: 'p3',
          title: 'Event Livestreaming',
          category: 'Live Production · OBS · YouTube',
          description: 'Managed livestreaming workflows for institutional events using OBS and YouTube, including setup, monitoring, and troubleshooting.',
          metadata: ['3 YEARS', 'OBS', 'YOUTUBE', 'LIVE PRODUCTION'],
          slug: 'livestreaming'
        },
        {
          id: 'p4',
          title: 'Institutional Video Production',
          category: 'Video · Shooting · Editing',
          description: 'Worked on shooting and editing institutional and school profile videos.',
          metadata: ['VIDEO', 'SHOOTING', 'EDITING', 'PROFILE VIDEO'],
          slug: 'video-production',
          videoUrl: 'https://www.youtube.com/watch?v=RfZ9-YArK2Y'
        },
        {
          id: 'p5',
          title: 'Studio & Podcast Production',
          category: 'Studio · Camera · Audio · MC',
          description: 'Worked with podcast and studio production setups, including cameras, lighting, wireless microphones, recording, and MC/narration.',
          metadata: ['STUDIO', 'CAMERA', 'AUDIO', 'MC / NARRATION'],
          slug: 'podcast-production',
          image: '/assets/images/projects/podcast-production.jpg'
        }
      ]
    },
    
    // AI Section
    ai: {
      title: "I DON'T ONLY USE AI.",
      titleAccent: 'I BUILD WITH IT.',
      subtitle: 'I experiment with AI to turn ideas into useful tools, content systems, and workflows.',
      explore: 'EXPLORE AI PROJECTS →',
      projects: [
        {
          title: 'AI Teacher Assistant',
          description: 'An AI-assisted concept designed to help teachers prepare before teaching and think through classroom preparation.'
        },
        {
          title: 'AI Affiliate System',
          description: 'An AI-powered digital product experiment exploring how AI can support affiliate marketing and content workflows.'
        },
        {
          title: 'AI Assessment',
          description: 'An interactive AI-based assessment concept designed to turn user responses into personalized results and recommendations.'
        },
        {
          title: 'Telegram → n8n Content Workflow',
          description: 'An automation workflow that allows content ideas to be generated through a Telegram-based interaction.',
          isWorkflow: true
        }
      ]
    },
    
    // Capabilities
    capabilities: {
      title: 'WHAT I CAN DO',
      categories: {
        creative: {
          label: 'CREATIVE',
          skills: ['Photography', 'Videography', 'Video Editing', 'Content Creation', 'Visual Design']
        },
        production: {
          label: 'PRODUCTION',
          skills: ['Studio Setup', 'Podcast Production', 'Livestreaming', 'OBS', 'YouTube Live', 'Audio / Visual Equipment']
        },
        technology: {
          label: 'TECHNOLOGY',
          skills: ['IT Support', 'Microsoft 365', 'WordPress', 'AI Tools', 'n8n Automation']
        },
        operations: {
          label: 'OPERATIONS',
          skills: ['Equipment Management', 'Asset Management', 'SOP Development', 'Technical Troubleshooting', 'Team Coordination']
        }
      }
    },
    
    // About
    about: {
      title1: 'CREATIVE BY NATURE.',
      title2: 'TECHNICAL BY EXPERIENCE.',
      p1: "My experience sits between creative production and technology. I've spent years working hands-on with photography, video, livestreaming, studio operations, digital content, technical support, and AI-powered projects.",
      p2: 'From documenting large events to troubleshooting live production and experimenting with automation, I enjoy turning ideas into something people can actually see, use, or experience.',
      more: 'MORE ABOUT ME →'
    },
    
    // Timeline
    timeline: {
      title: 'EXPERIENCE SNAPSHOT',
      items: [
        {
          period: '2021 — 2025',
          title: 'MEDIA & DIGITAL ADMINISTRATION',
          details: 'Photography · Video · Content · Livestream · Studio'
        },
        {
          period: '2025 — 2026',
          title: 'OPERATIONS & FACILITY',
          details: 'Operations · Assets · SOP · Team Coordination'
        },
        {
          period: '2026',
          title: 'TECHNICAL SUPPORT',
          details: 'IT · Microsoft 365 · Troubleshooting · Service Management'
        }
      ]
    },
    
    // CV Section
    cv: {
      title: 'WANT THE FULL STORY?',
      desc: 'View or download my latest CV for a complete overview of my experience, education, and technical background.',
      btn: 'DOWNLOAD CV',
      note: 'PDF Format • Updated 2026'
    },
    
    // Contact
    contact: {
      title1: 'HAVE SOMETHING',
      title2: 'WORTH BUILDING?',
      desc: "I'm open to creative, multimedia, studio, content, technical, and AI-related opportunities.",
      btnEmail: 'EMAIL ME',
      btnLinkedin: 'LINKEDIN',
      btnWa: 'WHATSAPP'
    },
    
    // Footer
    footer: {
      tagline: 'CREATIVE × TECHNOLOGY × AI',
      location: 'Salatiga, Central Java, Indonesia',
      copyright: '© 2026 Muhammad Wafa Nurkholik'
    }
  },
  
  id: {
    // Navigation
    nav: { work: 'Karya', ai: 'AI', about: 'Tentang', cv: 'CV', contact: 'Kontak' },
    
    // Hero
    hero: {
      eyebrow: 'KREATIF × TEKNOLOGI × AI',
      headline: 'SAYA MENCIPTAKAN KARYA YANG BISA DINIKMATI.',
      subheadline: 'Dan merancang sistem agar semuanya berjalan sempurna.',
      description: 'Saya bergerak di bidang konten visual, produksi kreatif, operasional studio, alur kerja teknis, dan proyek digital berbasis AI.',
      btnWork: 'LIHAT KARYA SAYA',
      btnAI: 'JELAJAHI PROYEK AI',
      meta1: 'SALATIGA — INDONESIA',
      meta2: 'KREATIF / TEKNOLOGI / AI',
      meta3: 'TERBUKA UNTUK PROYEK TERPILIH'
    },
    
    // Work Section
    work: {
      title: 'KARYA PILIHAN',
      subtitle: 'Seleksi pekerjaan kreatif dan produksi yang telah saya tangani selama bertahun-tahun.',
      viewAll: 'LIHAT SEMUA KARYA →',
      projects: [
        {
          id: 'p1',
          title: 'Dokumentasi Wisuda',
          category: 'Fotografi · Liputan Acara',
          description: 'Mendokumentasikan upacara wisuda tahunan untuk lebih dari 1.000 lulusan, mencakup acara berskala besar melalui fotografi.',
          metadata: ['4 TAHUN', '1.000+ LULUSAN', 'FOTOGRAFI', 'LIPUTAN ACARA'],
          slug: 'graduation-photography'
        },
        {
          id: 'p2',
          title: 'Produksi Konten Sekolah',
          category: 'Foto · Video · Desain · Media Sosial',
          description: 'Memproduksi konten visual untuk lingkungan sekolah, termasuk poster, spanduk, pengumuman, konten media sosial, fotografi, dan video. Mendukung lingkungan di mana pelamar tahunan secara konsisten melebihi target penerimaan siswa ~200.',
          metadata: ['4 TAHUN', 'FOTO · VIDEO · DESAIN', 'MEDIA SOSIAL'],
          slug: 'school-content'
        },
        {
          id: 'p3',
          title: 'Livestreaming Acara',
          category: 'Produksi Langsung · OBS · YouTube',
          description: 'Mengelola alur kerja livestreaming untuk acara institusi menggunakan OBS dan YouTube, termasuk penyiapan, pemantauan, dan troubleshooting.',
          metadata: ['3 TAHUN', 'OBS', 'YOUTUBE', 'PRODUKSI LANGSUNG'],
          slug: 'livestreaming'
        },
        {
          id: 'p4',
          title: 'Produksi Video Institusi',
          category: 'Video · Shooting · Editing',
          description: 'Bekerja pada shooting dan editing video profil institusi dan sekolah.',
          metadata: ['VIDEO', 'SHOOTING', 'EDITING', 'VIDEO PROFIL'],
          slug: 'video-production'
        },
        {
          id: 'p5',
          title: 'Produksi Studio & Podcast',
          category: 'Studio · Kamera · Audio · MC',
          description: 'Bekerja dengan setup produksi podcast dan studio, termasuk kamera, pencahayaan, mikrofon nirkabel, rekaman, dan MC/narasi.',
          metadata: ['STUDIO', 'KAMERA', 'AUDIO', 'MC / NARASI'],
          slug: 'podcast-production'
        }
      ]
    },
    
    // AI Section
    ai: {
      title: 'SAYA TIDAK HANYA MENGGUNAKAN AI.',
      titleAccent: 'SAYA MEMBANGUN DENGANNYA.',
      subtitle: 'Saya bereksperimen dengan AI untuk mengubah ide menjadi alat yang berguna, sistem konten, dan alur kerja yang efisien.',
      explore: 'JELAJAHI PROYEK AI →',
      projects: [
        {
          title: 'Asisten Guru AI',
          description: 'Konsep berbasis AI yang dirancang untuk membantu guru mempersiapkan diri sebelum mengajar dan memikirkan persiapan kelas.'
        },
        {
          title: 'Sistem Afiliasi AI',
          description: 'Eksperimen produk digital berbasis AI yang mengeksplorasi bagaimana AI dapat mendukung pemasaran afiliasi dan alur kerja konten.'
        },
        {
          title: 'Asesmen AI',
          description: 'Konsep asesmen interaktif berbasis AI yang dirancang untuk mengubah respons pengguna menjadi hasil dan rekomendasi yang dipersonalisasi.'
        },
        {
          title: 'Alur Kerja Konten Telegram → n8n',
          description: 'Alur kerja otomatisasi yang memungkinkan ide konten dihasilkan melalui interaksi berbasis Telegram.',
          isWorkflow: true
        }
      ]
    },
    
    // Capabilities
    capabilities: {
      title: 'KEAHLIAN & KAPABILITAS',
      categories: {
        creative: {
          label: 'KREATIF',
          skills: ['Fotografi', 'Videografi', 'Editing Video', 'Pembuatan Konten', 'Desain Visual']
        },
        production: {
          label: 'PRODUKSI',
          skills: ['Setup Studio', 'Produksi Podcast', 'Livestreaming', 'OBS', 'YouTube Live', 'Peralatan Audio / Visual']
        },
        technology: {
          label: 'TEKNOLOGI',
          skills: ['Dukungan IT', 'Microsoft 365', 'WordPress', 'Tools AI', 'Otomasi n8n']
        },
        operations: {
          label: 'OPERASIONAL',
          skills: ['Manajemen Peralatan', 'Manajemen Aset', 'Pengembangan SOP', 'Troubleshooting Teknis', 'Koordinasi Tim']
        }
      }
    },
    
    // About
    about: {
      title1: 'BERJIWA KREATIF.',
      title2: 'TERASAH SECARA TEKNIS.',
      p1: 'Pengalaman saya berada di persimpangan antara produksi kreatif dan teknologi. Saya telah menghabiskan bertahun-tahun bekerja langsung dengan fotografi, video, livestreaming, operasional studio, konten digital, dukungan teknis, dan proyek berbasis AI.',
      p2: 'Dari mendokumentasikan acara besar hingga menyelesaikan masalah pada produksi langsung dan bereksperimen dengan otomatisasi, saya menikmati proses mengubah ide menjadi sesuatu yang benar-benar bisa dilihat, digunakan, atau dialami oleh orang lain.',
      more: 'SELENGKAPNYA TENTANG SAYA →'
    },
    
    // Timeline
    timeline: {
      title: 'JEJAK PENGALAMAN',
      items: [
        {
          period: '2021 — 2025',
          title: 'ADMINISTRASI MEDIA & DIGITAL',
          details: 'Fotografi · Video · Konten · Livestream · Studio'
        },
        {
          period: '2025 — 2026',
          title: 'OPERASIONAL & FASILITAS',
          details: 'Operasional · Aset · SOP · Koordinasi Tim'
        },
        {
          period: '2026',
          title: 'DUKUNGAN TEKNIS',
          details: 'IT · Microsoft 365 · Troubleshooting · Manajemen Layanan'
        }
      ]
    },
    
    // CV Section
    cv: {
      title: 'INGIN TAHU LEBIH LENGKAP?',
      desc: 'Lihat atau unduh CV terbaru saya untuk gambaran menyeluruh mengenai pengalaman, pendidikan, dan latar belakang teknis saya.',
      btn: 'UNDUH CV',
      note: 'Format PDF • Diperbarui 2026'
    },
    
    // Contact
    contact: {
      title1: 'PUNYA IDE YANG',
      title2: 'PATUT DIWUJUDKAN?',
      desc: 'Saya terbuka untuk peluang di bidang kreatif, multimedia, studio, konten, teknis, dan terkait AI.',
      btnEmail: 'KIRIM EMAIL',
      btnLinkedin: 'LINKEDIN',
      btnWa: 'WHATSAPP'
    },
    
    // Footer
    footer: {
      tagline: 'KREATIF × TEKNOLOGI × AI',
      location: 'Salatiga, Jawa Tengah, Indonesia',
      copyright: '© 2026 Muhammad Wafa Nurkholik'
    }
  }
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'id' : 'en');

  // Helper untuk translate
  const t = (key) => {
    const keys = key.split('.');
    let value = allData[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t, data: allData[lang] }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
