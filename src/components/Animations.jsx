import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Slider } from '@mui/material';
import { motion, useInView } from 'framer-motion';

/**
 * BeforeAfter - Interactive photo comparison slider component
 */
export const BeforeAfter = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    height = 500
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                width: '100%',
                height,
                borderRadius: 3,
                overflow: 'hidden',
                cursor: isDragging ? 'ew-resize' : 'default',
                userSelect: 'none',
            }}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* After Image (background) */}
            <Box
                component="img"
                src={afterImage}
                alt={afterLabel}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            {/* Before Image (clipped) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            >
                <Box
                    component="img"
                    src={beforeImage}
                    alt={beforeLabel}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* Slider Handle */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: `${sliderPosition}%`,
                    transform: 'translateX(-50%)',
                    height: '100%',
                    width: 4,
                    bgcolor: 'white',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    cursor: 'ew-resize',
                    zIndex: 10,
                }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
            >
                {/* Handle Circle */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        bgcolor: 'white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            borderStyle: 'solid',
                        },
                        '&::before': {
                            borderWidth: '6px 8px 6px 0',
                            borderColor: 'transparent #333 transparent transparent',
                            left: 8,
                        },
                        '&::after': {
                            borderWidth: '6px 0 6px 8px',
                            borderColor: 'transparent transparent transparent #333',
                            right: 8,
                        },
                    }}
                />
            </Box>

            {/* Labels */}
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                }}
            >
                {beforeLabel}
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                }}
            >
                {afterLabel}
            </Typography>
        </Box>
    );
};

/**
 * ScrollReveal - Wrapper for scroll-triggered animations
 */
export const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    threshold = 0.2,
    once = true,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            scale: direction === 'scale' ? 0.9 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

/**
 * StaggerChildren - Wrapper for staggered child animations
 */
export const StaggerChildren = ({
    children,
    staggerDelay = 0.1,
    containerDelay = 0,
    threshold = 0.1,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: containerDelay,
                    },
                },
            }}
        >
            {React.Children.map(children, (child) => (
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

/**
 * ParallaxImage - Image with parallax scrolling effect
 */
export const ParallaxImage = ({ src, alt, height = 400, speed = 0.3 }) => {
    const [offset, setOffset] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.innerHeight - rect.top;
            setOffset(scrolled * speed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <Box
            ref={ref}
            sx={{
                height,
                overflow: 'hidden',
                borderRadius: 3,
                position: 'relative',
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `calc(100% + ${height * speed * 2}px)`,
                    objectFit: 'cover',
                    transform: `translateY(${-offset}px)`,
                }}
            />
        </Box>
    );
};

/**
 * AnimatedCounter - Number counter animation
 */
export const AnimatedCounter = ({ target, duration = 2, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

/**
 * GlowCard - Card with animated glow effect on hover
 */
export const GlowCard = ({ children, glowColor = '#E02B20', intensity = 0.3 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <Box
            ref={cardRef}
            onMouseMove={handleMouseMove}
            sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}${Math.round(intensity * 255).toString(16).padStart(2, '0')}, transparent 40%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    pointerEvents: 'none',
                    zIndex: 1,
                },
                '&:hover::before': {
                    opacity: 1,
                },
            }}
        >
            {children}
        </Box>
    );
};

export default {
    BeforeAfter,
    ScrollReveal,
    StaggerChildren,
    ParallaxImage,
    AnimatedCounter,
    GlowCard
};
