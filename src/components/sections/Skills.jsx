import { motion } from 'framer-motion';

const SKILL_GROUPS = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
        ]
    },
    {
        category: "Tools & Workflow",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Skills() {
    return (
        <section id="skills" className="py-8 bg-background">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-6 pb-4 border-b border-border"
                >
                    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
                        <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.508 5.508 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.235A5.507 5.507 0 013.102 8.05 3.493 3.493 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z" />
                    </svg>
                    <h2 className="text-lg font-bold text-white">Technical Stack</h2>
                </motion.div>

                <div className="space-y-8">
                    {SKILL_GROUPS.map((group, groupIdx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                        >
                            <h3 className="text-sm font-semibold text-text-dim mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                {group.category}
                            </h3>
                            <motion.div
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="group flex flex-col items-center justify-center gap-2.5 p-4 bg-surface rounded-lg border border-border hover:border-accent/50 transition-all"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="max-w-full max-h-full object-contain transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-text-dim group-hover:text-white transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-text-dim"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span><strong className="text-white">{SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)}</strong> technologies</span>
                    <span>Actively learning & building</span>
                </motion.div>
            </div>
        </section>
    );
}
