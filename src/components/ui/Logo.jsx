import { motion } from 'framer-motion';

const Logo = ({ className = "h-full w-full" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Letter S (Geometric & Corrected) */}
            <motion.path
                d="M25 35 H45 V50 H25 V65 H45"
                stroke="#36e27b"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* Letter A (Geometric & Centered) */}
            <motion.path
                d="M55 65 V35 H75 V65 M55 50 H75"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />
        </svg>
    );
};

export default Logo;
