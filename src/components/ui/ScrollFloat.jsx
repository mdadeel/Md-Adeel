import { motion } from 'framer-motion';
import { useMemo } from 'react';
import './ScrollFloat.css';

const ScrollFloat = ({
    children,
    containerClassName = '',
    textClassName = '',
    animationDuration = 0.5,
    ease = 'backOut',
    scrollStart = 0.2, // viewport percentage
    stagger = 0.03
}) => {
    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index) => (
            <motion.span
                className="char inline-block"
                key={index}
                variants={{
                    hidden: { opacity: 0, y: '50%', scale: 0.8 },
                    visible: { opacity: 1, y: '0%', scale: 1 }
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ));
    }, [children]);

    return (
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: stagger, duration: animationDuration, ease }}
            className={`scroll-float ${containerClassName}`}
        >
            <span className={`scroll-float-text ${textClassName}`}>
                {splitText}
            </span>
        </motion.h2>
    );
};

export default ScrollFloat;
