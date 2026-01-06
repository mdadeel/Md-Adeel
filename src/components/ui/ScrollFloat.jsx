import { useEffect, useMemo, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
    children,
    scrollContainerRef,
    containerClassName = '',
    textClassName = '',
    animationDuration = 1.5, // Increased duration for smoother animation
    ease = 'power2.out', // Changed to less intensive easing
    scrollStart = 'center bottom+=50%',
    scrollEnd = 'bottom bottom-=40%',
    stagger = 0.05 // Increased stagger for less intensive animation
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index) => (
            <span className="char" key={index}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const charElements = el.querySelectorAll('.char');

        // Use a more performance-friendly animation
        gsap.fromTo(
            charElements,
            {
                willChange: 'opacity, transform',
                opacity: 0,
                y: 50, // Changed from yPercent to y for better performance
                scale: 0.8, // Changed from separate scaleX/scaleY to scale
                transformOrigin: '50% 0%'
            },
            {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: 0.5, // Reduced scrub for better performance
                    onEnter: () => gsap.set(charElements, { clearProps: "all" }), // Clear props after animation
                    onLeave: () => gsap.set(charElements, { clearProps: "all" })
                }
            }
        );

        // Cleanup function
        return () => {
            if (ScrollTrigger.getScrollTrigger) {
                ScrollTrigger.getScrollTrigger({
                    trigger: el,
                    scroller
                })?.kill();
            }
            gsap.killTweensOf(charElements);
        };
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
            <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
        </h2>
    );
};

export default ScrollFloat;
