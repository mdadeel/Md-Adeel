import './index.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const HowIWork = lazy(() => import('./components/sections/HowIWork'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
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
    <main className="bg-background min-h-screen text-primary selection:bg-black selection:text-white transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <About />
        <HowIWork />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </main>
  );
}



export default App;
