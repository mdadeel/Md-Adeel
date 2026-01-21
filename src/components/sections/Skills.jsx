const SKILL_GROUPS = [
    {
        category: "Frontend",
        skills: [
            { name: "React", color: "#61DAFB" },
            { name: "Next.js", color: "#ffffff" },
            { name: "Vue.js", color: "#4FC08D" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "Tailwind CSS", color: "#38B2AC" },
            { name: "Framer Motion", color: "#F024B6" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", color: "#339933" },
            { name: "Express.js", color: "#ffffff" },
            { name: "MongoDB", color: "#47A248" },
            { name: "PostgreSQL", color: "#336791" },
            { name: "Firebase", color: "#FFCA28" },
            { name: "REST APIs", color: "#FF6B6B" }
        ]
    },
    {
        category: "Tools & Workflow",
        skills: [
            { name: "Git", color: "#F05032" },
            { name: "VS Code", color: "#007ACC" },
            { name: "Docker", color: "#2496ED" },
            { name: "Figma", color: "#F24E1E" },
            { name: "Vercel", color: "#ffffff" },
            { name: "Linux", color: "#FCC624" }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-8 bg-background">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">

                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
                        <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.508 5.508 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.235A5.507 5.507 0 013.102 8.05 3.493 3.493 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z" />
                    </svg>
                    <h2 className="text-lg font-bold text-white">Technical Stack</h2>
                </div>

                {/* Skills Grid */}
                <div className="space-y-8">
                    {SKILL_GROUPS.map((group) => (
                        <div key={group.category}>
                            <h3 className="text-sm font-semibold text-text-dim mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex flex-col items-center gap-2 p-4 bg-surface rounded-lg border border-border hover:border-accent/50 transition-all cursor-default"
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full transition-transform group-hover:scale-125"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                        <span className="text-xs font-medium text-text-dim group-hover:text-white transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-text-dim">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60">
                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                        <span><strong className="text-white">{SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)}</strong> technologies</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60">
                            <path d="M1.5 1.75V13.5h13.75a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75V1.75a.75.75 0 011.5 0zm14.28 2.53l-5.25 5.25a.75.75 0 01-1.06 0L7 7.06 4.28 9.78a.75.75 0 01-1.06-1.06l3.25-3.25a.75.75 0 011.06 0L10 8.19l4.72-4.72a.75.75 0 111.06 1.06z" />
                        </svg>
                        <span>Actively learning & building</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
