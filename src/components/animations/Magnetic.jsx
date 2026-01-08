import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Magnetic({ children, strength = 0.5 }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * strength);
        y.set(middleY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const { type, props, key } = children;

    return React.cloneElement(
        children,
        {
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            ref,
            style: { x: mouseX, y: mouseY }
        }
    );
}
