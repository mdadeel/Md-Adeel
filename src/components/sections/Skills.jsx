import { motion } from 'framer-motion';
import { FadeIn } from '../animations';

const icons = {
    react: (
        <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#61DAFB]">
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
        </svg>
    ),
    js: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F7DF1E]">
            <rect width="100" height="100" rx="10" fill="currentColor" fillOpacity="0.1" />
            <path d="M15 15H85V85H15V15Z" fill="transparent" />
            <path d="M56.8 54.4H65.2V73C65.2 76.6 62.4 78.4 59.2 78.4C55.2 78.4 53.6 76.6 53.4 74H48.2C48.6 79.8 52.8 83 59.4 83C66.8 83 70.6 79 70.6 72.4V54.4H70.4M33.4 83H38.8V69.8H39C39 69.8 39 69.8 39 69.8C39 69.8 39 69.8 39 69.8C39 69.8 39 69.8 39 69.8C39 69.8 39 69.8 39 69.8V83H33.4V54.4H39V69.8H38.8V54.4H33.4V83Z" fill="currentColor" />
        </svg>
    ),
    html: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E34F26]">
            <path d="M4 2H20L18.5 18L12 20L5.5 18L4 2Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M4 2H20L18.5 18L12 20L5.5 18L4 2ZM12 17.5L16.5 16.5L17.5 5H12V17.5ZM12 17.5L7.5 16.5L7 11H12V8H6.5L6 4H12V17.5Z" fill="currentColor" />
        </svg>
    ),
    tailwind: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#06B6D4]">
            <path d="M12.0002 12C12.0002 10.3431 13.3434 9 15.0002 9C16.6571 9 18.0002 10.3431 18.0002 12C18.0002 13.6569 16.6571 15 15.0002 15C13.3434 15 12.0002 13.6569 12.0002 12ZM6.00024 16C6.00024 14.3431 7.34339 13 9.00024 13C10.6571 13 12.0002 14.3431 12.0002 16C12.0002 17.6569 10.6571 19 9.00024 19C7.34339 19 6.00024 17.6569 6.00024 16ZM6.00024 6C4.34339 6 3.00024 7.34315 3.00024 9C3.00024 10.6569 4.34339 12 6.00024 12C7.6571 12 9.00024 10.6569 9.00024 9C9.00024 7.34315 7.6571 6 6.00024 6ZM12.0002 6.5C10.8957 6.5 10.0002 5.60457 10.0002 4.5C10.0002 3.39543 10.8957 2.5 12.0002 2.5C13.1048 2.5 14.0002 3.39543 14.0002 4.5C14.0002 5.60457 13.1048 6.5 12.0002 6.5Z" fill="currentColor" />
            <path d="M18.5 0C13.5 0 11.5 3 11.5 5.5C11.5 8 13.5 8.5 15.5 8.5C17.5 8.5 18.5 7.5 18.5 6.5C18.5 5.5 16.5 5.5 16.5 3.5C16.5 1.5 18.5 2.5 18.5 2.5C17.3954 2.5 16.5 3.39543 16.5 4.5C16.5 5.60457 17.3954 6.5 18.5 6.5C19.6048 6.5 20.5 5.60457 20.5 4.5C20.5 3.39543 19.6048 2.5 18.5 2.5C18.5 0 24 0 24 5.5C24 9.5 20.1136 10.2241 17.5 10.5C15 10.7639 12.5 11 12.5 13.5C12.5 16 15 16.5 17 16.5C19 16.5 20 15.5 20 14.5C20 13.5 18 13.5 18 11.5C18 9.5 20 10.5 20 10.5C18.8954 10.5 18 11.3954 18 12.5C18 13.6046 18.8954 14.5 20 14.5C21.1046 14.5 22 13.6046 22 12.5C22 11.3954 21.1046 10.5 20 10.5C20 8 25.5 8 25.5 13.5C25.5 18.2323 20.5 19 16.5 19C13 19 9.5 18.5 9.5 14.5C9.5 12 11.5 11.5 12.5 11.5C14.5 11.5 15.5 12.5 15.5 13.5C15.5 14.5 13.5 14.5 13.5 12.5C13.5 10.5 15.5 11.5 15.5 11.5C14.3954 11.5 13.5 12.3954 13.5 13.5C13.5 14.6046 14.3954 15.5 15.5 15.5C16.6046 15.5 17.5 14.6046 17.5 13.5C17.5 12.3954 16.6046 11.5 15.5 11.5C15.5 9.5 10 9.5 10 5.5C10 0 18.5 0 18.5 0Z" fill="currentColor" />
        </svg>
    ),
    git: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F05032]">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C16.1966 21.5 19.7431 18.7845 20.9922 15H17.8427C16.8924 17.1098 14.6599 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C14.6599 5.25 16.8924 6.89024 17.8427 9H20.9922C19.7431 5.21546 16.1966 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12ZM14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z" fill="currentColor" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
        </svg>
    ),
    terminal: <span className="material-symbols-outlined text-xl">terminal</span>,
    design: <span className="material-symbols-outlined text-xl">palette</span>,
    logic: <span className="material-symbols-outlined text-xl">precision_manufacturing</span>,
    structure: <span className="material-symbols-outlined text-xl">view_quilt</span>,
    next: <span className="material-symbols-outlined text-xl">next_plan</span>,
    firebase: <span className="material-symbols-outlined text-xl">local_fire_department</span>,
};

const topRow = [
    { id: 'react', name: 'React', icon: icons.react },
    { id: 'js', name: 'JavaScript', icon: icons.js },
    { id: 'html', name: 'HTML5', icon: icons.html },
    { id: 'tailwind', name: 'Tailwind', icon: icons.tailwind },
];

const bottomRow = [
    { id: 'git', name: 'Git', icon: icons.git },
    { id: 'term', name: 'Terminal', icon: icons.terminal },
    { id: 'ui', name: 'UI Logic', icon: icons.logic },
    { id: 'design', name: 'Design', icon: icons.design },
];

const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => { // Increased duration to reduce animation frequency
    return (
        <div className="flex overflow-hidden w-full mask-gradient-x">
            <motion.div
                initial={{ x: direction === 'left' ? 0 : -1000 }}
                animate={{ x: direction === 'left' ? -1000 : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="flex gap-4 min-w-max px-2"
            >
                {[...items, ...items].map((item, idx) => ( // Reduced from 4 repetitions to 2 to reduce DOM elements
                    <div
                        key={`${item.id}-${idx}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:border-primary/20 backdrop-blur-sm transition-colors text-white/50 hover:text-white"
                    >
                        <div className="w-5 h-5 flex items-center justify-center text-white/70">
                            {item.icon}
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="relative z-10 py-20 bg-black overflow-hidden">
            <div className="layout-container mb-12 text-center">
                <FadeIn>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-mono tracking-widest uppercase mb-6">
                        // Technical_Toolkit
                    </span>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Stack</span>
                    </h2>
                </FadeIn>
            </div>

            <div className="flex flex-col gap-6 relative max-w-[100vw] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <MarqueeRow items={topRow} direction="left" speed={30} />
                <MarqueeRow items={bottomRow} direction="right" speed={30} />
            </div>
        </section>
    );
}
