import { motion } from 'framer-motion';

const Logo = ({ className = "h-full w-full" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background geometric shape (optional subtle hint) */}
            <motion.path
                d="M10 30 L30 10 L70 10 L90 30 L90 70 L70 90 L30 90 L10 70 Z"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Letter S (Geometric) */}
            <motion.path
                d="M35 35 H55 V45 H35 V65 H55"
                stroke="#36e27b"
                strokeWidth="8"
                strokeLinecap="square"
                strokeLinejoin="miter"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* Letter A (Geometric) */}
            <motion.path
                d="M65 65 V35 H85 V65 M65 50 H85"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="square"
                strokeLinejoin="miter"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            {/* Accent Dot */}
            <motion.circle
                cx="15"
                cy="15"
                r="4"
                fill="#36e27b"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1.8, duration: 0.5 }}
            />
        </svg>
    );
};

export default Logo;
