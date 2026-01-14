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
    <section id="experience" className="py-24 px-4 md:px-8 border-b border-black/10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-sm font-mono uppercase tracking-tight text-secondary sticky top-32">
              (03) Background
            </h2>
          </div>

          <div className="md:col-span-9">
            <div className="space-y-0">
              {education.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-t border-black/10 first:border-0">
                  <div className="md:col-span-4">
                    <span className="font-mono text-xs text-secondary">{item.period}</span>
                  </div>
                  <div className="md:col-span-8 space-y-2">
                    <h3 className="text-lg font-bold text-primary">{item.institution}</h3>
                    <p className="font-mono text-xs text-secondary uppercase tracking-wide mb-2">{item.focus}</p>
                    <p className="text-sm text-secondary/80 leading-relaxed max-w-xl">{item.description}</p>
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

