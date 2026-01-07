import React, { useEffect, useRef } from 'react';
import './SystemBackground.css';

const SystemBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!bgRef.current) return;

            // Update mouse position for the radial aura
            const x = e.clientX;
            const y = e.clientY;

            bgRef.current.style.setProperty('--mouse-x', `${x}px`);
            bgRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
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
