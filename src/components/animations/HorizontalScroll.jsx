import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { Box } from '@mui/material';

const HorizontalScroll = ({ children }) => {
    const targetRef = useRef(null);
    const contentRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState('300vh'); // Default fallback

    // 1. Measure the exact width of all horizontal content
    useEffect(() => {
        const calculateWidth = () => {
            if (contentRef.current) {
                const width = contentRef.current.scrollWidth;
                const windowWidth = window.innerWidth;

                // Content width - window width = total distance we need to scroll horizontally
                const scrollDistance = width - windowWidth;

                // We convert that horizontal distance into vertical pixels to scroll
                // Adding window.innerHeight ensures we have the viewport height + the scrollable distance
                setContainerHeight(`${scrollDistance + window.innerHeight}px`);
                setContentWidth(scrollDistance);
            }
        };

        calculateWidth();

        // Recalculate on resize
        window.addEventListener('resize', calculateWidth);
        // Also recalculate after a short delay to ensure images/fonts are loaded
        const timer = setTimeout(calculateWidth, 500);

        return () => {
            window.removeEventListener('resize', calculateWidth);
            clearTimeout(timer);
        };
    }, [children]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the progress for that "premium" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 2. Map vertical scroll progress (0 to 1) to exact horizontal pixel shift
    // From 0px to -contentWidth px
    const x = useTransform(smoothProgress, [0, 1], ["0px", `-${contentWidth}px`]);

    return (
        <Box
            ref={targetRef}
            sx={{
                height: containerHeight, // Dynamic height ensures pinned state lasts exactly long enough
                position: "relative"
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    bgcolor: 'background.default',
                    willChange: 'transform' // Performance optimization
                }}
            >
                <motion.div
                    ref={contentRef}
                    style={{
                        x,
                        display: "flex",
                        gap: "60px", // Increased gap for airy feel
                        paddingLeft: "5vw",
                        paddingRight: "5vw", // Add padding at end so last item isn't flush with edge
                    }}
                >
                    {children}
                </motion.div>
            </Box>
        </Box>
    );
};

export default HorizontalScroll;
