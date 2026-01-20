
import OptimizedImage from '../ui/OptimizedImage';

export default function About() {
    return (
        <section id="about" className="py-8 bg-[#18191a] border-y border-white/5">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

                <div className="flex flex-col md:flex-row gap-6">

                    {/* 1. Facebook "Intro" Sidebar */}
                    <div className="w-full md:w-[360px] space-y-4 shrink-0">
                        <div className="bg-[#242526] rounded-xl p-4 shadow-sm border border-white/5 space-y-4">
                            <h3 className="text-xl font-black text-[#e4e6eb] tracking-tight">Intro</h3>

                            <div className="space-y-4">
                                <p className="text-[15px] text-[#e4e6eb] text-center font-medium leading-relaxed">
                                    Engineering functional art with the MERN stack. Building scalable digital systems.
                                </p>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3 text-[#b0b3b8]">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-60"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>
                                    <span className="text-[14px]">Works at <strong className="text-[#e4e6eb]">Self-Employed</strong></span>
                                </div>
                                <div className="flex items-center gap-3 text-[#b0b3b8]">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-60"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v2.93zm6.91-4.07c-.42-.35-.91-.56-1.41-.71-.24-.07-.49-.15-.74-.22-1.12-.31-2.03-.57-2.76-1.93-.33-.62-.07-1.39.55-1.72.62-.33 1.39-.07 1.72.55.24.46.54.67 1.14.84.28.08.56.16.85.25.75.22 1.5.45 2.12.98.63.53.81 1.34.45 2 .32.32.61.67.87 1.04-.63.4-1.31.72-2.04.93-.24-.31-.5-.65-.79-1.01z" /></svg>
                                    <span className="text-[14px]">From <strong className="text-[#e4e6eb]">Chittagong, Bangladesh</strong></span>
                                </div>
                                <div className="flex items-center gap-3 text-[#b0b3b8]">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-60"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z" /></svg>
                                    <span className="text-[14px]">Joined <strong className="text-[#e4e6eb]">January 2023</strong></span>
                                </div>
                                <div className="flex items-center gap-3 text-[#b0b3b8]">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-60"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                    <a href="https://instagram.shahnawas.adeel" className="text-[14px] text-[#4599ff] hover:underline font-bold">adeel.dev</a>
                                </div>
                            </div>
                        </div>

                        {/* Interests with Real Icons */}
                        <div className="bg-[#242526] rounded-xl p-4 shadow-sm border border-white/5 space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-black text-[#e4e6eb] tracking-tight">Interests</h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {[
                                    { name: 'Coding', icon: 'M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z' },
                                    { name: 'Design', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-3.5h-4v-4h4V6.5l6 5.5-6 5.5z' },
                                    { name: 'Gaming', icon: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' },
                                    { name: 'Music', icon: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' },
                                    { name: 'Chess', icon: 'M19 22H5v-2h14v2M17.16 8.26A4.97 4.97 0 0012 3c-2.76 0-5 2.24-5 5 0 1.63.78 3.07 2 3.97V14h6v-2.03c1.22-.9 2-2.34 2-3.97 0-.24-.03-.48-.08-.74l2.24 2.24 1.41-1.41-2.41-2.41v-.42zM13 18h-2v-4h2v4z' },
                                    { name: 'Research', icon: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }
                                ].map(hobby => (
                                    <div key={hobby.name} className="aspect-square bg-white/5 rounded-lg flex flex-col items-center justify-center p-2 border border-white/5 hover:bg-white/10 transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#4599ff] mb-1">
                                            <path d={hobby.icon} />
                                        </svg>
                                        <span className="text-[10px] text-[#b0b3b8] font-bold uppercase">{hobby.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. Facebook Profile Feed/Content Section */}
                    <div className="flex-1 space-y-4">

                        {/* Status Update Box Style */}


                        {/* Main About Post */}
                        <div className="bg-[#242526] rounded-xl p-4 shadow-sm border border-white/5 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                                        <OptimizedImage
                                            src="/img/hero.jpg"
                                            alt="Md Adeel"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#e4e6eb] hover:underline cursor-pointer">Md Adeel</h4>
                                        <p className="text-[13px] text-[#b0b3b8] flex items-center gap-1">
                                            Jan 19 · <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-60"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v2.93zm6.91-4.07c-.42-.35-.91-.56-1.41-.71-.24-.07-.49-.15-.74-.22-1.12-.31-2.03-.57-2.76-1.93-.33-.62-.07-1.39.55-1.72.62-.33 1.39-.07 1.72.55.24.46.54.67 1.14.84.28.08.56.16.85.25.75.22 1.5.45 2.12.98.63.53.81 1.34.45 2 .32.32.61.67.87 1.04-.63.4-1.31.72-2.04.93-.24-.31-.5-.65-.79-1.01z" /></svg>
                                        </p>
                                    </div>
                                </div>
                                <button className="text-[#b0b3b8] hover:bg-white/5 w-8 h-8 rounded-full flex items-center justify-center">•••</button>
                            </div>

                            <article className="space-y-4 text-[15px] text-[#e4e6eb] leading-relaxed">
                                <h2 className="text-2xl font-black text-white tracking-tight uppercase italic leading-tight">
                                    The architecture of <span className="text-[#4599ff] not-italic">Finishing</span>.
                                </h2>
                                <p>
                                    I learn by finishing things, not by collecting tutorials. In an industry where "perfect is the enemy of done," I prioritize shipping functional, maintainable code over theoretical abstractions that never see production.
                                </p>

                                <p>
                                    As a <strong className="text-[#4599ff]">MERN Stack Developer</strong>, I find the most interesting problems at the intersection of frontend state management and backend data modeling. My goal is always to build interfaces that feel light while handling complex weights behind the scenes.
                                </p>

                                <blockquote className="bg-[#3a3b3c] p-4 rounded-xl italic text-[#e4e6eb] font-bold border-l-4 border-[#4599ff]">
                                    "Most of my growth has come from building complete products, running into real problems, and fixing my own bad decisions."
                                </blockquote>
                            </article>

                            <div className="flex justify-between pt-4 border-t border-white/5">
                                <div className="flex -space-x-1">
                                    <div className="w-5 h-5 rounded-full bg-[#4599ff] border-2 border-[#242526] flex items-center justify-center text-[10px] text-white">👍</div>
                                    <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-[#242526] flex items-center justify-center text-[10px] text-white">❤️</div>
                                    <span className="pl-3 text-[14px] text-[#b0b3b8] hover:underline cursor-pointer">You and 1.2k others</span>
                                </div>
                                <div className="flex gap-4 text-[14px] text-[#b0b3b8]">
                                    <span className="hover:underline cursor-pointer">42 comments</span>
                                    <span className="hover:underline cursor-pointer">8 shares</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
