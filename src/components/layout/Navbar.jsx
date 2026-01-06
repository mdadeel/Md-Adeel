import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const SOCIALS = [
    {
        label: 'GitHub',
        href: 'https://github.com/mdadeel',
        icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shahnawasadee1/',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

    const navItems = [
        { label: 'Home', href: '#hero', id: 'hero' },
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Skills', href: '#skills', id: 'skills' },
        { label: 'Work', href: '#projects', id: 'projects' },
        { label: 'Experience', href: '#experience', id: 'experience' },
        // { label: 'Services', href: '#services', id: 'services' },
        // { label: 'Process', href: '#process', id: 'process' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];

    // Clock - update every minute for better performance
    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime(); // Initial update
        const timer = setInterval(updateTime, 60000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    // Scroll & Intersection Observer
    useEffect(() => {
        const observerOptions = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: "-25% 0px -25% 0px"
        };

        const observedElements = new Set();

        const observer = new IntersectionObserver(
            (entries) => {
                // We want to find the section that is most prominent in the 
                // "active" part of the screen (the center 50%)
                let bestEntry = null;
                let maxRatio = 0;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        bestEntry = entry;
                    }
                });

                if (bestEntry && maxRatio > 0.15) {
                    setActiveSection(bestEntry.target.id);
                }
            },
            observerOptions
        );

        const observeSections = () => {
            navItems.forEach(item => {
                const section = document.getElementById(item.id);
                if (section && !observedElements.has(section)) {
                    observer.observe(section);
                    observedElements.add(section);
                }
            });
        };

        // MutationObserver to catch lazy-loaded sections when they appear in DOM
        const mutationObserver = new MutationObserver(() => {
            observeSections();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Initial check
        observeSections();

        // Special handling for top/bottom
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveSection('hero');
                return;
            }

            // Check if bottomed out
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Top Bar (Simplified for Mobile) */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-[#0a0f0c]/90 backdrop-blur-md"
            >
                <div className="flex h-full items-center justify-between px-4 md:px-8 max-w-[1280px] mx-auto">
                    {/* Left: System ID */}
                    <div className="flex items-center gap-4">
                        <a href="#hero" className="group flex items-center gap-3" aria-label="Home">
                            <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-[#0d1510] border border-primary/20 group-hover:border-primary transition-all duration-500 shadow-[0_0_15px_rgba(54,226,123,0.1)] group-hover:shadow-[0_0_20px_rgba(54,226,123,0.2)]">
                                <img
                                    src="/logo.png"
                                    alt="Nexus Logo"
                                    className="h-full w-full object-contain p-1.5"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white tracking-tight uppercase leading-none">Shahnawas Adeel</span>
                                <span className="text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1">Frontend Architect</span>
                            </div>
                        </a>
                    </div>

                    {/* Center: Command Bar (Desktop Only) */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-md border border-white/5">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveSection(item.id)}
                                className={`relative px-4 py-1.5 text-xs font-mono font-medium transition-all duration-300 rounded-sm overflow-hidden group ${activeSection === item.id
                                    ? 'text-[#0a0f0c]'
                                    : 'text-white/70 hover:text-white font-semibold'
                                    }`}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                            mass: 1
                                        }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-1">
                                    {activeSection === item.id && <span className="text-[10px] mr-1">▶</span>}
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </nav>

                    {/* Right: Status & Time */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4 font-mono text-xs text-white/60 md:border-r md:border-white/20 md:pr-4">
                            <span className="tracking-widest font-bold">{time}</span>
                        </div>

                        <div className="hidden sm:flex items-center gap-2">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-8 w-8 items-center justify-center text-white/70 hover:text-primary hover:bg-white/10 rounded-sm transition-all p-2"
                                >
                                    <svg className="h-full w-full fill-current" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Bottom Navigation (Mobile Only Redesign) */}
            {/* System Dock (Mobile Only Redesign V2) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
                    className="flex items-center gap-1 bg-black/40 backdrop-blur-2xl border border-white/10 p-1.5 rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
                >
                    {[
                        { id: 'hero', icon: 'home_app_logo' },
                        { id: 'about', icon: 'person_search' },
                        { id: 'projects', icon: 'terminal' },
                        { id: 'contact', icon: 'hub' }
                    ].map((item) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            whileTap={{ scale: 0.9 }}
                            className="relative flex items-center justify-center w-12 h-12 transition-all duration-300"
                            onClick={() => setActiveSection(item.id)}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="dockActive"
                                    className="absolute inset-0 bg-white/10 rounded-[18px]"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }}
                                />
                            )}
                            <span className={`material-symbols-outlined text-2xl transition-all duration-300 ${activeSection === item.id ? 'text-primary' : 'text-white/60'}`}>
                                {item.icon}
                            </span>

                            {/* Active Dot indicator */}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute -bottom-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_12px_#36e27b]"
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                />
                            )}
                        </motion.a>
                    ))}
                </motion.nav>
            </div>
        </>
    );
}