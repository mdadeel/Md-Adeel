import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-10 pointer-events-none"
                >
                    <div className="max-w-3xl w-full max-h-[92vh] md:max-h-none h-full md:h-auto bg-[#0a0a0a] border-t md:border border-white/10 rounded-t-3xl md:rounded-none p-0 shadow-2xl relative overflow-hidden pointer-events-auto">
                        {/* Mobile Handle */}
                        <div className="w-12 h-1 bg-white/10 rounded-full mx-auto my-3 md:hidden" />
                        {/* Industrial Corner Accents */}
                        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none border-t border-r border-primary/40" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none border-b border-l border-primary/40" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[80] w-10 h-10 bg-primary text-black border border-primary/20 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-xl rounded-full md:rounded-none"
                        >
                            <span className="material-symbols-outlined text-xl font-bold">close</span>
                        </button>

                        <div className="flex flex-col">
                            {/* Image Section - Compact & Contained */}
                            <div className="w-full border-b border-white/10 relative overflow-hidden bg-black aspect-video flex items-center justify-center p-6 md:p-10">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 border-[20px] border-black/50 pointer-events-none" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary" />
                                    <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.3em]">VISUAL_CONTAIN_MODE // ACTIVE</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-10 space-y-8 md:space-y-10 overflow-y-auto custom-scrollbar flex-1">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                        <span className="text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.4em] border border-primary/30 px-2 py-0.5 bg-primary/5">
                                            {project.status}
                                        </span>
                                        <span className="text-[9px] md:text-[10px] font-mono text-white/50 uppercase tracking-[0.4em]">
                                            ID//00{project.id}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight md:leading-none">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/70 text-xs md:text-base leading-relaxed font-normal italic border-l block border-primary/40 pl-4 md:pl-6">
                                        {project.fullDesc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                    {/* Tech Stack */}
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] md:text-[11px] font-mono text-white/80 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-3">
                                            <span className="w-4 h-[1px] bg-primary" />
                                            TECHNICAL_STACK
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-3 py-1.5 border border-white/20 text-[10px] font-mono text-white/70 uppercase tracking-widest hover:border-primary/40 hover:text-white transition-colors">
                                                    [{t}]
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Challenges */}
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] md:text-[11px] font-mono text-white/80 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-3">
                                            <span className="w-4 h-[1px] bg-primary" />
                                            CORE_CHALLENGES
                                        </h4>
                                        <ul className="space-y-4">
                                            {project.challenges?.map((challenge, i) => (
                                                <li key={i} className="flex items-start gap-4 text-white/60 text-[11px] uppercase tracking-widest leading-loose">
                                                    <span className="text-primary mt-1.5 text-[9px]">0{i + 1}</span>
                                                    {challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Future Improvements */}
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] md:text-[11px] font-mono text-white/80 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-3">
                                            <span className="w-4 h-[1px] bg-primary" />
                                            SYSTEM_EVOLUTION
                                        </h4>
                                        <ul className="space-y-4">
                                            {project.improvements?.map((improvement, i) => (
                                                <li key={i} className="flex items-start gap-4 text-white/60 text-[11px] uppercase tracking-widest leading-loose">
                                                    <span className="text-primary mt-1.5 text-[9px]">◆</span>
                                                    {improvement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row gap-px border-t border-white/20">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 h-16 bg-primary text-black font-black flex items-center justify-center gap-3 md:gap-4 text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-white transition-all duration-300"
                                    >
                                        TERMINAL_ACCESS
                                        <span className="material-symbols-outlined text-sm">north_east</span>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 h-16 bg-white/10 md:border-l border-white/20 text-white font-black flex items-center justify-center gap-3 md:gap-4 text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-white/20 transition-all duration-300"
                                    >
                                        SOURCE_REPOSITORY
                                        <span className="material-symbols-outlined text-sm">terminal</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        </AnimatePresence>
    );
}
