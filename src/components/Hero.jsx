import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Monitor, Cpu, Clapperboard } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  const topSkills = [
    { icon: Clapperboard, label: 'Content & Media Production' },
    { icon: Monitor, label: 'Digital & Technical Operations' },
    { icon: Cpu, label: 'AI & Automation' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <p className="text-accent font-mono text-sm tracking-widest mb-6">
              CREATIVE × TECHNOLOGY × AI
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-8">
              I BUILD
              <br />
              <span className="text-secondary">
                CREATIVE SYSTEMS.
              </span>
            </h1>

            <p className="text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              I work at the intersection of creative production,
              digital operations, and emerging AI tools — turning
              ideas into content, workflows, and practical solutions.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#work"
                className="group px-8 py-4 bg-accent text-background font-semibold rounded-full flex items-center gap-2 hover:bg-accent/90 transition-all"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#ai"
                className="px-8 py-4 border border-border text-primary font-semibold rounded-full hover:bg-accent-dim transition-all"
              >
                Explore AI Projects
              </a>

            </div>

          </motion.div>


          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >

            {/* Main Profile Card */}
            <div className="relative bg-surface border border-border rounded-2xl p-8 backdrop-blur-sm">

              {/* Identity */}
              <div className="flex items-start gap-5 mb-7">

                <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-display text-2xl font-bold text-background">
                    WA
                  </span>
                </div>

                <div className="flex-1">

                  <h3 className="font-display text-xl font-bold text-primary mb-1">
                    Muhammad Wafa Nurkholik
                  </h3>

                  <p className="text-accent font-mono text-xs tracking-wider mb-2">
                    CREATIVE × TECH × AI
                  </p>

                  <div className="flex items-center gap-1.5 text-secondary text-sm">
                    <MapPin size={14} className="text-accent" />
                    <span>Salatiga, Indonesia</span>
                  </div>

                </div>
              </div>


              {/* Short Positioning */}
              <p className="text-secondary text-sm leading-relaxed mb-7 pb-7 border-b border-border">
                A multidisciplinary creator with experience across
                content production, studio operations, technical support,
                and digital workflows.
              </p>


              {/* Core Areas */}
              <div className="mb-7">

                <p className="font-mono text-xs text-accent tracking-wider mb-3">
                  WHAT I DO
                </p>

                <div className="space-y-2">

                  {topSkills.map((skill, i) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                      >
                        <Icon
                          size={17}
                          className="text-accent flex-shrink-0"
                        />

                        <span className="text-primary text-sm font-medium">
                          {skill.label}
                        </span>
                      </div>
                    );
                  })}

                </div>
              </div>


              {/* Experience */}
              <div className="mb-7 pb-7 border-b border-border">

                <p className="font-mono text-xs text-accent tracking-wider mb-3">
                  EXPERIENCE
                </p>

                <div className="space-y-3">

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />

                    <div>
                      <p className="text-primary text-sm font-medium">
                        Creative & Media
                      </p>

                      <p className="text-secondary text-xs">
                        2021 — 2025 · Content, Video, Livestream & Studio
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />

                    <div>
                      <p className="text-primary text-sm font-medium">
                        Operations
                      </p>

                      <p className="text-secondary text-xs">
                        2025 — 2026 · Facilities, Assets & SOP
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />

                    <div>
                      <p className="text-primary text-sm font-medium">
                        Technical Support
                      </p>

                      <p className="text-secondary text-xs">
                        2026 · IT, Microsoft 365 & Digital Tools
                      </p>
                    </div>
                  </div>

                </div>
              </div>


              {/* Current Focus */}
              <div>

                <p className="font-mono text-xs text-accent tracking-wider mb-3">
                  CURRENT FOCUS
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    'Content Production',
                    'AI Tools',
                    'n8n Automation',
                    'Digital Operations',
                    'Creative Technology'
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-accent bg-accent-dim px-2.5 py-1 rounded border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* Floating Metadata */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 backdrop-blur-sm shadow-xl">

              <p className="font-mono text-xs text-secondary tracking-wider mb-1.5">
                <span className="text-accent mr-1.5">●</span>
                BUILD
              </p>

              <p className="font-mono text-xs text-secondary tracking-wider mb-1.5">
                <span className="text-accent mr-1.5">●</span>
                CREATE
              </p>

              <p className="font-mono text-xs text-secondary tracking-wider">
                <span className="text-accent mr-1.5">●</span>
                AUTOMATE
              </p>

            </div>


            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
