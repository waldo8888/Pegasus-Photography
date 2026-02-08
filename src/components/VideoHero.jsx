import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, IconButton, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const MotionBox = motion(Box);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
};

/**
 * VideoHero Component
 * 
 * A dynamic hero section with background video, overlay, and content.
 * Falls back to an image if video fails to load.
 * 
 * @param {Object} props
 * @param {string} props.videoSrc - URL to the video file (MP4 recommended)
 * @param {string} props.posterSrc - URL to the fallback/poster image
 * @param {string} props.overline - Small text above the title (e.g., "For Seniors")
 * @param {string} props.title - Main headline
 * @param {string} props.subtitle - Supporting text below title
 * @param {string} props.primaryCta - Primary button text
 * @param {string} props.primaryCtaLink - Primary button link
 * @param {string} props.secondaryCta - Secondary button text (optional)
 * @param {string} props.secondaryCtaLink - Secondary button link
 * @param {string} props.height - Hero height (default: '100vh')
 * @param {string} props.overlayOpacity - Overlay darkness 0-1 (default: 0.5)
 * @param {string} props.contentAlign - 'left', 'center', or 'right' (default: 'left')
 */
const VideoHero = ({
    videoSrc,
    posterSrc,
    overline,
    title,
    subtitle,
    primaryCta,
    primaryCtaLink = '#',
    secondaryCta,
    secondaryCtaLink = '#',
    height = '100vh',
    overlayOpacity = 0.5,
    contentAlign = 'left'
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [videoFailed, setVideoFailed] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented
                setIsPlaying(false);
            });
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoError = () => {
        setVideoFailed(true);
    };

    const alignmentStyles = {
        left: { textAlign: 'left', alignItems: 'flex-start' },
        center: { textAlign: 'center', alignItems: 'center' },
        right: { textAlign: 'right', alignItems: 'flex-end' }
    };

    return (
        <Box sx={{
            position: 'relative',
            height,
            overflow: 'hidden',
            bgcolor: '#111'
        }}>
            {/* Video Background */}
            {!videoFailed && videoSrc ? (
                <Box
                    component="video"
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={posterSrc}
                    onError={handleVideoError}
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1 - overlayOpacity + 0.3
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </Box>
            ) : (
                <Box
                    component="img"
                    src={posterSrc}
                    alt=""
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1 - overlayOpacity + 0.3
                    }}
                />
            )}

            {/* Gradient Overlay */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(
                    to bottom,
                    rgba(0,0,0,${overlayOpacity * 0.5}) 0%,
                    rgba(0,0,0,${overlayOpacity}) 50%,
                    rgba(0,0,0,${overlayOpacity * 1.2}) 100%
                )`
            }} />

            {/* Content */}
            <Container sx={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                ...alignmentStyles[contentAlign]
            }}>
                <MotionBox
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    sx={{
                        maxWidth: 700,
                        color: 'white'
                    }}
                >
                    {overline && (
                        <Chip
                            label={overline}
                            sx={{
                                mb: 3,
                                bgcolor: 'primary.main',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.9rem'
                            }}
                        />
                    )}

                    <Typography
                        variant="h1"
                        fontWeight={800}
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                            lineHeight: 1.1,
                            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                        }}
                    >
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 400,
                                opacity: 0.9,
                                maxWidth: 600,
                                mx: contentAlign === 'center' ? 'auto' : 0
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent={contentAlign === 'center' ? 'center' : 'flex-start'}
                    >
                        {primaryCta && (
                            <Button
                                variant="contained"
                                size="large"
                                href={primaryCtaLink}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                }}
                            >
                                {primaryCta}
                            </Button>
                        )}
                        {secondaryCta && (
                            <Button
                                variant="outlined"
                                size="large"
                                href={secondaryCtaLink}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderColor: 'white',
                                    color: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                {secondaryCta}
                            </Button>
                        )}
                    </Stack>
                </MotionBox>
            </Container>

            {/* Video Controls */}
            {!videoFailed && videoSrc && (
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: 'absolute',
                        bottom: 24,
                        right: 24,
                        zIndex: 3
                    }}
                >
                    <IconButton
                        onClick={togglePlay}
                        sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                        }}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton
                        onClick={toggleMute}
                        sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                        }}
                    >
                        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </IconButton>
                </Stack>
            )}

            {/* Scroll Indicator */}
            <MotionBox
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3
                }}
            >
                <MotionBox
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    sx={{
                        width: 24,
                        height: 40,
                        border: '2px solid rgba(255,255,255,0.5)',
                        borderRadius: 12,
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 1
                    }}
                >
                    <Box sx={{
                        width: 4,
                        height: 8,
                        bgcolor: 'rgba(255,255,255,0.5)',
                        borderRadius: 2
                    }} />
                </MotionBox>
            </MotionBox>
        </Box>
    );
};

export default VideoHero;
