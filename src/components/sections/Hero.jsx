import { motion } from 'framer-motion';

export default function Hero() {
    const tickerItems = [
        "SYSTEMS ENGINEER",
        "INFRASTRUCTURE ARCHITECT",
        "AUTOMATION SPECIALIST",
        "CLOUD INTEGRATOR",
        "SECURITY ANALYST",
        "FULL-STACK DEVELOPER"
    ];

    return (
        <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden border-b border-border">

            {/* Background */}
            <div className="absolute inset-0 bg-surface dark:bg-dark-background">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            {/* Central Photo */}
            <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-[75vh] aspect-[4/5] md:aspect-[5/6] overflow-hidden"
                    style={{
                        clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'
                    }}
                >
                    <img
                        src="/img/cover.jpg"
                        alt="Shahnawas Adeel"
                        className="w-full h-full object-cover grayscale brightness-90 opacity-40 dark:opacity-30"
                    />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full w-full layout-container flex flex-col justify-between py-16 md:py-32">

                {/* Top: FIRST NAME */}
                <div className="flex justify-start">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-display-2xl text-primary mb-3 md:mb-6">
                            Shahnawas
                        </h1>
                        <p className="text-mono-xs text-secondary max-w-sm opacity-60">
                            SYSTEMS ENGINEER // INFRASTRUCTURE ARCHITECT // AUTOMATION SPECIALIST.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom: LAST NAME + CTA */}
                {/* Bottom: LAST NAME + CTA */}
                <div className="flex flex-row items-end justify-between">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <a
                            href="#work"
                            className="text-mono-xs bg-primary text-background px-8 py-4 md:px-10 md:py-5 transition-transform hover:-translate-y-1 active:scale-95 touch-target flex items-center justify-center"
                        >
                            SELECTED WORKS ↘
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col items-end text-right"
                    >
                        <h1 className="text-display-2xl text-primary -mb-2 md:-mb-4">
                            Adeel
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Ticker Banner */}
            <div className="absolute bottom-0 left-0 w-full bg-surface dark:bg-dark-surface border-t border-border h-12 z-30 flex items-center overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(4)].map((_, groupIdx) => (
                        <div key={groupIdx} className="flex">
                            {tickerItems.map((item, idx) => (
                                <span key={idx} className="text-mono-2xs text-secondary mx-8 flex items-center">
                                    {item} <span className="ml-8 opacity-20">//</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </section>
    );
}
