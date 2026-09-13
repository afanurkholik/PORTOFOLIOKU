import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/content';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
        >
          HAVE SOMETHING<br />
          <span className="text-accent">WORTH BUILDING?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          I'm open to creative, multimedia, studio, content, technical, and AI-related opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a href={`mailto:${personal.email}`} className="w-full md:w-auto px-8 py-4 bg-accent text-background font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-all">
            <Mail size={18} /> EMAIL ME
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 border border-white/20 text-primary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            <Linkedin size={18} /> LINKEDIN
          </a>
          <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 border border-white/20 text-primary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            <MessageCircle size={18} /> WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
