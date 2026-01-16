import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 border-b border-black/10 dark:border-white/10 bg-background dark:bg-black">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary lg:sticky lg:top-32">
                            (00) Philosophy
                        </h2>
                    </div>

                    <div className="lg:col-span-9 space-y-20 md:space-y-32">
                        {/* Intro Statement */}
                        <div className="max-w-4xl">
                            <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-medium text-primary tracking-tight">
                                I specialize in transforming complex requirements into maintainable, production-ready systems.
                                <span className="text-secondary"> My approach prioritizes system reliability and business constraints over architectural trends.</span>
                            </p>
                        </div>

                        {/* Principles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
                            {[
                                {
                                    title: 'Scope Definition',
                                    desc: "Clarifying 'done' criteria and identifying features that should not be built to minimize debt."
                                },
                                {
                                    title: 'Constraint Mapping',
                                    desc: 'Analyzing technical and business limitations (scale, budget, time) before architecting solutions.'
                                },
                                {
                                    title: 'Iterative Delivery',
                                    desc: 'Favoring working, measurable software over complex theoretical architectures.'
                                },
                                {
                                    title: 'Decision Records',
                                    desc: 'Documentation focusing on the "Why" behind choices for long-term maintenance.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4 md:space-y-6">
                                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-primary uppercase border-l-2 border-primary pl-5">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-secondary leading-relaxed pl-5 max-w-sm md:max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

