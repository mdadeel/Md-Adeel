import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col pt-16 bg-background overflow-hidden relative border-b border-black/10">
            {/* Background Accent (Blueprint Trace) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-black" />
                <div className="absolute top-0 left-1/3 w-px h-full bg-black" />
            </div>

            <div className="max-w-[1400px] w-full mx-auto flex-1 flex flex-col md:flex-row px-4 md:px-8 items-center md:items-stretch gap-8 md:gap-0">

                {/* LEFT: Identity & Role (Fixed Height/Layout to stay above fold) */}
                <div className="w-full md:w-[60%] flex flex-col justify-center py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.4em] mb-4 block">
                            Index // 00. IDENTITY
                        </span>
                        <h1 className="text-[12vw] md:text-[9vw] leading-[0.8] font-black tracking-tighter text-black uppercase mb-8">
                            Shahnawas<br />Adeel
                        </h1>
                        <div className="max-w-md">
                            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-black mb-4">
                                SENIOR SYSTEMS ENGINEER
                            </h2>
                            <p className="text-sm md:text-base text-secondary leading-relaxed border-l-2 border-black pl-4">
                                Focused on high-performance MERN architecture,
                                production-grade Next.js systems, and technical leadership.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Visual Figure (Aspect constrained to fit viewport) */}
                <div className="w-full md:w-[40%] md:border-l border-black/10 flex flex-col justify-center relative md:pl-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="relative w-full max-w-[450px] mx-auto group"
                    >
                        <div className="overflow-hidden bg-black/5 aspect-[3/4]">
                            <img
                                src="/img/hero.jpg"
                                alt="Shahnawas Adeel"
                                className="w-full h-full object-cover grayscale contrast-125 saturate-0 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Technical Tag */}
                        <div className="absolute -bottom-4 right-0 bg-black text-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest">
                            Fig. 01 / PROFILE_SYSTEM
                        </div>
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-black/20" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator (Hint for content below) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="font-mono text-[8px] uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-black animate-bounce" />
            </div>
        </section>
    );
}
