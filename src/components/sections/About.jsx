import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations';

const highlights = [
    { icon: 'code', title: 'Web Development', desc: 'Building responsive, high-performance web applications with React and modern APIs.' },
    { icon: 'palette', title: 'UI/UX Focus', desc: 'Crafting intuitive, pixel-perfect interfaces with a focus on user delight.' },
    { icon: 'school', title: 'Continuous Growth', desc: 'Constant exploration of emerging technologies to stay at the cutting edge.' },
    { icon: 'group', title: 'Collaboration', desc: 'Effective integration with cross-functional teams to deliver robust products.' },
];

export default function About() {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

    return (
        <section id="about" className="relative z-10 py-20 bg-black">
            <div className="layout-container">
                <div className="flex flex-col gap-24">
                    {/* Top Section: Narrative */}
                    <div className="max-w-4xl">
                        <FadeIn>
                            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 inline-block">// The_Story</span>
                        </FadeIn>
                        <div className="space-y-8">
                            <FadeIn delay={0.1}>
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
                                    Engineering with <span className="text-white/40 italic">purpose.</span>
                                </h2>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="text-white/60 text-lg md:text-xl leading-relaxed font-light space-y-4">
                                    <p>
                                        I am Shahnawas Adeel, a frontend-focused engineer dedicated to crafting seamless digital environments.
                                        Based in Bangladesh, I specialize in building responsive architectures that bridge the gap between
                                        high-level design and robust engineering.
                                    </p>
                                    <button
                                        onClick={() => setIsReadMoreOpen(true)}
                                        className="text-primary font-medium text-sm border-b border-primary/20 pb-0.5 hover:border-primary transition-all flex items-center gap-2 group"
                                    >
                                        Read my full story
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                                    </button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Bottom Section: Bento Grid Highlights (Mobile Design V2) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Highlights Grid */}
                        <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <FadeIn key={item.title} delay={0.1 * idx}>
                                    <motion.div
                                        whileTap={{ scale: 0.98 }}
                                        className={`p-5 sm:p-8 rounded-[24px] bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all group relative overflow-hidden ${idx === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full -mr-12 -mt-12" />

                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-black transition-colors ring-1 ring-white/5">
                                            <span className="material-symbols-outlined text-lg sm:text-xl">{item.icon}</span>
                                        </div>
                                        <h4 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-3 tracking-tight">{item.title}</h4>
                                        <p className="text-white/40 text-[10px] sm:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Fun Facts / Personality Card */}
                        <FadeIn delay={0.4} className="h-full">
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                className="h-full p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex flex-col justify-between backdrop-blur-md"
                            >
                                <div>
                                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-widest mb-6 sm:mb-8 font-bold">// System_Identity</h4>
                                    <ul className="space-y-4 sm:space-y-6">
                                        {[
                                            'Multidisciplinary: Arts x Eng.',
                                            'Event Architect: Organizing impact.',
                                            'Invisible Code: Silence is quality.'
                                        ].map((fact, i) => (
                                            <li key={i} className="text-xs sm:text-sm text-white/70 leading-relaxed font-mono">
                                                <span className="text-primary mr-2">/</span> {fact}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                    {['React', 'Vite', '880_HQ'].map(tag => (
                                        <span key={tag} className="text-[9px] font-mono uppercase tracking-tighter text-white/20 border border-white/5 px-2 py-0.5 rounded-sm">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Read More Modal */}
            <AnimatePresence>
                {isReadMoreOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
                            onClick={() => setIsReadMoreOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-[70] overflow-y-auto pt-20 pb-10 px-4"
                        >
                            <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative">
                                <button
                                    onClick={() => setIsReadMoreOpen(false)}
                                    className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-3xl">close</span>
                                </button>

                                <h3 className="text-3xl font-bold text-white mb-12 tracking-tighter">My Technical <br /><span className="text-white/40">Journey.</span></h3>

                                <div className="space-y-6 text-white/50 text-base leading-relaxed font-light">
                                    <p>
                                        <span className="text-white font-medium">Hello! I'm Shahnawas Adeel</span>, a passionate Frontend Developer from Bangladesh. My journey into programming began during my college years when I discovered the magic of turning ideas into interactive web experiences.
                                    </p>
                                    <p>
                                        I started with basic HTML and CSS, fascinated by how simple lines of code could create beautiful websites. Soon, I dove deeper into <span className="text-primary">JavaScript</span> and <span className="text-primary">React</span>, and that's when everything clicked — building dynamic, responsive applications became my passion.
                                    </p>
                                    <p>
                                        I completed an intensive web development program at <span className="text-white">Programming Hero</span>, where I honed my skills in the MERN stack. Today, I focus on creating clean, efficient code that solves real problems.
                                    </p>
                                    <p>
                                        <span className="text-white font-medium">Beyond coding</span>, I enjoy event management (currently working as an Event Manager at Zahid's Chemistry Clinic), exploring new technologies, and staying active. I believe a balance between work and personal interests fuels creativity.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
