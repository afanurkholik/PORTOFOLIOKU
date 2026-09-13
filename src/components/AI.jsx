import React from 'react';
import { motion } from 'framer-motion';
import { aiProjects } from '../data/content';
import { Cpu, ArrowDown } from 'lucide-react';

export default function AI() {
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
            I DON'T ONLY USE AI.<br />
            <span className="text-accent">I BUILD WITH IT.</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl">I experiment with AI to turn ideas into useful tools, content systems, and workflows.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-background/50 hover:border-accent/30 transition-all group"
            >
              {project.isWorkflow ? (
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                    <Cpu size={20} className="text-accent" /> {project.title}
                  </h3>
                  <p className="text-secondary mb-6">{project.description}</p>
                  
                  {/* Interactive Workflow Visual */}
                  <div className="flex flex-col items-center gap-2 font-mono text-sm text-secondary bg-black/30 p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 w-full justify-center">
                      <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">TELEGRAM</span>
                      <ArrowDown size={16} className="text-accent animate-bounce" />
                    </div>
                    <div className="flex items-center gap-3 w-full justify-center">
                      <span className="px-3 py-1.5 bg-accent/20 text-accent rounded border border-accent/30">AI PROCESSING</span>
                      <ArrowDown size={16} className="text-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <div className="flex items-center gap-3 w-full justify-center">
                      <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded border border-green-500/30">CONTENT IDEAS</span>
                      <ArrowDown size={16} className="text-accent animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="flex items-center gap-3 w-full justify-center">
                      <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">TELEGRAM</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-secondary leading-relaxed">{project.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-mono text-sm tracking-wider">
            EXPLORE AI PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
}
