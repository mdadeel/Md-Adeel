import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from '../animations';

const projects = [
    {
        id: 1,
        name: 'Metro Optics',
        image: '/img/metro-optics.png',
        shortDesc: 'Premium e-commerce eyewear platform with advanced management.',
        fullDesc: 'A comprehensive e-commerce platform for premium eyewear, offering seamless shopping experiences with advanced features like prescription management, real-time inventory tracking, and intuitive admin controls for streamlined business operations.',
        tech: ['React 19', 'Firebase', 'TailwindCSS', 'Vite', 'React Router', 'Radix UI', 'Zod'],
        status: 'LIVE_SYSTEM',
        liveUrl: 'https://metro-optics.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/metro-optics',
        featured: true,
        challenges: [
            'Implementing secure authentication and role-based access control for admin panel',
            'Building responsive UI components that work seamlessly across all device sizes',
            'Integrating Firebase for real-time data synchronization and user management',
            'Designing an efficient product catalog with advanced filtering and search capabilities'
        ],
        improvements: [
            'Add payment gateway integration for secure checkout process',
            'Implement AI-powered virtual try-on feature for eyewear',
            'Build mobile app versions for iOS and Android',
            'Add multi-language support for broader accessibility'
        ]
    },
    {
        id: 2,
        name: 'eTuitionBD',
        image: '/img/e-tutionhub.png',
        shortDesc: 'Comprehensive online tuition management platform.',
        fullDesc: 'A robust platform connecting students with qualified tutors in Bangladesh, streamlining finding, applying for, and managing tuition opportunities with automated workflows.',
        tech: ['React 19', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
        status: 'DEPLOYED',
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
        featured: false,
        challenges: [
            'Implementing real-time notification system for tuition applications',
            'Building a secure payment gateway integration with Stripe',
            'Designing an intuitive matching algorithm for student-tutor pairing',
            'Optimizing database queries for fast search results'
        ],
        improvements: [
            'Add video calling feature for online tutoring sessions',
            'Implement AI-powered tutor recommendations',
            'Build mobile app versions for iOS and Android',
            'Add multi-language support for broader accessibility'
        ]
    },
    {
        id: 3,
        name: 'Import-Export Hub',
        image: '/img/iehub.jpeg',
        shortDesc: 'Global trade platform for exporters and importers.',
        fullDesc: 'An integrated trade nexus facilitating global commerce with specialized product listing and supply chain management tools.',
        tech: ['React 19', 'Express', 'MongoDB', 'Framer Motion'],
        status: 'LIVE_SYSTEM',
        liveUrl: 'https://iehub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/iehub-client',
        featured: false,
        challenges: [
            'Handling complex product categorization across industries',
            'Building responsive data tables for large product listings',
            'Implementing secure authentication for business accounts'
        ],
        improvements: [
            'Add real-time chat between buyers and sellers',
            'Integrate shipping cost calculators',
            'Build analytics dashboard for trade insights'
        ]
    },
    {
        id: 4,
        name: 'ToyTopia',
        image: '/img/ToyTopia.png',
        shortDesc: 'Premium marketplace for local toy discoveries.',
        fullDesc: 'A high-end marketplace platform connecting families with local sellers of quality toys and collectibles through a curated catalog.',
        tech: ['React', 'Firebase', 'Tailwind', 'DaisyUI'],
        status: 'BETA',
        liveUrl: 'https://toy-topia-ashy.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/ToyTopia',
        featured: false,
        challenges: [
            'Creating an engaging UI for family-friendly browsing',
            'Implementing Firebase for real-time inventory updates',
            'Building a smooth cart and checkout experience'
        ],
        improvements: [
            'Add wishlist and favorites functionality',
            'Implement seller verification system',
            'Add product review and rating system'
        ]
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const featuredProject = projects.find(p => p.featured);
    const gridProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="relative z-10 py-20 bg-black overflow-hidden">
            <div className="layout-container">
                {/* Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
                    <div className="space-y-4">
                        <FadeIn>
                            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-mono tracking-widest uppercase">
                                // Selected_Works
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
                                Featured <span className="text-white/20 italic">Builds.</span>
                            </h2>
                        </FadeIn>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {projects.map((project, idx) => (
                        <FadeIn key={project.id} delay={0.1 * idx}>
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedProject(project)}
                                className="group flex flex-col h-full rounded-none bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-xl relative cursor-pointer"
                            >
                                {/* Industrial Corner Accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 pointer-events-none border-t border-r border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none border-b border-l border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />

                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                                </div>

                                {/* Content Section */}
                                <div className="p-4 md:p-5 flex flex-col flex-1 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase leading-none">ID//00{project.id}</span>
                                            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest px-1.5 py-0.5 border border-primary/40">{project.status}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase leading-tight line-clamp-1">{project.name}</h3>
                                        <p className="text-white/70 text-[11px] md:text-xs leading-tight font-medium line-clamp-2 italic">
                                            {project.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-1 border-t border-white/10">
                                        {project.tech.slice(0, 2).map(t => (
                                            <span key={t} className="text-[10px] font-mono text-white/50 border border-white/10 px-1 py-0.5 uppercase tracking-[0.1em]">[{t}]</span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-px pt-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="h-9 bg-white/10 border border-white/20 text-white font-bold flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.1em] hover:bg-primary hover:text-black transition-all duration-300"
                                        >
                                            Live
                                            <span className="material-symbols-outlined text-[10px]">north_east</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="h-9 bg-transparent border border-white/20 text-white/80 font-bold flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.1em] hover:text-white hover:border-white transition-all duration-300"
                                        >
                                            Code
                                            <span className="material-symbols-outlined text-[10px]">terminal</span>
                                        </a>
                                        <div className="col-span-2 h-9 border-x border-b border-white/10 text-white/50 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
                                            Expand_Details
                                            <span className="material-symbols-outlined text-[11px]">analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* View More Call-to-Action */}
                <FadeIn delay={0.6} className="mt-24 flex justify-center">
                    <motion.a
                        href="https://github.com/mdadeel"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-6"
                    >
                        <div className="flex items-center gap-8">
                            <span className="h-[1px] w-12 md:w-24 bg-white/20 group-hover:bg-primary transition-all duration-700" />
                            <span className="text-xs md:text-sm font-mono text-white/60 uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                                Explore_Full_Archive
                            </span>
                            <span className="h-[1px] w-12 md:w-24 bg-white/20 group-hover:bg-primary transition-all duration-700" />
                        </div>
                        <div className="w-12 h-12 border border-white/20 group-hover:border-primary flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors">arrow_downward</span>
                        </div>
                    </motion.a>
                </FadeIn>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="fixed inset-0 z-[70] overflow-y-auto pt-10 pb-10 px-4 md:px-10 flex items-start justify-center"
                        >
                            <div className="max-w-3xl w-full bg-[#0a0a0a] border border-white/10 rounded-none p-0 shadow-2xl relative mt-auto md:mt-20">
                                {/* Industrial Corner Accents */}
                                <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none border-t border-r border-primary/40" />
                                <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none border-b border-l border-primary/40" />

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute -top-4 -right-4 md:top-6 md:right-6 z-[80] w-10 h-10 bg-primary text-black border border-primary/20 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-xl"
                                >
                                    <span className="material-symbols-outlined text-xl font-bold">close</span>
                                </button>

                                <div className="flex flex-col">
                                    {/* Image Section - Compact & Contained */}
                                    <div className="w-full border-b border-white/10 relative overflow-hidden bg-black aspect-video flex items-center justify-center p-6 md:p-10">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.name}
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute inset-0 border-[20px] border-black/50 pointer-events-none" />
                                        <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-primary" />
                                            <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.3em]">VISUAL_CONTAIN_MODE // ACTIVE</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 md:p-10 space-y-10">
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] border border-primary/30 px-2 py-0.5 bg-primary/5">
                                                    {selectedProject.status}
                                                </span>
                                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em]">
                                                    ID//00{selectedProject.id}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                                                {selectedProject.name}
                                            </h3>
                                            <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal italic border-l block border-primary/40 pl-6">
                                                {selectedProject.fullDesc}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                            {/* Tech Stack */}
                                            <div className="space-y-6">
                                                <h4 className="text-[11px] font-mono text-white/80 uppercase tracking-[0.3em] flex items-center gap-3">
                                                    <span className="w-4 h-[1px] bg-primary" />
                                                    TECHNICAL_STACK
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.tech.map(t => (
                                                        <span key={t} className="px-3 py-1.5 border border-white/20 text-[10px] font-mono text-white/70 uppercase tracking-widest hover:border-primary/40 hover:text-white transition-colors">
                                                            [{t}]
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Challenges */}
                                            <div className="space-y-6">
                                                <h4 className="text-[11px] font-mono text-white/80 uppercase tracking-[0.3em] flex items-center gap-3">
                                                    <span className="w-4 h-[1px] bg-primary" />
                                                    CORE_CHALLENGES
                                                </h4>
                                                <ul className="space-y-4">
                                                    {selectedProject.challenges?.map((challenge, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-white/60 text-[11px] uppercase tracking-widest leading-loose">
                                                            <span className="text-primary mt-1.5 text-[9px]">0{i + 1}</span>
                                                            {challenge}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Future Improvements */}
                                            <div className="space-y-6">
                                                <h4 className="text-[11px] font-mono text-white/80 uppercase tracking-[0.3em] flex items-center gap-3">
                                                    <span className="w-4 h-[1px] bg-primary" />
                                                    SYSTEM_EVOLUTION
                                                </h4>
                                                <ul className="space-y-4">
                                                    {selectedProject.improvements?.map((improvement, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-white/60 text-[11px] uppercase tracking-widest leading-loose">
                                                            <span className="text-primary mt-1.5 text-[9px]">◆</span>
                                                            {improvement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-col sm:flex-row gap-px pt-12 border-t border-white/20">
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 h-16 bg-primary text-black font-black flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-300"
                                            >
                                                TERMINAL_ACCESS
                                                <span className="material-symbols-outlined text-sm">north_east</span>
                                            </a>
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 h-16 bg-white/10 border-l border-white/20 text-white font-black flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.4em] hover:bg-white/20 transition-all duration-300"
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
                )}
            </AnimatePresence>
        </section>
    );
}
