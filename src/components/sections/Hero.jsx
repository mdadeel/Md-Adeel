import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col pt-16 md:pt-16 bg-background overflow-hidden relative border-b border-black/10">
            {/* Background Accent (Blueprint Trace) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-black" />
                <div className="absolute top-0 left-1/4 md:left-1/3 w-px h-full bg-black" />
            </div>

            <div className="layout-container flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0 py-12 md:py-20">

                {/* LEFT: Identity & Role */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.4em] mb-4 md:mb-6 block">
                            Index // 00. IDENTITY
                        </span>
                        <h1 className="text-[14vw] lg:text-[9vw] leading-[0.85] font-black tracking-tighter text-black uppercase mb-8 md:mb-12">
                            Shahnawas<br />Adeel
                        </h1>
                        <div className="max-w-xl">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-black mb-4 md:mb-6">
                                SENIOR SYSTEMS ENGINEER
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg text-secondary leading-relaxed border-l-2 border-black pl-5 md:pl-8">
                                Focused on high-performance MERN architecture,
                                production-grade Next.js systems, and technical leadership.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Visual Figure */}
                <div className="w-full lg:w-[40%] lg:border-l border-black/10 flex flex-col justify-center relative lg:pl-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="relative w-full max-w-[320px] md:max-w-[450px] mx-auto group"
                    >
                        <div className="overflow-hidden bg-black/5 aspect-[3/4] border border-black/5">
                            <img
                                src="/img/hero.jpg"
                                alt="Shahnawas Adeel"
                                className="w-full h-full object-cover grayscale contrast-125 saturate-0 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Technical Tag */}
                        <div className="absolute -bottom-4 right-0 bg-black text-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest hidden md:block">
                            Fig. 01 / PROFILE_SYSTEM
                        </div>
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-black/20" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hidden md:flex">
                <span className="font-mono text-[8px] uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-black animate-bounce" />
            </div>
        </section>
    );
}
