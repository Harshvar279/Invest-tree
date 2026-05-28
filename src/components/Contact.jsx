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

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Invest Tree, I would like to schedule a private consultation regarding luxury real estate in Gurugram.'
    );
    window.open(`https://wa.me/918969696100?text=${message}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: '#0A0A0A' }}
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
              Two details. One discreet call from a senior partner — usually
              within the same day.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-10">
          {/* Left — contact info */}
          <div className="c-fade col-span-12 space-y-10 md:col-span-5">
            <ContactItem
              label="Direct Line"
              value="+91 89696 96100"
              href="tel:+918969696100"
            />
            <ContactItem
              label="Private Office"
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

            {/* WhatsApp Fast-Track */}
            <div className="border-t border-gold-500/20 pt-8">
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                / Fast-Track
              </p>
              <p className="mt-3 mb-5 font-serif text-base italic text-pearl/70">
                Prefer instant, frictionless connection? Reach a senior partner
                directly on WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn-whatsapp group"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                </svg>
                Message on WhatsApp
              </button>
            </div>
          </div>

          {/* Right — minimal form */}
          <form
            className="c-fade col-span-12 md:col-span-7 md:pl-10"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const msg = encodeURIComponent(
                `New consultation request from ${name}. Phone: ${phone}`
              );
              window.open(`https://wa.me/918969696100?text=${msg}`, '_blank');
            }}
          >
            <div className="border border-gold-500/15 bg-[#0C0C0C]/60 p-8 backdrop-blur-sm md:p-12">
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                / Private Enquiry
              </p>
              <h3 className="mt-3 font-display text-2xl font-light text-pearl md:text-3xl">
                Two details. <span className="serif-italic text-gold-300">Nothing more.</span>
              </h3>

              <div className="mt-10 space-y-8">
                <Field
                  label="Full Name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  placeholder="+91 ..."
                  type="tel"
                  required
                />
              </div>

              <button type="submit" className="btn-gold mt-12 w-full justify-center md:w-auto">
                Request a Call from a Senior Partner →
              </button>

              <p className="mt-6 font-sans text-[10px] uppercase tracking-widest2 text-pearl/40">
                ✦ Your details remain strictly confidential
              </p>
            </div>
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

function Field({ label, name, type = 'text', placeholder, required }) {
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
        required={required}
        className="mt-3 w-full border-b border-pearl/15 bg-transparent py-3 font-serif text-lg text-pearl placeholder:text-pearl/30 focus:border-gold-400 focus:outline-none"
      />
    </div>
  );
}