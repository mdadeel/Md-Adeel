import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIALS } from '../../data/constants';
import useGitHubStats from '../../hooks/useGitHubStats';

const FolderIcon = ({ isOpen }) => (
    <svg
        viewBox="0 0 24 24"
        className={`w-3.5 h-3.5 fill-text-dim/40 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`}
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export default function Contact() {
    const stats = useGitHubStats("mdadeel");
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section id="contact" className="py-8 bg-[#18191a] border-t border-black relative">
            <div className="max-w-[700px] mx-auto px-6">

                {/* VS Code Explorer Aesthetic */}
                <div className="bg-[#252526] rounded-t-xl overflow-hidden border border-white/5 flex flex-col shadow-2xl">
                    <div className="h-9 px-4 flex items-center justify-between bg-[#2d2d2d] border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-text-dim/40 uppercase tracking-widest">Explorer</span>
                            <span className="text-[10px] text-text-dim/20 font-bold">•</span>
                            <span className="text-[10px] font-black text-white/80 uppercase tracking-tight italic">Connection_Manager</span>
                        </div>
                    </div>

                    <div className="bg-[#1e1e1e] p-2 min-h-[300px]">
                        {/* Breadcrumbs */}
                        <div className="px-2 py-1 flex items-center gap-1.5 text-[9px] font-bold text-text-dim/30 uppercase tracking-widest mb-4 border-b border-white/5">
                            <span>src</span>
                            <span>/</span>
                            <span>network</span>
                            <span>/</span>
                            <span className="text-accent/60">connect.sh</span>
                        </div>

                        {/* Folder: Connect */}
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full flex items-center gap-1.5 px-2 py-1 hover:bg-white/5 transition-colors group"
                            >
                                <FolderIcon isOpen={isOpen} />
                                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                    Connections
                                </span>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        {/* Social Links as Files */}
                                        {SOCIALS.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between px-6 py-1.5 hover:bg-[#2a2d2e] transition-colors group/item"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[8px] font-black uppercase text-accent/60 group-hover/item:text-accent italic">link</span>
                                                    <span className="text-xs text-text-dim/80 group-hover/item:text-[#cccccc] transition-colors">
                                                        {social.name.toLowerCase()}.url
                                                    </span>
                                                </div>
                                                <span className="text-[9px] font-mono text-text-dim/20 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                    HTTP/1.1 200 OK
                                                </span>
                                            </a>
                                        ))}

                                        {/* Message Command File */}
                                        <button
                                            onClick={() => setShowMessageForm(true)}
                                            className="w-full flex items-center justify-between px-6 py-2 hover:bg-[#2a2d2e] transition-colors group/item"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-[8px] font-black uppercase text-green-500/60 group-hover/item:text-green-500 italic">cmd</span>
                                                <span className="text-xs text-text-dim/80 group-hover/item:text-white font-bold transition-colors">
                                                    send-direct-message.sh
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                <span className="text-[9px] font-mono text-green-500/40 uppercase tracking-tighter">Executable</span>
                                            </div>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* GitHub Status Log */}
                        <div className="mt-8 px-2 space-y-2 border-t border-white/5 pt-4">
                            <h4 className="text-[10px] font-black text-text-dim/20 uppercase tracking-widest px-2">Live Cloud Status</h4>
                            <div className="space-y-1">
                                <div className="flex items-center justify-between px-2 text-[10px] font-mono">
                                    <span className="text-text-dim/40">GH_FOLLOWERS</span>
                                    <span className="text-white/60">{stats.loading ? "LOADING..." : stats.followers}</span>
                                </div>
                                <div className="flex items-center justify-between px-2 text-[10px] font-mono">
                                    <span className="text-text-dim/40">GH_STARS_RECV</span>
                                    <span className="text-white/60">{stats.loading ? "LOADING..." : stats.stars}</span>
                                </div>
                                <div className="flex items-center justify-between px-2 text-[10px] font-mono">
                                    <span className="text-text-dim/40">LOCATION</span>
                                    <span className="text-white/60">LOCALHOST://5173</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VS Code Footer/Status Bar */}
                    <div className="bg-[#007acc] h-6 flex items-center justify-between px-3">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <span className="text-[9px] font-black text-white uppercase italic">Branch: main</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[9px] font-black text-white/80 uppercase italic">Cloud Sync...</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-[9px] font-bold uppercase tracking-widest">
                            <span>Markdown</span>
                            <span>Line 155, Col 1</span>
                        </div>
                    </div>
                </div>

                {/* Footer Attribution */}
                <div className="mt-6 text-center space-y-2 opacity-20">
                    <p className="text-[9px] font-mono text-text-dim/40 uppercase tracking-[0.3em]">
                        * Re-engineered for maximum high-density performance
                    </p>
                    <p className="text-[8px] font-bold text-text-dim/20 uppercase tracking-widest">
                        © Md Adeel · 2026.01.19 · Production Release
                    </p>
                </div>
            </div>

            {/* Message Overlay */}
            <AnimatePresence>
                {showMessageForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1e1e1e] w-full max-w-[450px] rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="p-3 bg-[#2d2d2d] border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <h3 className="text-white/60 text-[10px] font-black tracking-widest uppercase italic">terminal - direct_message.sh</h3>
                                </div>
                                <button
                                    onClick={() => setShowMessageForm(false)}
                                    className="text-white/20 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="space-y-3 font-mono">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500 font-bold">$</span>
                                        <input type="text" placeholder="name --input" className="flex-1 bg-transparent border-none text-white text-xs outline-none focus:ring-0 placeholder:text-text-dim/20" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500 font-bold">$</span>
                                        <input type="email" placeholder="email --input" className="flex-1 bg-transparent border-none text-white text-xs outline-none focus:ring-0 placeholder:text-text-dim/20" />
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 font-bold">$</span>
                                        <textarea placeholder="message --content" className="flex-1 bg-transparent border-none text-white text-xs outline-none focus:ring-0 placeholder:text-text-dim/20 h-24 resize-none pt-0" />
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-[#007acc] text-white font-black rounded text-[11px] tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all uppercase">
                                    Execute Send
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
