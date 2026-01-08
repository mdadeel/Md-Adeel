import { useState } from 'react';
import { FadeIn } from '../animations';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative z-10 py-8 md:py-10 overflow-hidden bg-[#050505]">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #1f2b24 1px, transparent 1px), linear-gradient(to bottom, #1f2b24 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            />
            <div className="layout-container">
                {/* Header */}
                <div className="mb-8 border-l-2 border-primary pl-5 py-1.5 relative">
                    <div className="absolute -left-[5px] top-0 h-1.5 w-1.5 bg-primary"></div>
                    <div className="absolute -left-[5px] bottom-0 h-1.5 w-1.5 bg-primary"></div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                        <div>
                            <FadeIn>
                                <h1 className="font-display text-3xl md:text-5xl font-bold uppercase leading-none tracking-tighter text-white">
                                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-800">Works</span>
                                </h1>
                                <p className="font-mono text-primary/60 text-[10px] md:text-xs mt-1.5 tracking-[0.2em]">
                                    // FEATURED_BUILDS #ID-004
                                </p>
                            </FadeIn>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Displaying {projects.length}/{projects.length} Modules.</p>
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Access Level: <span className="text-primary">Public</span></p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {projects.map((project, idx) => (
                        <FadeIn key={project.id} delay={0.1 * idx}>
                            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                        </FadeIn>
                    ))}
                </div>

                {/* Footer / End of Stream */}
                <FadeIn delay={0.6}>
                    <div className="mt-12 flex flex-col items-center justify-center gap-1.5 opacity-50">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <p className="font-mono text-[10px] text-primary tracking-widest">// END OF STREAM</p>
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </div>
                </FadeIn>
            </div>

            {/* Project Details Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}
