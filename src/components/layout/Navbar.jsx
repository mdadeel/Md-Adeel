import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
        }
    }, [isOpen]);

    const navLinks = [
        { label: "Work", href: "#work" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 h-16 flex items-center transition-all duration-300 ${scrolled ? 'glass-header' : 'bg-transparent'}`}>
                <div className="max-w-[900px] mx-auto w-full px-6 flex items-center justify-between">

                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2 group relative z-50">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-lg shadow-lg"
                        />
                        <span className="text-sm font-bold text-white">Md Adeel</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-text-dim hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="hidden md:block px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-md font-medium text-sm transition-colors shadow-lg shadow-primary/20"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center text-white relative z-[510]"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
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
            <div className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 p-2 text-text-dim hover:text-white transition-colors"
                >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                <div className="h-full flex flex-col items-center justify-center gap-6">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-semibold text-white hover:text-accent transition-all transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className={`w-12 h-px bg-border my-2 transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: '300ms' }} />
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className={`px-6 py-3 bg-primary text-white rounded-md font-medium text-sm transition-all duration-300 shadow-lg shadow-primary/20 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: '350ms' }}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </>
    );
}