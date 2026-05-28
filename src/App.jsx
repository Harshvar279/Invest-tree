import React, { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import Partners from './components/Partners.jsx';
import Team from './components/Team.jsx';
import Properties from './components/Properties.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { initSmoothScroll } from './lib/smoothScroll.js';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      initSmoothScroll();
    }
  }, [loaded]);

  return (
    <div className="noise vignette relative bg-obsidian text-pearl">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Partners />
        <Team />
        <Properties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
