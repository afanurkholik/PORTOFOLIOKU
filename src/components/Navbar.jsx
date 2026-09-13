import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.work'), href: '#work' },
    { name: t('nav.ai'), href: '#ai' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.cv'), href: '#cv' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-xl tracking-tight text-primary">
          WAFA<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          
          <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent transition-colors px-3 py-1.5 rounded-full border border-border hover:border-accent/30" title="Switch Language">
            <Globe size={14} /> {lang.toUpperCase()}
          </button>

          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-accent-dim transition-colors text-secondary hover:text-accent" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="px-5 py-2 text-sm font-medium bg-primary text-background rounded-full hover:bg-accent transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-display font-medium text-primary hover:text-accent">
              {link.name}
            </a>
          ))}
          <div className="flex gap-3 pt-4 border-t border-border">
            <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent px-3 py-2 rounded-full border border-border">
              <Globe size={14} /> {lang.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent px-3 py-2 rounded-full border border-border">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />} Theme
            </button>
          </div>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-display font-medium text-accent pt-2">
            {t('nav.contact')}
          </a>
        </div>
      )}
    </nav>
  );
}
