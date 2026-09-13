import React from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { theme, toggleTheme, lang, toggleLang, t } = useApp(); // <-- AMBIL DARI CONTEXT

  React.useEffect(() => {
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 dark:bg-background/80 bg-white/80 backdrop-blur-md border-b border-white/5 dark:border-white/5 border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-xl tracking-tight text-primary dark:text-primary text-gray-900">
          WAFA<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-secondary dark:text-secondary text-gray-600 hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-accent transition-colors" title="Switch Language">
            <Globe size={16} /> {lang.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors text-secondary dark:text-secondary text-gray-600">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="px-5 py-2 text-sm font-medium bg-primary dark:bg-primary bg-gray-900 text-background dark:text-background text-white rounded-full hover:bg-accent dark:hover:bg-accent hover:text-background transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Toggle (Simplified for brevity, add lang/theme toggle inside mobile menu too if needed) */}
        <button className="md:hidden text-primary dark:text-primary text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* ... (Mobile menu code remains similar, just add toggleLang/toggleTheme buttons inside) ... */}
    </nav>
  );
}
