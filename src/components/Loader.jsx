import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 9 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete && onComplete(), 1200);
        }, 400);
      }
      setProgress(Math.floor(p));
    }, 140);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian-900"
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <p className="eyebrow mb-4">Est. Gurugram</p>
            <h1 className="font-display text-5xl font-light tracking-tight text-pearl md:text-7xl">
              Invest <span className="serif-italic gold-text">Tree</span>
            </h1>
            <p className="mt-4 font-serif text-sm italic text-gold-200/70">
              Where skylines take root.
            </p>
          </motion.div>

          <div className="relative h-px w-[280px] overflow-hidden bg-pearl/10 md:w-[420px]">
            <motion.div
              className="loader-bar absolute inset-y-0 left-0"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <p className="mt-5 font-sans text-[10px] uppercase tracking-widest2 text-pearl/40">
            {String(progress).padStart(3, '0')} —
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
