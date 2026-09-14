import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AI() {
  const { t, data } = useApp();

  return (
    <section id="ai" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            {t('ai.title')}<br />
            <span className="text-accent">{t('ai.titleAccent')}</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl">{t('ai.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.ai.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] bg-surface overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface/50">
                    <Cpu size={48} className="text-secondary/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Workflow Diagram (Only for the specific project) */}
                {project.isWorkflow && (
                  <div className="flex flex-col items-center gap-3 font-mono text-xs md:text-sm text-secondary bg-surface/50 p-4 rounded-xl border border-border mt-auto">
                    <div className="flex items-center gap-2 w-full justify-center">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">TELEGRAM</span>
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                    <div className="flex items-center gap-2 w-full justify-center">
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded border border-accent/30">AI</span>
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                    <div className="flex items-center gap-2 w-full justify-center">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">IDEAS</span>
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                    <div className="flex items-center gap-2 w-full justify-center">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">TELEGRAM</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-mono text-sm tracking-wider">
            {t('ai.explore')}
          </a>
        </div>
      </div>
    </section>
  );
}
