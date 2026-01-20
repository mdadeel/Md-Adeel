import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden'; // Keep horizontal scroll lock
        }
    }, [isOpen]);

    const navLinks = [
        { label: "WORK", href: "#work" },
        { label: "SYSTEMS", href: "#skills" },
        { label: "LOG", href: "#experience" },
        { label: "CONTACT", href: "#contact" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[500] h-[70px] flex items-center transition-all duration-500 ${scrolled ? 'glass-header' : 'bg-transparent'}`}>
                <div className="max-w-[1250px] mx-auto w-full px-4 sm:px-8 flex items-center justify-between">

                    {/* Brand */}
                    <a href="#" className="flex items-center gap-4 group relative z-[510]">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-black text-xs shadow-lg shadow-accent/20 transition-transform group-hover:rotate-12">
                            A
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-[12px] font-black tracking-widest text-white">ADEEL.DEV</span>
                            <div className="flex items-center gap-1.5 opacity-60">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-[8px] font-mono text-green-500 font-bold uppercase">Available</span>
                            </div>
                        </div>
                    </a>

                    {/* Classical Navigation */}
                    <div className="flex items-center gap-10">
                        <div className="hidden md:flex items-center gap-8" role="list">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-mono text-[11px] font-black tracking-[0.2em] text-text-dim hover:text-accent transition-all relative group/link"
                                    aria-label={`Navigate to ${link.label === "LOG" ? "Experience" : link.label === "SYSTEMS" ? "Skills" : link.label} section`}
                                >
                                    {link.label === "LOG" ? "EXPERIENCE" : link.label === "SYSTEMS" ? "SKILLS" : link.label}
                                </a>
                            ))}
                        </div>

                        <div className="w-px h-6 bg-white/10 hidden md:block" />

                        <a
                            href="#contact"
                            className="hidden md:block px-6 py-2 bg-white text-black rounded-md font-black text-[11px] tracking-widest hover:bg-accent hover:text-white transition-all uppercase"
                            aria-label="Get in touch with me"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center text-white relative z-[510] active:scale-90 transition-transform"
                            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                        >
                            {isOpen ? (
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-[500] md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>

                {/* Close Button Inside Overlay */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                <div className="h-full flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`font-mono text-2xl font-black tracking-[0.2em] text-white hover:text-accent transition-all transform duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.label === "LOG" ? "EXPERIENCE" : link.label === "SYSTEMS" ? "SKILLS" : link.label}
                        </a>
                    ))}
                    <div className={`w-12 h-px bg-white/10 my-4 transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '400ms' }} />
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className={`px-8 py-3 bg-accent text-white rounded-md font-black text-xs tracking-widest uppercase shadow-lg shadow-accent/20 transition-all duration-500 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        Start Project
                    </a>
                </div>
            </div>
        </>
    );
}