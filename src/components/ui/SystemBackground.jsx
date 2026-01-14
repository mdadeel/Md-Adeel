import React, { useEffect, useRef } from 'react';
import './SystemBackground.css';

const SystemBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (e) => {
            if (!bgRef.current) return;

            // Cancel any pending frame to ensure we only run the latest update
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            // Schedule the update for the next animation frame
            animationFrameId = requestAnimationFrame(() => {
                if (!bgRef.current) return;
                bgRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                bgRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="system-bg-wrapper" ref={bgRef}>
            {/* Base Grid */}
            <div className="system-grid" />

            {/* Noise Texture */}
            <div className="system-noise" />

            {/* Interactive Aura */}
            <div className="system-aura" />

            {/* Subtle Scanlines */}
            <div className="system-scanlines" />
        </div>
    );
};

export default SystemBackground;
