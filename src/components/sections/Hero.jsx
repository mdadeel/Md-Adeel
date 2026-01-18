import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';
import { SOCIALS } from '../../data/constants';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section id="hero" className="fb-inspired-hero pt-[60px]">
            <div className="max-w-[1250px] mx-auto">

                {/* 1. Cover Photo Area - Fixed Image Mapping (Swapped: cover.jpg is now background) */}
                <div className="relative aspect-[3/1] w-full overflow-hidden rounded-b-xl px-4 sm:px-0">
                    <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <OptimizedImage
                            src="/img/cover.jpg"
                            alt="Cinematic Landscape"
                            className="w-full h-full object-cover brightness-[0.5]"
                            priority={true}
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                    {/* Perspective Label */}
                    <div className="absolute bottom-6 right-8 flex items-center gap-4 z-10">
                        <a
                            href="#work"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-md font-bold text-[12px] text-white border border-white/20 shadow-xl hover:bg-white/20 transition-all"
                        >
                            VIEW PROJECTS
                        </a>
                    </div>
                </div>

                {/* 2. Profile Details Area (FB Layout Inspiration) */}
                <div className="relative px-6 sm:px-12 pb-4 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:items-end gap-6 overflow-visible">

                    {/* Overlapping Avatar - Swapped: hero.jpg is now portrait */}
                    <div className="relative -mt-[84px] sm:-mt-[100px] md:-mt-[116px] w-[140px] sm:w-[176px] aspect-square rounded-full border-[6px] border-[#1C1E21] bg-surface overflow-hidden z-20 mx-auto md:mx-0 shadow-2xl shrink-0 -translate-y-5">
                        <OptimizedImage
                            src="/img/hero.jpg"
                            alt="Md Adeel"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name & Bio Cluster */}
                    <div className="flex-1 text-center md:text-left md:pb-6 min-w-[300px]">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-3"
                        >
                            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white tracking-widest uppercase">
                                Md Adeel
                            </h1>
                            <p className="text-[15px] text-text-dim font-bold tracking-wide font-mono">
                                MERN STACK DEVELOPER // FRONTEND-FOCUSED
                            </p>
                            <p className="text-[14px] text-text-dim/70 font-medium leading-relaxed hidden md:block">
                                I build full-stack web applications with a strong frontend bias. Clean UI, predictable state, and APIs that don't fight the product.
                            </p>
                        </motion.div>
                    </div>

                    {/* Actions Area */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:pb-6">
                        <a
                            href="#work"
                            className="px-8 py-3 bg-accent text-white rounded-md font-black text-[13px] tracking-widest shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
                            aria-label="Jump to Work section"
                        >
                            VIEW WORK
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Md_Adeel_Resume.pdf"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-md font-black text-[13px] tracking-widest hover:bg-white/10 transition-all text-center"
                            aria-label="Download my Curriculum Vitae"
                        >
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>

                {/* Sub-Navigation - Social Links */}
                <div className="px-6 sm:px-12 border-t border-white/5 h-[60px] flex items-center justify-center">
                    <div className="flex gap-8">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center justify-center w-12 h-12"
                                aria-label={social.name}
                            >
                                {/* Light Beam Assembly */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 flex flex-col items-center justify-end pointer-events-none">
                                    {/* The Source Dot */}
                                    <div className="w-[2px] h-[2px] rounded-full bg-accent shadow-[0_0_10px_4px_var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* The Beam */}
                                    <div className="w-full h-full bg-gradient-to-b from-accent/40 via-accent/10 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Icon Holder */}
                                <div className="relative z-10 p-2 rounded-lg border border-transparent group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300 transform group-hover:scale-110">
                                    <svg className="w-4 h-4 fill-text-dim group-hover:fill-accent transition-colors duration-300" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </div>

                                {/* Tooltip */}
                                <span className="absolute top-14 font-mono text-[9px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 text-accent">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}