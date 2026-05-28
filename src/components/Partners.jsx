import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  'Whiteland',
  'M3M',
  'Hero Homes',
  'DLF',
  'Sobha',
  'Godrej',
  'Tata Housing',
  'Emaar',
];

export default function Partners() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.partner-row').forEach((row) => {
        gsap.fromTo(
          row,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: row, start: 'top 88%' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="partners"
      ref={ref}
      className="relative border-y border-pearl/5 bg-obsidian-800 py-24 md:py-32"
    >
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">/ Builder Partners</p>
            <h2 className="display-heading text-4xl md:text-6xl">
              The houses behind <br />
              <span className="serif-italic text-gold-300">the houses.</span>
            </h2>
          </div>
          <p className="max-w-md font-serif text-base italic text-pearl/60">
            Trusted relationships with India's most decorated developers — giving
            our clients first access to allocations, floor preferences and
            pre-launch pricing.
          </p>
        </div>

        <div className="divide-y divide-pearl/10 border-y border-pearl/10">
          {partners.map((p, i) => (
            <div
              key={p}
              className="partner-row group flex items-center justify-between py-6 transition-colors duration-500 hover:bg-obsidian-700/60 md:py-8"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300/70">
                  / {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl font-light text-pearl transition-colors group-hover:text-gold-300 md:text-5xl">
                  {p}
                </h3>
              </div>
              <span className="hidden font-serif text-sm italic text-pearl/40 group-hover:text-gold-200 md:block">
                Developer Partner →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
