import { motion } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Research",
        desc: "Understanding technical requirements and user needs. Defining the core goals and system constraints."
    },
    {
        id: "02",
        title: "Design",
        desc: "Creating the visual system and user experience flow. Mapping out interactive prototypes and components."
    },
    {
        id: "03",
        title: "Build",
        desc: "High-quality engineering execution with a focus on performance, clean code, and scalable architecture."
    },
    {
        id: "04",
        title: "Optimize",
        desc: "Rigorous testing and performance tuning. Ensuring a smooth, fast, and accessible user experience."
    }
];

export default function HowIWork() {
    return (
        <section id="process" className="section-spacing">
            <div className="flex flex-col items-start gap-6 mb-12 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-accent" />
                    <span className="text-label">How I Work</span>
                </div>
                <h2 className="title-xl uppercase tracking-tighter max-w-4xl">
                    Methodical <span className="text-accent italic">Engineering</span> <br /> Process.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="premium-card p-8 flex flex-col gap-8 group min-h-[300px]"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-5xl font-black text-white/5 group-hover:text-accent transition-colors duration-700">
                                {step.id}
                            </span>
                            <div className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-2xl">
                                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl font-black tracking-tight text-white group-hover:text-accent transition-colors duration-500 leading-none">
                                {step.title}
                            </h4>
                            <p className="text-[14px] text-text-dim leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>

                        <div className="flex-1 flex items-end">
                            <div className="w-full h-[1px] bg-gradient-to-r from-accent/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
