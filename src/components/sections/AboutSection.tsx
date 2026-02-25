import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-primary text-light">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          01 — About
        </motion.p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          {/* Profile Placeholder — geometric shape */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={siteData.profileImage}
                alt={siteData.name}
                className="w-full h-full object-cover"
              />
              {/* Geometric decoration overlay */}
              <div className="absolute inset-0 border border-accent/20" />
              <div className="absolute inset-4 border border-accent/10" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A designer who believes
              <br />
              in <span className="text-accent italic">purposeful</span> work
            </motion.h2>

            <motion.p
              className="text-neutral text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {siteData.about.summary}
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {siteData.about.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 border border-neutral/30 text-neutral hover:border-accent hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
