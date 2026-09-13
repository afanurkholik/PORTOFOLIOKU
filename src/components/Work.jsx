import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Work() {
  const { t } = useApp();

  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">{t('work.title')}</h2>
          <p className="text-secondary text-lg max-w-2xl">{t('work.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/9]'} overflow-hidden bg-background`}>
                <div className="absolute inset-0 flex items-center justify-center bg-surface group-hover:scale-105 transition-transform duration-700">
                  <span className="text-secondary/30 font-mono text-sm">[ PROJECT IMAGE: {project.title} ]</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metadata.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-accent bg-accent-dim px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  VIEW PROJECT <ArrowUpRight size={16} className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-mono text-sm tracking-wider">
            {t('work.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
