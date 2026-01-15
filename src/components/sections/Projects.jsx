import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

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
                                    className="group relative py-12 md:py-20 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] cursor-pointer"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                                        <div className="md:col-span-5">
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-black dark:text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                                {project.name}
                                            </h3>
                                            <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.25em]">
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase mb-3 tracking-widest">Outcome</p>
                                                <p className="text-sm leading-relaxed text-black dark:text-white/90">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-between items-start gap-6">
                                                <div>
                                                    <p className="font-mono text-[10px] text-secondary uppercase mb-3 tracking-widest">Stack</p>
                                                    <p className="text-xs font-mono text-black/80 dark:text-white/80 font-medium">
                                                        {project.tech.slice(0, 3).join(' / ')}
                                                    </p>
                                                </div>
                                                <div className="inline-block text-[10px] font-bold uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:text-secondary hover:border-secondary transition-colors text-black dark:text-white">
                                                    View Details ↘
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
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Modal: THE TECHNICAL DOSSIER */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
                            className="relative w-full max-w-[1200px] bg-white dark:bg-black border border-black dark:border-white shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
                        >
                            {/* Technical Header */}
                            <div className="flex justify-end items-center px-6 py-2 border-b border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="font-mono text-[10px] uppercase tracking-widest hover:text-white/60 dark:hover:text-black/60 transition-colors py-1"
                                >
                                    Close [×]
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 md:px-12 md:py-6 lg:px-20 lg:py-8">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                                    {/* Section 01: The Identity (50/50 Split) */}
                                    <div className="lg:col-span-12 border-b border-black dark:border-white pb-10 mb-4">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                            {/* LEFT: Project Image (Colorful, Uncropped) */}
                                            <div className="w-full aspect-video overflow-hidden bg-white dark:bg-black flex-shrink-0 border border-black dark:border-white order-1 shadow-sm">
                                                <img
                                                    src={selectedProject.image}
                                                    alt={selectedProject.name}
                                                    className="w-full h-full object-contain transition-all duration-700"
                                                />
                                            </div>

                                            {/* RIGHT: Project Title & Architecture */}
                                            <div className="space-y-4 order-2">
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.1] font-bold tracking-tighter text-black dark:text-white uppercase">
                                                    {selectedProject.name}
                                                </h2>

                                                <div className="space-y-4">
                                                    <div className="font-mono text-[10px] text-secondary uppercase flex items-center gap-2 tracking-[0.3em] font-semibold">
                                                        <span className="w-2 h-2 bg-black/80 dark:bg-white/80" /> Technical Stack
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                                        {selectedProject.tech.map((t, i) => (
                                                            <span key={i} className="text-[10px] font-mono border border-black/20 dark:border-white/20 px-3 py-1.5 bg-black/[0.05] dark:bg-white/[0.05] text-black dark:text-white uppercase font-bold tracking-tight">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 02: Execution Details */}
                                    <div className="md:col-span-8 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black pt-2">
                                                (01) The Problem
                                            </div>
                                            <div className="md:col-span-8 pt-2">
                                                <p className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white leading-tight">
                                                    {selectedProject.problem}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black dark:border-white pt-2">
                                                (02) Strategy
                                            </div>
                                            <div className="md:col-span-8 pt-2">
                                                <p className="text-sm leading-relaxed text-black dark:text-white/90 max-w-xl">
                                                    {selectedProject.decision}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black dark:border-white pt-2">
                                                (03) Outcome
                                            </div>
                                            <div className="md:col-span-8 pt-2">
                                                <p className="text-xl font-bold text-black dark:text-white border-l-4 border-black dark:border-white pl-6 py-2 bg-black/[0.02] dark:bg-white/[0.02]">
                                                    {selectedProject.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 03: Constraints & Actions */}
                                    <div className="md:col-span-4 md:border-l border-black/10 dark:border-white/10 md:pl-12">
                                        <div className="space-y-12">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-6 border-b border-black dark:border-white pb-2">Technical Constraints</p>
                                                <ul className="space-y-4">
                                                    {selectedProject.constraints.map((c, i) => (
                                                        <li key={i} className="text-[11px] font-mono leading-tight flex gap-4">
                                                            <span className="text-black dark:text-white font-bold">»</span> <span>{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-6 border-b border-black dark:border-white pb-2">Rejected Complexity</p>
                                                <ul className="space-y-3">
                                                    {selectedProject.notBuilt.map((n, i) => (
                                                        <li key={i} className="text-[11px] font-mono text-secondary uppercase opacity-40 italic flex gap-4">
                                                            <span className="line-through">× {n}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Contact CTA */}
                                <div className="mt-20 pt-12 border-t border-black dark:border-white">
                                    <div className="max-w-2xl">
                                        <p className="text-xl md:text-2xl font-medium text-black dark:text-white mb-6 leading-tight">
                                            Interested in the architecture of this system? Available for consultation on similar production-grade builds.
                                        </p>
                                        <a
                                            href="mailto:shahnawasadeel@gmail.com"
                                            className="inline-block font-mono text-xs font-bold uppercase tracking-widest border-b-2 border-black dark:border-white pb-1 hover:text-secondary hover:border-secondary transition-colors text-black dark:text-white"
                                        >
                                            shahnawasadeel@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Footer */}
                            <div className="grid grid-cols-2 divide-x divide-black dark:divide-white border-t border-black dark:border-white bg-black dark:bg-white">
                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-4 py-4 text-white dark:text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all border-r border-white/10 dark:border-black/10"
                                >
                                    Visit Site
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                                <a
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-4 py-4 text-white dark:text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all"
                                >
                                    View Source
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
