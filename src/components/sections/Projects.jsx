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
                                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                                {project.name}
                                            </h3>
                                            <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="md:col-span-7 grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase mb-2">Outcome</p>
                                                <p className="text-sm leading-relaxed text-black/80">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-between items-start">
                                                <div>
                                                    <p className="font-mono text-[10px] text-secondary uppercase mb-2">Stack</p>
                                                    <p className="text-xs font-mono text-black/60">
                                                        {project.tech.slice(0, 3).join(' / ')}
                                                    </p>
                                                </div>
                                                <div className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-px hover:text-secondary hover:border-secondary transition-colors">
                                                    Analyze Manifest ↘
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
                            className="fixed inset-0 bg-white/95 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[1200px] bg-white border border-black shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
                        >
                            {/* Technical Header */}
                            <div className="flex justify-between items-center px-8 py-4 border-b border-black bg-black text-white">
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                                    Project_Manifest // Ref: 00{selectedProject.id}
                                </span>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="font-mono text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors"
                                >
                                    Close_Window [×]
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 md:p-16">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                                    {/* Section 01: The Identity */}
                                    <div className="md:col-span-12 border-b border-black pb-12 mb-12">
                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                            <div className="flex-1">
                                                <span className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-4 block">
                                                    Case_Index // {selectedProject.category}
                                                </span>
                                                <h2 className="text-6xl md:text-[10vw] leading-[0.8] font-black tracking-tighter text-black uppercase">
                                                    {selectedProject.name}
                                                </h2>
                                            </div>
                                            <div className="md:w-64">
                                                <div className="font-mono text-[9px] text-secondary uppercase mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-black" /> System_Architecture
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.tech.map((t, i) => (
                                                        <span key={i} className="text-[10px] font-mono border border-black/10 px-2 py-1 bg-black/5">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 02: Execution Details */}
                                    <div className="md:col-span-8 space-y-16">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black pt-4">
                                                (01) Mission
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <p className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight">
                                                    {selectedProject.problem}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black pt-4">
                                                (02) Strategy
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <p className="text-sm leading-relaxed text-black/70 max-w-xl">
                                                    {selectedProject.decision}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                            <div className="md:col-span-4 font-mono text-[10px] text-secondary uppercase tracking-widest border-t border-black pt-4">
                                                (03) Performance
                                            </div>
                                            <div className="md:col-span-8 pt-4">
                                                <p className="text-xl font-bold text-black border-l-4 border-black pl-6 py-2 bg-black/[0.02]">
                                                    {selectedProject.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 03: Constraints & Actions */}
                                    <div className="md:col-span-4 md:border-l border-black/10 md:pl-12 flex flex-col justify-between">
                                        <div className="space-y-12">
                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-6 border-b border-black pb-2">Technical Constraints</p>
                                                <ul className="space-y-4">
                                                    {selectedProject.constraints.map((c, i) => (
                                                        <li key={i} className="text-[11px] font-mono leading-tight flex gap-4">
                                                            <span className="text-black font-bold">»</span> <span>{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-6 border-b border-black pb-2">Rejected Complexity</p>
                                                <ul className="space-y-3">
                                                    {selectedProject.notBuilt.map((n, i) => (
                                                        <li key={i} className="text-[11px] font-mono text-secondary uppercase opacity-40 italic flex gap-4">
                                                            <span className="line-through">× {n}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pt-12 md:pt-0 space-y-4">
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between bg-black text-white px-8 py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black/80 transition-all shadow-xl"
                                            >
                                                Execute Live Site
                                                <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                                            </a>
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between border border-black/20 text-black px-8 py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black/[0.02] transition-all"
                                            >
                                                View Documentation
                                                <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Footer */}
                            <div className="flex justify-between items-center px-8 py-4 border-t border-black bg-white">
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-black" />
                                        <div className="w-1.5 h-1.5 bg-black/20" />
                                        <div className="w-1.5 h-1.5 bg-black/10" />
                                    </div>
                                    <span className="font-mono text-[8px] uppercase tracking-widest opacity-40">
                                        Data_Integrity: VERIFIED_0x82A
                                    </span>
                                </div>
                                <span className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-30">
                                    Secure Build // 2024
                                </span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
