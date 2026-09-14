import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CVSection() {
  const { t } = useApp();

  return (
    <section id="cv" className="py-24 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-background border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{t('cv.title')}</h2>
          <p className="text-secondary text-lg mb-8 max-w-xl mx-auto">
            {t('cv.desc')}
          </p>
          
          <a 
            href="/assets/cv/Muhammad_Wafa_Nurkholik.pdf" 
            download 
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-accent transition-all"
          >
            <Download size={20} />
            {t('cv.btn')}
          </a>
          <p className="text-xs text-secondary/50 mt-4 font-mono">{t('cv.note')}</p>
        </motion.div>
      </div>
    </section>
  );
}
