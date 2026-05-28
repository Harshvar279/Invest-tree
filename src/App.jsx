import React, { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import Partners from './components/Partners.jsx';
import Properties from './components/Properties.jsx';
import Founder from './components/Founder.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { initSmoothScroll } from './lib/smoothScroll.js';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  useEffect(() => {
    if (loaded) {
      initSmoothScroll();
    }
  }, [loaded]);

  return (
    <div
      className="noise vignette relative text-pearl"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <Navbar onOpenTeam={() => setIsTeamOpen(true)} />
      <main>
        <Hero />
        <Manifesto />
        <Partners />
        <Properties />
        <Founder onOpenTeam={() => setIsTeamOpen(true)} />
        <Contact />
      </main>
      <Footer />

      {/* Team Overlay — full-screen dossier view */}
      {isTeamOpen && <Team onClose={() => setIsTeamOpen(false)} />}
    </div>
  );
}