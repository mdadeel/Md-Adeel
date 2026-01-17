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
    <section id="experience" className="section-padding border-b border-border bg-background">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-mono-xs text-secondary lg:sticky lg:top-32 font-bold mb-4 lg:mb-0">
              (04) Professional Background
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-border border-t border-b border-border">
              {education.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 items-start">
                  <div className="md:col-span-4">
                    <span className="text-mono-xs text-secondary">{item.period}</span>
                  </div>
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-display-md !text-[1.5rem] text-primary">{item.institution}</h3>
                    <p className="text-mono-xs text-primary/60 font-bold">{item.focus}</p>
                    <p className="text-body-md text-secondary max-w-xl">{item.description}</p>
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

