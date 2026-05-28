import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const team = [
  {
    name: 'Satish Kumar Kuleria',
    role: 'Founder & Principal Advisor',
    img: '/founder.JPG',
    note: "Sets the firm's philosophy — counsel before commission.",
  },
  {
    name: 'Rohit Thakur',
    role: 'Managing Director',
    img: '/rohit-thakur.JPG',
    note: 'Leads the field team across Gurugram micro-markets.',
  },
  {
    name: 'Rohit Kumar',
    role: 'Manager',
    img: '/rohit-yadav.JPG',
    note: 'Orchestrates every mandate from brief to handover.',
  },
  {
    name: 'Sachin Jangra',
    role: 'Marketing Head',
    img: '/sachin.JPG',
    note: 'Curates the brand voice and client narrative.',
  },
  {
    name: 'Mayank Aggarwal',
    role: 'Legal Advisor',
    img: '/mayank.JPG',
    note: "Negotiates allocations with India's top developers.",
  },
];

export default function Team({ onClose }) {
  const ref = useRef(null);

  // Animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-hero-char',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.02,
          ease: 'expo.out',
          delay: 0.3,
        }
      );

      gsap.fromTo(
        '.team-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: 'expo.out',
          delay: 0.5,
        }
      );

      gsap.fromTo(
        '.team-intro',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          delay: 0.6,
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const splitText = (str) =>
    str.split('').map((c, i) => (
      <span key={i} className="team-hero-char inline-block">
        {c === ' ' ? '\u00A0' : c}
      </span>
    ));

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[90] overflow-y-auto"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Ambient gold glow */}
      <div className="pointer-events-none fixed -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(200,162,75,0.08),_transparent_70%)]" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(200,162,75,0.06),_transparent_70%)]" />

      {/* Top Bar — Close + Branding */}
      <div className="sticky top-0 z-50 border-b border-gold-500/15 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className="container-x flex items-center justify-between py-5">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
            ✦ Invest Tree — The Practice
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="group flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest2 text-pearl/60 transition-colors hover:text-gold-300"
          >
            <span>Close</span>
            <span className="flex h-9 w-9 items-center justify-center border border-gold-400/30 text-gold-300 transition-all duration-300 group-hover:border-gold-400 group-hover:text-gold-200">
              ✕
            </span>
          </button>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="relative pt-20 md:pt-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow mb-6">/ The Practice</p>
              <div className="hairline" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="display-heading text-5xl md:text-7xl lg:text-[6.5rem]">
                {splitText('Quietly obsessed')}
                <br />
                <span className="serif-italic text-gold-300">
                  {splitText('with detail.')}
                </span>
              </h1>
              <p className="team-intro mt-10 max-w-2xl font-serif text-lg italic text-pearl/70 md:text-xl">
                A close-knit team of advisors, negotiators, and storytellers —
                built around a single belief: the right property, recommended at
                the right moment, changes a family's trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder — Editorial Feature */}
      <section className="relative mt-24 md:mt-32">
        <div className="container-x">
          <FounderFeature member={team[0]} />
        </div>
      </section>

      {/* Remaining Team — Editorial Grid */}
      <section className="relative mt-24 pb-28 md:mt-32 md:pb-40">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between border-t border-gold-500/20 pt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              / The Advisory Bench
            </p>
            <p className="hidden font-serif text-sm italic text-pearl/40 md:block">
              Specialists across mandate, market, and mediation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {team.slice(1).map((m, i) => (
              <MemberCard key={m.name} member={m} index={i + 1} />
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-24 flex flex-col items-center gap-6 border-t border-gold-500/20 pt-16 text-center">
            <p className="font-serif text-xl italic text-pearl/70 md:text-2xl">
              Every great mandate begins with{' '}
              <span className="text-gold-300">a single conversation.</span>
            </p>
            <button
              type="button"
              onClick={() => {
                onClose?.();
                setTimeout(() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }, 400);
              }}
              className="btn-gold"
            >
              Schedule Discreet Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FounderFeature({ member }) {
  return (
    <div className="team-card grid grid-cols-12 items-end gap-8 border-t border-gold-500/20 pt-10">
      <div className="img-zoom relative col-span-12 aspect-[4/5] overflow-hidden md:col-span-5">
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover grayscale-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent" />
        <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-gold-400/60" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-gold-400/60" />
        <span className="absolute left-5 top-5 font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
          / 01 — Founder
        </span>
      </div>

      <div className="col-span-12 md:col-span-6 md:col-start-7">
        <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
          ✦ Principal Advisor
        </p>
        <h3 className="display-heading mt-4 text-5xl md:text-6xl lg:text-7xl">
          {member.name.split(' ')[0]}{' '}
          <span className="serif-italic text-gold-300">
            {member.name.split(' ').slice(1).join(' ')}
          </span>
        </h3>
        <p className="mt-4 font-sans text-[11px] uppercase tracking-widest2 text-gold-300/70">
          {member.role}
        </p>
        <p className="mt-8 max-w-lg font-serif text-lg italic leading-relaxed text-pearl/75 md:text-xl">
          "{member.note}"
        </p>
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-serif text-sm italic text-pearl/50">
            Founder, Invest Tree
          </span>
        </div>
      </div>
    </div>
  );
}

function MemberCard({ member, index }) {
  return (
    <div className="team-card group">
      <div className="img-zoom relative aspect-[3/4] overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 border border-gold-300/40 bg-[#0A0A0A]/40 px-2 py-1 font-sans text-[10px] uppercase tracking-widest2 text-gold-200/90 backdrop-blur-sm">
          / {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-5">
        <h4 className="font-display text-2xl font-light text-pearl">
          {member.name}
        </h4>
        <p className="mt-1 font-sans text-[10px] uppercase tracking-widest2 text-gold-300">
          {member.role}
        </p>
        <p className="mt-3 font-serif text-sm italic text-pearl/55">
          {member.note}
        </p>
      </div>
    </div>
  );
}