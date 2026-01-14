import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 md:px-8 border-b border-black/10 bg-background">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32">
                            (00) Philosophy
                        </h2>
                    </div>

                    <div className="md:col-span-9 space-y-24">
                        {/* Intro Statement */}
                        <div className="max-w-3xl">
                            <p className="text-2xl md:text-3xl leading-tight font-medium text-primary tracking-tight">
                                I specialize in transforming complex requirements into maintainable, production-ready systems.
                                <span className="text-secondary"> My approach prioritizes system reliability and business constraints over architectural trends.</span>
                            </p>
                        </div>

                        {/* Principles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
                                <div key={idx} className="space-y-4">
                                    <h3 className="text-lg font-bold tracking-tight text-primary uppercase border-l-2 border-black pl-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed pl-4 max-w-sm">
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

