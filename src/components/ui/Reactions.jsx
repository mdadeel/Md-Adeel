import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { database } from '../../firebase/config';

const SHARE_PLATFORMS = [
    {
        name: 'X',
        icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
        getUrl: (url, text) => `https://x.com/intent/tweet?url=${url}&text=${text}`
    },
    {
        name: 'Facebook',
        icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.387H7.078v-3.467h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.467h-2.796v8.387C19.612 23.027 24 18.062 24 12.073z',
        getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    {
        name: 'LinkedIn',
        icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
        getUrl: (url, text) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    },
    {
        name: 'WhatsApp',
        icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
        getUrl: (url, text) => `https://wa.me/?text=${text}%20${url}`
    },
    {
        name: 'Copy Link',
        icon: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
        action: 'copy'
    }
];

export default function Reactions({ postId = 'about-post' }) {
    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copied, setCopied] = useState(false);

    const siteUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = 'Check out this portfolio!';

    // Get user's previous like from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(`liked-${postId}`);
        if (saved === 'true') setHasLiked(true);
    }, [postId]);

    // Listen to real-time like count from Firebase
    useEffect(() => {
        const likesRef = ref(database, `likes/${postId}`);
        const unsubscribe = onValue(likesRef, (snapshot) => {
            setLikeCount(snapshot.val() || 0);
        });
        return () => unsubscribe();
    }, [postId]);

    // Handle like click
    const handleLike = async () => {
        if (!hasLiked) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 700);
        }

        const newLikedState = !hasLiked;
        setHasLiked(newLikedState);
        localStorage.setItem(`liked-${postId}`, newLikedState.toString());

        try {
            const likesRef = ref(database, `likes/${postId}`);
            await runTransaction(likesRef, (current) => {
                if (newLikedState) {
                    return (current || 0) + 1;
                } else {
                    return Math.max((current || 1) - 1, 0);
                }
            });
        } catch (error) {
            console.error('Error updating like:', error);
        }
    };

    // Handle share
    const handleShare = async (platform) => {
        const encodedUrl = encodeURIComponent(siteUrl);
        const encodedText = encodeURIComponent(shareText);

        if (platform.action === 'copy') {
            try {
                await navigator.clipboard.writeText(siteUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        } else if (platform.getUrl) {
            window.open(platform.getUrl(encodedUrl, encodedText), '_blank', 'width=600,height=400');
        }
        setShowShareMenu(false);
    };

    // Native share (mobile)
    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shahnawas Adeel - Portfolio',
                    text: shareText,
                    url: siteUrl,
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setShowShareMenu(true);
                }
            }
        } else {
            setShowShareMenu(!showShareMenu);
        }
    };

    return (
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
            {/* Like Button & Count */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleLike}
                    className="relative group"
                    aria-label={hasLiked ? 'Unlike' : 'Like'}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-7 h-7 transition-all duration-200 ${hasLiked
                                ? 'fill-red-500 scale-100'
                                : 'fill-none stroke-[#b0b3b8] stroke-2 hover:stroke-white hover:scale-110'
                            } ${isAnimating ? 'animate-bounce' : ''}`}
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>

                    {isAnimating && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="absolute w-10 h-10 bg-red-500/30 rounded-full animate-ping" />
                        </span>
                    )}
                </button>

                <span className={`text-[14px] font-semibold transition-colors ${hasLiked ? 'text-red-500' : 'text-[#b0b3b8]'
                    }`}>
                    {likeCount > 0 ? likeCount.toLocaleString() : ''} {likeCount === 1 ? 'like' : likeCount > 1 ? 'likes' : 'Be the first to like'}
                </span>
            </div>

            {/* Share Button */}
            <div className="relative">
                <button
                    onClick={handleNativeShare}
                    className="flex items-center gap-2 text-[#b0b3b8] hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinejoin="round" strokeLinecap="round" />
                    </svg>
                    <span className="text-[13px] font-bold hidden sm:inline">Share</span>
                </button>

                {/* Share Menu */}
                {showShareMenu && (
                    <div
                        className="absolute bottom-full right-0 mb-2 bg-[#242526] rounded-xl p-2 shadow-xl border border-white/10 min-w-[180px]"
                        onMouseLeave={() => setShowShareMenu(false)}
                    >
                        {SHARE_PLATFORMS.map((platform) => (
                            <button
                                key={platform.name}
                                onClick={() => handleShare(platform)}
                                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#b0b3b8]">
                                    <path d={platform.icon} />
                                </svg>
                                <span className="text-[13px] text-white font-medium">
                                    {platform.action === 'copy' && copied ? 'Copied!' : platform.name}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
