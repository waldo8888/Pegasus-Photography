import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check for touch device
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            setIsTouchDevice(true);
            return;
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Use event delegation for better performance
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
                handleMouseEnter();
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
                handleMouseLeave();
            }
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: cursorXSpring,
                    top: cursorYSpring,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '2px solid #E02B20',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(224, 43, 32, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.15 }}
            />
            {/* Inner dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: cursorX,
                    top: cursorY,
                    width: 8,
                    height: 8,
                    marginLeft: 12,
                    marginTop: 12,
                    borderRadius: '50%',
                    backgroundColor: '#E02B20',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
            <style>{`
                @media (hover: hover) and (pointer: fine) {
                    * { cursor: none !important; }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
