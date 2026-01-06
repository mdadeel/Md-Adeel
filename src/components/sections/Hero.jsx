import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import SystemHUD from '../ui/SystemHUD';
import SplitText from '../animations/SplitText';
import SnowEffect from '../ui/SnowEffect';
import Magnetic from '../animations/Magnetic';
import './Hero.css';

const SOCIALS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shahnawasadee1/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'GitHub', url: 'https://github.com/mdadeel', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
    { name: 'Facebook', url: 'https://facebook.com/badshahnawas.adeel', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'WhatsApp', url: 'https://wa.me/8801533970377', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
];

export default function Hero() {
    return (
        <section id="hero" className="relative z-10 min-h-[95vh] flex flex-col justify-start pt-16 pb-20 bg-black overflow-hidden">
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

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

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
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#36e27b]" />
                                    <span className="text-[7px] font-mono text-white/40 uppercase">Live</span>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-[260px] h-[320px] overflow-hidden rounded-[4px] border border-white/10 bg-black">
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(54,226,123,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none" />
                                <img
                                    src="/img/hero.jpg"
                                    alt="Shahnawas Adeel"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
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
                            <h1 className="text-6xl font-black tracking-tighter text-white leading-[0.85] group">
                                <div className="overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="inline-block"
                                    >
                                        SHAHNAWAS
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
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
                            <p className="max-w-[280px] mx-auto text-sm leading-relaxed text-white/60 font-mono italic">
                                [ LOG ]: Engineering high-performance React architectures.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5} className="pt-6">
                            <div className="flex flex-col gap-4 px-4 w-full max-w-[300px] mx-auto">
                                <motion.a
                                    href="#projects"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn terminal-btn-primary flex items-center justify-center gap-2"
                                >
                                    Initialize Projects
                                    <span className="material-symbols-outlined text-xs">terminal</span>
                                </motion.a>
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileTap={{ scale: 0.98 }}
                                    className="terminal-btn flex items-center justify-center gap-2"
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
                            <div className="flex gap-6 mt-12 lg:w-auto">
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
