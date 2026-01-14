import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative z-10 section-padding border-t border-white/5 bg-surface">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Left: Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-white">Background</h2>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                I am a Senior Software Engineer specializing in the MERN stack (MongoDB, Express, React, Node.js)
                                and Next.js. My approach to engineering is rooted in understanding business constraints
                                before writing a single line of code.
                            </p>
                            <p>
                                I focus on building applications that are not just functional, but reliable
                                and maintainable at scale. I advocate for the simplest architecture that
                                solves the problem reliably, avoiding "resume-driven development."
                            </p>
                            <p>
                                Based in Bangladesh, I work with global clients who require
                                production-ready solutions and clear technical leadership.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: How I Work */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-white">How I Work</h2>

                        <div className="space-y-8">
                            {[
                                {
                                    step: 'Clarify scope',
                                    desc: "I define what 'done' looks like and determine what doesn't need to be built."
                                },
                                {
                                    step: 'Identify constraints',
                                    desc: 'I map out the technical and business limitations (time, budget, scale).'
                                },
                                {
                                    step: 'Simplicity as Default',
                                    desc: "I choose boring, proven tech for production unless a newer tool is essential."
                                },
                                {
                                    step: 'Iterative Shipping',
                                    desc: 'I favor working software and continuous feedback over architectural theory.'
                                },
                                {
                                    step: 'Technical Documentation',
                                    desc: 'I record decision history so the system remains maintainable by any developer.'
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-6 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0"
                                >
                                    <span className="text-white/20 font-mono text-sm mt-1">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-white font-semibold text-lg">{item.step}</p>
                                        <p className="text-white/50 text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
