import { motion } from 'framer-motion';
import { FadeIn } from '../animations';

const experiences = [
  {
    company: "Zahid's Chemistry Clinic",
    role: "Event Manager",
    duration: "Jan 2023 - Mar 2023",
    description: "Coordinating high-impact organizational events and managing cross-functional teams."
  },
  {
    company: "Programming Hero",
    role: "Advanced Web Development",
    duration: "Jan 2025 - Present",
    description: "Intensive immersion in modern frontend architectures and full-stack patterns."
  }
];

const education = [
  {
    school: "Hazi Mohammed Mohsin College",
    degree: "Honours, English",
    duration: "2025 - Present",
    description: "Exploring intersections of linguistics and analytical thinking."
  },
  {
    school: "Dewanhat City Corporation College",
    degree: "HSC, Computer Science",
    duration: "2022 - 2023",
    description: "Foundational studies in procedural logic and computing principles."
  }
];

export default function History() {
  return (
    <section id="experience" className="relative z-10 py-20 border-t border-white/5">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Career History */}
          <div className="space-y-12">
            <div className="space-y-4">
              <FadeIn>
                <span className="text-primary font-mono text-[11px] tracking-[0.3em] uppercase">// Career_History</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl font-bold text-white tracking-tighter">
                  Career <span className="text-white/60 italic">History.</span>
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-0">
              {experiences.map((exp, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className="group relative py-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-4 -mx-4 transition-colors rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-primary text-[11px] font-mono uppercase tracking-widest">{exp.role}</h4>
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal italic border-l border-white/10 pl-4">
                      {exp.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Learning Timeline */}
          <div className="space-y-12">
            <div className="space-y-4">
              <FadeIn>
                <span className="text-primary font-mono text-[11px] tracking-[0.3em] uppercase">// Academic_Foundation</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl font-bold text-white tracking-tighter">
                  Learning <span className="text-white/60 italic">Timeline.</span>
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-0">
              {education.map((edu, idx) => (
                <FadeIn key={idx} delay={0.16 + (idx * 0.1)}>
                  <div className="group relative py-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-4 -mx-4 transition-colors rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-primary text-[11px] font-mono uppercase tracking-widest">{edu.degree}</h4>
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest">{edu.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal italic border-l border-white/10 pl-4">
                      {edu.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
