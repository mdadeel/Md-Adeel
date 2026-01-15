import { SOCIALS } from '../../data/constants';

export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-12 border-t border-border bg-background">
            <div className="layout-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left: Branding */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="h-9 w-auto bg-black flex items-center justify-center p-1.5 shadow-sm">
                            <img src="/logo.png" alt="SA" className="h-full w-auto object-contain" />
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <span className="text-black/90 font-bold text-xs tracking-tighter uppercase">Shahnawas Adeel</span>
                            <span className="text-black/40 text-[9px] font-mono tracking-widest uppercase text-center md:text-left">Systems Engineer & Architect</span>
                        </div>
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
                                <svg className="h-4 w-4 fill-black/20 hover:fill-black/60 transition-colors" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Right: Back to top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-black/40 text-[9px] font-bold uppercase tracking-widest hover:text-black transition-colors flex items-center gap-2"
                    >
                        Back to Top
                    </button>
                </div>

                <div className="mt-12 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] font-mono text-black/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} Shahnawas Adeel
                    </p>
                </div>

            </div>
            <div className="h-16 lg:hidden" />
        </footer>
    );
}

