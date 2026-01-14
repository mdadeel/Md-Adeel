import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from '../ui/Logo';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { label: 'Home', href: '#hero', id: 'hero' },
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Skills', href: '#skills', id: 'skills' },
        { label: 'Projects', href: '#projects', id: 'projects' },
        { label: 'Background', href: '#experience', id: 'experience' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Simple section detection
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100;

            sections.forEach((section, idx) => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(navItems[idx].id);
                    }
                }
            });

            if (window.scrollY < 50) setActiveSection('hero');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                    }`}
            >
                <div className="layout-container h-full flex items-center justify-between">
                    {/* Left: Brand */}
                    <a href="#hero" className="flex items-center gap-4 group h-8">
                        <div className="w-8 h-8">
                            <Logo />
                        </div>
                        <span className="text-white font-bold tracking-tight text-lg group-hover:text-white/70 transition-base">
                            S. Adeel
                        </span>
                    </a>

                    {/* Center: Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-base ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-white/40 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: CTA */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex h-10 px-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest items-center rounded-sm hover:border-white/30 transition-base"
                    >
                        Resume
                    </a>
                </div>
            </motion.header>

            {/* Mobile Dock */}
            <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2 bg-background/80 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl"
                >
                    {[
                        { id: 'hero', icon: 'home' },
                        { id: 'about', icon: 'person' },
                        { id: 'projects', icon: 'code' },
                        { id: 'contact', icon: 'mail' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`w-12 h-12 flex items-center justify-center rounded-full transition-base ${activeSection === item.id
                                    ? 'bg-white/10 text-white shadow-inner'
                                    : 'text-white/30 hover:text-white'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </a>
                    ))}
                </motion.div>
            </nav>
        </>
    );
}