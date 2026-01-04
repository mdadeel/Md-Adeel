import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from '../animations';

const projects = [
    {
        id: 1,
        name: 'eTuitionBD',
        image: '/img/e-tutionhub.png',
        shortDesc: 'Comprehensive online tuition management platform.',
        fullDesc: 'A robust platform connecting students with qualified tutors in Bangladesh, streamlining finding, applying for, and managing tuition opportunities with automated workflows.',
        tech: ['React 19', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
        status: 'DEPLOYED',
        liveUrl: 'https://e-tuitionhub.vercel.app/',
        githubUrl: 'https://github.com/mdadeel/etuitionhub-frontend',
        featured: true,
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
        id: 2,
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
        id: 3,
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
                                Featured <br /> <span className="text-white/20 italic">Builds.</span>
                            </h2>
                        </FadeIn>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {/* Featured Project */}
                    {featuredProject && (
                        <FadeIn delay={0.2}>
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                className="group relative w-full overflow-hidden rounded-[32px] bg-[#0a0a0a] border border-white/10 shadow-2xl"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center">
                                    {/* Image Side */}
                                    <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[500px] overflow-hidden">
                                        <img
                                            src={featuredProject.image}
                                            alt={featuredProject.name}
                                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-6 left-6 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            <span className="text-[10px] font-mono text-white/80 tracking-widest uppercase">P_FEATURE_01</span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-6 md:p-12 space-y-6 md:space-y-8 h-full flex flex-col justify-center border-l border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="space-y-3 md:space-y-4">
                                            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                                {featuredProject.name}
                                            </h3>
                                            <p className="text-white/40 text-[13px] md:text-lg leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                                                {featuredProject.fullDesc}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {featuredProject.tech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] md:text-[10px] font-mono text-white/30 uppercase">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-4 md:gap-8 pt-2">
                                            <a
                                                href={featuredProject.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/link flex items-center gap-2 text-white font-bold text-xs md:text-sm uppercase tracking-widest"
                                            >
                                                Live_System
                                                <span className="material-symbols-outlined text-primary group-hover/link:translate-x-1 transition-transform">east</span>
                                            </a>
                                            <a
                                                href={featuredProject.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-white/20 hover:text-white transition-colors text-[10px] md:text-xs font-mono uppercase tracking-widest underline underline-offset-8 decoration-white/5 hover:decoration-primary"
                                            >
                                                Code
                                            </a>
                                            <button
                                                onClick={() => setSelectedProject(featuredProject)}
                                                className="text-primary hover:text-white transition-colors text-[10px] md:text-xs font-mono uppercase tracking-widest flex items-center gap-1"
                                            >
                                                View Details
                                                <span className="material-symbols-outlined text-sm">info</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    )}

                    {/* Secondary Projects */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
                        {gridProjects.map((project, idx) => (
                            <FadeIn key={project.id} delay={0.3 + (idx * 0.1)}>
                                <motion.div
                                    whileTap={{ scale: 0.96 }}
                                    className="group space-y-3 md:space-y-6"
                                >
                                    <div
                                        onClick={() => setSelectedProject(project)}
                                        className="block relative aspect-square md:aspect-[16/10] overflow-hidden rounded-[20px] md:rounded-2xl bg-[#0a0a0a] border border-white/10 ring-1 ring-white/5 cursor-pointer"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                                            <span className="material-symbols-outlined text-sm md:text-lg">info</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 md:space-y-3 px-1 md:px-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm md:text-2xl font-bold text-white tracking-tight truncate">{project.name}</h4>
                                            <span className="text-[8px] md:text-[10px] font-mono text-primary/50 font-bold uppercase hidden md:block">{project.status}</span>
                                        </div>
                                        <p className="text-white/30 text-[10px] md:text-sm leading-tight line-clamp-1 md:line-clamp-2 italic">
                                            {project.shortDesc}
                                        </p>
                                        <div className="pt-2 md:pt-4 flex items-center justify-between gap-4 border-t border-white/5">
                                            <div className="flex gap-2">
                                                {project.tech.slice(0, 2).map(t => (
                                                    <span key={t} className="text-[7px] md:text-[9px] font-mono text-white/20 uppercase">#{t}</span>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="text-[9px] md:text-[10px] font-mono text-primary hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-[70] overflow-y-auto pt-20 pb-10 px-4"
                        >
                            <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-2xl">close</span>
                                </button>

                                {/* Project Header */}
                                <div className="flex flex-col md:flex-row gap-6 mb-8">
                                    <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                                        <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{selectedProject.status}</span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedProject.name}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{selectedProject.fullDesc}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">// Technology Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">// Challenges Faced</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.challenges?.map((challenge, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                                <span className="text-primary mt-1">▹</span>
                                                {challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Future Improvements */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">// Future Improvements</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.improvements?.map((improvement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                                <span className="text-primary mt-1">◆</span>
                                                {improvement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-6 border-t border-white/5">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 h-12 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:bg-white transition-colors"
                                    >
                                        View Live Site
                                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                                    >
                                        GitHub Repo
                                        <span className="material-symbols-outlined text-sm">code</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
