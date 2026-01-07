import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FadeIn } from '../animations';
import ScrollFloat from '../ui/ScrollFloat';

const socials = [
    { name: 'LinkedIn', icon: 'linkedin', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/shahnawasadee1/' },
    { name: 'GitHub', icon: 'github', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12', url: 'https://github.com/mdadeel' },
    { name: 'Facebook', icon: 'facebook', path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.606-2.797 2.87v1.12h4.922l-.766 3.667h-4.156v7.98h-4.995z', url: 'https://www.facebook.com/badshahnawas.adeel' },
    { name: 'WhatsApp', icon: 'whatsapp', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z', url: 'https://wa.me/8801533970377' },
];

const CharacterScrambler = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = '!@#$%^&*()_+{}:"<>?|[];\',./';

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split('').map((char, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('')
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
};

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
        <section id="contact" className="relative z-10 py-10 lg:py-16 overflow-hidden bg-[#050505] font-display">
            {/* Background Grid Elements */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(54, 226, 123, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(54, 226, 123, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>

            <div className="layout-container relative z-10">
                {/* Status Bar */}
                <div className="w-full mb-8 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-primary/60 border-b border-[#1f2b24] pb-2">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined animate-pulse text-sm">wifi</span>
                        <span>SECURE UPLINK ESTABLISHED</span>
                        <span className="text-white/20">|</span>
                        <span>LATENCY: 12ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>ENCRYPTION: AES-256</span>
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Kinetic Typography & Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                        <div className="relative">
                            <p className="text-primary text-[10px] font-mono mb-2 tracking-[0.3em] uppercase">&gt; INITIATING PROTOCOL...</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase cursor-default group">
                                LET'S BUILD<br />
                                <span className="text-white/40 group-hover:text-white transition-colors duration-500">SOMETHING</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary animate-pulse relative inline-block">
                                    EXCEPTIONAL
                                </span>
                            </h1>
                            <div className="h-1 w-14 bg-primary mt-4 mb-5"></div>
                            <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed border-l border-primary/20 pl-4">
                                Ready to deploy high-fidelity digital experiences. Constructing the future, one line of code at a time.
                            </p>
                        </div>

                        {/* Stats / Transmission Node */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                            <div className="flex flex-col gap-2 rounded-sm border border-[#1f2b24] bg-[#0a0f0c]/50 p-4 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <p className="text-gray-500 text-[10px] font-mono tracking-wider z-10 uppercase">BITRATE</p>
                                <p className="text-white text-xl font-bold tracking-tight z-10">4096 Kbps</p>
                                <div className="flex items-end gap-1 h-3 mt-1 z-10">
                                    {[0.4, 1, 0.6, 0.8, 0.3].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-primary/60"
                                            animate={{ height: [`${h * 100}%`, `${(h * 0.5) * 100}%`, `${h * 100}%`] }}
                                            transition={{ duration: 1 + (i * 0.2), repeat: Infinity }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 rounded-sm border border-[#1f2b24] bg-[#0a0f0c]/50 p-4 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
                                <p className="text-gray-500 text-[10px] font-mono tracking-wider z-10 uppercase">STATUS</p>
                                <p className="text-primary text-xl font-bold tracking-tight z-10 flex items-center gap-2">
                                    LIVE <span className="size-2 rounded-full bg-primary animate-ping"></span>
                                </p>
                                <p className="text-[9px] text-primary/60 z-10 font-mono">+ active uplink</p>
                            </div>

                            <div className="hidden sm:flex flex-col gap-2 rounded-sm border border-[#1f2b24] bg-[#0a0f0c]/50 p-4 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"></div>
                                <p className="text-gray-500 text-[10px] font-mono tracking-wider z-10 uppercase">AVAILABILITY</p>
                                <p className="text-white text-xl font-bold tracking-tight z-10 uppercase">OPEN</p>
                                <p className="text-[9px] text-primary/60 z-10 font-mono">Accepting contracts</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Decryption Terminal */}
                    <div className="lg:col-span-5 flex flex-col h-full justify-center">
                        <div className="w-full bg-[#050505] border border-[#1f2b24] rounded-sm overflow-hidden relative shadow-2xl flex flex-col">
                            {/* Terminal Header */}
                            <div className="bg-[#0a0a0a] px-4 py-2 flex items-center justify-between border-b border-[#1f2b24]">
                                <div className="flex gap-2">
                                    <div className="size-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="size-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="size-2 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">usr: admin // secure_shell</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-4 md:p-6 flex flex-col gap-4 relative min-h-[340px]">
                                {/* CRT Scanline Effect Overlay */}
                                <div className="absolute inset-0 pointer-events-none z-20 opacity-20"
                                    style={{
                                        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
                                        backgroundSize: '100% 2px, 3px 100%'
                                    }}
                                />

                                <div className="font-mono text-sm text-primary/80 mb-2 z-10 space-y-1">
                                    <p>&gt; decrypting_contact_info.exe</p>
                                    <p>&gt; accessing_neural_link... <span className="text-primary italic">SUCCESS</span></p>
                                </div>

                                <div className="space-y-4 z-10">
                                    {/* Email Block */}
                                    <div className="group relative">
                                        <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <label className="text-[9px] text-gray-500 font-mono uppercase tracking-[0.1em] md:tracking-[0.2em] mb-1.5 block group-hover:text-primary transition-colors">[EMAIL_PROTOCOL]</label>
                                        <button
                                            onClick={handleCopyEmail}
                                            className="block w-full bg-white/5 border border-white/5 hover:border-primary/50 text-left p-4 transition-all duration-300 group-hover:bg-primary/5 active:scale-[0.98]"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-base md:text-lg font-mono text-white truncate mr-2">
                                                    {copied ? 'UPLINK_DATA_COPIED' : email}
                                                </span>
                                                <span className={`material-symbols-outlined text-primary text-sm ${copied ? 'animate-bounce' : ''}`}>
                                                    {copied ? 'check' : 'arrow_outward'}
                                                </span>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Phone Block */}
                                    <div className="group relative">
                                        <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <label className="text-[9px] text-gray-500 font-mono uppercase tracking-[0.1em] md:tracking-[0.2em] mb-1.5 block group-hover:text-primary transition-colors">[PHONE_UPLINK]</label>
                                        <a
                                            href="tel:+8801533970377"
                                            className="block w-full bg-white/5 border border-white/5 hover:border-primary/50 p-4 transition-all duration-300 group-hover:bg-primary/5"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-base md:text-lg font-mono text-white">+880 1533-970377</span>
                                                <span className="material-symbols-outlined text-primary text-sm">call</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Social Grid */}
                                <div className="mt-auto pt-6 border-t border-dashed border-[#1f2b24] z-10">
                                    <label className="text-[9px] text-primary/60 font-mono uppercase tracking-[0.2em] mb-4 block group-hover:text-primary transition-colors">&gt; EXTERNAL_NETWORKS</label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {socials.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -3, scale: 1.05 }}
                                                className="aspect-square flex items-center justify-center bg-white/5 border border-white/5 rounded-sm hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                                                title={social.name}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className={`size-5 fill-current ${social.icon === 'github' ? 'text-white' : 'text-primary group-hover:text-black'} transition-colors duration-300`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d={social.path} />
                                                </svg>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="bg-[#0a0a0a] h-6 border-t border-[#1f2b24] flex items-center justify-between px-4">
                                <div className="text-[8px] font-mono text-gray-600 uppercase">System: Operational</div>
                                <div className="flex gap-1.5">
                                    <div className="h-1.5 w-1.5 bg-primary/20 rounded-full animate-pulse"></div>
                                    <div className="h-1.5 w-1.5 bg-primary/20 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                    <div className="h-1.5 w-1.5 bg-primary/20 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer System Text */}
                <div className="text-center py-10 opacity-30 mt-10 border-t border-[#1f2b24]">
                    <p className="text-[10px] font-mono tracking-[0.4em] text-primary/60 uppercase">
                        SYSTEM_ID: 884-X-92 // END OF LINE
                    </p>
                </div>
            </div>
        </section>
    );
}
