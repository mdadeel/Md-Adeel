import { useEffect, useRef } from 'react';

export default function SnowEffect({
    count = 50, // Reduced from 100 to 50
    color = '#ffffff',
    speed = 0.5, // Reduced from 1
    opacity = 0.2 // Reduced from 0.4
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Check if device has limited performance
        const isLowPerformance = window.navigator &&
            (window.navigator.hardwareConcurrency < 4 ||
             window.navigator.deviceMemory < 4);

        // Reduce particle count on low performance devices
        const adjustedCount = isLowPerformance ? Math.floor(count / 2) : count;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initialize particles
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < adjustedCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5, // Smaller particles
                    speedY: Math.random() * speed + 0.25, // Slower speed
                    speedX: (Math.random() - 0.5) * 0.5, // Slower speed
                    opacity: Math.random() * opacity * 0.7 // Reduced opacity
                });
            }
        };

        // Animation loop with performance optimization
        const animate = () => {
            // Only clear and redraw every other frame to reduce CPU load
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();

                // Update position
                p.y += p.speedY;
                p.x += p.speedX;

                // Reset if out of bounds
                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, color, speed, opacity]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
}
