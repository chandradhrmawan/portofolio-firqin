import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  Paintbrush,
  PenTool,
  Layout,
  Palette,
  Smartphone,
  Video,
  Eye,
  Shield,
  Users,
  Zap,
  Lightbulb,
} from 'lucide-react';

const toolIcons = [Paintbrush, PenTool, Layout, Palette, Smartphone, Video];
const skillIcons = [Eye, Shield, Users, Zap, Lightbulb];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          04 — Skills & Tools
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold text-primary mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tools of the <span className="text-accent italic">trade</span>
        </motion.h2>
      </div>

      {/* Marquee / Scrolling Ticker */}
      <motion.div
        className="mb-16 border-y border-neutral/10 py-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="marquee-track">
          {[...siteData.tools, ...siteData.tools, ...siteData.tools, ...siteData.tools].map(
            (tool, i) => (
              <span
                key={i}
                className="flex items-center gap-3 px-8 md:px-12 whitespace-nowrap"
              >
                <span className="font-heading text-2xl md:text-3xl font-semibold text-primary/80">
                  {tool}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              </span>
            )
          )}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Tools Grid */}
          <div>
            <p className="font-mono text-[11px] tracking-wider uppercase text-accent mb-6">
              Design Tools
            </p>
            <div className="grid grid-cols-2 gap-4">
              {siteData.tools.map((tool, i) => {
                const Icon = toolIcons[i % toolIcons.length];
                return (
                  <motion.div
                    key={tool}
                    className="group flex items-center gap-3 p-4 border border-neutral/10 hover:border-accent/30 transition-all duration-300 hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  >
                    <Icon
                      size={20}
                      className="text-neutral group-hover:text-accent transition-colors shrink-0"
                    />
                    <span className="text-sm font-medium text-primary">
                      {tool}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <p className="font-mono text-[11px] tracking-wider uppercase text-accent mb-6">
              Soft Skills
            </p>
            <div className="space-y-4">
              {siteData.softSkills.map((skill, i) => {
                const Icon = skillIcons[i % skillIcons.length];
                return (
                  <motion.div
                    key={skill}
                    className="group flex items-center gap-4 p-4 border border-neutral/10 hover:border-accent/30 transition-all duration-300 hover:shadow-md"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="font-medium text-primary">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
