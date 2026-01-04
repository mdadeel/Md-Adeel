import './index.css';
import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ScrollToTop from './components/ui/ScrollToTop';

// Lazy load sections
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Education = lazy(() => import('./components/sections/Education'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen overflow-x-hidden antialiased selection:bg-primary selection:text-[#112117]">
        {/* Main Content */}
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Footer />

        {/* UI Overlays */}
        <ScrollToTop />
      </div>
    </LazyMotion>
  );
}

export default App;


