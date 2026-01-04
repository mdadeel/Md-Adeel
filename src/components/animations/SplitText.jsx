import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

export default function SplitText({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '0px',
    textAlign = 'center',
    onAnimationComplete,
}) {
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedLetters = text.split('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        animatedLetters.length,
        animatedLetters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next) => {
                    await next(animationTo);
                    if (onAnimationComplete && i === animatedLetters.length - 1) onAnimationComplete();
                }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{ textAlign, display: 'inline-block', whiteSpace: 'pre-wrap' }}
        >
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props,
                        display: 'inline-block',
                        willChange: 'transform, opacity',
                    }}
                >
                    {animatedLetters[index] === ' ' ? '\u00A0' : animatedLetters[index]}
                </animated.span>
            ))}
        </p>
    );
}
