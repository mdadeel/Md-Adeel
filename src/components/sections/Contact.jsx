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
        <section id="contact" className="relative z-10 py-12 md:py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="layout-container">
                <div className="flex flex-col items-center text-center gap-12 md:gap-20">
                    {/* Hero Statement */}
                    <div className="max-w-5xl w-full">
                        <FadeIn>
                            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-8 inline-block">// Initiate_Connection</span>
                        </FadeIn>

                        {/* ScrollFloat Animated Heading */}
                        <div className="space-y-0 md:space-y-2">
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !px-4 !font-bold !text-white !tracking-tighter !leading-[0.85] !uppercase !select-none"
                                textClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !font-bold !text-white !tracking-tighter !leading-[0.85] !uppercase"
                            >
                                Let's build
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !px-4 !font-bold !text-white/30 !tracking-tighter !leading-[0.85] !uppercase !select-none"
                                textClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !font-bold !text-white/30 !tracking-tighter !leading-[0.85] !uppercase"
                            >
                                something
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !px-4 !font-bold !text-white !tracking-tighter !leading-[0.85] !uppercase !select-none"
                                textClassName="!text-5xl sm:!text-8xl lg:!text-[9rem] !font-bold !text-white !tracking-tighter !leading-[0.85] !uppercase"
                            >
                                exceptional.
                            </ScrollFloat>
                        </div>
                    </div>

                    {/* Interaction Area - Redesigned Centered Layout */}
                    <div className="flex flex-col items-center gap-12 w-full max-w-4xl pt-12 border-t border-white/5">
                        <FadeIn delay={0.2} className="w-full flex flex-col items-center gap-10">
                            <p className="text-white/60 text-base md:text-xl font-light max-w-2xl leading-relaxed">
                                I'm currently seeking new opportunities to collaborate on high-performance web systems and innovative digital products.
                            </p>

                            <div className="flex flex-col items-center gap-8 w-full">
                                {/* Email Action */}
                                <button
                                    onClick={handleCopyEmail}
                                    className="group relative flex flex-col items-center gap-3 w-full"
                                >
                                    <span className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white group-hover:text-primary transition-all duration-500 break-all px-4 w-full text-center">
                                        {email}
                                    </span>
                                    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-mono tracking-widest uppercase transition-all duration-500 ${copied ? 'bg-primary border-primary text-black' : 'border-white/10 text-white/40 group-hover:border-primary group-hover:text-primary'}`}>
                                        <span className="material-symbols-outlined text-sm">
                                            {copied ? 'check' : 'content_copy'}
                                        </span>
                                        {copied ? 'Copied_Module_Active' : 'Click_to_Clone_Link'}
                                    </div>
                                </button>

                                {/* Phone & Socials Row */}
                                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-4">
                                    <a
                                        href="tel:+8801533970377"
                                        className="group flex flex-col items-center gap-1 text-white/50 hover:text-primary transition-colors duration-500"
                                    >
                                        <span className="text-[10px] font-mono tracking-widest uppercase opacity-40">Direct_Wire</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-base text-primary">call</span>
                                            <span className="text-lg md:text-xl font-bold tracking-tight text-white">+880 1533-970377</span>
                                        </div>
                                    </a>

                                    <div className="hidden md:block h-12 w-[1px] bg-white/10" />
                                    <div className="md:hidden h-[1px] w-8 bg-white/10" />

                                    <div className="flex flex-wrap justify-center gap-6">
                                        {socials.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                className="text-[10px] font-mono font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
                                            >
                                                {social.name}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="text-[9px] font-mono text-white/20 tracking-[0.3em] uppercase mt-4">
                                [ System_Finalized // Built_2025 ]
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
