import './index.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

const About = lazy(() => import('./components/sections/About'));
const HowIWork = lazy(() => import('./components/sections/HowIWork'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const isMobile = window.innerWidth < 768;

    // Force dark mode on mobile
    if (isMobile) {
      root.classList.add('dark');
    } else if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // On touch devices or reduced motion, use minimal smooth scroll
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.3 : (isTouchDevice ? 0.8 : 1.2),
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: isTouchDevice ? 1.5 : 2, // More responsive on touch
      infinite: false,
      syncTouch: false, // Let native touch scroll work naturally
      syncTouchLerp: 0.1, // Faster lerp for touch
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <main className="bg-background min-h-screen text-primary selection:bg-black selection:text-white">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} showToast={showToast} />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <About />
        <HowIWork />
        <Skills />
        <Projects />
        <Experience />
        <Contact showToast={showToast} />
      </Suspense>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[200] px-6 py-3 bg-primary text-background text-mono-xs font-bold shadow-2xl pointer-events-none"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
