import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    cat: 'Luxury Villa',
    title: 'The Camellias Estate',
    loc: 'DLF Phase 5, Gurugram',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop',
    price: 'On Request',
  },
  {
    cat: 'Premium Residence',
    title: 'Whiteland The Aspen',
    loc: 'Sector 76, Gurugram',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    price: '₹ 6.8 Cr+',
  },
  {
    cat: 'Gated Floors',
    title: 'M3M Mansion',
    loc: 'Sector 113, Gurugram',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop',
    price: '₹ 4.2 Cr+',
  },
  {
    cat: 'Commercial',
    title: 'Hero Homes Sky Tower',
    loc: 'Sector 104, Gurugram',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1400&auto=format&fit=crop',
    price: 'On Request',
  },
  {
    cat: 'Plots',
    title: 'DLF Garden City',
    loc: 'Sector 92, Gurugram',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
    price: '₹ 2.4 Cr+',
  },
  {
    cat: 'Luxury Villa',
    title: 'Sobha International',
    loc: 'Sector 109, Gurugram',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
    price: '₹ 9.5 Cr+',
  },
];

export default function Properties() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.prop-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 90, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            delay: (i % 2) * 0.12,
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
      id="properties"
      ref={ref}
      className="relative bg-obsidian-800 py-28 md:py-40"
    >
      <div className="container-x">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">/ Selected Portfolio</p>
            <h2 className="display-heading text-4xl md:text-6xl lg:text-7xl">
              Addresses worth <br />
              <span className="serif-italic text-gold-300">remembering.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-serif text-lg italic text-pearl/70">
              A curated selection from our active mandates across residential,
              villa, commercial, gated floors and plotted developments — all in
              Gurugram, Haryana.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-14">
          {properties.map((p, i) => (
            <article
              key={p.title}
              className={`prop-card group ${i % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/70 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 border border-gold-300/50 px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-gold-200">
                  {p.cat}
                </span>
                <span className="absolute bottom-5 right-5 font-serif text-sm italic text-pearl/80">
                  {p.price}
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-3xl font-light text-pearl md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-sans text-[11px] uppercase tracking-widest2 text-gold-300/80">
                    {p.loc}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="font-sans text-[11px] uppercase tracking-widest2 text-pearl/60 transition-colors group-hover:text-gold-300"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a href="#contact" className="btn-gold">
            Request Full Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
