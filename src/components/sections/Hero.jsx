import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/constants';

export default function Hero() {
    return (
        <section id="hero" className="relative z-10 min-h-[85vh] flex flex-col justify-center section-padding py-26 ">
            <div className="layout-container">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-32 items-center">
                    {/* Left: Content */}
                    <div className="flex flex-col items-start gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="space-y-4"
                        >
                            <h1 className="text-6xl font-bold text-white tracking-tight">
                                Shahnawas Adeel
                            </h1>
                            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                                Senior Software Engineer specialized in the MERN stack and Next.js.
                                Building production-ready applications with an emphasis on system
                                reliability and clear engineering judgment.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className="flex gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition-base"
                            >
                                View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-white/10 text-white font-semibold rounded-sm hover:border-white/30 transition-base"
                            >
                                Resume
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/5 flex items-center justify-center hover:border-white/20 transition-base"
                                    aria-label={social.name}
                                >
                                    <svg className="h-4 w-4 fill-white/40 hover:fill-white transition-base" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="flex justify-end"
                    >
                        <div className="relative w-[380px] aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-base border border-white/5">
                            <img
                                src="/img/hero.jpg"
                                alt="Shahnawas Adeel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="flex lg:hidden flex-col items-center text-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-12 border border-white/10 grayscale">
                            <img
                                src="/img/hero.jpg"
                                alt="Shahnawas Adeel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Shahnawas Adeel
                        </h1>
                        <p className="text-lg text-white/70 max-w-sm mx-auto">
                            Senior Software Engineer specialized in the MERN stack and Next.js.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-4 w-full"
                    >
                        <a
                            href="#projects"
                            className="py-4 bg-white text-black font-semibold rounded-sm transition-base"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-4 border border-white/10 text-white font-semibold rounded-sm transition-base"
                        >
                            Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
