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
        <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden font-sans border-b border-black">

            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col">
                <div className="h-1/2 w-full bg-[#f0f0ed] dark:bg-[#1a1a1a] transition-colors duration-300" /> {/* Off-white top */}
                <div className="h-1/2 w-full bg-[#262626] dark:bg-[#0a0a0a] transition-colors duration-300" /> {/* Dark-gray bottom */}
            </div>

            {/* Central Diagonal Photo Cutout */}
            <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-[80vh] aspect-[4/5] md:aspect-[5/6] bg-gray-400 overflow-hidden shadow-2xl"
                    style={{
                        clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'
                    }}
                >
                    <img
                        src="/img/cover.jpg"
                        alt="Shahnawas Adeel"
                        className="w-full h-full object-cover grayscale brightness-90 opacity-80"
                    />
                </motion.div>
            </div>

            {/* Content Layers */}
            <div className="relative z-20 h-full w-full layout-container flex flex-col justify-between pt-12 md:pt-20 lg:pt-24 pb-28 md:pb-32">

                {/* Top Half: FIRST NAME */}
                <div className="flex-1 flex flex-col justify-start">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-[14vw] md:text-[11vw] font-black leading-none tracking-[-0.05em] !text-[#1a1a1a] dark:!text-white uppercase select-none drop-shadow-sm transition-colors duration-300">
                            Shahnawas
                        </h1>
                        <div className="mt-4 md:mt-6 text-[#1a1a1a] dark:text-white font-bold text-xs md:text-sm tracking-widest max-w-xs md:max-w-sm transition-colors duration-300">
                            <p>SYSTEMS ENGINEER. INFRASTRUCTURE ARCHITECT. AUTOMATION SPECIALIST.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Half: LAST NAME + CTA */}
                <div className="flex-1 flex flex-col justify-end items-center md:items-end text-center md:text-right">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <h1 className="text-[14vw] md:text-[11vw] font-black leading-none tracking-[-0.05em] !text-white dark:!text-[#f0f0ed] uppercase select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-colors duration-300">
                            Adeel
                        </h1>

                        <div className="mt-2 md:mt-8 md:mb-8 z-30 order-last md:order-first relative -top-[-30px] md:-top-[40px]">
                            <a
                                href="#work"
                                className="bg-[#1a1a1a] dark:bg-white text-white dark:text-black px-6 md:px-12 py-2 md:py-4 text-[10px] md:text-base font-black tracking-widest hover:bg-white dark:hover:bg-[#1a1a1a] hover:text-black dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 block shadow-xl border border-white/10"
                            >
                                VIEW WORK
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ticker Banner */}
            <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#1a1a1a] border-t-2 border-black dark:border-white/20 h-10 md:h-12 z-30 flex items-center overflow-hidden transition-colors duration-300">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(4)].map((_, groupIdx) => (
                        <div key={groupIdx} className="flex">
                            {tickerItems.map((item, idx) => (
                                <span key={idx} className="text-[#1a1a1a] dark:text-white font-black text-[10px] md:text-xs tracking-tighter mx-4 md:mx-8 flex items-center uppercase transition-colors duration-300">
                                    {item} <span className="ml-4 md:ml-8 opacity-30 text-base md:text-lg">//</span>
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
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </section>
    );
}
