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
        <section id="work" className="py-20 md:py-32 border-b border-black/10 dark:border-white/10 bg-background dark:bg-black" onMouseMove={handleMouseMove}>
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary lg:sticky lg:top-32">
                            (03) Selected Systems
                        </h2>
                    </div>

                    <div className="lg:col-span-9">
                        <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => setSelectedProject(project)}
                                    className="group relative py-8 md:py-20 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] cursor-pointer"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                                        <div className="md:col-span-5 flex gap-6 items-baseline">
                                            <span className="font-mono text-[10px] text-secondary opacity-40 shrink-0">
                                                0{projects.indexOf(project) + 1}
                                            </span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-primary mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                                    {project.name}
                                                </h3>
                                                <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.25em]">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase mb-3 tracking-widest">Outcome</p>
                                                <p className="text-sm leading-relaxed text-primary">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-between items-start gap-6">
                                                <div>
                                                    <p className="font-mono text-[10px] text-secondary uppercase mb-3 tracking-widest">Stack</p>
                                                    <p className="text-xs font-mono text-primary/80 font-medium">
                                                        {project.tech.slice(0, 3).join(' / ')}
                                                    </p>
                                                </div>
                                                <div className="group/details inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary active:text-secondary active:border-secondary transition-colors text-primary">
                                                    <span className="hidden sm:inline">View Details</span>
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, x: mousePos.x + 20, y: mousePos.y - 150 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block w-[400px] overflow-hidden rounded-sm shadow-2xl"
                    >
                        <div className="aspect-video bg-white dark:bg-black p-2 border border-black/10 dark:border-white/10">
                            <img
                                src={hoveredProject.image}
                                alt={hoveredProject.name}
                                loading="lazy"
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Modal: THE TECHNICAL DOSSIER */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[1200px] bg-background dark:bg-[#0A0A0A] border border-black dark:border-white shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
                        >
                            <div
                                className="flex-1 overflow-y-auto p-6 md:px-12 md:py-6 lg:px-20 lg:py-10 bg-background dark:bg-[#0A0A0A]"
                                data-lenis-prevent

                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Header / Close Action */}
                                <div className="flex justify-end mb-2 md:mb-2">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-10 h-10 flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                        aria-label="Close Project"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
                                            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                                    {/* Section 01: The Identity (50/50 Split) */}
                                    <div className="lg:col-span-12 border-b border-black/10 dark:border-white/10 pb-2 mb-2">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                            {/* LEFT: Project Image */}
                                            <div className="w-full aspect-video overflow-hidden">
                                                <img
                                                    src={selectedProject.image}
                                                    alt={selectedProject.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-contain transition-all duration-700"
                                                />
                                            </div>

                                            {/* RIGHT: Project Title & Stack */}
                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[0.9] font-bold tracking-tighter text-primary uppercase">
                                                        {selectedProject.name}
                                                    </h2>
                                                    <p className="text-secondary dark:text-secondary-dark font-mono text-[11px] uppercase tracking-widest leading-relaxed">
                                                        {selectedProject.category}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase flex items-center gap-2 tracking-[0.3em] font-semibold opacity-60">
                                                        <span className="w-1.5 h-1.5 bg-primary/40" /> Core Infrastructure
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.tech.map((t, i) => (
                                                            <span key={i} className="text-[10px] font-mono border border-black/10 dark:border-white/10 px-3 py-1 bg-black/[0.03] dark:bg-white/[0.03] text-primary uppercase tracking-tight">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 02: Execution Details */}
                                    <div className="md:col-span-8 space-y-12">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-4">
                                                (01) The Challenge
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <p className="text-2xl md:text-3xl font-bold tracking-tight text-primary leading-[1.1]">
                                                    {selectedProject.problem}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-4">
                                                (02) Decision Matrix
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <p className="text-sm leading-relaxed text-secondary dark:text-secondary-dark max-w-xl">
                                                    {selectedProject.decision}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-4">
                                                (03) Measured Outcome
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <div className="border-l border-primary/30 pl-6 py-2">
                                                    <p className="text-xl font-bold text-primary leading-snug">
                                                        {selectedProject.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 03: Constraints & Actions - Hidden on mobile */}
                                    <div className="hidden md:block md:col-span-4 md:border-l border-black/10 dark:border-white/10 md:pl-12">
                                        <div className="space-y-12">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-2">Technical Constraints</p>
                                                <ul className="space-y-4">
                                                    {selectedProject.constraints.map((c, i) => (
                                                        <li key={i} className="text-[11px] font-mono leading-tight flex gap-4 text-primary/80">
                                                            <span className="text-primary font-bold">»</span> <span>{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <p className="font-mono text-[10px] text-secondary dark:text-secondary-dark uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-2">Rejected Complexity</p>
                                                <ul className="space-y-3">
                                                    {selectedProject.notBuilt.map((n, i) => (
                                                        <li key={i} className="text-[11px] font-mono text-secondary dark:text-secondary-dark uppercase opacity-40 italic flex gap-4">
                                                            <span className="line-through">× {n}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Contact CTA */}
                                <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10">
                                    <div className="max-w-2xl">
                                        <p className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-6 leading-tight uppercase">
                                            Interested in architectural consultation?
                                        </p>
                                        <a
                                            href="mailto:shahnawasadeel@gmail.com"
                                            className="group inline-flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary dark:hover:text-secondary-dark transition-colors"
                                        >
                                            <span className="border-b border-primary group-hover:border-secondary dark:group-hover:border-secondary-dark pb-0.5">shahnawasadeel@gmail.com</span>
                                            <span className="text-lg">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Footer */}
                            <div className="grid grid-cols-2 border-t border-black/10 dark:border-white/10 bg-background dark:bg-[#0A0A0A] overflow-hidden h-14 md:h-16">

                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 text-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border-r border-black/10 dark:border-white/10 group"
                                >
                                    <span>Visit System</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <a
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 text-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                                >
                                    <span>Source Code</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
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
