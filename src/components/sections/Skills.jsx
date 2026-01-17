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
        <section id="skills" className="section-padding border-b border-border bg-background">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-mono-xs text-secondary lg:sticky lg:top-32 font-bold mb-4 lg:mb-0">
                            (02) Technical Capabilities
                        </h2>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-0 divide-y divide-border border-t border-b border-border">
                            {strengths.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-8 md:py-10 items-start hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors group"
                                >
                                    <h3 className="text-display-md !text-[1.5rem] tracking-tight text-primary group-hover:translate-x-2 transition-transform">
                                        {item.title}
                                    </h3>
                                    <p className="text-body-md text-secondary max-w-md">
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
