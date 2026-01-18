import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../data/projects';
import OptimizedImage from '../ui/OptimizedImage';

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="work" className="section-spacing" ref={containerRef}>
            <motion.div style={{ y }} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-px bg-accent" />
                        <span className="text-label">FEATURED PROJECTS</span>
                    </div>
                    <h2 className="title-xl uppercase tracking-widest">Selected <br /> <span className="text-accent">Works</span>.</h2>
                </div>
                <div className="text-right hidden md:block">
                    <p className="font-mono text-[10px] text-text-dim tracking-[0.3em] font-bold">RECORDS : 0{projects.length}</p>
                    <div className="w-full h-1 bg-white/5 mt-2 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-accent" />
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:gap-10 reveal-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
                    >
                        {/* Project Image Container */}
                        <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[16/10] premium-card border-white/5 overflow-hidden transform group-hover:scale-[1.005] transition-all duration-700 shadow-md hover:shadow-xl"
                                aria-label={`View Live Project: ${project.name}`}
                            >
                                <OptimizedImage
                                    src={project.image}
                                    alt={`Screenshot of ${project.name} - ${project.category}`}
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

                                {/* Refined Corner Brackets */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/10 group-hover:border-accent transition-all duration-500" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/10 group-hover:border-accent transition-all duration-500" />
                            </a>
                        </div>

                        {/* Project Content */}
                        <div className={`lg:col-span-5 space-y-6 ${idx % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                            <div className={`flex flex-col ${idx % 2 !== 0 ? 'items-end' : 'items-start'} gap-3`}>
                                <span className="text-label text-[10px] opacity-30 font-mono tracking-[0.3em]">PROJECT_0{idx + 1}</span>
                                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors duration-500">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.name}</a>
                                </h3>
                                <p className="text-[11px] font-mono font-bold text-accent tracking-[0.2em] opacity-80 uppercase">{project.category}</p>
                            </div>

                            <p className="text-base lg:text-lg text-text-dim leading-relaxed font-medium">
                                {project.problem}
                            </p>

                            <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-mono font-bold tracking-widest text-text-dim/60 group-hover:border-white/10 transition-colors">
                                        {t.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <div className={`pt-4 flex items-center gap-6 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-white hover:text-accent transition-all uppercase"
                                    aria-label={`View ${project.name} Live`}
                                >
                                    Launch Project
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all duration-300">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-black tracking-[0.3em] text-text-dim/40 hover:text-white transition-all uppercase border-b border-transparent hover:border-white/20 pb-1"
                                >
                                    Codebase
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
