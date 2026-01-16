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
                : 'bg-transparent'
                } ${typeof document !== 'undefined' && document.documentElement.classList.contains('modal-open') ? 'translate-y-[-100%] pointer-events-none' : ''}`}
        >
            <div className="layout-container h-[clamp(3.5rem,5vw,4.5rem)] grid grid-cols-2 md:grid-cols-3 items-center">
                {/* BRANDING */}
                <div className="flex justify-start">
                    <a href="#hero" className="z-[110] flex items-baseline gap-1" onClick={() => setIsOpen(false)}>
                        <span className={`font-bold text-[clamp(1rem,1.2vw,1.125rem)] tracking-tighter uppercase ${scrolled ? 'text-primary' : 'text-[#1a1a1a]'}`}>Adeel</span>
                    </a>
                </div>

                {/* DESKTOP NAV (CENTERED) */}
                <nav className="hidden md:flex justify-center items-center gap-[clamp(1rem,3vw,3rem)] font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`transition-colors font-bold py-2 ${scrolled ? 'text-secondary hover:text-primary' : 'text-[#1a1a1a]/80 hover:text-[#1a1a1a]'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA / RESUME / THEME (RIGHT) */}
                <div className="hidden md:flex justify-end items-center gap-[clamp(1rem,2vw,2rem)]">
                    <button
                        onClick={toggleDark}
                        className={`font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity py-2 px-2 ${scrolled ? 'text-primary' : 'text-[#1a1a1a]'}`}
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest font-bold border-l pl-[clamp(1rem,2vw,2rem)] py-2 ${scrolled ? 'text-primary border-border' : 'text-[#1a1a1a] border-black/10'}`}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden justify-end items-center gap-2">
                    <button
                        onClick={toggleDark}
                        className={`font-mono text-xs uppercase tracking-widest font-bold p-3 min-w-[44px] min-h-[44px] flex items-center justify-center active:opacity-70 transition-opacity ${scrolled ? 'text-primary' : 'text-[#1a1a1a]'}`}
                    >
                        {isDark ? 'L' : 'D'}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-[110] p-3 min-w-[44px] min-h-[44px] flex flex-col gap-1.5 items-center justify-center focus:outline-none active:opacity-70 transition-opacity"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className={`w-6 h-px block ${scrolled || isOpen ? 'bg-primary' : 'bg-[#1a1a1a]'}`}
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={`w-6 h-px block ${scrolled || isOpen ? 'bg-primary' : 'bg-[#1a1a1a]'}`}
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className={`w-6 h-px block ${scrolled || isOpen ? 'bg-primary' : 'bg-[#1a1a1a]'}`}
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
                                    className="text-4xl font-bold tracking-tighter uppercase text-primary active:text-secondary transition-colors py-2"
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