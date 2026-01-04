import { motion } from 'framer-motion';
import { FadeIn } from '../animations';

const experiences = [
  {
    company: "Zahid's Chemistry Clinic",
    role: "Event Manager",
    duration: "Jan 2023 - Present",
    description: "Coordinating high-impact organizational events and managing cross-functional teams to ensure seamless execution."
  },
  {
    company: "Programming Hero",
    role: "Advanced Web Development",
    duration: "Jan 2022 - Aug 2023",
    description: "Intensive immersion in modern frontend architectures and full-stack development patterns."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 bg-black">
      <div className="layout-container">
        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <FadeIn>
              <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 inline-block">// Professional_Path</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Career <span className="text-white/40 italic">History.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {experiences.map((exp, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-20 py-12 border-t border-white/5 first:border-t-0">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-white/20 tracking-widest">{exp.duration}</span>
                    <h4 className="text-primary text-sm font-bold uppercase tracking-tight">{exp.role}</h4>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                      {exp.company}
                    </h3>
                    <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
