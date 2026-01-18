

export default function About() {
    return (
        <section id="about" className="section-padding border-b border-border bg-background">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-mono-xs text-secondary lg:sticky lg:top-32 font-bold mb-4 lg:mb-0">
                            <span className="sr-only">Section</span> (01) Philosophy
                        </h2>
                    </div>

                    <div className="lg:col-span-8 space-y-16 md:space-y-24 lg:space-y-32">
                        {/* Intro Statement */}
                        <div className="max-w-3xl">
                            <p className="text-display-lg text-primary mb-6 md:mb-8">
                                I specialize in transforming complex requirements into <span className="text-secondary">maintainable, production-ready systems.</span>
                            </p>
                            <p className="text-body-lg text-secondary">
                                My approach prioritizes system reliability and business constraints over architectural trends. Engineering is about solving problems, not just writing code.
                            </p>
                        </div>

                        {/* Principles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
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
                                    <h3 className="text-display-md !text-[1.25rem] text-primary uppercase border-l border-primary pl-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-body-md text-secondary pl-6">
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

