import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-pearl/10 bg-obsidian-900 pb-10 pt-24">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-display text-5xl font-light text-pearl md:text-7xl">
              Invest<span className="serif-italic gold-text"> Tree</span>
            </h3>
            <p className="mt-4 max-w-md font-serif text-base italic text-pearl/60">
              Where skylines take root. Counsel before commission. A private
              real-estate consultancy serving Gurugram, Haryana.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-3">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              / Contact
            </p>
            <ul className="mt-6 space-y-3 font-serif text-base text-pearl/70">
              <li>
                <a href="tel:+918969696100" className="hover:text-gold-300">
                  +91 89696 96100
                </a>
              </li>
              <li>
                <a
                  href="mailto:kumarkuleria592@gmail.com"
                  className="hover:text-gold-300 break-all"
                >
                  kumarkuleria592@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/j9GIpx4cPXJC02LQP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300"
                >
                  Gurugram, Haryana →
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div className="col-span-6 md:col-span-2">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              / Index
            </p>
            <ul className="mt-6 space-y-3 font-serif text-base text-pearl/70">
              <li><a href="#manifesto" className="hover:text-gold-300">Manifesto</a></li>
              <li><a href="#partners" className="hover:text-gold-300">Partners</a></li>
              <li><a href="#team" className="hover:text-gold-300">Team</a></li>
              <li><a href="#properties" className="hover:text-gold-300">Properties</a></li>
              <li><a href="#contact" className="hover:text-gold-300">Contact</a></li>
            </ul>
          </div>

          {/* Practice */}
          <div className="col-span-12 md:col-span-2">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              / Practice
            </p>
            <ul className="mt-6 space-y-3 font-serif text-base text-pearl/70">
              <li>Luxury Villas</li>
              <li>Residences</li>
              <li>Gated Floors</li>
              <li>Commercial</li>
              <li>Plots</li>
              <li>Portfolio Advisory</li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-20 overflow-hidden border-t border-pearl/10 pt-10">
          <h2 className="font-display text-[18vw] leading-[0.85] text-pearl/95 md:text-[14vw]">
            Invest <span className="serif-italic gold-text">Tree.</span>
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-pearl/10 pt-6 font-sans text-[11px] uppercase tracking-widest2 text-pearl/40 md:flex-row md:items-center">
          <p>© {year} Invest Tree. All rights reserved.</p>
          <p>Your satisfaction, our expertise.</p>
          <p>Designed with restraint · Gurugram, IN</p>
        </div>
      </div>
    </footer>
  );
}
