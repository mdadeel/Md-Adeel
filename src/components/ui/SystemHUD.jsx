import React from 'react';
import { motion } from 'framer-motion';
import './SystemHUD.css';

export default function SystemHUD({
    avatarUrl = '/img/hero.jpg',
    name = 'Shahnawas Adeel',
    title = 'System Architect'
}) {
    return (
        <div className="system-hud-container">
            {/* Top Info Strip */}
            <div className="system-status">
                <div className="status-dot" />
                <span className="tracking-[0.2em]">SYSTEM_STABLE // AUTH_LINK_ACTIVE</span>
            </div>

            {/* Main Optical Core */}
            <div className="optical-core group">
                {/* Image */}
                <img src={avatarUrl} alt={name} />

                {/* HUD Elements */}
                <div className="hud-scanline" />

                {/* Diagnostic Overlays */}
                <div className="hud-marker top-4 left-4 border-l-2">X-REF_882</div>
                <div className="hud-marker top-4 right-4">SYNC_98.2%</div>
                <div className="hud-marker bottom-12 left-4">V_CORE_2.4.0</div>
                <div className="hud-marker bottom-12 right-4">POS_TRK_ON</div>

                {/* Animated Brackets */}
                <div className="core-bracket-bl" />
                <div className="core-bracket-br" />

                {/* Optical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

         

            {/* Technical Detail Lines (Decorative) */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-primary/30 hidden lg:block" />
        </div>
    );
}
