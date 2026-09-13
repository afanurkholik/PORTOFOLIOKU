import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          {t('about.title1')}<br />
          <span className="text-secondary">{t('about.title2')}</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg text-secondary leading-relaxed"
        >
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a href="#contact" className="text-accent font-mono text-sm tracking-wider hover:underline underline-offset-4">
            {t('about.more')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
