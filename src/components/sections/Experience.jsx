import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2025 - Present",
    type: "current",
    description: (
      <span>
        Delivered custom web solutions for local businesses, managing the full lifecycle from client requirement gathering to deployment and handover.
        <span className="block mt-2">
          <strong className="text-white">• Metro Optics:</strong> Engineered a full-featured e-commerce platform for a local eyewear retailer using React.js and Tailwind CSS, resulting in their first online sales channel.
        </span>
        <span className="block mt-1">
          <strong className="text-white">• Ayash Tech:</strong> Developed a high-performance corporate portfolio site for a tech consultancy, improving their brand visibility and lead generation via optimized contact forms.
        </span>
      </span>
    ),
    highlights: ["React.js", "Tailwind CSS", "E-commerce", "Performance"]
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-8 bg-background">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <motion.div
          className="flex items-center gap-3 mb-6 pb-4 border-b border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <svg viewBox="0 0 16 16" className="w-5 h-5 fill-text-dim">
            <path d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
          </svg>
          <h2 className="text-lg font-bold text-white">Contribution History</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all z-10 ${exp.type === 'current'
                  ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/30'
                  : 'bg-surface border-border group-hover:border-accent/50'
                  }`}>
                  {exp.type === 'current' ? (
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-white">
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-text-dim">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  )}
                </div>

                <div className="group bg-surface rounded-xl p-6 hover:bg-surface-hover transition-all duration-300 ml-4 relative">
                  <div className="absolute left-[-21px] top-4 w-4 h-0.5 bg-border group-hover:bg-accent/50 transition-colors"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-sm text-text-dim font-medium">{exp.company}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.type === 'current'
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : 'bg-background text-text-dim border-border'
                      }`}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-base text-text-dim/90 mb-4 leading-relaxed">{exp.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 text-xs font-medium bg-background text-text-dim rounded-md border border-border/50 group-hover:border-accent/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-sm text-text-dim"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60">
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
          </svg>
          <span>{new Date().getFullYear() - 2025}+ years of continuous learning and building</span>
        </motion.div>
      </div>
    </section>
  );
}
