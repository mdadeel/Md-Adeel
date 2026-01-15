import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col pt-16 md:pt-16 bg-background dark:bg-black overflow-hidden relative border-b border-black/5 dark:border-white/5">
            <div className="layout-container flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0 pt-4 md:pt-8 pb-12 md:pb-20">

                {/* LEFT: Identity & Role */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <h1 className="text-[11vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter text-black dark:text-white uppercase mb-8 md:mb-12">
                            Shahnawas<br />Adeel
                        </h1>

                        <div className="max-w-xl">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white mb-4 md:mb-6">
                                SYSTEMS ENGINEER & ARCHITECT
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg text-secondary leading-relaxed border-l border-black/20 dark:border-white/20 pl-6 md:pl-8">
                                Engineering high-performance MERN architectures and production-grade systems with a focus on maintainability, performance, and technical judgment.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Visual Figure */}
                <div className="w-full lg:w-[40%] lg:border-l border-black/5 dark:border-white/5 flex flex-col justify-center relative lg:pl-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                        className="relative w-full max-w-[320px] md:max-w-[450px] mx-auto group"
                    >
                        <div className="overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] aspect-[3/4] border border-black/5 dark:border-white/5">
                            <img
                                src="/img/hero.jpg"
                                alt="Shahnawas Adeel"
                                className="w-full h-full object-cover grayscale contrast-125 saturate-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 dark:opacity-50 hidden md:flex">
                <span className="font-mono text-[8px] uppercase tracking-widest text-black dark:text-white font-bold">Scroll</span>
                <div className="w-px h-8 bg-black dark:bg-white" />
            </div>
        </section>

    );
}
