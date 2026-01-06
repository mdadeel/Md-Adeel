import { motion } from 'framer-motion';
import { useState } from 'react';
import { FadeIn } from '../animations';
import ScrollFloat from '../ui/ScrollFloat';

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shahnawasadee1/' },
    { name: 'GitHub', url: 'https://github.com/mdadeel' },
    { name: 'Facebook', url: 'https://www.facebook.com/badshahnawas.adeel' },
    { name: 'WhatsApp', url: 'https://wa.me/8801533970377' },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'shahnawasadeel@gmail.com';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <section id="contact" className="relative z-10 py-20 md:py-32 bg-black overflow-hidden">
            <div className="layout-container">
                <div className="flex flex-col gap-16">
                    {/* Hero Statement */}
                    <div className="max-w-5xl">
                        <FadeIn>
                            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-8 inline-block">// Initiate_Connection</span>
                        </FadeIn>

                        {/* ScrollFloat Animated Heading */}
                        <div className="space-y-2">
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white !tracking-tighter !leading-[0.8] !uppercase !select-none"
                                textClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white !tracking-tighter !leading-[0.8] !uppercase"
                            >
                                Let's build
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white/40 !tracking-tighter !leading-[0.8] !uppercase !select-none"
                                textClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white/40 !tracking-tighter !leading-[0.8] !uppercase"
                            >
                                something
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white !tracking-tighter !leading-[0.8] !uppercase !select-none"
                                textClassName="!text-6xl sm:!text-8xl lg:!text-[10rem] !font-bold !text-white !tracking-tighter !leading-[0.8] !uppercase"
                            >
                                exceptional.
                            </ScrollFloat>
                        </div>
                    </div>

                    {/* Interaction Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-end pt-12 border-t border-white/5">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={0.2}>
                                <div className="space-y-6">
                                    <p className="text-white/70 text-lg sm:text-xl font-light max-w-xl">
                                        I'm currently seeking new opportunities to collaborate on high-performance web systems and innovative digital products.
                                    </p>

                                    {/* Email */}
                                    <button
                                        onClick={handleCopyEmail}
                                        className="group flex items-center gap-4 text-white hover:text-primary transition-colors duration-500"
                                    >
                                        <span className="text-2xl sm:text-4xl font-bold tracking-tight border-b-2 border-white/10 group-hover:border-primary transition-colors pb-1">
                                            {email}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${copied ? 'bg-primary border-primary text-black' : 'group-hover:border-primary group-hover:text-primary'}`}>
                                            <span className="material-symbols-outlined text-xl">
                                                {copied ? 'check' : 'content_copy'}
                                            </span>
                                        </div>
                                    </button>

                                    {/* Phone Number */}
                                    <a
                                        href="tel:+8801533970377"
                                        className="group flex items-center gap-4 text-white/80 hover:text-primary transition-colors duration-500"
                                    >
                                        <span className="material-symbols-outlined text-xl text-primary font-bold">call</span>
                                        <span className="text-xl sm:text-2xl font-black tracking-tight">
                                            +880 1533-970377
                                        </span>
                                    </a>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="flex flex-col gap-6">
                            <FadeIn delay={0.3}>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                    {socials.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 4 }}
                                            className="text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                                        >
                                            {social.name}
                                        </motion.a>
                                    ))}
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="text-[11px] font-mono text-white/40 tracking-[0.2em] uppercase mt-4">
                                    [ Built with React & Vite / 2025 ]
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
