import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <motion.h1
              className="font-heading text-4xl md:text-6xl font-bold text-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              RF<span className="text-accent">.</span>
            </motion.h1>
            <motion.div
              className="mt-6 h-[2px] bg-accent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.8, duration: 1.0, ease: 'easeInOut' }}
            />
            <motion.p
              className="mt-4 font-mono text-xs tracking-[0.3em] text-neutral uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
