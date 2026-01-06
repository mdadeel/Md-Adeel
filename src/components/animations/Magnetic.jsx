import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Magnetic({ children, strength = 0.5 }) {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        let rafId = null;
        const handleMouseMove = (e) => {
            if (rafId) return; // Throttle with RAF
            rafId = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = magnetic.current.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x * strength);
                yTo(y * strength);
                rafId = null;
            });
        };

        const handleMouseLeave = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            xTo(0);
            yTo(0);
        };

        magnetic.current.addEventListener("mousemove", handleMouseMove);
        magnetic.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (magnetic.current) {
                magnetic.current.removeEventListener("mousemove", handleMouseMove);
                magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [strength]);

    return React.cloneElement(children, { ref: magnetic });
}
