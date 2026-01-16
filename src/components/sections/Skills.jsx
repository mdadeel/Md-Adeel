const strengths = [
    {
        title: 'MERN Stack Engineering',
        context: 'Building scalable React frontends coupled with robust Node.js/Express backends. MongoDB schema design.'
    },
    {
        title: 'Next.js & Performance',
        context: 'App Router, Server Components, and optimized caching strategies. Core Web Vitals focus.'
    },
    {
        title: 'Cloud & Database Strategy',
        context: 'Firebase/Supabase for rapid scaling vs. PostgreSQL/MongoDB based on relationality.'
    },
    {
        title: 'Design-to-Code Precision',
        context: 'Bridging Figma and production via Tailwind CSS. Implementing complex layouts with 8px grids.'
    }
];

export default function Strengths() {
    return (
        <section id="skills" className="py-24 px-4 md:px-8 border-b border-black/10 dark:border-white/10 bg-background dark:bg-black">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32 font-bold">
                            (02) Technical Capabilities
                        </h2>
                    </div>

                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 gap-0 divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
                            {strengths.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 items-start hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                                >
                                    <h3 className="text-xl font-bold tracking-tight text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed max-w-md font-medium">
                                        {item.context}
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
