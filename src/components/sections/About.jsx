import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations';

const highlights = [
    {
        id: '01',
        icon: 'terminal',
        title: 'WEB_ARCH',
        subtitle: 'React, Node, Next.js',
        desc: 'Constructing fault-tolerant digital ecosystems. Focusing on clean code principles and scalable component hierarchies for maximum reliability.',
        stack: 'MERN_V2',
        status: 'DEPLOYED',
        latency: '< 12ms (GLOBAL)'
    },
    {
        id: '02',
        icon: 'palette',
        title: 'UI/UX_DESIGN',
        subtitle: 'Aesthetic & Logic',
        desc: 'Bridging technical constraints and human intuition. Creating high-contrast, clear interfaces that prioritize transmission efficiency.',
        stack: 'TAILWIND_V4',
        status: 'OPTIMIZED',
        latency: 'NA_PIXEL_PERF'
    },
    {
        id: '03',
        icon: 'school',
        title: 'GROWTH_ENG',
        subtitle: 'Metrics & Scalability',
        desc: 'Optimizing delivery pipelines and system performance to amplify digital signals across global infrastructures.',
        stack: 'VITE_B',
        status: 'SCALING',
        latency: 'LOW_OVERHEAD'
    },
    {
        id: '04',
        icon: 'group',
        title: 'COLLABORATION',
        subtitle: 'Sync & Integration',
        desc: 'Synchronizing with cross-functional nodes to deliver robust, high-availability products through structured version control.',
        stack: 'GIT_FLOW',
        status: 'SYNCED',
        latency: 'REALTIME'
    },
];

export default function About() {
    const [activeModule, setActiveModule] = useState(highlights[0]);

    return (
        <section id="about" className="relative z-10 py-8 md:py-12">
            <div className="layout-container">
                <div className="flex flex-col gap-6">
                    {/* Header: System_ID */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-primary/5 blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative border-l-4 border-primary pl-6 py-2">
                            <FadeIn>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                                    <p className="text-primary text-[10px] font-mono tracking-widest uppercase">SECURE_ACCESS: GRANTED</p>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(54,226,123,0.3)]">
                                    SYSTEM<span className="text-primary">_ID</span>
                                </h1>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent"></span>
                                    <p className="text-white/40 font-mono text-[9px] md:text-xs tracking-[0.15em] uppercase">
                                        // Quality in Silence :: Operational Doctrine
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Main Modular Interface */}
                    <FadeIn delay={0.2}>
                        <div className="relative w-full rounded-xl border border-white/10 bg-[#050806]/90 backdrop-blur-md overflow-hidden flex flex-col md:flex-row min-h-[360px] shadow-[0_0_40px_rgba(54,226,123,0.08)]">
                            {/* Static Scanline Overlay */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%]" />

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 z-20"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 z-20"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 z-20"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 z-20"></div>

                            {/* Left: Module Selection */}
                            <div className="relative z-10 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 p-0 flex flex-col">
                                <div className="p-6 pb-4 border-b border-white/10">
                                    <div className="text-[10px] text-primary/60 font-mono mb-1 flex justify-between items-center">
                                        <span>SELECT_MODULE</span>
                                        <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-primary animate-pulse"></span> ONLINE</span>
                                    </div>
                                </div>

                                <div className="flex flex-col grow">
                                    {highlights.map((module) => (
                                        <button
                                            key={module.id}
                                            onClick={() => setActiveModule(module)}
                                            className={`group relative p-4 border-l-2 transition-all text-left ${activeModule.id === module.id
                                                ? 'border-primary bg-primary/5 text-white'
                                                : 'border-transparent text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold tracking-wider text-sm flex items-center gap-3">
                                                    <span className={`font-mono text-xs ${activeModule.id === module.id ? 'text-primary' : 'opacity-30'}`}>{module.id}</span>
                                                    {module.title}
                                                </span>
                                                {activeModule.id === module.id && (
                                                    <span className="material-symbols-outlined text-primary text-sm animate-spin-slow">settings</span>
                                                )}
                                            </div>
                                            <p className={`text-[10px] font-mono mt-1 pl-7 transition-colors ${activeModule.id === module.id ? 'text-primary/60' : 'opacity-0'}`}>
                                                &gt; {module.subtitle}
                                            </p>
                                            {activeModule.id === module.id && (
                                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_15px_#36e27b]" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto p-6 border-t border-white/10">
                                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-wider space-y-1">
                                        <div className="flex justify-between"><span>SYS_RES:</span><span className="text-primary">48%</span></div>
                                        <div className="flex justify-between"><span>MEM_ALLOC:</span><span className="text-primary">OPTIMIZED</span></div>
                                        <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
                                            <div className="bg-primary/50 h-full w-[48%] transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Module Content Display */}
                            <div className="relative z-10 flex-1 p-5 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeModule.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_25px_rgba(54,226,123,0.2)]"></div>

                                        <div className="relative mb-8 group cursor-default">
                                            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full"></div>
                                            <div className="relative size-28 md:size-32 border border-primary/30 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(54,226,123,0.1)]">
                                                <div className="absolute inset-0 border-t border-b border-primary/40 rounded-full animate-spin-slow"></div>
                                                <span className="material-symbols-outlined text-primary text-5xl md:text-6xl drop-shadow-[0_0_10px_rgba(54,226,123,0.8)]">
                                                    {activeModule.icon}
                                                </span>
                                            </div>
                                            <div className="absolute -top-3 -right-3 size-6 border-t border-r border-primary/70 opacity-50"></div>
                                            <div className="absolute -bottom-3 -left-3 size-6 border-b border-l border-primary/70 opacity-50"></div>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-[0.15em] mb-4 uppercase drop-shadow-md">
                                            {activeModule.title.replace('_', ' ')}
                                        </h2>

                                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent my-4"></div>

                                        <p className="text-white/60 font-mono text-xs md:text-sm leading-relaxed max-w-md mx-auto">
                                            {activeModule.desc}
                                        </p>

                                        <div className="mt-10 w-full max-w-[320px] grid grid-cols-2 gap-3 font-mono text-[9px] md:text-[10px]">
                                            <div className="bg-primary/5 border border-primary/20 p-2 flex justify-between items-center rounded-sm">
                                                <span className="text-white/20">STACK</span>
                                                <span className="text-primary">{activeModule.stack}</span>
                                            </div>
                                            <div className="bg-primary/5 border border-primary/20 p-2 flex justify-between items-center rounded-sm">
                                                <span className="text-white/20">STATUS</span>
                                                <span className="text-primary animate-pulse">{activeModule.status}</span>
                                            </div>
                                            <div className="bg-primary/5 border border-primary/20 p-2 flex justify-between items-center rounded-sm col-span-2">
                                                <span className="text-white/20">IDENTITY_LATENCY</span>
                                                <span className="text-primary">{activeModule.latency}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute top-4 right-4 text-[9px] text-primary/30 font-mono text-right leading-tight hidden md:block">
                                    COORD: 45.22.1<br />
                                    TARGET: LOCKED
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Integrated Terminal: full_story.sh */}
                    <FadeIn delay={0.4}>
                        <div className="w-full max-w-4xl mx-auto pt-6">
                            <details className="group open:ring-1 open:ring-primary/40 rounded-md bg-[#0a0f0c] border border-white/10 overflow-hidden transition-all duration-300 shadow-xl">
                                <summary className="flex items-center gap-4 px-4 py-4 cursor-pointer hover:bg-white/5 list-none select-none transition-colors relative">
                                    <div className="flex items-center gap-3 pl-2">
                                        <span className="material-symbols-outlined text-primary text-xl group-open:rotate-90 transition-transform duration-200">chevron_right</span>
                                        <span className="font-mono text-primary text-base font-bold animate-pulse">&gt;_</span>
                                    </div>
                                    <div className="flex-1 font-mono text-sm md:text-base text-white/40 group-hover:text-primary/80 transition-colors truncate">
                                        <span className="text-primary">sys_admin@portfolio:</span><span className="text-white/40">~/bio</span> $ <span className="text-gray-200 group-open:text-primary group-hover:text-white transition-colors">execute full_story.sh --verbose</span>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/20 font-mono">
                                        <span>[ PRESS TO EXECUTE ]</span>
                                        <div className="border border-white/10 px-2 py-0.5 rounded bg-white/5">ENTER</div>
                                    </div>
                                </summary>
                                <div className="border-t border-white/10 bg-black/60 p-4 md:p-5 font-mono text-xs md:text-sm max-h-64 overflow-y-auto custom-scrollbar shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative">
                                    <div className="space-y-6 text-white/70 max-w-3xl mx-auto relative z-10">
                                        <div className="text-primary/50 text-[10px] mb-6 font-mono border-b border-white/5 pb-2">
                                            [SYSTEM LOG] Decrypting narrative data stream...<br />
                                            [SYSTEM LOG] Loading memories... 100%
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="min-w-[80px] text-primary/60 text-xs pt-1 font-bold">[ORIGIN]</div>
                                            <p className="leading-relaxed">
                                                The sequence began with the raw simplicity of HTML & CSS. I realized early on that the web isn't just about presenting information — it's about <span className="text-primary italic">transmission efficiency</span>. The browser became my canvas, and the DOM my structure.
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="min-w-[80px] text-primary/60 text-xs pt-1 font-bold">[EVOLUTION]</div>
                                            <p className="leading-relaxed">
                                                Transitioning into the JavaScript ecosystem was a paradigm shift. <span className="text-white font-bold">React</span> and <span className="text-white font-bold">Node.js</span> became my primary tools, transforming static pages into living, breathing applications. I didn't just write code; I engineered logic flows and state management systems.
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="min-w-[80px] text-primary/60 text-xs pt-1 font-bold">[CURRENT]</div>
                                            <p className="leading-relaxed">
                                                Today, I operate at the intersection of <span className="text-primary">technical performance</span> and <span className="text-primary">aesthetic minimalism</span>. The "toxic green on black" isn't just a theme; it's a philosophy of high-contrast clarity in a noisy digital world.
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="min-w-[80px] text-primary/60 text-xs pt-1 font-bold">[DIRECTIVE]</div>
                                            <p className="leading-relaxed">
                                                My goal is simple: Build systems that endure. Silence the noise. <span className="text-white border-b border-primary">Amplify the signal.</span>
                                            </p>
                                        </div>
                                        <div className="text-primary/30 text-[10px] mt-8 animate-pulse pt-4 border-t border-white/5">
                                            _cursor waiting for input...
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
