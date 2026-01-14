import { motion } from 'framer-motion';

const strengths = [
    {
        title: 'MERN Stack Engineering',
        context: 'Expertise in building scalable React frontends coupled with robust Node.js/Express backends. Focused on MongoDB schema design and efficient data fetching patterns.'
    },
    {
        title: 'Next.js & Performance',
        context: 'High-performance application design using App Router, Server Components, and optimized caching strategies. Priority on Core Web Vitals and SEO.'
    },
    {
        title: 'Cloud & Database Strategy',
        context: 'Strategic use of Firebase or Supabase for rapid scaling vs. traditional PostgreSQL/MongoDB setups based on project relationality and complexity.'
    },
    {
        title: 'Design-to-Code Precision',
        context: 'Bridging the gap between Figma and production via Tailwind CSS. Implementing complex layouts with strict adherence to 8px grid systems and mathematical scales.'
    }
];

export default function Strengths() {
    return (
        <section id="skills" className="relative z-10 section-padding border-t border-white/5">
            <div className="layout-container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Technical Strengths</h2>
                    <p className="text-white/50 max-w-xl text-lg">
                        Specialized focus on production-ready systems using modern
                        MERN architectures and Next.js.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {strengths.map((strength, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                            className="p-8 border border-white/5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-base group"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                                {strength.title}
                            </h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                {strength.context}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
