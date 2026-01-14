import { SOCIALS } from '../../data/constants';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 w-full py-16 border-t border-white/5 bg-background">
            <div className="layout-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left: Branding */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-white font-bold text-lg tracking-tight">Shahnawas Adeel</span>
                        <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Senior MERN / Next.js Engineer</span>
                    </div>

                    {/* Center: Socials */}
                    <div className="flex items-center gap-6">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center hover:border-white/20 transition-base group"
                                aria-label={social.name}
                            >
                                <svg className="h-4 w-4 fill-white/20 group-hover:fill-white transition-base" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Right: Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-base flex items-center gap-3 pr-2"
                    >
                        Back to Origin
                        <span className="material-symbols-outlined text-sm">north</span>
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                        © 2025 Architecture by Adeel — All Decisions Reserved.
                    </p>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20 animate-pulse"></span>
                        STABLE_BUILD_V2.0.0
                    </p>
                </div>
            </div>

            {/* Mobile Nav Spacer */}
            <div className="h-24 lg:hidden" />
        </footer>
    );
}
