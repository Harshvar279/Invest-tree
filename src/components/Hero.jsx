import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------- Split text helper ---------- */
function SplitChars({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('.split-char');
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.035,
      delay,
    });
  }, [delay]);

  return (
    <span ref={ref} className={`split-line ${className}`}>
      {text.split('').map((c, i) => (
        <span key={i} className="split-char">
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}

/* ---------- Hero Component ---------- */
export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg-parallax', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-fade-out', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Architectural background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="hero-bg-parallax absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Luxury dark overlays for premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.7)_100%)]" />
        {/* Subtle gold glow accent */}
        <div className="absolute -top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(200,162,75,0.08),_transparent_70%)]" />
      </div>

      {/* Typography overlay */}
      <div className="container-x relative z-20 flex h-full flex-col justify-between pb-16 pt-32 md:pt-36">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hero-fade-out flex items-center justify-between"
        >
          <p className="eyebrow">Luxury Real Estate · Gurugram</p>
          <p className="eyebrow hidden md:block">Est. — Counsel before Commission</p>
        </motion.div>

        {/* Main heading — centered for cinematic gravitas */}
        <div className="hero-fade-out relative flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="eyebrow mb-8 text-gold-300/80"
          >
            ✦ Private Real Estate Advisory ✦
          </motion.p>

          <h1 className="display-heading flex flex-col items-center text-[14vw] leading-[0.9] md:text-[10vw] lg:text-[8.5vw]">
            <span>
              <SplitChars text="We Architect" delay={1.8} />
            </span>
            <span className="serif-italic text-gold-400 inline-block">
              <SplitChars text="Legacies." delay={2.15} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 2.6, duration: 1.2 }}
            className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1, ease: 'easeOut' }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8"
          >
            <a href="#contact" className="btn-gold">
              Schedule Discreet Consultation
            </a>
            <a
              href="#properties"
              className="font-sans text-[11px] uppercase tracking-widest2 text-pearl/70 transition-colors hover:text-gold-300"
            >
              View Curated Portfolios →
            </a>
          </motion.div>
        </div>

        {/* Empty spacer for layout balance */}
        <div />
      </div>

      {/* Bottom marquee — refined, no hollow tagline */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden border-t border-pearl/10 bg-[#0A0A0A]/40 py-3 backdrop-blur-sm">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-serif italic text-gold-200/80">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-sm md:text-base">
              Consultancy & Portfolio Advisory
              <span className="text-gold-500">✦</span>
              Whiteland · M3M · Hero Homes · DLF · Elan · Central Park
              <span className="text-gold-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}