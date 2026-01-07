import { motion } from 'framer-motion';

const SOCIALS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shahnawasadee1/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'GitHub', url: 'https://github.com/mdadeel', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
    { name: 'Facebook', url: 'https://facebook.com/badshahnawas.adeel', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
];

const NAV_LINKS = [
    { label: 'Protocols', href: '#projects' },
    { label: 'Systems', href: '#skills' },
    { label: 'Terminal', href: '#contact' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 w-full pt-40 pb-20 md:pb-12 bg-[#050806] overflow-hidden border-t border-white/5">
            {/* Large Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.02]">
                <h2 className="text-[12rem] lg:text-[25rem] font-black text-white whitespace-nowrap leading-none tracking-tighter text-center">
                    SHAHNAWAS ADEEL
                </h2>
            </div>

            <div className="layout-container relative z-10">
                {/* Main Exit Branding */}
                <div className="flex flex-col items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            S. <span className="text-primary italic">ADEEL</span>
                        </h3>
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
                            End_of_Transmission_v3.4
                        </p>
                    </motion.div>
                </div>

                {/* System HUD Bottom Bar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12 border-t border-white/10 px-8 py-10 rounded-t-[40px] bg-white/[0.02] backdrop-blur-3xl">

                    {/* Left: Quick Nav */}
                    <div className="lg:col-span-3">
                        <div className="flex flex-col gap-6">
                            <span className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
                                // System_Directory
                            </span>
                            <nav className="flex flex-col gap-3">
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-[12px] font-mono text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-3 bg-white/10 group-hover:bg-primary transition-colors" />
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Middle: Status & Copyright */}
                    <div className="lg:col-span-6 flex flex-col items-center gap-8">
                        {/* Social Matrix */}
                        <div className="flex items-center gap-4">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-500 group"
                                >
                                    <svg className="h-4 w-4 fill-white/30 group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                                © 2025 Architecture by Adeel
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-white/5" />
                                <span className="text-[9px] font-mono text-white/40 italic uppercase tracking-widest">
                                    [ No compromise on performance ]
                                </span>
                                <div className="h-px w-12 bg-white/5" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Telemetry & Scroll */}
                    <div className="lg:col-span-3 flex flex-col items-end gap-10">
                        <div className="text-right space-y-2">
                            <div className="flex items-center justify-end gap-2">
                                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Location_Status:</span>
                                <span className="text-[9px] font-mono text-primary font-bold">STABLE</span>
                            </div>
                            <p className="text-[11px] font-mono text-white/60 font-bold tracking-widest">
                                DHAKA_HQ // 23.81°N 90.41°E
                            </p>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                        >
                            <span className="text-[10px] font-mono text-white/40 group-hover:text-primary transition-all uppercase tracking-[0.2em]">Return_to_Origin</span>
                            <span className="material-symbols-outlined text-sm text-primary group-hover:-translate-y-1 transition-transform">north</span>
                        </button>
                    </div>
                </div>

                {/* Final Ambient Info Bar */}
                <div className="mt-8 flex justify-between items-center opacity-20 pointer-events-none">
                    <span className="text-[8px] font-mono text-white uppercase tracking-[0.4em]">
                        [ AUTH_KEY_VERIFIED: 0x88ADEEL ]
                    </span>
                    <span className="text-[8px] font-mono text-white uppercase tracking-[0.4em]">
                        SYSTEM_ID: SHAHNAWAS_ADEEL_3.4.0
                    </span>
                </div>
            </div>

            {/* Mobile Nav Spacer */}
            <div className="h-24 lg:hidden" />
        </footer>
    );
}
