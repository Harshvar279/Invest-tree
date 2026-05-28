import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------- 3D: Procedural luxury tree / skyline ---------- */
function GeometricStructure({ mouse }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    // gentle parallax based on mouse
    const targetX = mouse.current.y * 0.2;
    const targetZ = mouse.current.x * 0.2;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;
  });

  // Build pillars (skyline) + branches (tree)
  const pillars = [];
  for (let i = 0; i < 9; i++) {
    const h = 1.4 + Math.random() * 2.6;
    const x = (i - 4) * 0.42 + (Math.random() - 0.5) * 0.1;
    const z = (Math.random() - 0.5) * 0.6;
    pillars.push(
      <mesh key={`p-${i}`} position={[x, h / 2 - 1.6, z]}>
        <boxGeometry args={[0.18, h, 0.18]} />
        <meshStandardMaterial
          color="#C8A24B"
          metalness={0.85}
          roughness={0.25}
          emissive="#3a2a0a"
          emissiveIntensity={0.25}
        />
      </mesh>
    );
  }

  const branches = [];
  const branchCount = 14;
  for (let i = 0; i < branchCount; i++) {
    const angle = (i / branchCount) * Math.PI * 2;
    const r = 1.6 + Math.random() * 0.7;
    const x = Math.cos(angle) * r;
    const z = Math.sin(angle) * r;
    const y = 0.4 + Math.random() * 1.4;
    branches.push(
      <mesh
        key={`b-${i}`}
        position={[x * 0.6, y, z * 0.6]}
        rotation={[Math.random(), angle, Math.random()]}
      >
        <cylinderGeometry args={[0.012, 0.04, 1.1 + Math.random() * 0.7, 8]} />
        <meshStandardMaterial
          color="#F2E8C9"
          metalness={0.6}
          roughness={0.4}
          emissive="#1a1206"
          emissiveIntensity={0.4}
        />
      </mesh>
    );
  }

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Trunk */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.18, 0.3, 2.4, 12]} />
        <meshStandardMaterial
          color="#0B1A2A"
          metalness={0.9}
          roughness={0.2}
          emissive="#C8A24B"
          emissiveIntensity={0.06}
        />
      </mesh>
      {/* Crown sphere */}
      <mesh position={[0, 1.4, 0]}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#C8A24B"
          metalness={1}
          roughness={0.15}
          wireframe
        />
      </mesh>
      {pillars}
      {branches}
      {/* Ground ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <ringGeometry args={[1.4, 2.4, 64]} />
        <meshBasicMaterial color="#C8A24B" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Scene({ mouse }) {
  return (
    <>
      <color attach="background" args={['#0A0A0B']} />
      <fog attach="fog" args={['#0A0A0B', 4, 11]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 6, 4]} intensity={0.9} color="#F2E8C9" />
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#C8A24B" />
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <GeometricStructure mouse={mouse} />
      </Float>
      <Environment preset="city" />
    </>
  );
}

/* ---------- Split text helper ---------- */
function SplitChars({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('.split-char');
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.035,
      delay,
    });
  }, [delay]);

  return (
    <span ref={ref} className={`split-line ${className}`}>
      {text.split('').map((c, i) => (
        <span key={i} className="split-char">
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}

/* ---------- Hero Component ---------- */
export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 });
  const portraitRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current.x = x;
      mouse.current.y = y;

      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          x: x * -14,
          y: y * -10,
          duration: 1.2,
          ease: 'power3.out',
        });
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-parallax', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-fade-out', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-obsidian-900"
    >
      {/* 3D Canvas behind */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0, 0.6, 5], fov: 38 }}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <Scene mouse={mouse} />
          </Suspense>
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian-900/40 via-transparent to-obsidian-900" />
      </div>

      {/* Founder Portrait — massive, cinematic */}
      <div
        ref={portraitRef}
        className="hero-parallax pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto flex h-full w-full items-end justify-center"
      >
        <div className="relative h-[78%] w-[58%] max-w-[640px] md:h-[88%] md:w-[44%]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1400&auto=format&fit=crop')",
              maskImage:
                'linear-gradient(to bottom, black 70%, transparent 100%), radial-gradient(ellipse at 50% 40%, black 55%, transparent 80%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 70%, transparent 100%), radial-gradient(ellipse at 50% 40%, black 55%, transparent 80%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
              filter: 'grayscale(0.25) contrast(1.08) brightness(0.92)',
            }}
          />
          {/* Gold glow behind */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(200,162,75,0.18),_transparent_60%)]" />
        </div>
      </div>

      {/* Typography overlay */}
      <div className="container-x relative z-20 flex h-full flex-col justify-between pb-12 pt-32 md:pt-36">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="hero-fade-out flex items-center justify-between"
        >
          <p className="eyebrow">Luxury Real Estate · Gurugram</p>
          <p className="eyebrow hidden md:block">Est. — Counsel before Commission</p>
        </motion.div>

        {/* Main heading */}
        <div className="hero-fade-out relative">
          <h1 className="display-heading text-[18vw] leading-[0.85] md:text-[13vw] lg:text-[11.5vw]">
            <SplitChars text="Invest" delay={1.9} />
            <br />
            <span className="serif-italic gold-text inline-block">
              <SplitChars text="Tree." delay={2.25} />
            </span>
          </h1>

          {/* Side meta */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1, ease: 'easeOut' }}
              className="max-w-md font-serif text-lg italic text-pearl/80 md:text-xl"
            >
              Where skylines take root. <br />
              Your satisfaction, our expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1, ease: 'easeOut' }}
              className="flex items-center gap-6"
            >
              <a href="#contact" className="btn-gold">
                Begin Consultation
              </a>
              <a
                href="#properties"
                className="font-sans text-[11px] uppercase tracking-widest2 text-pearl/60 hover:text-gold-300"
              >
                View Portfolio →
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee tagline */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden border-t border-pearl/10 bg-obsidian-900/40 py-3 backdrop-blur-sm">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-serif italic text-gold-200/80">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-sm md:text-base">
              Consultancy & Portfolio Advisory
              <span className="text-gold-500">✦</span>
              Whiteland · M3M · Hero Homes · DLF
              <span className="text-gold-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
