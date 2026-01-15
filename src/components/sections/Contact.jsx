import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/constants';

const footerLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/shahnawazadeel' },
    { label: 'GitHub', url: 'https://github.com/mdadeel' },
    { label: 'Twitter/X', url: 'https://twitter.com/shahnawas_adeel' }
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background dark:bg-black">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary lg:sticky lg:top-32 scroll-mt-32">
                            (05) Strategic Contact
                        </h2>
                    </div>

                    <div className="lg:col-span-9">
                        <div className="space-y-12 md:space-y-24">
                            <div className="space-y-6">
                                <p className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-medium max-w-3xl leading-tight tracking-tight">
                                    Available for full-stack engineering projects and system design consultation.
                                    <span className="text-black/60 dark:text-white/60"> Typical response time: 24 hours.</span>
                                </p>
                            </div>

                            <a
                                href="mailto:shahnawasadeel@gmail.com"
                                className="block text-[10vw] lg:text-7xl font-black tracking-tighter text-black dark:text-white hover:text-secondary transition-colors break-all leading-none py-4"
                            >
                                shahnawasadeel@gmail.com
                            </a>

                            <div className="border-t border-black/10 dark:border-white/10 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                                <span className="font-mono text-[10px] text-secondary uppercase tracking-widest">
                                    © {new Date().getFullYear()} Shahnawas Adeel // EST. 2024
                                </span>

                                <div className="flex flex-wrap gap-x-10 gap-y-4">
                                    {footerLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-white hover:text-secondary transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
