import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
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
            className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5' : 'bg-white'
                }`}
        >
            <div className="layout-container h-16 md:h-20 grid grid-cols-2 md:grid-cols-3 items-center">
                {/* BRANDING */}
                <div className="flex justify-start">
                    <a href="#hero" className="z-[110] flex items-baseline gap-1" onClick={() => setIsOpen(false)}>
                        <span className="font-bold text-sm tracking-tighter uppercase text-black">Adeel</span>
                    </a>
                </div>

                {/* DESKTOP NAV (CENTERED) */}
                <nav className="hidden md:flex justify-center items-center gap-12 font-mono text-[10px] uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-black transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA / RESUME (RIGHT) */}
                <div className="hidden md:flex justify-end items-center">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-widest font-bold text-black border-l border-black/10 pl-12"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-[110] p-4 -mr-4 flex flex-col gap-1.5 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-black block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-px bg-black block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-black block"
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
                        className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col pt-32 px-8"
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
                                    className="text-4xl font-bold tracking-tighter uppercase text-black"
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
                                className="mt-8 inline-block text-sm font-bold uppercase tracking-widest bg-black text-white px-8 py-4 self-start"
                            >
                                Resume
                            </motion.a>
                        </nav>

                        <div className="mt-auto pb-12">
                            <p className="font-mono text-[10px] text-secondary uppercase opacity-50">
                                © {new Date().getFullYear()} Shahnawas Adeel
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}