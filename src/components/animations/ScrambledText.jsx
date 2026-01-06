import React, { useState, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|;:,.<>?';

export default function ScrambledText({ text, duration = 1.5, revealSpeed = 0.1 }) {
    const [displayValue, setDisplayValue] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const scramble = useCallback(() => {
        let iterations = 0;
        setIsAnimating(true);

        const interval = setInterval(() => {
            setDisplayValue(
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return char;
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            if (iterations >= text.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }

            iterations += revealSpeed;
        }, 30);
    }, [text, revealSpeed]);

    useEffect(() => {
        scramble();
    }, [scramble]);

    return (
        <span className="font-mono">
            {displayValue}
        </span>
    );
}
