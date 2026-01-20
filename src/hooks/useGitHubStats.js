import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and cache GitHub statistics for a user.
 * Includes local caching for 1 hour to prevent rate limiting.
 */
export default function useGitHubStats(username = "mdadeel") {
    const [stats, setStats] = useState({
        repos: 0,
        followers: 0,
        stars: 0,
        loading: true,
        error: null
    });

    useEffect(() => {
        const CACHE_KEY = `github_stats_${username}`;
        const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

        async function fetchStats() {
            try {
                // 1. Check Cache
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data, timestamp } = JSON.parse(cached);
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        setStats({ ...data, loading: false, error: null });
                        return;
                    }
                }

                // 2. Fetch User Data
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                if (!userRes.ok) throw new Error("Failed to fetch user data");
                const userData = await userRes.json();

                // 3. Fetch Repos to sum Stars (limited to 100 per page for simplicity)
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposRes.ok) throw new Error("Failed to fetch repositories");
                const reposData = await reposRes.json();

                const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

                const newStats = {
                    repos: userData.public_repos,
                    followers: userData.followers,
                    stars: totalStars,
                };

                // 4. Update state and cache
                setStats({ ...newStats, loading: false, error: null });
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: newStats,
                    timestamp: Date.now()
                }));

            } catch (err) {
                console.error("GitHub API Error:", err);
                setStats(prev => ({ ...prev, loading: false, error: err.message }));
            }
        }

        fetchStats();
    }, [username]);

    return stats;
}
