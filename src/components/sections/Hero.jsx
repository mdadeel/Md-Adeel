import OptimizedImage from '../ui/OptimizedImage';
import useGitHubStats from '../../hooks/useGitHubStats';
import { projects } from '../../data/projects';

export default function Hero() {
    const stats = useGitHubStats("mdadeel");
    const yearsExperience = new Date().getFullYear() - 2025;

    return (
        <section id="hero" className="pt-20 pb-8">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">

                {/* GitHub Profile Card Style */}
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Avatar */}
                    <div className="w-[180px] sm:w-[220px] flex-shrink-0">
                        <div className="aspect-square rounded-full border-2 border-border bg-surface overflow-hidden shadow-xl">
                            <OptimizedImage
                                src="/img/hero.jpg"
                                alt="Md Adeel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 space-y-4">
                        {/* Name & Handle */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                Md Adeel
                            </h1>
                            <p className="text-lg text-text-dim mt-1">mdadeel</p>
                        </div>

                        {/* Bio */}
                        <p className="text-base text-text-dim/80 leading-relaxed max-w-[500px]">
                            Full-Stack Developer specializing in the MERN stack. Building scalable web applications with clean architecture and modern tooling.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="px-5 py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-semibold text-sm transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="/Shahnawas_Adeel_CV.pdf"
                                download
                                className="px-5 py-2.5 bg-surface hover:bg-surface-hover border border-border text-white rounded-md font-semibold text-sm transition-colors flex items-center gap-2"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                                Resume
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-4 pt-2 text-sm text-text-dim">
                            <div className="flex items-center gap-1.5">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M2 5.5a3.5 3.5 0 115.898 2.549 5.508 5.508 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.493 3.493 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z" /></svg>
                                <span><strong className="text-white">{stats.loading ? "..." : stats.followers}</strong> followers</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" /></svg>
                                <span><strong className="text-white">{stats.loading ? "..." : stats.repos}</strong> repositories</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" /></svg>
                                <span><strong className="text-white">{stats.loading ? "..." : stats.stars}</strong> stars earned</span>
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-text-dim border-t border-border pt-4">
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z" /></svg>
                                <span>{yearsExperience}+ years experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M12.536.121a.75.75 0 01.707.707l.121 2.414a.75.75 0 01-.707.707l-2.414.121a.75.75 0 11-.075-1.498l1.048-.052L8.293 5.443 6.768 3.918A.75.75 0 005.707 3.918L.22 9.405a.75.75 0 101.06 1.06l4.959-4.958L7.764 7.03a.75.75 0 001.06 0l3.246-3.245.052 1.048a.75.75 0 001.498-.075l-.121-2.414a.75.75 0 01-.707-.707l.121-2.414z" /></svg>
                                <span>{projects.length} projects shipped</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current opacity-60"><path d="M12.75 0a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.56L8.03 6.53a.75.75 0 01-1.06-1.06L10.94 1.5H8.75a.75.75 0 010-1.5h4zm-8.5 4a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM.75 6.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM4.25 9a4.75 4.75 0 00-4 7.25.75.75 0 101.3-.75A3.25 3.25 0 014.25 10.5h3.5a3.25 3.25 0 012.7 5 .75.75 0 101.3.75 4.75 4.75 0 00-4-7.25h-3.5z" /></svg>
                                <span>Chittagong, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { name: 'GitHub', icon: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z', url: 'https://github.com/mdadeel' },
                                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://linkedin.com/in/shahnawasadee1' },
                                { name: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: 'https://x.com/mdmoft' },
                            ].map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-md bg-surface hover:bg-surface-hover border border-border transition-colors"
                                    title={platform.name}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4 fill-text-dim hover:fill-white transition-colors"
                                    >
                                        <path d={platform.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}