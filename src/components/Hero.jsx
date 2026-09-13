import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext'; // <-- IMPORT CONTEXT

export default function Hero() {
  const { t } = useApp(); // <-- GUNAKAN HOOK

  return (
    // TAMBAHKAN 'dark:bg-background bg-white' dan 'dark:text-primary text-gray-900'
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden dark:bg-background bg-white dark:text-primary text-gray-900 transition-colors duration-300">
      
      {/* Grid Pattern: Hanya muncul di dark mode agar tidak terlalu ramai di light mode */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 dark:opacity-20 opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-accent font-mono text-sm tracking-widest mb-6">{t('hero.eyebrow')}</p>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              {t('hero.headline').split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">{word}</span>
              ))}
              <br />
              {/* Di light mode, subheadline pakai gray-500, di dark pakai secondary */}
              <span className="dark:text-secondary text-gray-500">{t('hero.subheadline')}</span>
            </h1>
            
            <p className="dark:text-secondary text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="group px-8 py-4 bg-accent text-background font-semibold rounded-full flex items-center gap-2 hover:bg-accent/90 transition-all">
                {t('hero.btnWork')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#ai" className="px-8 py-4 border dark:border-white/20 border-gray-300 dark:text-primary text-gray-900 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
                {t('hero.btnAI')}
              </a>
            </div>
          </motion.div>

          {/* ... (Bagian visual hero tetap sama, pastikan bg-nya pakai dark:bg-surface bg-gray-50) ... */}
        </div>
      </div>
    </section>
  );
}
