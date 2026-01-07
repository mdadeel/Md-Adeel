import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from '../animations';

const projects = [
    {
        id: 1,
        name: 'Metro Optics',
        category: 'E-Commerce',
        sectionIcon: 'data_object',
        image: '/img/metro-optics.png',
        shortDesc: 'A high-performance e-commerce solution for premium eyewear. Features real-time inventory tracking, 3D virtual try-on integration, and a headless CMS architecture.',
        fullDesc: 'A comprehensive e-commerce platform for premium eyewear, offering seamless shopping experiences with advanced features like prescription management, real-time inventory tracking, and intuitive admin controls for streamlined business operations.',
        tech: ['React', 'Node.js', 'Stripe'],
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
        category: 'Ed-Tech',
        sectionIcon: 'school',
        image: '/img/e-tutionhub.png',
        shortDesc: 'An educational platform connecting students with tutors. Includes real-time scheduling, video conferencing integration, and a robust reputation system for educators.',
        fullDesc: 'A robust platform connecting students with qualified tutors in Bangladesh, streamlining finding, applying for, and managing tuition opportunities with automated workflows.',
        tech: ['Next.js', 'Firebase', 'Tailwind'],
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
        category: 'Logistics',
        sectionIcon: 'hub',
        image: '/img/iehub.jpeg',
        shortDesc: 'B2B logistics dashboard designed for high-volume tracking. Features interactive route mapping, customs document automation, and container tracking APIs.',
        fullDesc: 'An integrated trade nexus facilitating global commerce with specialized product listing and supply chain management tools.',
        tech: ['Vue.js', 'Python', 'PostgreSQL'],
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
        category: 'Experiential',
        sectionIcon: 'view_in_ar',
        image: '/img/ToyTopia.png',
        shortDesc: 'An immersive interactive catalog for vintage toy collectors. Built with WebGL for 360-degree product views and physics-based interactions on the landing page.',
        fullDesc: 'A high-end marketplace platform connecting families with local sellers of quality toys and collectibles through a curated catalog.',
        tech: ['Three.js', 'WebGL', 'GSAP'],
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
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Displaying 4/4 Modules.</p>
                            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Access Level: <span className="text-primary">Public</span></p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {projects.map((project, idx) => (
                        <FadeIn key={project.id} delay={0.1 * idx}>
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ y: -2 }}
                                onClick={() => setSelectedProject(project)}
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
                                            className="h-7.5 bg-primary text-black font-bold flex items-center justify-center gap-1.5 text-[8px] uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm"
                                        >
                                            <span className="material-symbols-outlined text-[13px]">play_arrow</span>
                                            Live View
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="h-7.5 bg-transparent border border-[#1f2b24] text-gray-400 font-bold flex items-center justify-center gap-1.5 text-[8px] uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                                        >
                                            <span className="material-symbols-outlined text-[13px]">code</span>
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
