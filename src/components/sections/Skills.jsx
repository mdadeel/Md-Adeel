import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SKILL_GROUPS = [
    {
        category: "Frontend",
        skills: [
            { name: "React.js", ext: "tsx", hours: "2.4k", status: "M", color: "#61DAFB" },
            { name: "Vue.js", ext: "vue", hours: "800", status: "U", color: "#4FC08D" },
            { name: "Tailwind", ext: "css", hours: "2.1k", status: "M", color: "#38B2AC" },
            { name: "Framer Motion", ext: "js", hours: "500", status: "A", color: "#F024B6" },
            { name: "Next.js", ext: "ts", hours: "1.2k", status: "M", color: "#ffffff" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", ext: "js", hours: "1.8k", status: "M", color: "#339933" },
            { name: "Express.js", ext: "js", hours: "1.2k", status: "U", color: "#ffffff" },
            { name: "MongoDB", ext: "db", hours: "1.2k", status: "M", color: "#47A248" },
            { name: "Firebase", ext: "db", hours: "900", status: "A", color: "#FFCA28" },
            { name: "PostgreSQL", ext: "sql", hours: "600", status: "U", color: "#336791" }
        ]
    },
    {
        category: "Foundations",
        skills: [
            { name: "JavaScript", ext: "js", hours: "4.5k+", status: "M", color: "#F7DF1E" },
            { name: "TypeScript", ext: "ts", hours: "1.5k", status: "M", color: "#3178C6" },
            { name: "HTML5", ext: "html", hours: "∞", status: "U", color: "#E34F26" },
            { name: "Git", ext: "git", hours: "2.8k", status: "A", color: "#F05032" }
        ]
    }
];

const FolderIcon = ({ isOpen }) => (
    <svg
        viewBox="0 0 24 24"
        className={`w-3.5 h-3.5 fill-text-dim/40 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`}
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

const FileIcon = ({ ext, color }) => {
    // Simple icon mapping
    return (
        <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
            <span className="text-[8px] font-black uppercase italic" style={{ color }}>
                {ext}
            </span>
        </div>
    );
};

const GroupSection = ({ group }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-1.5 px-2 py-1 hover:bg-white/5 transition-colors group"
            >
                <FolderIcon isOpen={isOpen} />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                    {group.category}
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
                        {group.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center justify-between px-6 py-1 hover:bg-[#2a2d2e] transition-colors group/item cursor-default"
                            >
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <FileIcon ext={skill.ext} color={skill.color} />
                                    <span className="text-xs text-text-dim/80 group-hover/item:text-[#cccccc] truncate transition-colors">
                                        {skill.name.toLowerCase().replace(" ", "-")}.{skill.ext}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-[9px] font-mono text-text-dim/20 group-hover/item:text-text-dim/40">
                                        {skill.hours}h
                                    </span>
                                    <span className={`text-[10px] font-black w-3 text-center ${skill.status === 'M' ? 'text-[#e2c08d]' :
                                        skill.status === 'A' ? 'text-[#73c991]' : 'text-text-dim/20'
                                        }`}>
                                        {skill.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-8 bg-[#18191a] border-t border-black relative overflow-hidden">
            {/* Background Subtle Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-[700px] mx-auto px-6">

                {/* VS Code Header Aesthetic */}
                <div className="bg-[#252526] rounded-t-xl overflow-hidden border border-white/5 flex flex-col shadow-2xl">
                    <div className="h-9 px-4 flex items-center justify-between bg-[#2d2d2d] border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-text-dim/40 uppercase tracking-widest">Explorer</span>
                            <span className="text-[10px] text-text-dim/20 font-bold">•</span>
                            <span className="text-[10px] font-black text-white/80 uppercase tracking-tight italic">Technical_Stack</span>
                        </div>
                        <div className="flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                    </div>

                    {/* Main List Area */}
                    <div className="bg-[#1e1e1e] p-2 min-h-[400px]">
                        {/* Outline / Breadcrumbs */}
                        <div className="px-2 py-1 flex items-center gap-1.5 text-[9px] font-bold text-text-dim/30 uppercase tracking-widest mb-4 border-b border-white/5">
                            <span>src</span>
                            <span>/</span>
                            <span>components</span>
                            <span>/</span>
                            <span className="text-accent/60">skills.jsx</span>
                        </div>

                        {SKILL_GROUPS.map((group) => (
                            <GroupSection key={group.category} group={group} />
                        ))}
                    </div>

                    {/* VS Code Footer/Status Bar */}
                    <div className="bg-[#007acc] h-6 flex items-center justify-between px-3">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                                <span className="text-[9px] font-black text-white uppercase italic">0 Errors</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white/80"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                                <span className="text-[9px] font-black text-white/80 uppercase italic">0 Warnings</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/80 text-[9px] font-bold uppercase tracking-widest">
                            <span>UTF-8</span>
                            <span>JavaScript React</span>
                        </div>
                    </div>
                </div>

                {/* Git Log Subtle Footer */}
                <div className="mt-4 px-4 flex justify-between items-center opacity-20">
                    <p className="text-[9px] font-mono text-text-dim/60">
              * (HEAD -> main, origin/main) commit: Add production-ready architecture
                    </p>
                    <p className="text-[9px] font-mono text-text-dim/60 italic">3s ago</p>
                </div>
            </div>
        </section>
    );
}
