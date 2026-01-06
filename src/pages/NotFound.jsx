import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(54,226,123,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(54,226,123,0.2)_1px,transparent_1px)] [background-size:60px_60px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 relative z-10"
            >
                {/* Error Code */}
                <div className="space-y-2">
                    <span className="text-[10px] font-mono text-primary/60 tracking-[0.4em] uppercase">
                        // SYSTEM_ERROR
                    </span>
                    <h1 className="text-[120px] md:text-[180px] font-black text-white leading-none tracking-tighter">
                        404
                    </h1>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <p className="text-white/60 text-sm md:text-base font-mono uppercase tracking-widest">
                        Resource_Not_Found
                    </p>
                    <p className="text-white/40 text-xs font-mono max-w-md mx-auto">
                        The requested endpoint does not exist in this system. Please verify the URL and try again.
                    </p>
                </div>

                {/* Action */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors"
                >
                    <span className="material-symbols-outlined text-sm">home</span>
                    Return_Home
                </motion.a>

                {/* Technical Footer */}
                <div className="pt-12 flex items-center justify-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    <span>ERR_CODE: 404</span>
                    <span className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />
                    <span>PATH_INVALID</span>
                </div>
            </motion.div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/10" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/10" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/10" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/10" />
        </div>
    );
}
