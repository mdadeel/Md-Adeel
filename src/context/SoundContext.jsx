import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const SoundContext = createContext();

export function SoundProvider({ children }) {
    const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('soundEnabled');
            return saved ? saved === 'true' : false; // Default off
        }
        return false;
    });

    const audioRef = useRef({});

    useEffect(() => {
        localStorage.setItem('soundEnabled', isSoundEnabled.toString());
    }, [isSoundEnabled]);

    // Preload sounds
    useEffect(() => {
        const sounds = {
            click: '/sounds/click.mp3',
            hover: '/sounds/hover.mp3',
            success: '/sounds/success.mp3',
            whoosh: '/sounds/whoosh.mp3',
        };

        Object.entries(sounds).forEach(([name, src]) => {
            const audio = new Audio(src);
            audio.volume = 0.3;
            audio.preload = 'auto';
            audioRef.current[name] = audio;
        });
    }, []);

    const playSound = useCallback((soundName) => {
        if (!isSoundEnabled) return;
        const audio = audioRef.current[soundName];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => { }); // Ignore autoplay errors
        }
    }, [isSoundEnabled]);

    const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

    return (
        <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
}
