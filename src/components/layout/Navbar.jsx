import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar({ isDark, toggleDark, showToast }) {
    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('shahnawasadeel@gmail.com');
        showToast('Email copied to clipboard');
    };
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
            <div className="layout-container h-[clamp(3.5rem,5vw,4.5rem)] flex items-center justify-between">
                {/* BRANDING */}
                <div className="flex items-center">
                    <a href="#hero" className="z-[110]" onClick={() => setIsOpen(false)}>
                        <span className={`text-display-md !text-[1.25rem] tracking-tighter ${scrolled ? 'text-primary' : 'text-primary'}`}>Adeel</span>
                    </a>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-mono-xs transition-colors py-2 ${scrolled ? 'text-secondary hover:text-primary' : 'text-primary/70 hover:text-primary'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA / THEME */}
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={toggleDark}
                        className={`text-mono-xs hover:opacity-50 transition-opacity py-2 ${scrolled ? 'text-primary' : 'text-primary'}`}
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-mono-xs border-l pl-6 py-2 ${scrolled ? 'text-primary border-border' : 'text-primary border-primary/10'}`}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden justify-end items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-[110] p-3 min-w-[44px] min-h-[44px] flex flex-col gap-1.5 items-center justify-center focus:outline-none active:opacity-70 transition-opacity"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className={`w-6 h-px block bg-primary`}
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={`w-6 h-px block bg-primary`}
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className={`w-6 h-px block bg-primary`}
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
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-lg font-bold text-primary border-b border-border pb-1 hover:text-secondary transition-colors text-left"
                                >
                                    shahnawasadeel@gmail.com
                                </button>
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