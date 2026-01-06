import React from 'react';
import './ProfileCard.css';

export default function ProfileCard({
    avatarUrl = '/img/hero.jpg',
    name = 'Shahnawas Adeel',
    title = 'System Architect',
    handle = '@mdadeel',
    githubUrl = 'https://github.com/mdadeel',
    showUserInfo = true,
    showIcon = false,
    className = '',
}) {
    return (
        <div className={`profile-card-wrapper ${className}`}>
            <div className="profile-card">
                {/* Glow Effect - Static or Hover based via CSS if preferred, or remove if purely static */}
                <div className="profile-card-glow" />

                {/* Card Content */}
                <div className="profile-card-inner">
                    {/* Header: System Info */}
                    <div className="profile-card-header">
                        <div className="profile-card-id-marker">ID_AUTH_CORE</div>
                        <div className="profile-card-status-pulse">
                            <div className="pulse-dot" />
                            LIVE_LINK
                        </div>
                    </div>

                    {/* Avatar with Scanline */}
                    <div className="profile-card-avatar">
                        <div className="profile-card-scanline" />
                        <img src={avatarUrl} alt={name} />

                        {/* Biometric Markers */}
                        <div className="bio-marker bio-marker-tl">x88_AUTH</div>
                        <div className="bio-marker bio-marker-tr">72%_SYNC</div>
                        <div className="bio-marker bio-marker-bl">POS_23.8</div>
                        <div className="bio-marker bio-marker-br">v2.0.4</div>

                        <div className="profile-card-avatar-ring" />
                    </div>

                    {/* User Info */}
                    {showUserInfo && (
                        <div className="profile-card-info">
                            <h3 className="profile-card-name">{name}</h3>
                            <div className="profile-card-title-container">
                                <span className="profile-card-title">{title}</span>
                                <div className="profile-card-divider" />
                            </div>
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
                </div>

                {/* Decorative Elements */}
                <div className="profile-card-corner profile-card-corner-tl" />
                <div className="profile-card-corner profile-card-corner-br" />
            </div>
        </div>
    );
}
