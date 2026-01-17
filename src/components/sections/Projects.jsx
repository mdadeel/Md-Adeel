import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            document.documentElement.classList.add('modal-open');
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.classList.remove('modal-open');
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.classList.remove('modal-open');
        };
    }, [selectedProject]);

    return (
        <section id="work" className="section-padding border-b border-border bg-background" onMouseMove={handleMouseMove}>
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-mono-xs text-secondary lg:sticky lg:top-32">
                            (03) Selected Systems
                        </h2>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="divide-y divide-border border-t border-b border-border">
                            {projects.map((project, idx) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => setSelectedProject(project)}
                                    className="group relative py-12 md:py-20 transition-colors hover:bg-black/[0.01] dark:hover:bg-white/[0.01] cursor-pointer"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-baseline">
                                        <div className="md:col-span-5 flex gap-8 items-baseline">
                                            <span className="text-mono-2xs text-secondary opacity-30 shrink-0">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <h3 className="text-display-md text-primary mb-3 group-hover:translate-x-3 transition-transform duration-500">
                                                    {project.name}
                                                </h3>
                                                <span className="text-mono-2xs text-secondary">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
                                            <div>
                                                <p className="text-mono-2xs text-secondary mb-4 opacity-50">Outcome</p>
                                                <p className="text-body-md text-primary font-medium">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-between items-start gap-8">
                                                <div>
                                                    <p className="text-mono-2xs text-secondary mb-4 opacity-50">Stack</p>
                                                    <p className="text-mono-xs text-primary/70">
                                                        {project.tech.slice(0, 3).join(' / ')}
                                                    </p>
                                                </div>
                                                <div className="group/details inline-flex items-center gap-3 text-mono-2xs border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-primary italic">
                                                    <span>View Dossier</span>
                                                    <span className="group-hover/details:translate-x-1 group-hover/details:-translate-y-1 transition-transform">↘</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Image Preview */}
            <AnimatePresence>
                {hoveredProject && !selectedProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1, x: mousePos.x + 40, y: mousePos.y - 150 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block w-[450px] overflow-hidden"
                    >
                        <div className="aspect-video bg-surface dark:bg-dark-surface p-1 border border-border">
                            <img
                                src={hoveredProject.image}
                                alt={hoveredProject.name}
                                loading="lazy"
                                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Modal: THE TECHNICAL DOSSIER */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-background/90 dark:bg-dark-background/95 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[1200px] bg-background dark:bg-dark-background border border-border shadow-[0_0_80px_rgba(0,0,0,0.1)] flex flex-col max-h-[90vh] overflow-hidden"
                        >
                            {/* System Close Button (Fixed relative to modal) */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-[60] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-background/50 dark:bg-dark-background/50 backdrop-blur-xl border border-white/10 dark:border-white/5 hover:bg-white hover:text-black transition-all group"
                                aria-label="Close Project"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-500">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div
                                className="flex-1 overflow-y-auto"
                                data-lenis-prevent
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Cover Photo Section with Overlay */}
                                <div className="relative w-full h-[250px] md:h-[450px] bg-black overflow-hidden border-b border-white/5">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        className="w-full h-full object-contain"
                                    />
                                    {/* Facebook-style Overlay for Name & Stack */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end px-6 pb-4 md:px-12 md:pb-8">
                                        <div className="space-y-2 md:space-y-3">
                                            <h2 className="text-display-md !text-[1.5rem] md:!text-[2.5rem] text-white drop-shadow-lg leading-tight">
                                                {selectedProject.name}
                                            </h2>
                                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                {selectedProject.tech.map((t, i) => (
                                                    <span key={i} className="text-[10px] md:text-mono-2xs border border-white/20 px-2 py-0.5 md:px-3 md:py-1 bg-white/5 backdrop-blur-md text-white/90">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-12 space-y-10 md:space-y-12">
                                    {/* Core Content: Visible without heavy scrolling */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                                        <div className="lg:col-span-8 space-y-8 md:space-y-10">
                                            <div className="space-y-2 md:space-y-3">
                                                <p className="text-mono-2xs text-secondary opacity-50 uppercase font-bold tracking-[0.2em]">(01) Problem Space</p>
                                                <p className="text-display-md !text-[1.125rem] md:!text-[1.35rem] text-primary leading-tight">
                                                    {selectedProject.problem}
                                                </p>
                                            </div>
                                            <div className="space-y-2 md:space-y-3">
                                                <p className="text-mono-2xs text-secondary opacity-50 uppercase font-bold tracking-[0.2em]">(02) Engineering Rationale</p>
                                                <p className="text-body-md text-secondary leading-relaxed">
                                                    {selectedProject.decision}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-4 space-y-10">
                                            <div className="space-y-6 p-6 bg-surface dark:bg-dark-surface border border-border">
                                                <div className="space-y-3">
                                                    <p className="text-mono-2xs text-secondary opacity-50 uppercase tracking-widest">Constraints</p>
                                                    <ul className="space-y-2">
                                                        {selectedProject.constraints.map((c, i) => (
                                                            <li key={i} className="text-mono-2xs text-primary flex gap-3">
                                                                <span className="opacity-30">»</span> {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="space-y-3 pt-4 border-t border-border">
                                                    <p className="text-mono-2xs text-secondary opacity-50 uppercase tracking-widest">Optimization</p>
                                                    <ul className="space-y-2">
                                                        {selectedProject.notBuilt.map((n, i) => (
                                                            <li key={i} className="text-mono-2xs text-primary/40 italic flex gap-3">
                                                                <span className="line-through">× {n}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <div className="border-l border-primary/30 pl-6 py-2">
                                                    <p className="text-mono-2xs text-secondary uppercase tracking-widest mb-1">Measured Outcome</p>
                                                    <p className="text-body-md font-bold text-primary leading-snug">
                                                        {selectedProject.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Footer */}
                            <div className="grid grid-cols-2 border-t border-border bg-background dark:bg-dark-background h-20">
                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-6 text-mono-xs font-bold text-primary hover:bg-primary hover:text-background transition-all border-r border-border group"
                                >
                                    <span>LAUNCH SYSTEM</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                                <a
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-6 text-mono-xs font-bold text-primary hover:bg-primary hover:text-background transition-all group"
                                >
                                    <span>VIEW REPOSITORY</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:rotate-12 transition-transform">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
