import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../lib/smoothScroll.js';

const links = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Partners', href: '#partners' },
  { label: 'Team', href: '#team' },
  { label: 'Properties', href: '#properties' },
  { label: 'Contact', href: '#contact' },
];

/* Notice we added { onOpenTeam } here so it can trigger the popup */
export default function Navbar({ onOpenTeam }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false); // Always close the mobile menu when clicking

    // THE FIX: If they click "Team", launch the popup instead of scrolling!
    if (href === '#team') {
      if (onOpenTeam) onOpenTeam();
      return;
    }

    // Otherwise, scroll normally to the section
    setTimeout(() => scrollToSection(href), 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-pearl/5'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-3">
            <span className="font-display text-2xl font-light tracking-tight text-pearl">
              Invest<span className="serif-italic text-gold-300"> Tree</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="group relative font-sans text-[11px] uppercase tracking-widest2 text-pearl/70 transition-colors hover:text-gold-300"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden md:inline-flex btn-gold"
          >
            Book Consultation
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-7 bg-pearl" />
            <span className="h-px w-5 bg-gold-300" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-[#0A0A0A] px-6 pb-10 pt-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-pearl">
                Invest<span className="serif-italic text-gold-300"> Tree</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-sans text-[11px] uppercase tracking-widest2 text-gold-200"
              >
                Close ✕
              </button>
            </div>
            <nav className="mt-auto flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease: 'easeOut' }}
                  className="font-display text-5xl font-light text-pearl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 border-t border-pearl/10 pt-6 font-sans text-[11px] uppercase tracking-widest2 text-pearl/50">
              +91 89696 96100 · Gurugram, Haryana
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
