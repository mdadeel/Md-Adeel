import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import SystemHUD from '../ui/SystemHUD';
import SnowEffect from '../ui/SnowEffect';
import Magnetic from '../animations/Magnetic';
import { SOCIALS } from '../../data/constants';
import './Hero.css';

const isLowPerformance = typeof window !== 'undefined' && window.navigator &&
    (window.navigator.hardwareConcurrency < 4 || window.navigator.deviceMemory < 4);

export default function Hero() {
    return (
        <section id="hero" className="relative z-10 min-h-[95vh] flex flex-col justify-start pt-16 pb-20 overflow-hidden">
            {/* Minimal Background Glow - Simplified for performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[60%] bg-primary/3 blur-[80px] pointer-events-none opacity-20" />

            {/* Architectural Grid Overlay - Single Layer for Performance */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(54,226,123,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(54,226,123,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

            {/* Banner Scanline */}
            <motion.div
                initial={{ translateY: '-100%' }}
                animate={{ translateY: '1000%' }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0 opacity-50 blur-[1px]"
            />

            {/* Film Grain Overlay - Disabled on low-end devices */}
            {!isLowPerformance && (
                <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>
            )}

            {/* Snow Effect - Reduced for performance */}
            <SnowEffect count={25} opacity={0.08} speed={0.2} />

            <div className="layout-container relative z-10">
                {/* Mobile Hero (V2) - Profile Card Aesthetic */}
                <div className="flex lg:hidden flex-col items-center">
                    <FadeIn className="relative z-20 mb-[-20px]">
                        <div className="relative group p-2">
                            {/* Technical Frame */}
                            <div className="absolute inset-0 border border-white/10 rounded-[12px] bg-white/[0.02] backdrop-blur-md" />

                            {/* Card Header (Mobile) */}
                            <div className="relative flex justify-between items-center px-4 pt-3 pb-2 z-10">
                                <span className="text-[8px] font-mono text-primary/60 tracking-widest">ID_AUTH_M</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse opacity-70" />
                                    <span className="text-[7px] font-mono text-white/40 uppercase">Live</span>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-[260px] h-[320px] overflow-hidden rounded-[4px] border border-white/10 bg-black">
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(54,226,123,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none" />
                                <img
                                    src="/img/hero.jpg"
                                    alt="Shahnawas Adeel"
                                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-1000"
                                />

                                {/* Mobile Biometric markers */}
                                <div className="absolute top-3 left-3 text-[6px] font-mono text-primary/80 bg-black/60 px-1 py-0.5 border border-primary/20 z-20">x88_AUTH</div>
                                <div className="absolute bottom-3 right-3 text-[6px] font-mono text-primary/80 bg-black/60 px-1 py-0.5 border border-primary/20 z-20">Bangladesh_HQ</div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="relative z-30 pt-16 text-center space-y-6">
                        <FadeIn delay={0.3}>
                            <h1 className="text-6xl font-black tracking-tighter text-white leading-[1] group">
                                <div className="overflow-hidden py-1">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="inline-block"
                                    >
                                        SHAHNAWAS
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden py-1">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="inline-block text-white/40 italic"
                                    >
                                        ADEEL
                                    </motion.span>
                                </div>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="max-w-[280px] mx-auto text-sm leading-relaxed text-white/60 font-mono italic px-2">
                                [ LOG ]: Engineering high-performance React architectures.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5} className="pt-6">
                            <div className="flex flex-col gap-5 px-4 w-full max-w-[300px] mx-auto">
                                <motion.a
                                    href="#projects"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn terminal-btn-primary flex items-center justify-center gap-2 text-[10px]"
                                >
                                    Initialize Projects
                                    <span className="material-symbols-outlined text-xs">terminal</span>
                                </motion.a>
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn flex items-center justify-center gap-2 text-[10px]"
                                >
                                    Get_Manifesto
                                    <span className="material-symbols-outlined text-xs">description</span>
                                </motion.a>
                            </div>
                        </FadeIn>

                        {/* Mobile Socials */}
                        <FadeIn delay={0.6} className="pt-8">
                            <div className="flex justify-center gap-4">
                                {SOCIALS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5"
                                    >
                                        <svg className="h-4 w-4 fill-white/60" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Desktop Hero (Unchanged for visual stability) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-24 items-start pt-10">
                    {/* Left: Identity & CTAs */}
                    <div className="flex flex-col items-start text-left mt-10">
                        <div className="space-y-6">
                            <FadeIn delay={0.1}>
                                <h1 className="text-8xl font-black tracking-[-0.05em] text-white leading-[0.9] group cursor-default">
                                    <div className="overflow-hidden">
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                            className="inline-block"
                                        >
                                            SHAHNAWAS
                                        </motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                            className="inline-block text-white/40 italic transition-colors duration-500 group-hover:text-primary"
                                        >
                                            ADEEL
                                        </motion.span>
                                    </div>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="flex gap-4">
                                    <div className="w-[2px] h-full bg-primary/20" />
                                    <p className="max-w-md text-xl leading-relaxed text-white/70 font-mono italic">
                                        &gt; Engineering high-performance web systems with a focus on React architectures and refined digital experiences.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* CTAs */}
                        <FadeIn delay={0.3} className="w-full">
                            <div className="flex gap-8 mt-12 lg:w-auto">
                                <motion.a
                                    href="#projects"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn terminal-btn-primary flex items-center justify-center gap-4 group"
                                >
                                    Initialize_Projects
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">terminal</span>
                                </motion.a>
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn flex items-center justify-center gap-4 group"
                                >
                                    Get_Manifesto
                                    <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100">description</span>
                                </motion.a>
                            </div>
                        </FadeIn>

                        {/* Repositioned Social Dock (Desktop Only) */}
                        <FadeIn delay={0.4} className="mt-12 lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 z-50">
                            <div className="flex lg:flex-col gap-6 items-center">
                                <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                                {SOCIALS.map((social) => (
                                    <Magnetic key={social.name} strength={0.3}>
                                        <motion.a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2 }}
                                            className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/5 hover:border-primary/50 bg-white/[0.02] backdrop-blur-md transition-all duration-500"
                                        >
                                            <svg className="h-4 w-4 fill-white/40 group-hover:fill-primary transition-colors duration-500" viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>

                                            {/* Hover Label */}
                                            <span className="absolute left-14 px-3 py-1 rounded-sm bg-black border border-white/10 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap">
                                                {social.name}
                                            </span>
                                        </motion.a>
                                    </Magnetic>
                                ))}
                                <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Modular System HUD (SAO) */}
                    <FadeIn delay={0.2} className="relative flex justify-end">
                        <SystemHUD />
                    </FadeIn>
                </div>
            </div>

            {/* Ambient Footer Info */}
            <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end opacity-40 pointer-events-none hidden lg:flex z-50">
                <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-white tracking-[0.4em] uppercase font-black">// Bangladesh_HQ</span>
                    <span className="text-[8px] font-mono text-white/60 tracking-[0.2em] uppercase font-bold">23°48'N 90°24'E</span>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] font-mono text-white tracking-[0.4em] uppercase font-black">// System_Manifest v3.4.0</span>
                    <span className="text-[8px] font-mono text-white/60 tracking-[0.2em] uppercase font-bold">Latency: 24ms [AUTH_VERIFIED]</span>
                </div>
            </div>
        </section>
    );
}
