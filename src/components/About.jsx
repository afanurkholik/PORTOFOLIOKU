import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          CREATIVE BY NATURE.<br />
          <span className="text-secondary">TECHNICAL BY EXPERIENCE.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg text-secondary leading-relaxed"
        >
          <p>
            My experience sits between creative production and technology. I've spent years working hands-on with photography, video, livestreaming, studio operations, digital content, technical support, and AI-powered projects.
          </p>
          <p>
            From documenting large events to troubleshooting live production and experimenting with automation, I enjoy turning ideas into something people can actually see, use, or experience.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a href="#contact" className="text-accent font-mono text-sm tracking-wider hover:underline underline-offset-4">
            MORE ABOUT ME →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
