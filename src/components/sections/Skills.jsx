import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillCategories = [
    {
        title: "MERN Stack Development",
        skills: ["MongoDB", "Express.js", "React", "Node.js"],
        detail: "Full-stack architecture with a focus on API design and data modeling."
    },
    {
        title: "Frontend Engineering",
        skills: ["State Management", "Tailwind CSS", "Component Patterns", "UX/UI Logic"],
        detail: "Building readable, maintainable, and responsive interfaces."
    },
    {
        title: "Tooling & Workflow",
        skills: ["Git & GitHub", "Firebase Auth", "REST APIs", "Refactoring"],
        detail: "Execution, awareness, and continuous improvement."
    }
];

export default function Skills() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="skills" className="section-spacing" ref={containerRef}>
            <motion.div style={{ y }} className="flex flex-col items-center text-center mb-6 space-y-2">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    </div>
                    <span className="text-label">SKILLS & CAPABILITIES</span>
                </div>
                <h2 className="title-xl max-w-4xl tracking-tight uppercase">
                    MERN Stack & <span className="text-accent">Engineering</span>.
                </h2>
                <p className="text-text-dim/60 font-medium italic mt-4 max-w-3xl mx-auto">
                    I don't claim mastery. I demonstrate execution, awareness, and growth.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {skillCategories.map((cat, catIdx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                        className="premium-card p-6 lg:p-8 bg-gradient-to-br from-surface to-background/50 flex flex-col gap-6 group min-h-[380px]"
                        aria-labelledby={`skill-cat-${catIdx}`}
                    >
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <h3 id={`skill-cat-${catIdx}`} className="text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">{cat.title}</h3>
                                <span className="font-mono text-[9px] text-text-dim/40">SET_0{catIdx + 1}</span>
                            </div>
                            <p className="text-[13px] text-text-dim leading-relaxed font-medium italic opacity-70">"{cat.detail}"</p>
                        </div>

                        <div className="flex-1 space-y-5">
                            {cat.skills.map((skill, idx) => (
                                <div key={skill} className="relative group/skill cursor-default flex items-center justify-between py-1">
                                    <span className="text-lg lg:text-xl font-black text-white/90 group-hover/skill:text-accent transition-colors tracking-tighter">
                                        {skill.toUpperCase()}
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover/skill:bg-accent group-hover/skill:scale-150 transition-all duration-300" />
                                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-accent opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[9px] font-mono text-text-dim opacity-50 uppercase tracking-widest">Efficiency</span>
                            <div className="flex gap-1.5" aria-label="Proficiency level: 80%">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className={`w-4 h-1 rounded-full transition-colors duration-500 ${i <= 3 ? 'bg-accent/80 group-hover:bg-accent' : 'bg-white/5'}`} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
