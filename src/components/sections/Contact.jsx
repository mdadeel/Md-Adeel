import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formState, setFormState] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');

        // EmailJS Configuration
        // TODO: Replace with your actual EmailJS credentials from https://dashboard.emailjs.com/
        const SERVICE_ID = 'service_id';
        const TEMPLATE_ID = 'template_id';
        const PUBLIC_KEY = 'public_key';

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );
            setFormState('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormState('idle'), 5000);
        } catch (error) {
            console.error('FAILED...', error.text);
            setFormState('error');
            setTimeout(() => setFormState('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="section-spacing">
            <div className="premium-card p-8 lg:p-12 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4 opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Left: Content */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-px bg-accent" />
                                <span className="text-label tracking-widest">Get in Touch</span>
                            </div>
                            <h2 className="title-xl !text-4xl lg:!text-6xl italic !mb-0 tracking-tighter">
                                Let's <br />
                                <span className="text-accent not-italic">Connect</span>.
                            </h2>
                            <p className="text-lg lg:text-xl text-text-dim font-medium leading-relaxed">
                                Currently available for architecting high-end digital experiences and technical partnerships.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-8">
                                {[
                                    { name: "LINKEDIN", url: "https://www.linkedin.com/in/shahnawasadee1", label: "Connect on LinkedIn" },
                                    { name: "GITHUB", url: "https://github.com/mdadeel", label: "Visit my GitHub Profile" },
                                    { name: "FACEBOOK", url: "https://www.facebook.com/badshahnawas.adeel", label: "Connect on Facebook" },
                                    { name: "X", url: "https://x.com/mdmoft", label: "Follow on X/Twitter" }
                                ].map((social) => (
                                    <a key={social.name} href={social.url} aria-label={social.label} className="font-mono text-[10px] font-bold tracking-[0.2em] text-text-dim/60 hover:text-white transition-all border-b border-white/5 hover:border-accent pb-1">
                                        {social.name}
                                    </a>
                                ))}
                            </div>

                            <div className="space-y-2">
                                <p className="text-label !text-[8px] opacity-30 !mb-0">DIRECT_COMM_LINK</p>
                                <a href="mailto:shahnawasadeel@gmail.com" className="text-xl font-bold text-white hover:text-accent transition-colors">shahnawasadeel@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7 relative">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                                >
                                    <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center text-green-500">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">Message Received</h3>
                                        <p className="text-text-dim text-sm max-w-[280px]">I'll review your inquiry and get back to you within 24 hours.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-4"
                                >
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label htmlFor="user_name" className="text-[9px] font-mono text-text-dim/40 tracking-widest ml-1">FULL_NAME</label>
                                                <input
                                                    type="text"
                                                    id="user_name"
                                                    name="user_name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Operator Name"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-dim/20 focus:border-accent/40 focus:bg-white/[0.08] transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="user_email" className="text-[9px] font-mono text-text-dim/40 tracking-widest ml-1">EMAIL_ADDRESS</label>
                                                <input
                                                    type="email"
                                                    id="user_email"
                                                    name="user_email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="email@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-dim/20 focus:border-accent/40 focus:bg-white/[0.08] transition-all outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-[9px] font-mono text-text-dim/40 tracking-widest ml-1">PROJECT_BRIEF</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows="4"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell me about your project..."
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-text-dim/20 focus:border-accent/40 focus:bg-white/[0.08] transition-all outline-none resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'sending'}
                                        className="group/btn w-full relative py-4 overflow-hidden rounded-lg transition-all active:scale-[0.98] disabled:opacity-50"
                                    >
                                        <div className="absolute inset-0 bg-accent transition-transform duration-500 translate-y-0 group-hover/btn:-translate-y-full" />
                                        <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover/btn:translate-y-0" />
                                        <span className="relative z-10 font-black text-[10px] tracking-[0.4em] text-white group-hover/btn:text-background uppercase flex items-center justify-center gap-3">
                                            {formState === 'sending' ? 'TRANSMITTING...' : 'INTIATE_CONNECTION'}
                                            <div className="w-px h-0 bg-current transition-all duration-300 group-hover/btn:h-4" />
                                            {formState === 'error' ? 'RETRY_TRANSMISSION' : ''}
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="3">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono font-bold tracking-[0.3em] text-text-dim/30">
                    <p className="uppercase">© 2026 SHAHNAWAS ADEEL. // BUILT_WITH_SYSTEM_v4</p>
                    <div className="flex gap-10">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            <span>STATUS: ACTIVE</span>
                        </div>
                        <span>LOC: CTG_BD</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
