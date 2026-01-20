import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { database } from '../../firebase/config';

export default function Reactions({ postId = 'about-post' }) {
    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

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
        // Trigger animation
        if (!hasLiked) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 700);
        }

        // Toggle like state
        const newLikedState = !hasLiked;
        setHasLiked(newLikedState);
        localStorage.setItem(`liked-${postId}`, newLikedState.toString());

        // Update Firebase
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

    return (
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
            {/* Like Button & Count */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleLike}
                    className="relative group"
                    aria-label={hasLiked ? 'Unlike' : 'Like'}
                >
                    {/* Heart Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-7 h-7 transition-all duration-200 ${hasLiked
                                ? 'fill-red-500 scale-100'
                                : 'fill-none stroke-[#b0b3b8] stroke-2 hover:stroke-white hover:scale-110'
                            } ${isAnimating ? 'animate-bounce' : ''}`}
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>

                    {/* Pop Animation */}
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

            {/* Share Button (Optional) */}
            <button className="flex items-center gap-2 text-[#b0b3b8] hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    );
}
