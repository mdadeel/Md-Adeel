const education = [
  {
    institution: 'Programming Hero',
    focus: 'MERN Stack Development',
    period: '2025 - Present',
    description: 'Advanced engineering program focused on React, Node.js, Express, MongoDB, and Next.js.'
  },
  {
    institution: 'Hazi Mohsin College',
    focus: 'Honours, English',
    period: '2025 - Present',
    description: 'Undergraduate studies while maintaining an intensive self-directed engineering curriculum.'
  },
  {
    institution: 'Dewanhat City College',
    focus: 'HSC, Computer Science',
    period: '2022 - 2023',
    description: 'Foundation in computing principles, algorithmic logic, and web fundamentals.'
  }
];

export default function Background() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 border-b border-black/10 dark:border-white/10 bg-background dark:bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-sm font-mono uppercase tracking-tight text-secondary dark:text-secondary-dark sticky top-32 font-bold">
              (04) Professional Background
            </h2>
          </div>

          <div className="md:col-span-9">
            <div className="space-y-0">
              {education.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-t border-black/10 dark:border-white/10 first:border-0">
                  <div className="md:col-span-4">
                    <span className="font-mono text-xs text-black/60 dark:text-white/60 font-bold">{item.period}</span>
                  </div>
                  <div className="md:col-span-8 space-y-2">
                    <h3 className="text-lg font-bold text-primary dark:text-white">{item.institution}</h3>
                    <p className="font-mono text-xs text-black/60 dark:text-white/60 uppercase tracking-wide mb-2 font-bold">{item.focus}</p>
                    <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed max-w-xl font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

