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
            animate={hidden || (typeof document !== 'undefined' && document.documentElement.classList.contains('modal-open')) ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                ? 'bg-background/80 backdrop-blur-md border-b border-border'
                : 'bg-background'
                } ${typeof document !== 'undefined' && document.documentElement.classList.contains('modal-open') ? 'translate-y-[-100%] pointer-events-none' : ''}`}
        >
            <div className="layout-container h-14 md:h-16 grid grid-cols-2 md:grid-cols-3 items-center">
                {/* BRANDING */}
                <div className="flex justify-start">
                    <a href="#hero" className="z-[110] flex items-baseline gap-1" onClick={() => setIsOpen(false)}>
                        <span className="font-bold text-base tracking-tighter uppercase text-primary">Adeel</span>
                    </a>
                </div>

                {/* DESKTOP NAV (CENTERED) */}
                <nav className="hidden md:flex justify-center items-center gap-12 font-mono text-xs uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-primary transition-colors font-bold"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA / RESUME / THEME (RIGHT) */}
                <div className="hidden md:flex justify-end items-center gap-8">
                    <button
                        onClick={toggleDark}
                        className="font-mono text-xs uppercase tracking-widest font-bold text-primary hover:opacity-50 transition-opacity"
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-widest font-bold text-primary border-l border-border pl-8"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden justify-end items-center gap-4">
                    <button
                        onClick={toggleDark}
                        className="font-mono text-xs uppercase tracking-widest font-bold text-primary"
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
                            className="w-6 h-px bg-primary block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-px bg-primary block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-primary block"
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
                        className="fixed inset-0 bg-background z-[105] md:hidden flex flex-col pt-32 px-8"
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
                                    className="text-4xl font-bold tracking-tighter uppercase text-primary"
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
                                className="mt-8 inline-block text-sm font-bold uppercase tracking-widest bg-primary text-background px-8 py-4 self-start"
                            >
                                Resume
                            </motion.a>
                        </nav>

                        <div className="mt-auto pb-12 space-y-8">
                            <div className="space-y-4">
                                <p className="text-xl font-medium text-primary leading-tight">
                                    Available for full-stack engineering projects and systems design consultation.
                                </p>
                                <a
                                    href="mailto:shahnawasadeel@gmail.com"
                                    className="text-lg font-bold text-primary border-b border-border pb-1"
                                >
                                    shahnawasadeel@gmail.com
                                </a>
                            </div>
                            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                                © {new Date().getFullYear()} Shahnawas Adeel
                            </p>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}