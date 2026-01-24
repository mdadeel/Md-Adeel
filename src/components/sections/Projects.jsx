import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import OptimizedImage from '../ui/OptimizedImage';
import GitHubSearchModal from '../ui/GitHubSearchModal';

export default function Projects() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <section id="work" className="py-8 bg-background">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">
                <motion.div
                    className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-border pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3">
                        <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z" />
                        </svg>
                        <div>
                            <h2 className="text-lg font-bold text-white">Repositories</h2>
                            <p className="text-xs text-text-dim">{projects.length} public repositories</p>
                        </div>
                    </div>
                    <button onClick={() => setIsSearchOpen(true)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-md hover:bg-surface-hover transition-colors text-sm text-text-dim">
                        <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z" /></svg>
                        Find a repository...
                    </button>
                </motion.div>

                <div className="space-y-4">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-5 bg-surface rounded-lg border border-border hover:border-accent/30 transition-all"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="w-full lg:w-[240px] aspect-video rounded-md overflow-hidden bg-background border border-border shrink-0">
                                    <OptimizedImage src={project.image} alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="font-semibold text-accent hover:underline cursor-pointer">{project.name}</h3>
                                                <span className="text-xs text-text-dim">{project.category}</span>
                                            </div>
                                            <span className="px-2 py-0.5 rounded-full border border-border text-xs text-text-dim">Public</span>
                                        </div>
                                        <p className="text-sm text-text-dim/80 leading-relaxed line-clamp-2">{project.problem}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded-full bg-accent/10 text-xs font-medium text-accent border border-accent/20">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md text-xs font-medium transition-colors">
                                            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current"><path d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" /></svg>
                                            Demo
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-surface-hover border border-border text-white rounded-md text-xs font-medium transition-colors hover:bg-background">
                                            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    <p className="text-xs text-text-dim">Pinned repositories from @mdadeel</p>
                </motion.div>

                <GitHubSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </div>
        </section>
    );
}
