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
        <section id="work" className="py-32 px-4 md:px-8 border-b border-black/10 bg-background" onMouseMove={handleMouseMove}>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32">
                            (01) Selected Work
                        </h2>
                    </div>

                    <div className="md:col-span-9">
                        <div className="divide-y divide-black/10 border-t border-b border-black/10">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => setSelectedProject(project)}
                                    className="group relative py-12 transition-colors hover:bg-black/[0.02] cursor-pointer"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
                                        <div className="md:col-span-5">
                                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                                {project.name}
                                            </h3>
                                            <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="md:col-span-7 grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase mb-2">Outcome</p>
                                                <p className="text-sm leading-relaxed text-primary/80">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-between items-start">
                                                <div>
                                                    <p className="font-mono text-[10px] text-secondary uppercase mb-2">Stack</p>
                                                    <p className="text-xs font-mono text-primary/60">
                                                        {project.tech.slice(0, 3).join(' / ')}
                                                    </p>
                                                </div>
                                                <div className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest border-b border-primary pb-px hover:text-secondary hover:border-secondary transition-colors">
                                                    Open Metadata ↗
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
                        <div className="aspect-video bg-white p-2 border border-black/10">
                            <img
                                src={hoveredProject.image}
                                alt={hoveredProject.name}
                                className="w-full h-full object-cover filter grayscale-[20%]"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-white/95 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-5xl bg-white border border-black p-8 md:p-16 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 font-mono text-xs uppercase tracking-widest hover:text-secondary transition-colors"
                            >
                                Close [ESC]
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-7">
                                    <span className="font-mono text-xs text-secondary uppercase tracking-[0.2em] mb-4 block">
                                        Case_Study // {selectedProject.category}
                                    </span>
                                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase mb-12">
                                        {selectedProject.name}
                                    </h2>

                                    <div className="space-y-8">
                                        <div>
                                            <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">(01) Problem Statement</p>
                                            <p className="text-xl text-black leading-snug font-medium">
                                                {selectedProject.problem}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
                                            <div>
                                                <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">(02) Decision Path</p>
                                                <p className="text-sm leading-relaxed text-black/80">
                                                    {selectedProject.decision}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">(03) Outcome</p>
                                                <p className="text-sm leading-relaxed text-black/80 font-bold italic">
                                                    {selectedProject.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-5 flex flex-col justify-between pt-12 md:pt-0">
                                    <div className="space-y-12">
                                        <div>
                                            <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">Core Constraints</p>
                                            <ul className="space-y-3">
                                                {selectedProject.constraints.map((c, i) => (
                                                    <li key={i} className="text-xs font-mono uppercase text-black/60 flex gap-4">
                                                        <span className="text-black font-bold">—</span> {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">Rejected Complexity</p>
                                            <ul className="space-y-3">
                                                {selectedProject.notBuilt.map((n, i) => (
                                                    <li key={i} className="text-xs font-mono uppercase text-secondary/40 line-through">
                                                        {n}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pt-12 md:pt-0 grid grid-cols-1 gap-4">
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between bg-black text-white px-6 py-4 font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all border border-black"
                                        >
                                            Launch Live Site
                                            <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                        </a>
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between border border-black text-black px-6 py-4 font-bold uppercase tracking-[0.2em] hover:bg-black/5 transition-all"
                                        >
                                            View Source Code
                                            <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
