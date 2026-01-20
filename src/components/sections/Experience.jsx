import { motion } from 'framer-motion';

const experiences = [
  {
    id: "EXP-01",
    company: "Freelance",
    role: "MERN Stack Developer",
    period: "2023 - Present",
    status: "In Progress",
    priority: "High",
    labels: ["Next.js", "Node.js", "MongoDB"],
    desc: "Leading full-stack development for client applications. Focused on React performance, scalable APIs, and production-ready architecture."
  },
  {
    id: "EXP-02",
    company: "Local Agency",
    role: "Frontend Engineer",
    period: "2022 - 2023",
    status: "Done",
    priority: "Medium",
    labels: ["React", "TypeScript", "Tailwind"],
    desc: "Architected responsive UIs and component libraries. Integrated complex data visualizations and optimized bundle performance."
  },
  {
    id: "EXP-03",
    company: "Self-Learning",
    role: "Web Developer",
    period: "2021 - 2022",
    status: "Done",
    priority: "Low",
    labels: ["HTML", "CSS", "JavaScript"],
    desc: "Built foundational skills through personal projects, learning production-level Git workflows and deployment processes."
  }
];

const StatusIcon = ({ status }) => {
  if (status === "Done") {
    return (
      <svg viewBox="0 0 16 16" className="w-3 h-3 fill-purple-500">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-blue-500">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-45 origin-center" />
    </svg>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-8 bg-[#18191a] border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-6">

        {/* Linear Header */}
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/10">
              <span className="text-[10px] font-bold text-text-dim/60 uppercase tracking-widest">Roadmap</span>
            </div>
            <h2 className="text-sm font-bold text-white tracking-tight uppercase">Professional History</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-text-dim/40 uppercase tracking-widest">
              <span>View</span>
              <div className="flex bg-white/5 rounded p-0.5 border border-white/10">
                <div className="px-2 py-0.5 bg-white/10 rounded text-white italic">List</div>
                <div className="px-2 py-0.5">Board</div>
              </div>
            </div>
          </div>
        </div>

        {/* Issue List Style */}
        <div className="space-y-px border border-white/5 rounded-lg overflow-hidden bg-white/[0.02]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 hover:bg-white/[0.04] transition-all border-b border-white/5 last:border-0 relative overflow-hidden"
            >
              {/* Status & ID */}
              <div className="flex items-center gap-3 shrink-0">
                <StatusIcon status={exp.status} />
                <span className="text-[10px] font-mono text-text-dim/40 font-bold tracking-tight">{exp.id}</span>
              </div>

              {/* Title & Role */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xs font-black text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-[10px] text-text-dim/30 font-bold uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    {exp.role}
                  </span>
                </div>
                <p className="text-[11px] text-text-dim/50 font-medium mt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                  {exp.desc}
                </p>
              </div>

              {/* Labels & Meta */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex gap-1.5">
                  {exp.labels.map(label => (
                    <span key={label} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-bold text-text-dim/40 uppercase tracking-tight group-hover:border-purple-500/20 group-hover:text-purple-400/60 transition-colors">
                      {label}
                    </span>
                  ))}
                </div>
                <span className="hidden lg:block text-[9px] font-black text-text-dim/20 uppercase tracking-widest w-24 text-right">
                  {exp.period}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/[0.02] to-purple-500/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-6 flex items-center justify-between px-2">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-[10px] font-bold text-text-dim/40 uppercase tracking-widest">3 Issues</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
              <span className="text-[10px] font-bold text-text-dim/40 uppercase tracking-widest">1 Active</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-text-dim/20">Updated 2m ago</div>
        </div>
      </div>
    </section>
  );
}
