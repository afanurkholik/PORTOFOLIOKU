import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent font-mono text-sm tracking-widest mb-6">{t('hero.eyebrow')}</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              {t('hero.headline').split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">{word}</span>
              ))}
              <br />
              <span className="text-secondary">{t('hero.subheadline')}</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="group px-8 py-4 bg-accent text-background font-semibold rounded-full flex items-center gap-2 hover:bg-accent/90 transition-all">
                {t('hero.btnWork')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#ai" className="px-8 py-4 border border-border text-primary font-semibold rounded-full hover:bg-accent-dim transition-all">
                {t('hero.btnAI')}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent-dim flex items-center justify-center border border-accent/20">
                    <span className="font-display text-3xl font-bold text-accent">WA</span>
                  </div>
                  <p className="text-secondary font-mono text-sm">CREATIVE VISUAL PLACEHOLDER</p>
                  <p className="text-secondary/50 text-xs mt-2">Replace with studio/camera/setup image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 backdrop-blur-sm">
              {['meta1', 'meta2', 'meta3'].map((key, i) => (
                <p key={i} className="font-mono text-xs text-secondary tracking-wider mb-1 last:mb-0">
                  <span className={i === 2 ? 'text-accent' : 'text-primary/20'}>●</span> {t(`hero.${key}`)}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
