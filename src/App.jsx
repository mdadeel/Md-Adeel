import './index.css';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Lenis from 'lenis';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import StructuredData from './components/seo/StructuredData';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Optimized fallback component
const SectionFallback = () => (
  <div className="h-[400px] flex items-center justify-center">
    <div className="w-12 h-px bg-border" />
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <StructuredData />
      <main className="bg-background min-h-screen text-text-main pb-32">
        <Navbar />

        <div id="main-content">
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          </Suspense>

          {/* Premium Stack Layout */}
          <div className="max-w-[1250px] mx-auto px-4 sm:px-8 mt-4 space-y-4 lg:space-y-6">

            <Suspense fallback={<SectionFallback />}>
              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <ErrorBoundary>
                <Skills />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <ErrorBoundary>
                <Experience />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
