import { motion } from 'framer-motion';
import { SOCIALS } from '../../data/constants';

const footerLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/shahnawazadeel' },
    { label: 'GitHub', url: 'https://github.com/mdadeel' },
    { label: 'Twitter/X', url: 'https://twitter.com/shahnawas_adeel' }
];

export default function Contact({ showToast }) {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('shahnawasadeel@gmail.com');
        showToast('Email copied to clipboard');
    };

    const CopyIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-2 opacity-50 hover:opacity-100 transition-opacity">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    );
    return (
        <section id="contact" className="section-padding bg-background border-b border-border">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-mono-xs text-secondary lg:sticky lg:top-32 font-bold mb-4 lg:mb-0">
                            (05) Contact
                        </h2>
                    </div>

                    <div className="lg:col-span-8 space-y-10 md:space-y-16">
                        <div className="max-w-3xl">
                            <h3 className="text-display-lg text-primary mb-6 md:mb-8">
                                Let's build <span className="text-secondary">predictable, scaleable systems together.</span>
                            </h3>
                            <p className="text-body-lg text-secondary mb-8 md:mb-12">
                                Currently available for full-stack engineering roles and infrastructure consultation.
                            </p>

                            <div className="flex items-center gap-4 group">
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-display-md !text-[clamp(1.125rem,4vw,2.5rem)] text-primary hover:text-secondary transition-colors break-all text-left"
                                    aria-label="Copy Email"
                                    title="Copy Email"
                                >
                                    shahnawasadeel@gmail.com
                                </button>
                                <button
                                    onClick={handleCopyEmail}
                                    className="p-3 bg-secondary/5 hover:bg-secondary/10 rounded-full transition-colors active:scale-95 opacity-50 hover:opacity-100"
                                    aria-label="Copy Email Icon"
                                    title="Copy Email"
                                >
                                    <CopyIcon />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-10 md:pt-16 border-t border-border">
                            <div>
                                <p className="text-mono-2xs text-secondary mb-4 opacity-50">Social</p>
                                <div className="space-y-2 flex flex-col items-start">
                                    <a href="https://github.com" className="text-mono-xs hover:text-secondary transition-colors">GitHub ↗</a>
                                    <a href="https://linkedin.com" className="text-mono-xs hover:text-secondary transition-colors">LinkedIn ↗</a>
                                </div>
                            </div>
                            <div>
                                <p className="text-mono-2xs text-secondary mb-4 opacity-50">Location</p>
                                <p className="text-mono-xs text-primary">Chittagong, Bangladesh</p>
                            </div>
                            <div>
                                <p className="text-mono-2xs text-secondary mb-4 opacity-50">Availability</p>
                                <p className="text-mono-xs text-primary">Open for Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
