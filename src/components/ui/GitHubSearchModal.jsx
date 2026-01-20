import { useState, useEffect, useRef } from 'react';

export default function GitHubSearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    // Search GitHub repos
    const searchRepos = async (searchQuery) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=stars&per_page=10`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }

            const data = await response.json();
            setResults(data.items || []);
        } catch (err) {
            setError(err.message);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query) searchRepos(query);
        }, 400);
        return () => clearTimeout(timer);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-[600px] mx-4 bg-[#1c1c1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {/* Search Header */}
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-text-dim/60 shrink-0">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search GitHub repositories..."
                        className="flex-1 bg-transparent text-white text-[15px] outline-none placeholder:text-text-dim/40"
                    />
                    {loading && (
                        <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    )}
                    <button
                        onClick={onClose}
                        className="text-text-dim/40 hover:text-white transition-colors text-[11px] font-bold px-2 py-1 border border-white/10 rounded"
                    >
                        ESC
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto">
                    {error && (
                        <div className="p-4 text-center text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {!query && (
                        <div className="p-6 text-center text-text-dim/40 text-sm">
                            Type to search GitHub repositories
                        </div>
                    )}

                    {query && !loading && results.length === 0 && !error && (
                        <div className="p-6 text-center text-text-dim/40 text-sm">
                            No repositories found
                        </div>
                    )}

                    {results.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                            <img
                                src={repo.owner?.avatar_url}
                                alt={repo.owner?.login}
                                className="w-8 h-8 rounded-full shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-accent text-sm font-bold truncate">
                                        {repo.full_name}
                                    </span>
                                    {repo.private && (
                                        <span className="text-[9px] px-1.5 py-0.5 bg-white/10 rounded text-text-dim/60">Private</span>
                                    )}
                                </div>
                                {repo.description && (
                                    <p className="text-text-dim/60 text-xs mt-1 line-clamp-2">
                                        {repo.description}
                                    </p>
                                )}
                                <div className="flex items-center gap-4 mt-2 text-text-dim/40 text-[11px]">
                                    {repo.language && (
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                            <span>{repo.language}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1">
                                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <span>{repo.stargazers_count.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                                            <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
                                        </svg>
                                        <span>{repo.forks_count.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[10px] text-text-dim/30">
                    <span>Powered by GitHub API</span>
                    <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 border border-white/10 rounded text-[9px]">↑↓</span>
                        <span>to navigate</span>
                        <span className="px-1.5 py-0.5 border border-white/10 rounded text-[9px]">↵</span>
                        <span>to open</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
