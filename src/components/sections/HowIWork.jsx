export default function HowIWork() {
    const principles = [
        {
            title: 'Iterative Delivery',
            description: 'I favor shipping functional, measurable software early. This allows for rapid feedback and ensures that effort is focused on solving real user needs rather than theoretical edge cases.'
        },
        {
            title: 'Constraint-Driven Architecture',
            description: 'Every system is built within constraints—time, budget, and scale. I architect solutions that respect these limits, choosing pragmatism over architectural purity when necessary.'
        },
        {
            title: 'Decision Documentation',
            description: 'Features explain "what", but engineering judgment lives in the "why". I maintain clear records of architectural decisions, tradeoffs, and rejected complexities for long-term maintainability.'
        },
        {
            title: 'Reliability over Trends',
            description: 'I choose battle-tested technologies and patterns over experimental trends. The goal is predictable behavior in production, not a resume of the latest libraries.'
        }
    ];

    return (
        <section id="how-i-work" className="py-24 px-4 md:px-8 border-b border-black/10 dark:border-white/10 bg-background dark:bg-black">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32">
                            (01) Engineering Process
                        </h2>
                    </div>

                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {principles.map((principle, idx) => (
                                <div key={idx} className="space-y-6">
                                    <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase border-l border-black dark:border-white pl-6">
                                        {principle.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed pl-6 max-w-md">
                                        {principle.description}
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
