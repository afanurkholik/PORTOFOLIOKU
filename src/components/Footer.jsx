import React from 'react';
import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display font-bold text-lg tracking-tight">{personal.name.toUpperCase()}</h4>
          <p className="text-accent font-mono text-xs tracking-widest mt-1">CREATIVE × TECHNOLOGY × AI</p>
          <p className="text-secondary text-sm mt-2">{personal.location}</p>
        </div>
        
        <div className="flex gap-6">
          <a href={personal.linkedin} className="text-secondary hover:text-accent transition-colors text-sm">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="text-secondary hover:text-accent transition-colors text-sm">Email</a>
          <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} className="text-secondary hover:text-accent transition-colors text-sm">WhatsApp</a>
        </div>
        
        <div className="text-secondary/50 text-sm font-mono">
          © {new Date().getFullYear()} {personal.name}
        </div>
      </div>
    </footer>
  );
}
