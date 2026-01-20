import OptimizedImage from '../ui/OptimizedImage';
import useGitHubStats from '../../hooks/useGitHubStats';
import { projects } from '../../data/projects';

// Calculate tech stack count
const techStacksCount = new Set(projects.flatMap(p => p.tech)).size;

export default function Hero() {
    const stats = useGitHubStats("mdadeel");

    return (
        <section id="hero" className="pt-14">
            <div className="max-w-[1250px] mx-auto border-x border-white/5 bg-[#18191a] min-h-[500px]">

                {/* 1. X style Header/Cover - Reduced height */}
                <div className="relative aspect-[4/1] w-full overflow-hidden bg-gray-800">
                    <OptimizedImage
                        src="/img/cover.jpg"
                        alt="Hero Cover"
                        className="w-full h-full object-cover brightness-[0.7]"
                        priority={true}
                    />
                </div>

                {/* 2. Profile Area - Restructured Layout */}
                <div className="px-4 sm:px-8 relative">

                    {/* Action Buttons (Top Right) */}
                    <div className="absolute top-4 right-4 sm:right-8 flex gap-3 z-10">

                        <button className="hidden sm:block px-5 py-2 rounded-full border border-white/20 text-white font-black text-sm hover:bg-white/5 transition-all active:scale-95">
                            Hire Me
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="hidden md:flex px-4 py-2 rounded-full border border-white/20 text-white/50 font-bold text-sm hover:bg-white/5 transition-all items-center gap-2"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                            CV
                        </a>
                    </div>

                    {/* Container for Avatar and Info side by side */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

                        {/* Avatar Section - Separate div for independent positioning */}
                        <div className="relative -mt-[10%] sm:-mt-[5%] flex-shrink-0">
                            <div className="w-[140px] sm:w-[160px] aspect-square rounded-full border-4 border-black bg-gray-700 overflow-hidden shadow-xl">
                                <OptimizedImage
                                    src="/img/hero.jpg"
                                    alt="Md Adeel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Info Cluster - Separate div for independent positioning */}
                        <div className="space-y-4 mt-0 sm:mt-6 flex-1">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-1.5">
                                    Md Adeel
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-blue-500">
                                        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-3.99s-2.6-1.27-3.99-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.97-.2-3.99.81s-1.27 2.6-.81 3.99c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.34c-.46 1.39-.2 2.97.81 3.99s2.6 1.27 3.99.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.97.2 3.99-.81s1.27-2.6.81-3.99c1.32-.67 2.19-1.91 2.19-3.34zm-11.71 4.2l-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4-6 6z" />
                                    </svg>
                                </h1>
                                <p className="text-gray-500 text-sm">@shahnawas.adeel</p>
                            </div>



                            {/* Meta Info */}


                            {/* Stats Wrapper */}
                            <div className="flex gap-6 ">
                                <div className="flex gap-1.5 items-center">
                                    <span className="font-bold text-white tracking-tight">{projects.length}</span>
                                    <span className="text-gray-400 text-sm">Projects</span>
                                </div>
                                <div className="flex gap-1.5 items-center">
                                    <span className="font-bold text-white tracking-tight">{stats.loading ? "..." : stats.repos}</span>
                                    <span className="text-gray-400 text-sm">Repositories</span>
                                </div>
                                <div className="flex gap-1.5 items-center">
                                    <span className="font-bold text-white tracking-tight">{techStacksCount}</span>
                                    <span className="text-gray-400 text-sm">Tech Stacks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Border separator */}
                    <div className="border-b border-white/5 mt-4"></div>
                </div>

                {/* 3. Social Media Icon Bar (X-style) */}
                <div className="flex border-b border-white/5 mt-2">
                    {[
                        { name: 'GitHub', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57.5-4.597 4.09-1.31 4.09 10.134 0-14.737-5.363-20.1-12.1-20.1z', url: 'https://github.com/mdadeel' },
                        { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://linkedin.com/in/shahnawasadee1' },
                        { name: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: 'https://x.com/mdmoft' },
                        { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.387H7.078v-3.467h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.467h-2.796v8.387C19.612 23.027 24 18.062 24 12.073z', url: 'https://facebook.com/badshahnawas.adeel' }
                    ].map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex justify-center py-4 hover:bg-white/5 transition-colors group"
                            title={platform.name}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors"
                            >
                                <path d={platform.icon} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}