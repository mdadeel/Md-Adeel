import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/constants';

const footerLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/shahnawazadeel' },
    { label: 'GitHub', url: 'https://github.com/mdadeel' },
    { label: 'Twitter/X', url: 'https://twitter.com/shahnawas_adeel' }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32">
                            (04) Contact
                        </h2>
                    </div>

                    <div className="md:col-span-9">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl leading-tight">
                                    Available for full-stack engineering projects and system design consultation.
                                    <span className="text-secondary"> Typical response time: 24 hours.</span>
                                </p>
                            </div>

                            <a
                                href="mailto:shahnawasadeel@gmail.com"
                                className="block text-4xl md:text-6xl font-bold tracking-tighter text-primary hover:text-secondary transition-colors break-all"
                            >
                                shahnawasadeel@gmail.com
                            </a>

                            <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                <span className="font-mono text-xs text-secondary uppercase">
                                    © {new Date().getFullYear()} Shahnawas Adeel
                                </span>

                                <div className="flex gap-8">
                                    {footerLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
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
