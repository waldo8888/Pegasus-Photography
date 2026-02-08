import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box } from '@mui/material';

const ParallaxSection = ({ children, bgImage, speed = 0.5, height = '100vh', overlayColor = 'rgba(0,0,0,0.4)' }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", `${50 * speed}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    return (
        <Box
            ref={ref}
            sx={{
                position: 'relative',
                height: height,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: yBg,
                    zIndex: -1
                }}
            />
            {overlayColor && (
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: overlayColor, zIndex: 0 }} />
            )}
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                {children}
            </Box>
        </Box>
    );
};

export default ParallaxSection;
