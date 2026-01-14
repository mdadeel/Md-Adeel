import './index.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <main className="bg-background min-h-screen text-primary selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </main>
  );
}

export default App;
