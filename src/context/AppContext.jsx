import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const translations = {
  en: {
    nav: { work: 'Work', ai: 'AI', about: 'About', cv: 'CV', contact: 'Contact' },
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
    work: {
      title: 'SELECTED WORK',
      subtitle: "A selection of creative and production work I've worked on over the years.",
      viewAll: 'VIEW ALL WORK →'
    },
    ai: {
      title: "I DON'T ONLY USE AI.",
      titleAccent: 'I BUILD WITH IT.',
      subtitle: 'I experiment with AI to turn ideas into useful tools, content systems, and workflows.',
      explore: 'EXPLORE AI PROJECTS →'
    },
    capabilities: { title: 'WHAT I CAN DO' },
    about: {
      title1: 'CREATIVE BY NATURE.',
      title2: 'TECHNICAL BY EXPERIENCE.',
      p1: "My experience sits between creative production and technology. I've spent years working hands-on with photography, video, livestreaming, studio operations, digital content, technical support, and AI-powered projects.",
      p2: 'From documenting large events to troubleshooting live production and experimenting with automation, I enjoy turning ideas into something people can actually see, use, or experience.',
      more: 'MORE ABOUT ME →'
    },
    timeline: { title: 'EXPERIENCE SNAPSHOT' },
    cv: {
      title: 'WANT THE FULL STORY?',
      desc: 'View or download my latest CV for a complete overview of my experience, education, and technical background.',
      btn: 'DOWNLOAD CV',
      note: 'PDF Format • Updated 2026'
    },
    contact: {
      title1: 'HAVE SOMETHING',
      title2: 'WORTH BUILDING?',
      desc: "I'm open to creative, multimedia, studio, content, technical, and AI-related opportunities.",
      btnEmail: 'EMAIL ME',
      btnLinkedin: 'LINKEDIN',
      btnWa: 'WHATSAPP'
    },
    footer: {
      tagline: 'CREATIVE × TECHNOLOGY × AI',
      location: 'Salatiga, Central Java, Indonesia',
      copyright: '© 2026 Muhammad Wafa Nurkholik'
    }
  },
  id: {
    nav: { work: 'Karya', ai: 'AI', about: 'Tentang', cv: 'CV', contact: 'Kontak' },
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
    work: {
      title: 'KARYA PILIHAN',
      subtitle: 'Seleksi pekerjaan kreatif dan produksi yang telah saya tangani selama bertahun-tahun.',
      viewAll: 'LIHAT SEMUA KARYA →'
    },
    ai: {
      title: 'SAYA TIDAK HANYA MENGGUNAKAN AI.',
      titleAccent: 'SAYA MEMBANGUN DENGANNYA.',
      subtitle: 'Saya bereksperimen dengan AI untuk mengubah ide menjadi alat yang berguna, sistem konten, dan alur kerja yang efisien.',
      explore: 'JELAJAHI PROYEK AI →'
    },
    capabilities: { title: 'KEAHLIAN & KAPABILITAS' },
    about: {
      title1: 'BERJIWA KREATIF.',
      title2: 'TERASAH SECARA TEKNIS.',
      p1: 'Pengalaman saya berada di persimpangan antara produksi kreatif dan teknologi. Saya telah menghabiskan bertahun-tahun bekerja langsung dengan fotografi, video, livestreaming, operasional studio, konten digital, dukungan teknis, dan proyek berbasis AI.',
      p2: 'Dari mendokumentasikan acara besar hingga menyelesaikan masalah pada produksi langsung dan bereksperimen dengan otomatisasi, saya menikmati proses mengubah ide menjadi sesuatu yang benar-benar bisa dilihat, digunakan, atau dialami oleh orang lain.',
      more: 'SELENGKAPNYA TENTANG SAYA →'
    },
    timeline: { title: 'JEJAK PENGALAMAN' },
    cv: {
      title: 'INGIN TAHU LEBIH LENGKAP?',
      desc: 'Lihat atau unduh CV terbaru saya untuk gambaran menyeluruh mengenai pengalaman, pendidikan, dan latar belakang teknis saya.',
      btn: 'UNDUH CV',
      note: 'Format PDF • Diperbarui 2026'
    },
    contact: {
      title1: 'PUNYA IDE YANG',
      title2: 'PATUT DIWUJUDKAN?',
      desc: 'Saya terbuka untuk peluang di bidang kreatif, multimedia, studio, konten, teknis, dan terkait AI.',
      btnEmail: 'KIRIM EMAIL',
      btnLinkedin: 'LINKEDIN',
      btnWa: 'WHATSAPP'
    },
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

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
