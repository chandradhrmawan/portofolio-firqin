import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Eye } from 'lucide-react';

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? siteData.portfolio
      : siteData.portfolio.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-primary text-light">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral mb-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          03 — Portfolio
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Selected <span className="text-accent italic">works</span>
        </motion.h2>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {siteData.portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-[11px] tracking-wider uppercase px-4 py-2 border transition-all duration-300 cursor-pointer ${activeFilter === cat
                ? 'bg-accent border-accent text-light'
                : 'border-neutral/30 text-neutral hover:border-accent hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`group relative overflow-hidden cursor-pointer ${index % 3 === 0 ? 'sm:row-span-2' : ''
                  }`}
              >
                {/* Image or Gradient Placeholder */}
                <div
                  className={`${index % 3 === 0
                      ? 'aspect-[3/4]'
                      : 'aspect-square'
                    } relative overflow-hidden ${!('image' in project) ? `bg-gradient-to-br ${project.color}` : ''}`}
                >
                  {'image' in project && project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Pattern overlay for gradient placeholders */
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rotate-12" />
                      <div className="absolute bottom-8 right-8 w-24 h-24 border border-white/20 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rotate-45" />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <p className="font-mono text-[10px] tracking-wider uppercase text-accent mb-2">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="font-heading text-xl font-semibold text-light mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-light/70 hover:text-accent transition-colors font-mono text-xs uppercase tracking-wider">
                      <Eye size={14} />
                      View Project
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
