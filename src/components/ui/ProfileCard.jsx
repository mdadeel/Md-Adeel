import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './ProfileCard.css';

export default function ProfileCard({
    avatarUrl = '/img/hero.jpg',
    name = 'Shahnawas Adeel',
    title = 'System Architect',
    handle = '@mdadeel',
    githubUrl = 'https://github.com/mdadeel',
    showUserInfo = true,
    showIcon = false,
    enableMobileTilt = true,
    className = '',
}) {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card) return;

        let bounds;
        let isTouching = false;

        const rotateToMouse = (e) => {
            const mouseX = e.clientX ?? e.touches?.[0]?.clientX;
            const mouseY = e.clientY ?? e.touches?.[0]?.clientY;

            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2,
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            gsap.to(card, {
                rotateX: -center.y / 15,
                rotateY: center.x / 15,
                duration: 0.5,
                ease: 'power2.out',
            });

            if (glow) {
                gsap.to(glow, {
                    background: `
            radial-gradient(
              circle at ${leftX}px ${topY}px,
              rgba(54, 226, 123, 0.3),
              transparent 40%
            )
          `,
                    duration: 0.3,
                });
            }
        };

        const handleEnter = () => {
            bounds = card.getBoundingClientRect();
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        };

        const handleLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.5,
                ease: 'power2.out',
            });
            if (glow) {
                gsap.to(glow, { background: 'transparent', duration: 0.3 });
            }
        };

        const handleTouchStart = (e) => {
            if (!enableMobileTilt) return;
            isTouching = true;
            bounds = card.getBoundingClientRect();
            rotateToMouse(e);
        };

        const handleTouchMove = (e) => {
            if (!enableMobileTilt || !isTouching) return;
            rotateToMouse(e);
        };

        const handleTouchEnd = () => {
            isTouching = false;
            handleLeave();
        };

        // Desktop events
        card.addEventListener('mouseenter', handleEnter);
        card.addEventListener('mousemove', rotateToMouse);
        card.addEventListener('mouseleave', handleLeave);

        // Mobile events
        if (enableMobileTilt) {
            card.addEventListener('touchstart', handleTouchStart, { passive: true });
            card.addEventListener('touchmove', handleTouchMove, { passive: true });
            card.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            card.removeEventListener('mouseenter', handleEnter);
            card.removeEventListener('mousemove', rotateToMouse);
            card.removeEventListener('mouseleave', handleLeave);
            card.removeEventListener('touchstart', handleTouchStart);
            card.removeEventListener('touchmove', handleTouchMove);
            card.removeEventListener('touchend', handleTouchEnd);
        };
    }, [enableMobileTilt]);

    return (
        <div className={`profile-card-wrapper ${className}`}>
            <div ref={cardRef} className="profile-card">
                {/* Glow Effect */}
                <div ref={glowRef} className="profile-card-glow" />

                {/* Card Content */}
                <div className="profile-card-inner">
                    {/* Avatar */}
                    <div className="profile-card-avatar">
                        <img src={avatarUrl} alt={name} />
                        <div className="profile-card-avatar-ring" />
                    </div>

                    {/* User Info */}
                    {showUserInfo && (
                        <div className="profile-card-info">
                            <h3 className="profile-card-name">{name}</h3>
                            <p className="profile-card-title">{title}</p>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-card-handle-btn"
                            >
                                <svg className="profile-card-handle-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                {handle}
                            </a>
                        </div>
                    )}

                    {/* Icon */}
                    {showIcon && (
                        <div className="profile-card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Decorative Elements */}
                <div className="profile-card-corner profile-card-corner-tl" />
                <div className="profile-card-corner profile-card-corner-br" />
            </div>
        </div>
    );
}
