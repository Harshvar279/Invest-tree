import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    n: '01',
    t: 'Counsel',
    d: 'Every recommendation begins with research, restraint, and a refusal to chase commission.',
  },
  {
    n: '02',
    t: 'Curation',
    d: 'A discreet inventory of grade-A residences, gated floors, and commercial assets across Gurugram.',
  },
  {
    n: '03',
    t: 'Custody',
    d: 'Portfolio advisory that protects capital through cycles — yield, exit, and legacy considered.',
  },
];

export default function Manifesto() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = ref.current.querySelectorAll('.man-char');
      gsap.fromTo(
        chars,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.012,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
          },
        }
      );

      gsap.utils.toArray('.pillar').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            delay: i * 0.12,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const splitText = (str) =>
    str.split('').map((c, i) => (
      <span key={i} className="man-char inline-block">
        {c === ' ' ? '\u00A0' : c}
      </span>
    ));

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative py-40 md:py-56"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-6">/ Manifesto</p>
            <div className="hairline" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-heading text-4xl md:text-6xl lg:text-7xl">
              {splitText('We do not sell properties.')}
              <br />
              <span className="serif-italic text-gold-300">
                {splitText('We architect legacies.')}
              </span>
            </h2>

            <p className="mt-12 max-w-2xl font-serif text-lg leading-relaxed text-pearl/70 md:text-xl">
              Invest Tree is a private real-estate consultancy serving discerning
              families and investors across Gurugram. We deal in premium
              residences, luxury villas, commercial assets, plots and gated
              floors — but our true product is{' '}
              <em className="text-gold-200">clarity</em>. Counsel before
              commission. Always.
            </p>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
          {pillars.map((p) => (
            <div key={p.n} className="pillar border-t border-gold-500/20 pt-6">
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                — {p.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-light text-pearl">
                {p.t}
              </h3>
              <p className="mt-4 font-serif text-base leading-relaxed text-pearl/60">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}