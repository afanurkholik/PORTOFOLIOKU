import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/content';

export default function Timeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          EXPERIENCE SNAPSHOT
        </motion.h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
              <span className="font-mono text-accent text-sm tracking-wider mb-2 block">{item.period}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-secondary">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
