import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar({ isDark, toggleDark }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    // Close menu on resize if above mobile breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled
                ? 'bg-background/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5'
                : 'bg-background dark:bg-black'
                }`}
        >
            <div className="layout-container h-16 md:h-20 grid grid-cols-2 md:grid-cols-3 items-center">
                {/* BRANDING */}
                <div className="flex justify-start">
                    <a href="#hero" className="z-[110] flex items-baseline gap-1" onClick={() => setIsOpen(false)}>
                        <span className="font-bold text-sm tracking-tighter uppercase text-black dark:text-white">Adeel</span>
                    </a>
                </div>

                {/* DESKTOP NAV (CENTERED) */}
                <nav className="hidden md:flex justify-center items-center gap-12 font-mono text-[10px] uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors font-bold"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA / RESUME / THEME (RIGHT) */}
                <div className="hidden md:flex justify-end items-center gap-8">
                    <button
                        onClick={toggleDark}
                        className="font-mono text-[10px] uppercase tracking-widest font-bold text-black dark:text-white hover:opacity-50 transition-opacity"
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-widest font-bold text-black dark:text-white border-l border-black/10 dark:border-white/10 pl-8"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden justify-end items-center gap-4">
                    <button
                        onClick={toggleDark}
                        className="font-mono text-[10px] uppercase tracking-widest font-bold text-black dark:text-white"
                    >
                        {isDark ? 'L' : 'D'}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-[110] p-4 -mr-4 flex flex-col gap-1.5 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-black dark:bg-white block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-px bg-black dark:bg-white block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-black dark:bg-white block"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-white dark:bg-black z-[105] md:hidden flex flex-col pt-32 px-8"
                    >
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold tracking-tighter uppercase text-black dark:text-white"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="mt-8 inline-block text-sm font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black px-8 py-4 self-start"
                            >
                                Resume
                            </motion.a>
                        </nav>

                        <div className="mt-auto pb-12 space-y-8">
                            <div className="space-y-4">
                                <p className="text-xl font-medium text-primary dark:text-white leading-tight">
                                    Available for full-stack engineering projects and systems design consultation.
                                </p>
                                <a
                                    href="mailto:shahnawasadeel@gmail.com"
                                    className="text-lg font-bold text-black dark:text-white border-b border-black dark:border-white pb-1"
                                >
                                    shahnawasadeel@gmail.com
                                </a>
                            </div>
                            <p className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest font-bold">
                                © {new Date().getFullYear()} Shahnawas Adeel
                            </p>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}