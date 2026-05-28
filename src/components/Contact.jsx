import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = ref.current.querySelectorAll('.c-char');
      gsap.fromTo(
        chars,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.015,
          ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        }
      );

      gsap.utils.toArray('.c-fade').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const split = (s) =>
    s.split('').map((c, i) => (
      <span key={i} className="c-char inline-block">
        {c === ' ' ? '\u00A0' : c}
      </span>
    ));

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-obsidian-900 py-28 md:py-40"
    >
      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(200,162,75,0.12),_transparent_70%)]" />

      <div className="container-x">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-4">/ Begin</p>
            <div className="hairline" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-heading text-5xl md:text-7xl lg:text-[7.5rem]">
              {split('A quiet')}
              <br />
              <span className="serif-italic text-gold-300">
                {split('conversation.')}
              </span>
            </h2>
            <p className="c-fade mt-8 max-w-xl font-serif text-lg italic text-pearl/70 md:text-xl">
              Share your brief. We will respond personally — usually within the
              same day.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-10">
          {/* Left — contact info */}
          <div className="c-fade col-span-12 space-y-10 md:col-span-5">
            <ContactItem
              label="Phone"
              value="+91 89696 96100"
              href="tel:+918969696100"
            />
            <ContactItem
              label="Email"
              value="kumarkuleria592@gmail.com"
              href="mailto:kumarkuleria592@gmail.com"
            />
            <ContactItem
              label="Office"
              value="Gurugram, Haryana, India"
              href="https://share.google/j9GIpx4cPXJC02LQP"
              external
            />

            <div className="border-t border-gold-500/20 pt-6">
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                / Hours
              </p>
              <p className="mt-3 font-serif text-base italic text-pearl/70">
                Monday — Saturday · By appointment <br />
                Sunday · Reserved for clients
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="c-fade col-span-12 space-y-7 md:col-span-7 md:pl-10"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                'mailto:kumarkuleria592@gmail.com?subject=Enquiry%20—%20Invest%20Tree';
            }}
          >
            <Field label="Full Name" name="name" placeholder="Your full name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@domain.com"
            />
            <Field
              label="Phone"
              name="phone"
              placeholder="+91 ..."
              type="tel"
            />
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-widest2 text-gold-300/80">
                Interest
              </label>
              <select className="mt-3 w-full border-b border-pearl/15 bg-transparent py-3 font-serif text-lg text-pearl focus:border-gold-400 focus:outline-none">
                <option className="bg-obsidian-900">Luxury Villa</option>
                <option className="bg-obsidian-900">Premium Residence</option>
                <option className="bg-obsidian-900">Gated Floor</option>
                <option className="bg-obsidian-900">Commercial</option>
                <option className="bg-obsidian-900">Plot</option>
                <option className="bg-obsidian-900">Portfolio Advisory</option>
              </select>
            </div>
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-widest2 text-gold-300/80">
                Brief
              </label>
              <textarea
                rows="4"
                placeholder="Tell us what you are looking for..."
                className="mt-3 w-full resize-none border-b border-pearl/15 bg-transparent py-3 font-serif text-lg text-pearl placeholder:text-pearl/30 focus:border-gold-400 focus:outline-none"
              />
            </div>

            <button type="submit" className="btn-gold mt-6">
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block border-t border-pearl/10 pt-6"
    >
      <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300/80">
        / {label}
      </p>
      <p className="mt-3 font-display text-2xl font-light text-pearl transition-colors group-hover:text-gold-300 md:text-3xl">
        {value}
      </p>
    </a>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-sans text-[11px] uppercase tracking-widest2 text-gold-300/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-pearl/15 bg-transparent py-3 font-serif text-lg text-pearl placeholder:text-pearl/30 focus:border-gold-400 focus:outline-none"
      />
    </div>
  );
}
