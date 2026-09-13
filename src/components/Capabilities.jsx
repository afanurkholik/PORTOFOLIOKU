import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Clapperboard, Cpu, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

const icons = {
  creative: Camera,
  production: Clapperboard,
  technology: Cpu,
  operations: Settings
};

export default function Capabilities() {
  const { t, data } = useApp();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          {t('capabilities.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(data.capabilities.categories).map(([key, category], index) => {
            const Icon = icons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all"
              >
                <Icon className="text-accent mb-4" size={28} />
                <h3 className="font-display text-lg font-bold mb-4 uppercase tracking-wider">{category.label}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-secondary text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
