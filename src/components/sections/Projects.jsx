import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';

export default function Projects() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="projects" className="relative z-10 section-padding border-t border-white/5 bg-surface">
            <div className="layout-container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Selected Projects</h2>
                    <p className="text-white/50 max-w-xl text-lg">
                        Evidence of engineering judgment, showing not only what I build,
                        but why certain complexities were avoided.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, idx) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                            className="border border-white/5 rounded-lg overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition-base group"
                        >
                            {/* Header */}
                            <div className="p-8 flex flex-col md:flex-row md:items-center gap-8">
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-base">
                                            {project.name}
                                        </h3>
                                        <span className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-lg leading-relaxed">{project.problem}</p>
                                </div>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 px-6 bg-white text-black text-sm font-bold flex items-center justify-center rounded-sm hover:bg-white/90 transition-base"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 px-6 border border-white/10 text-white text-sm font-bold flex items-center justify-center rounded-sm hover:border-white/30 transition-base"
                                    >
                                        Source
                                    </a>
                                    <button
                                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                                        className="h-12 px-6 border border-white/10 text-white/50 text-sm font-medium rounded-sm hover:border-white/30 hover:text-white transition-base flex items-center gap-2"
                                    >
                                        {expandedId === project.id ? 'Close' : 'Analysis'}
                                        <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`}>
                                            expand_more
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Details (Expandable) */}
                            <AnimatePresence>
                                {expandedId === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="border-t border-white/5"
                                    >
                                        <div className="p-8 bg-white/[0.01]">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                {/* Analysis Left */}
                                                <div className="space-y-8">
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Constraints</h4>
                                                        <ul className="space-y-3">
                                                            {project.constraints.map((c, i) => (
                                                                <li key={i} className="text-white/70 text-base flex items-start gap-3">
                                                                    <span className="text-white/20 mt-1">•</span>
                                                                    {c}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Decision Path</h4>
                                                        <p className="text-white/70 text-base leading-relaxed">{project.decision}</p>
                                                    </div>
                                                </div>

                                                {/* Analysis Right */}
                                                <div className="space-y-8">
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Rejected Complexity</h4>
                                                        <ul className="space-y-3">
                                                            {project.notBuilt.map((n, i) => (
                                                                <li key={i} className="text-white/70 text-base flex items-start gap-3">
                                                                    <span className="text-white/20 mt-1">•</span>
                                                                    {n}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Production Outcome</h4>
                                                        <p className="text-white/70 text-base leading-relaxed">{project.outcome}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stack */}
                                            <div className="mt-12 pt-8 border-t border-white/5">
                                                <div className="flex flex-wrap gap-3">
                                                    {project.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="px-3 py-1.5 text-xs font-mono text-white/40 border border-white/5 bg-white/[0.01] rounded-sm"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
