import './index.css';
import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

// Lazy load sections
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen overflow-x-hidden antialiased selection:bg-white/20 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-white/40">Loading...</div>}>
            <div className="contents">
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
