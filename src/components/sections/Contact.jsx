import { motion } from 'framer-motion';
import { useState } from 'react';
import { SOCIALS } from '../../data/constants';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'shahnawasadeel@gmail.com';
    const phone = '+880 1533-970377';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <section id="contact" className="relative z-10 section-padding border-t border-white/5 bg-surface">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Left: Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
                        <p className="text-white/70 text-lg leading-relaxed max-w-md">
                            Open for technical leadership roles, engineering collaboration, or
                            custom product development.
                        </p>
                        <div className="flex gap-4">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 border border-white/5 flex items-center justify-center hover:border-white/20 hover:bg-white/[0.02] transition-base group"
                                    aria-label={social.name}
                                >
                                    <svg className="h-4 w-4 fill-white/30 group-hover:fill-white transition-base" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-4"
                    >
                        {/* Email */}
                        <button
                            onClick={handleCopyEmail}
                            className="w-full p-8 border border-white/5 rounded-[4px] text-left hover:border-white/20 hover:bg-white/[0.01] transition-base group"
                        >
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Email</p>
                                    <p className="text-white text-xl font-medium">{email}</p>
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-widest transition-base ${copied ? 'text-primary' : 'text-white/20 group-hover:text-white/50'}`}>
                                    {copied ? 'Copied' : 'Copy'}
                                </span>
                            </div>
                        </button>

                        {/* Phone */}
                        <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="block w-full p-8 border border-white/5 rounded-[4px] hover:border-white/20 hover:bg-white/[0.01] transition-base group"
                        >
                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                            <p className="text-white text-xl font-medium">{phone}</p>
                        </a>

                        {/* Location */}
                        <div className="p-8 border border-white/5 rounded-[4px] bg-white/[0.01]">
                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Standard Location</p>
                            <p className="text-white text-xl font-medium">Dhaka, Bangladesh</p>
                            <p className="text-white/40 text-sm mt-2 font-medium">Remote Availability: Worldwide (UTC+6)</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
