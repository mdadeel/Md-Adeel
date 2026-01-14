import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Programming Hero',
    focus: 'MERN Stack Development (Full-stack)',
    period: 'Jan 2025 - Present',
    description: 'Advanced engineering program focused on React, Node.js, Express, MongoDB, and Next.js. Emphasis on production-ready patterns and API design.'
  },
  {
    institution: 'Hazi Mohammed Mohsin College',
    focus: 'Honours, English',
    period: '2025 - Present',
    description: 'Undergraduate studies while maintaining an intensive self-directed engineering curriculum.'
  },
  {
    institution: 'Dewanhat City Corporation College',
    focus: 'HSC, Computer Science',
    period: '2022 - 2023',
    description: 'Foundation in computing principles, algorithmic logic, and early web development fundamentals.'
  }
];

export default function Background() {
  return (
    <section id="experience" className="relative z-10 section-padding border-t border-white/5 bg-background">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Background</h2>
          <p className="text-white/50 max-w-xl text-lg">
            A history of focused learning and deliberate transition into
            engineering production systems.
          </p>
        </motion.div>

        <div className="space-y-0">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="py-12 border-b border-white/5 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.institution}</h3>
                  <p className="text-white/60 text-lg font-medium">{item.focus}</p>
                </div>
                <span className="px-3 py-1 bg-white/5 text-white/40 text-xs font-bold uppercase tracking-widest rounded-sm border border-white/5 self-start">
                  {item.period}
                </span>
              </div>
              <p className="text-white/50 text-base max-w-2xl leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 p-8 border border-white/5 rounded-lg bg-white/[0.01]"
        >
          <h3 className="text-xl font-bold text-white mb-4">On Engineering Judgment</h3>
          <p className="text-white/60 leading-relaxed text-lg italic">
            "While I lack traditional industry tenure, I compensate with a strict adherence to
            reliability, a refusal to ship bloated code, and a focus on solving problems with
            minimal architectural overhead. My projects are evidence of this philosophy."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
