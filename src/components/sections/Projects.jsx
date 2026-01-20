import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import OptimizedImage from '../ui/OptimizedImage';

export default function Projects() {
    return (
        <section id="work" className="py-8 bg-[#18191a]">
            <div className="max-w-[1250px] mx-auto px-6">

                {/* GitHub-style Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white/60">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <div>
                            <h2 className="text-xl font-black text-white tracking-tight">Repositories</h2>
                            <p className="text-[12px] text-text-dim/40 font-medium">{projects.length} public repositories</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-text-dim/40"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            <span className="text-[11px] text-text-dim/40 font-medium">Find a repository...</span>
                        </div>
                    </div>
                </div>

                {/* Repository List */}
                <div className="space-y-4">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="group p-5 bg-[#242526] rounded-xl border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Image Preview */}
                                <div className="w-full lg:w-[280px] aspect-video rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/5 shrink-0">
                                    <OptimizedImage
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        {/* Title Row */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-black text-[#4599ff] hover:underline cursor-pointer tracking-tight">
                                                    {project.name}
                                                </h3>
                                                <span className="text-[11px] text-text-dim/40 font-medium">{project.category}</span>
                                            </div>
                                            <span className="px-2 py-0.5 rounded-full border border-white/10 text-[9px] font-black text-text-dim/40 uppercase tracking-widest shrink-0">
                                                Public
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[13px] text-text-dim/60 leading-relaxed line-clamp-2">
                                            {project.problem}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded-full bg-[#4599ff]/10 text-[10px] font-bold text-[#4599ff] border border-[#4599ff]/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-[11px] font-black uppercase tracking-widest transition-colors"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-[11px] font-black uppercase tracking-widest transition-colors"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            Source Code
                                        </a>
                                        <div className="flex items-center gap-4 ml-auto text-text-dim/30">
                                            <div className="flex items-center gap-1.5 text-[11px] font-bold">
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                                JavaScript
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] font-bold">
                                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 .25c-6.489 0-11.75 5.261-11.75 11.75s5.261 11.75 11.75 11.75 11.75-5.261 11.75-11.75-5.261-11.75-11.75-11.75zm-.25 10.48L5.5 8.51 11.75 4.7l6.25 3.81-6.25 3.98zm.5 1.77l5.75-3.67V14.7l-5.75 3.67v-5.87zm-1 0v5.87l-5.75-3.67V8.85l5.75 3.67z" /></svg>
                                                12
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] font-bold">
                                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M5 5h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v10h14V7H5zm4 2v2h6V9H9zm-4 4v2h6v-2H5z" /></svg>
                                                3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-[10px] font-bold text-text-dim/20 uppercase tracking-[0.3em]">
                        Pinned repositories from @mdadeel
                    </p>
                </div>
            </div>
        </section>
    );
}
