import { motion } from 'framer-motion';
import { FadeIn } from '../animations';

const education = [
    {
        school: "Hazi Mohammed Mohsin College",
        degree: "Honours, English",
        duration: "2025 - Present",
        description: "Currently exploring the intersections of linguistics, literature, and analytical thinking."
    },
    {
        school: "Dewanhat City Corporation College",
        degree: "HSC, Computer Science",
        duration: "2022 - 2023",
        description: "Foundational studies in procedural logic and core computing principles."
    }
];

export default function Education() {
    return (
        <section id="education" className="relative z-10 py-20 bg-black border-t border-white/5">
            <div className="layout-container">
                <div className="flex flex-col gap-12">
                    <div className="max-w-xl">
                        <FadeIn>
                            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 inline-block">// Academic_Foundation</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                Learning <span className="text-white/40 italic">Timeline.</span>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {education.map((edu, idx) => (
                            <FadeIn key={idx} delay={0.1 * idx}>
                                <div className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-20 py-12 border-t border-white/5 first:border-t-0">
                                    <div className="space-y-2">
                                        <span className="text-xs font-mono text-white/20 tracking-widest">{edu.duration}</span>
                                        <h4 className="text-primary text-sm font-bold uppercase tracking-tight">{edu.degree}</h4>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                                            {edu.school}
                                        </h3>
                                        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
