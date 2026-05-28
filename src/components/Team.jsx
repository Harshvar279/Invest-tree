import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Satish Kumar Kuleria',
    role: 'Founder',
    img: '/founder.JPG',
    note: 'Sets the firm\'s philosophy — counsel before commission.',
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
    note: 'Negotiates allocations with India\'s top developers.',
  },
];

export default function Team() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.team-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: (i % 3) * 0.12,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      className="relative bg-obsidian-900 py-28 md:py-40"
    >
      <div className="container-x">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-4">/ The Practice</p>
            <h2 className="display-heading text-4xl md:text-6xl">
              Quietly <span className="serif-italic text-gold-300">obsessed</span>{' '}
              with detail.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="font-serif text-lg italic text-pearl/70 md:text-xl">
              A close-knit team of advisors, negotiators and storytellers — built
              around a single belief: the right property, recommended at the right
              moment, changes a family's trajectory.
            </p>
          </div>
        </div>

        {/* Founder — large feature */}
        <FounderCard member={team[0]} />

        {/* Remaining 4 members in editorial grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {team.slice(1).map((m, i) => (
            <MemberCard key={m.name} member={m} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({ member }) {
  return (
    <div className="team-card grid grid-cols-12 items-end gap-8 border-t border-gold-500/20 pt-10">
      <div className="img-zoom relative col-span-12 aspect-[4/5] overflow-hidden md:col-span-5">
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/60 to-transparent" />
        <span className="absolute left-5 top-5 font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
          / 01 — Founder
        </span>
      </div>

      <div className="col-span-12 md:col-span-6 md:col-start-7">
        <h3 className="display-heading text-5xl md:text-7xl">
          {member.name.split(' ')[0]}{' '}
          <span className="serif-italic text-gold-300">
            {member.name.split(' ').slice(1).join(' ')}
          </span>
        </h3>
        <p className="mt-4 font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
          {member.role}
        </p>
        <p className="mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-pearl/70">
          "{member.note}"
        </p>
        <div className="mt-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-serif text-sm italic text-pearl/40">
            Principal Advisor, Invest Tree
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
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 font-sans text-[10px] uppercase tracking-widest2 text-gold-200/90">
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
