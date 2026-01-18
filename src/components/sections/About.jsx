import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                {/* 1. Large Typographical Mission */}
                <div className="lg:col-span-8 space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-px bg-accent" />
                        <span className="text-label">ABOUT ME / 001</span>
                    </div>

                    <h2 className="title-xl italic !text-2xl sm:!text-3xl">
                        I learn by <span className="text-accent not-italic">finishing things</span>, not by collecting tutorials.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[16px] text-text-dim leading-relaxed font-medium">
                        <div className="space-y-4">
                            <p>
                                I'm a <strong className="text-white">MERN Stack Developer</strong> with a frontend-first mindset. I work across React, Node.js, Express, and MongoDB, focusing on how frontend decisions interact with backend constraints.
                            </p>
                            <p>
                                Most of my growth has come from <strong className="text-white">building complete products</strong>, running into real problems, and fixing my own bad decisions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[14px] text-text-dim/80">I'm especially interested in:</p>
                            <ul className="space-y-2 text-[14px]">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">»</span>
                                    <span>Frontend architecture that doesn't collapse as features grow</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">»</span>
                                    <span>API design that simplifies UI instead of complicating it</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">»</span>
                                    <span>UX trade-offs caused by technical constraints</span>
                                </li>
                            </ul>
                            <p className="text-[13px] text-accent/80 font-bold mt-4">
                                Actively looking for mentorship, real production exposure, and teams that value learning speed over ego.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Technical Profile Card */}
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                    <div className="premium-card p-10 bg-gradient-to-br from-surface to-background border-white/5 space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/40 transition-all duration-1000" />

                        <div className="space-y-1">
                            <span className="text-label text-[9px] opacity-50">LOCATION</span>
                            <p className="font-mono text-sm font-bold tracking-widest">CHITTAGONG, BD</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-label">TECHNICAL SNAPSHOT</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Primary Role", val: "MERN Stack Dev" },
                                    { label: "Experience", val: "2+ Years (Project-driven)" },
                                    { label: "Projects", val: "10+ Complete Builds" },
                                    { label: "Availability", val: "Open to Work" },
                                    { label: "Core Stack", val: "React, Node, MongoDB" }
                                ].map(stat => (
                                    <div key={stat.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-xs text-text-dim font-bold uppercase tracking-wider">{stat.label}</span>
                                        <span className="font-mono text-[10px] font-black text-accent">{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="#experience"
                                className="block w-full py-3 bg-white/5 border border-white/10 rounded-md text-[11px] font-black tracking-[0.2em] hover:bg-accent hover:border-accent transition-all uppercase text-center"
                                aria-label="View detailed professional experience timeline"
                            >
                                VIEW MY EXPERIENCE
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
