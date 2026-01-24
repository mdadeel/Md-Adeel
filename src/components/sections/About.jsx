import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-8 bg-background">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">
                <motion.div
                    className="flex items-center gap-3 mb-6 pb-4 border-b border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
                        <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z" />
                    </svg>
                    <h2 className="text-lg font-bold text-white">README.md</h2>
                </motion.div>

                <motion.article
                    className="prose prose-invert max-w-none"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-2xl font-bold text-white mb-4">
                        The Architecture of <span className="text-accent">Finishing</span>
                    </h1>
                    <p className="text-text-dim leading-relaxed mb-4">
                        I learn by finishing things, not by collecting tutorials. In an industry where "perfect is the enemy of done," I prioritize shipping functional, maintainable code over theoretical abstractions that never see production.
                    </p>
                    <p className="text-text-dim leading-relaxed mb-6">
                        As a <strong className="text-white">MERN Stack Developer</strong>, I find the most interesting problems at the intersection of frontend state management and backend data modeling. My goal is always to build interfaces that feel light while handling complex weights behind the scenes.
                    </p>
                    <blockquote className="border-l-4 border-accent bg-surface/50 p-4 rounded-r-lg my-6">
                        <p className="text-white/90 italic m-0">
                            "Most of my growth has come from building complete products, running into real problems, and fixing my own bad decisions."
                        </p>
                    </blockquote>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-3">
                            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-accent mt-1 flex-shrink-0"><path d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5z" /></svg>
                            <div>
                                <p className="text-sm font-medium text-white">Self-Employed</p>
                                <p className="text-xs text-text-dim">Freelance Developer</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-accent mt-1 flex-shrink-0"><path d="M8 0a8 8 0 100 16A8 8 0 008 0z" /></svg>
                            <div>
                                <p className="text-sm font-medium text-white">Chittagong, Bangladesh</p>
                                <p className="text-xs text-text-dim">Location</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-accent mt-1 flex-shrink-0"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" /></svg>
                            <div>
                                <p className="text-sm font-medium text-white">Open to Work</p>
                                <p className="text-xs text-text-dim">Available for hire</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.article>
            </div>
        </section>
    );
}
