import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import { ArrowDown, Mail } from 'lucide-react';

export default function HeroSection() {
  const nameWords = siteData.name.split(' ');

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-24"
    >
      {/* Decorative accent line */}
      <motion.div
        className="absolute top-32 right-8 md:right-16 w-[1px] h-32 bg-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Role label */}
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-dark mb-6 md:mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          {siteData.hero.subtitle}
        </motion.p>

        {/* Name — asymmetric large typography */}
        <div className="mb-8 md:mb-12">
          {nameWords.map((word, i) => (
            <motion.div
              key={word}
              className="overflow-hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                delay: 2.5 + i * 0.15,
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <h1
                className={`font-heading font-bold leading-[0.9] tracking-tight text-primary ${i === 0
                    ? 'text-5xl md:text-7xl lg:text-9xl'
                    : 'text-5xl md:text-7xl lg:text-9xl'
                  } ${i % 2 !== 0 ? 'md:ml-16 lg:ml-24' : ''}`}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="font-body text-lg md:text-xl text-neutral-dark max-w-xl leading-relaxed italic mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
        >
          "{siteData.hero.tagline}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
        >
          <button
            onClick={() => handleScroll('#portfolio')}
            className="group flex items-center gap-2 bg-primary text-light px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-accent transition-all duration-300 cursor-pointer"
          >
            {siteData.hero.ctaPrimary}
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="group flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-primary hover:text-light transition-all duration-300 cursor-pointer"
          >
            <Mail size={16} />
            {siteData.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-neutral-dark mx-auto"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
