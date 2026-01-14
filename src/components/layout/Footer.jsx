import { SOCIALS } from '../../data/constants';

export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-12 border-t border-border bg-background">
            <div className="layout-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left: Branding */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-white font-semibold text-base tracking-tight">S. Adeel</span>
                        <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase">Senior MERN / Next.js Engineer</span>
                    </div>

                    {/* Center: Socials */}
                    <div className="flex items-center gap-6">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="interactive-subtle"
                                aria-label={social.name}
                            >
                                <svg className="h-4 w-4 fill-white/20 hover:fill-white transition-colors" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Right: Back to top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-white/20 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
                    >
                        Top
                        <span className="material-symbols-outlined text-xs">north</span>
                    </button>
                </div>

                <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                        © 2025 Architecture by Adeel — Fact-based Engineering.
                    </p>
                    <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                        STABLE_BUILD_V2.1.0
                    </p>
                </div>
            </div>
            <div className="h-16 lg:hidden" />
        </footer>
    );
}

