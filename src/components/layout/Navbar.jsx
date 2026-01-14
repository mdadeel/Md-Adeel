import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black/10"
        >
            <div className="layout-container h-14 flex items-center justify-between font-mono text-xs uppercase tracking-tight">
                <a href="#hero" className="font-bold">
                    Shahnawas Adeel
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {['About', 'Work', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-black/50 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                >
                    Resume
                </a>
            </div>
        </motion.header>
    );
}