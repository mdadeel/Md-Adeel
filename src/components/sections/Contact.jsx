import { useState } from 'react';
import { motion } from 'framer-motion';

const SOCIALS = [
    { name: 'GitHub', url: 'https://github.com/mdadeel', icon: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shahnawasadee1', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'X', url: 'https://x.com/mdmoft', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-8 bg-background">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">
                <motion.div
                    className="flex items-center gap-3 mb-6 pb-4 border-b border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
                        <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2z" />
                    </svg>
                    <h2 className="text-lg font-bold text-white">Get in Touch</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-text-dim leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-white">Connect with me</h3>
                            <div className="flex gap-3">
                                {SOCIALS.map((social) => (
                                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-accent/50 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-text-dim hover:fill-text-primary transition-colors">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-text-dim">
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M8 0a8 8 0 100 16A8 8 0 008 0z" /></svg>
                                <span>Open to freelance & full-time opportunities</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M8 0a8 8 0 100 16A8 8 0 008 0z" /></svg>
                                <span>Response time: within 24 hours</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-surface border border-border rounded-lg p-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-white text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Your name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-white text-sm focus:outline-none focus:border-accent transition-colors" placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-1.5">Message</label>
                                <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..." required />
                            </div>
                            <button type="submit" className="w-full py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold rounded-md text-sm transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 pt-6 border-t border-border text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-sm text-text-dim">© {new Date().getFullYear()} Md Adeel. Built with React & Tailwind CSS.</p>
                </motion.div>
            </div>
        </section>
    );
}
