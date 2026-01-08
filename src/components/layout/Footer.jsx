import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/constants';

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
