import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-black/10"
        >
            <div className="layout-container h-16 md:h-20 flex items-center justify-between font-mono text-xs uppercase tracking-tight">
                <a href="#hero" className="font-bold text-sm tracking-tighter z-[110]" onClick={() => setIsOpen(false)}>
                    SHAHNAWAS ADEEL
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-black/50 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:underline border-l border-black/10 pl-12"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[110] p-4 -mr-4 flex flex-col gap-1.5 focus:outline-none"
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
                            <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] mb-4">
                                Navigation // Index
                            </span>
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
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
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 inline-block text-sm font-mono font-bold uppercase tracking-widest bg-black text-white px-8 py-4 self-start"
                            >
                                Resume_Download ↓
                            </motion.a>
                        </nav>

                        <div className="mt-auto pb-12">
                            <p className="font-mono text-[10px] text-secondary uppercase opacity-50">
                                System Status: ONLINE // © 2024
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}