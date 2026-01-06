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
        <section id="about" className="relative z-10 py-12 md:py-16 bg-black">
            <div className="layout-container">
                <div className="flex flex-col gap-10 md:gap-14">
                    {/* Top Section: Narrative */}
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="text-primary font-mono text-[10px] tracking-widest uppercase mb-3 inline-block">// The_Story</span>
                        </FadeIn>
                        <div className="space-y-4">
                            <FadeIn delay={0.1}>
                                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                                    Engineering with <span className="text-white/60 italic">purpose.</span>
                                </h2>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="text-white/80 text-base md:text-lg leading-relaxed font-light space-y-3">
                                    <p>
                                        I am Shahnawas Adeel, a frontend-focused engineer dedicated to crafting seamless digital environments.
                                        Based in Bangladesh, I specialize in building responsive architectures that bridge the gap between
                                        high-level design and robust engineering.
                                    </p>
                                    <button
                                        onClick={() => setIsReadMoreOpen(true)}
                                        className="text-primary font-medium text-sm border-b border-primary/20 pb-0.5 hover:border-primary transition-all flex items-center gap-2 group mt-2"
                                    >
                                        Read my full story
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                                    </button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Bottom Section: Modular Hardware Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Highlights Grid */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <FadeIn key={item.title} delay={0.1 * idx}>
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative group p-6 md:p-7 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-primary/30"
                                    >
                                        {/* Dynamic Internal Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 blur-[40px] rounded-full opacity-50" />

                                        {/* Status Line */}
                                        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-primary/30 transition-all duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-5 group-hover:shadow-[0_0_20px_rgba(54,226,123,0.2)] transition-all ring-1 ring-white/10 group-hover:ring-primary/30">
                                                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Decoration: Corner Bracket */}
                                        <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/5 group-hover:border-primary/20 transition-colors" />
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* System Diagnostic / Identity Module */}
                        <FadeIn delay={0.4} className="h-full">
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                className="h-full p-6 md:p-7 rounded-[32px] bg-[#0a0f0c] border border-white/10 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group"
                            >
                                {/* Static Background Noise/Pattern could be added here */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#36e27b_1px,transparent_1px)] [background-size:20px_20px]" />

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
                                            // System_Identity
                                        </h4>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-3 bg-primary/20 animate-pulse" />
                                            <div className="w-1 h-3 bg-primary/40 animate-pulse delay-75" />
                                            <div className="w-1 h-3 bg-primary/60 animate-pulse delay-150" />
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            { label: 'Architecture', val: 'Multidisciplinary Core' },
                                            { label: 'Role', val: 'Event Architect' },
                                            { label: 'Philosophy', val: 'Quality in Silence' }
                                        ].map((item, i) => (
                                            <li key={i} className="relative pl-5 border-l border-white/5 hover:border-primary/40 transition-colors group/item">
                                                <span className="absolute left-0 top-0 text-[8px] font-mono text-white/20">0{i + 1}</span>
                                                <div className="text-[9px] font-mono text-white/30 uppercase mb-0.5 tracking-widest">{item.label}</div>
                                                <div className="text-[13px] text-white/90 font-mono font-medium">{item.val}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {['880_HQ', 'REACT_STK', 'VITE_B'].map(tag => (
                                            <span key={tag} className="text-[10px] font-mono text-primary/60 border border-primary/20 px-3 py-1 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-white/20 uppercase tracking-widest">
                                        <span>Status: Optimized</span>
                                        <span className="text-primary/40">v2.0.4</span>
                                    </div>
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
                                    className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-3xl">close</span>
                                </button>

                                <h3 className="text-3xl font-bold text-white mb-12 tracking-tighter">My Technical <br /><span className="text-white/60">Journey.</span></h3>

                                <div className="space-y-6 text-white/70 text-base leading-relaxed font-light">
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
