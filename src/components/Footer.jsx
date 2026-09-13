import React from 'react';
import { personal } from '../data/content';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display font-bold text-lg tracking-tight">{personal.name.toUpperCase()}</h4>
          <p className="text-accent font-mono text-xs tracking-widest mt-1">{t('footer.tagline')}</p>
          <p className="text-secondary text-sm mt-2">{personal.location}</p>
        </div>
        
        <div className="flex gap-6">
          <a href={personal.linkedin} className="text-secondary hover:text-accent transition-colors text-sm">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="text-secondary hover:text-accent transition-colors text-sm">Email</a>
          <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} className="text-secondary hover:text-accent transition-colors text-sm">WhatsApp</a>
        </div>
        
        <div className="text-secondary/50 text-sm font-mono">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
