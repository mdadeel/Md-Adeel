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
                         Transforming  <span className="text-accent not-italic"> complex systems </span> into fluid, cinematic interactions.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[17px] text-text-dim leading-relaxed font-medium">
                        <p>
                            I am a Frontend Architect obsessed with the intersection of engineering rigor and visual storytelling. My mission is to build digital products that don't just function—they evoke a sense of machine-like precision and human-centric flow.
                        </p>
                        <p>
                            With a core foundation in React and technical UI systems, I specialize in building scalable architectures for teams that demand pixel-perfect execution and high-performance animation.
                        </p>
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
                            <h3 className="text-label">PROFESSIONAL STATUS</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Experience", val: "4.5 Years" },
                                    { label: "Projects", val: "48+" },
                                    { label: "Availability", val: "Open to Work" },
                                    { label: "Current Role", val: "Frontend Architect" }
                                ].map(stat => (
                                    <div key={stat.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-xs text-text-dim font-bold uppercase tracking-wider">{stat.label}</span>
                                        <span className="font-mono text-xs font-black text-accent">{stat.val}</span>
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
