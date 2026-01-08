import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -2 }}
            onClick={onClick}
            className="group flex flex-col h-full rounded-sm bg-[#0a0f0c] border border-[#1f2b24] overflow-hidden hover:border-primary transition-all duration-300 shadow-xl relative cursor-pointer"
        >
            {/* Industrial Corner Accents */}
            <div className="absolute top-0 right-0 w-4 h-4 pointer-events-none border-t border-r border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none border-b border-l border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />

            {/* Image Container */}
            <div className="relative aspect-[2/1] overflow-hidden border-b border-[#1f2b24]">
                <div className="absolute inset-0 z-10 scanlines opacity-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
                        backgroundSize: '100% 4px'
                    }}
                />
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Overlay Tag */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur border border-[#1f2b24] px-2 py-1 z-20">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{project.category}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3 md:p-4 flex flex-col grow">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                        {project.name}
                    </h3>
                    <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors duration-300 !text-lg">
                        {project.sectionIcon}
                    </span>
                </div>
                <p className="text-white/50 text-[11px] leading-snug mb-3 font-medium italic line-clamp-2">
                    {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                    {project.tech.map(t => (
                        <span key={t} className="px-1 py-0.5 text-[8px] uppercase font-bold text-white/40 bg-[#151f18] border border-[#1f2b24] rounded-sm group-hover:text-white/60 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-[#1f2b24] group-hover:border-primary/30 transition-colors duration-300">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="h-10 md:h-8 bg-primary text-black font-bold flex items-center justify-center gap-1.5 text-[9px] md:text-[8px] uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm"
                    >
                        <span className="material-symbols-outlined text-[14px] md:text-[13px]">play_arrow</span>
                        Live View
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="h-10 md:h-8 bg-transparent border border-[#1f2b24] text-gray-400 font-bold flex items-center justify-center gap-1.5 text-[9px] md:text-[8px] uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                    >
                        <span className="material-symbols-outlined text-[14px] md:text-[13px]">code</span>
                        Source
                    </a>
                    <div className="col-span-2 mt-1 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[7px] font-mono text-primary/40 uppercase tracking-[0.2em] flex items-center gap-1">
                            <span className="size-1 bg-primary rounded-full animate-pulse"></span>
                            Expand
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
