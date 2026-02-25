import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { GraduationCap, Calendar } from 'lucide-react';

export default function EducationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding bg-primary text-light">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          05 — Education
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Academic <span className="text-accent italic">background</span>
        </motion.h2>

        {/* Education Card */}
        <motion.div
          className="relative p-8 md:p-12 border border-neutral/20 hover:border-accent/30 transition-all duration-500 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Accent corner */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent" />

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold">
                {siteData.education.degree}
              </h3>
              <p className="text-neutral text-base mt-1">
                {siteData.education.university}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-neutral">
            <Calendar size={14} className="text-accent" />
            <span className="font-mono text-xs tracking-wider">
              {siteData.education.period}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
