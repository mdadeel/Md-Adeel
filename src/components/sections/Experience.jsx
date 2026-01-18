import { motion } from 'framer-motion';

const experiences = [
  {
    id: "01",
    title: "SENIOR FRONTEND ARCHITECT",
    org: "DIGITAL PULSE STUDIO",
    timeline: "2023 — PRESENT",
    status: "STAGING_ACTIVE",
    intel: "Orchestrating large-scale React ecosystems and mission-critical UI architectures.",
    logs: [
      "» lead engineering for 12+ enterprise micro-frontends",
      "» optimized runtime performance by 40% via custom hooks",
      "» established global design system consumed by 5 teams",
      "» mentored 4 junior engineers on scalable patterns"
    ],
    tags: ["LEADERSHIP", "SCALABILITY", "REACT_19"]
  },
  {
    id: "02",
    title: "UX ENGINEER / INTERACTION SPECIALIST",
    org: "CREATIVE FLOW CO.",
    timeline: "2021 — 2023",
    status: "SYSTEM_ARCHIVED",
    intel: "Designed and engineered award-winning motion systems and component libraries.",
    logs: [
      "» developed kinetic framework for interactive portfolios",
      "» reduced initial bundle size by 25% using code splitting",
      "» engineered pixel-perfect components for 30+ clients",
      "» bridging aesthetic vision with technical reality"
    ],
    tags: ["GSAP", "CORE_UI", "OPTIMIZATION"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-label !mb-0 tracking-[0.4em]">Historical Ledger</span>
            </div>
            <h2 className="title-xl !mb-0 uppercase tracking-tighter italic">Career <span className="text-accent not-italic">Archive</span>.</h2>
          </div>
          <p className="font-mono text-[9px] text-text-dim/30 tracking-[0.4em] font-black uppercase hidden md:block">Active_Index_v0.9</p>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start p-6 border border-white/5 hover:border-accent/20 hover:bg-white/[0.01] transition-all duration-300 rounded-md"
            >
              {/* 1. Chronology */}
              <div className="lg:col-span-2 shrink-0">
                <span className="font-mono text-[11px] font-black text-accent tracking-tighter opacity-80">{exp.timeline}</span>
              </div>

              {/* 2. Core Identity */}
              <div className="lg:col-span-3 space-y-1">
                <h3 className="text-xl font-black text-white tracking-tight uppercase group-hover:text-accent transition-colors">
                  {exp.org}
                </h3>
                <p className="text-[10px] font-bold text-text-dim tracking-[0.2em] font-mono opacity-60 uppercase">{exp.title}</p>
              </div>

              {/* 3. Operational Intel */}
              <div className="lg:col-span-6 xl:col-span-5 space-y-3">
                <p className="text-sm text-text-dim/80 font-medium leading-relaxed italic">
                  {exp.intel}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-mono font-black text-text-dim/20 tracking-widest uppercase">{tag}</span>
                  ))}
                </div>
              </div>

              {/* 4. Log Snapshot (XL Only) */}
              <div className="hidden xl:col-span-2 xl:flex flex-col gap-1.5 border-l border-white/5 pl-6 opacity-30 group-hover:opacity-100 transition-opacity">
                {exp.logs.slice(0, 2).map((log, lIdx) => (
                  <div key={lIdx} className="flex gap-2">
                    <span className="text-accent text-[8px] mt-1 shrink-0">»</span>
                    <span className="text-[10px] font-mono leading-tight">{log.replace(/» /g, '').substring(0, 45)}...</span>
                  </div>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="absolute top-6 right-6 lg:relative lg:top-0 lg:col-span-1 lg:justify-self-end">
                <div className={`w-1.5 h-1.5 rounded-full ${exp.status === 'STAGING_ACTIVE' ? 'bg-green-500 animate-pulse' : 'bg-white/10'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            {[
              { label: "Status", val: "Verified" },
              { label: "Encryption", val: "AES-256" },
              { label: "Protocol", val: "Cinematic_UI" }
            ].map(meta => (
              <div key={meta.label} className="flex flex-col gap-1">
                <span className="text-[8px] font-mono text-text-dim/30 uppercase tracking-widest">{meta.label}</span>
                <span className="text-[9px] font-mono font-black text-white/40 uppercase">{meta.val}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[8px] font-black text-text-dim/20 tracking-[0.4em] uppercase">End of Career Metadata Stream // 2026</p>
        </div>
      </div>
    </section>
  );
}
