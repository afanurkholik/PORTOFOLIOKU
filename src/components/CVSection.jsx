import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CVSection() {
  return (
    <section id="cv" className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-background border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">WANT THE FULL STORY?</h2>
          <p className="text-secondary text-lg mb-8 max-w-xl mx-auto">
            View or download my latest CV for a complete overview of my experience, education, and technical background.
          </p>
          
          <a 
            href="/assets/cv/cv.pdf" 
            download 
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-accent transition-all"
          >
            <Download size={20} />
            DOWNLOAD CV
          </a>
          <p className="text-xs text-secondary/50 mt-4 font-mono">PDF Format • Updated 2026</p>
        </motion.div>
      </div>
    </section>
  );
}
