import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-12 border-t border-white/5 bg-black">
            <div className="layout-container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left: Branding & Status */}
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">
                            © 2025 Shahnawas Adeel
                        </span>
                        <div className="h-px w-8 bg-white/5 hidden md:block" />
                        <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">
                            Engineered with precision
                        </span>
                    </div>

                    {/* Right: Location & Core System Info */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
                            <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Loc:</span>
                            <span className="text-[9px] font-mono text-white/60 uppercase font-bold tracking-widest">Bangladesh // 880_HQ</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/10 tracking-[0.3em] uppercase hidden sm:block">
                            [ System_Stable ]
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
