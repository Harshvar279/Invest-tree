import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder({ onOpenTeam }) {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.f-fade').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.08,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      id="founder"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(200,162,75,0.08),_transparent_70%)]" />

      <div className="container-x">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-4 f-fade">/ The Founder</p>
            <div className="hairline f-fade" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-heading f-fade text-4xl md:text-6xl lg:text-7xl">
              A philosophy, <br />
              <span className="serif-italic text-gold-300">authored personally.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 items-center gap-10 lg:gap-16">
          {/* Portrait */}
          <div className="f-fade col-span-12 md:col-span-5">
            <div className="img-zoom relative aspect-[4/5] overflow-hidden">
              <img
                src="/front-page.JPG"
                alt="Satish Kumar Kuleria — Founder, Invest Tree"
                className="h-full w-full object-cover grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-gold-400/60" />
              <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-gold-400/60" />
              <span className="absolute bottom-6 left-6 font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
                / Satish Kumar Kuleria
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="f-fade col-span-12 md:col-span-7">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              ✦ A Personal Note
            </p>
            <blockquote className="mt-6 font-serif text-xl leading-relaxed text-pearl/85 md:text-2xl md:leading-[1.5]">
              <span className="font-display text-5xl text-gold-400/40">"</span>
              For us, real estate is more than just property. It's about{' '}
              <em className="text-gold-200">building futures</em> and long-term
              value. With deep market knowledge and a strong network, we help
              clients make confident real estate decisions through strategic
              guidance, transparent communication, and{' '}
              <em className="text-gold-200">tailored solutions</em>.
              <span className="font-display text-5xl text-gold-400/40">"</span>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-400" />
              <div>
                <p className="font-display text-xl font-light text-pearl">
                  Satish Kumar Kuleria
                </p>
                <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                  Founder & Principal Advisor
                </p>
              </div>
            </div>

            {/* CTA Row — About + Meet The Practice */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 border-b border-gold-400/40 pb-2 font-sans text-[11px] uppercase tracking-widest2 text-gold-300 transition-all duration-500 hover:border-gold-400 hover:text-gold-200"
              >
                <span>About the Founder</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <span className="hidden h-4 w-px bg-gold-400/30 sm:block" />

              <button
                type="button"
                onClick={onOpenTeam}
                className="group inline-flex items-center gap-3 border-b border-pearl/20 pb-2 font-sans text-[11px] uppercase tracking-widest2 text-pearl/70 transition-all duration-500 hover:border-gold-400 hover:text-gold-200"
              >
                <span>Meet The Practice</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <FounderModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

function FounderModal({ onClose }) {
  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]/85 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="modal-content relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-gold-400/30 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] shadow-[0_0_80px_rgba(200,162,75,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center border border-gold-400/30 text-gold-300 transition-all duration-300 hover:border-gold-400 hover:text-gold-200"
        >
          ✕
        </button>

        <div className="px-8 py-12 md:px-14 md:py-16">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
            ✦ Executive Biography
          </p>
          <h3 className="mt-4 font-display text-4xl font-light text-pearl md:text-5xl">
            Satish Kumar <span className="serif-italic text-gold-300">Kuleria</span>
          </h3>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-widest2 text-gold-300/70">
            Founder & Principal Advisor · Invest Tree
          </p>

          <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold-400 to-transparent" />

          <div className="mt-8 space-y-6 font-serif text-base leading-relaxed text-pearl/80 md:text-lg md:leading-[1.85]">
            <p>
              Satish Kumar Kuleria is the founder and principal advisor of{' '}
              <em className="text-gold-200">Invest Tree</em> — a private real
              estate consultancy quietly trusted by some of Gurugram's most
              discerning families, entrepreneurs, and institutional investors.
              Over four formative years in luxury real estate, he has built a
              practice defined less by transactions and more by the integrity of
              the counsel that precedes them.
            </p>
            <p>
              His authority is rooted in an{' '}
              <em className="text-gold-200">unrivalled depth of local market intelligence</em>.
              From the legacy avenues of DLF Phase 5 and Golf Course Road to
              the emerging corridors of Dwarka Expressway, SPR, and New
              Gurugram — Satish reads the city's micro-markets with the
              precision of an architect studying a blueprint. His insights are
              not pulled from public dashboards; they are earned, on the ground,
              through years of relationships with developers, land-owners,
              architects, legal counsel, and the wealth advisors who guide
              India's most consequential families.
            </p>
            <p>
              That network is, perhaps, his most quietly held asset. Satish
              operates within an{' '}
              <em className="text-gold-200">elite, off-market ecosystem of buyers, sellers, and investors</em>{' '}
              — a circle where introductions matter more than advertisements,
              and where inventory often changes hands long before it ever
              reaches a brochure. For his clients, this means access. Access to
              residences not listed publicly. Access to allocations reserved for
              relationship-led capital. Access to perspectives that protect
              wealth as carefully as they grow it.
            </p>
            <p>
              His track record speaks in the language UHNI clients respect most
              — discretion, repeat engagement, and{' '}
              <em className="text-gold-200">unbroken client satisfaction</em>.
              Families return to Invest Tree not for a second property, but for
              a second generation of advice. Each mandate is approached as a
              long-horizon stewardship: the right address, recommended at the
              right moment, structured for the right outcome.
            </p>
            <p>
              Satish's philosophy is deliberate, and it shapes every
              recommendation the firm makes:{' '}
              <em className="text-gold-200">counsel before commission</em>. He
              believes the finest real estate decisions are made in silence,
              with patience, and with a partner whose loyalty is to the client's
              legacy — not to a closing date.
            </p>
            <p>
              Under his stewardship, Invest Tree continues to serve a narrow,
              private clientele across Gurugram's most prestigious addresses —
              architecting not merely portfolios, but futures.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-gold-500/20 pt-10 sm:grid-cols-3">
            <Stat label="Years of Practice" value="04+" />
            <Stat label="Discretion Rating" value="100%" />
            <Stat label="Market Focus" value="Gurugram" />
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 border-t border-gold-500/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-base italic text-pearl/60">
              For a private introduction —
            </p>
            <a href="#contact" onClick={onClose} className="btn-gold">
              Schedule Discreet Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-display text-4xl font-light text-gold-300">{value}</p>
      <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-pearl/50">
        {label}
      </p>
    </div>
  );
}
