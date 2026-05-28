import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* --- The Updated Premium Partners Array --- */
const partners = [
  'Whiteland',
  'Central Park',
  'M3M',
  'DLF',
  'Sobha',
  'Godrej',
  'Elan',
  'Hero Homes'
];

export default function Partners() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partner-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={ref} 
      id="partners" 
      className="relative py-24 md:py-32" 
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="container-x">
        {/* The List Container */}
        <div className="flex flex-col border-t border-pearl/10">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="partner-row group flex cursor-pointer items-center justify-between border-b border-pearl/10 py-8 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span className="font-sans text-[11px] tracking-widest2 text-gold-500/60 transition-colors group-hover:text-gold-400">
                  / {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="display-heading text-4xl md:text-5xl lg:text-6xl text-pearl transition-colors group-hover:text-gold-300">
                  {partner}
                </h3>
              </div>
              <span className="hidden font-serif text-sm italic text-pearl/30 transition-colors group-hover:text-gold-300/70 md:block">
                Developer Partner →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
