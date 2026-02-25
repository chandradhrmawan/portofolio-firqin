import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          02 — Experience
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold text-primary mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Where I've <span className="text-accent italic">worked</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-neutral/20" />

          <div className="space-y-12">
            {siteData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-14 md:pl-20"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${exp.current
                      ? 'bg-accent border-accent'
                      : 'bg-light border-neutral/40'
                    }`}
                />

                {/* Card */}
                <div className="group p-6 md:p-8 border border-neutral/10 hover:border-accent/30 bg-light transition-all duration-500 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase
                          size={14}
                          className="text-accent"
                        />
                        <p className="font-mono text-[11px] tracking-wider uppercase text-accent">
                          {exp.company}
                        </p>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-neutral mt-1 md:mt-0 shrink-0">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-neutral-dark text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1px] before:bg-accent"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
