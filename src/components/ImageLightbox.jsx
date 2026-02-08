import React, { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Typography, Modal, Fade, Backdrop } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ImageLightbox = ({
    images,
    open,
    onClose,
    initialIndex = 0,
    showThumbnails = true,
    showInfo = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [zoom, setZoom] = useState(1);
    const [favorites, setFavorites] = useState(new Set());

    // Reset index when opening
    useEffect(() => {
        if (open) {
            setCurrentIndex(initialIndex);
            setZoom(1);
        }
    }, [open, initialIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case 'Escape':
                    onClose();
                    break;
                case '+':
                case '=':
                    setZoom(z => Math.min(z + 0.25, 3));
                    break;
                case '-':
                    setZoom(z => Math.max(z - 0.25, 0.5));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, currentIndex, images.length]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setZoom(1);
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setZoom(1);
    }, [images.length]);

    const toggleFavorite = () => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(currentIndex)) {
                newFavorites.delete(currentIndex);
            } else {
                newFavorites.add(currentIndex);
            }
            return newFavorites;
        });
    };

    const handleDownload = () => {
        const currentImage = images[currentIndex];
        const link = document.createElement('a');
        link.href = currentImage.src;
        link.download = currentImage.title || `image-${currentIndex + 1}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 300,
                    sx: { bgcolor: 'rgba(0, 0, 0, 0.95)' },
                },
            }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        outline: 'none',
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            position: 'relative',
                            zIndex: 10,
                        }}
                    >
                        <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                            {currentIndex + 1} / {images.length}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton onClick={() => setZoom(z => Math.max(z - 0.25, 0.5))} sx={{ color: 'white' }}>
                                <ZoomOutIcon />
                            </IconButton>
                            <Typography sx={{ color: 'white', display: 'flex', alignItems: 'center', minWidth: 50, justifyContent: 'center' }}>
                                {Math.round(zoom * 100)}%
                            </Typography>
                            <IconButton onClick={() => setZoom(z => Math.min(z + 0.25, 3))} sx={{ color: 'white' }}>
                                <ZoomInIcon />
                            </IconButton>
                            <IconButton onClick={toggleFavorite} sx={{ color: favorites.has(currentIndex) ? '#E02B20' : 'white' }}>
                                {favorites.has(currentIndex) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                            <IconButton onClick={handleDownload} sx={{ color: 'white' }}>
                                <DownloadIcon />
                            </IconButton>
                            <IconButton onClick={onClose} sx={{ color: 'white' }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Main Image */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            px: { xs: 2, md: 10 },
                        }}
                    >
                        {/* Navigation Buttons */}
                        <IconButton
                            onClick={goToPrevious}
                            sx={{
                                position: 'absolute',
                                left: { xs: 10, md: 40 },
                                bgcolor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                                zIndex: 5,
                            }}
                        >
                            <ChevronLeftIcon sx={{ fontSize: 40 }} />
                        </IconButton>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={currentImage.src}
                                    alt={currentImage.title || ''}
                                    sx={{
                                        maxWidth: '100%',
                                        maxHeight: '70vh',
                                        objectFit: 'contain',
                                        transform: `scale(${zoom})`,
                                        transition: 'transform 0.2s ease',
                                        borderRadius: 2,
                                        boxShadow: '0 10px 60px rgba(0,0,0,0.5)',
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>

                        <IconButton
                            onClick={goToNext}
                            sx={{
                                position: 'absolute',
                                right: { xs: 10, md: 40 },
                                bgcolor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                                zIndex: 5,
                            }}
                        >
                            <ChevronRightIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Box>

                    {/* Image Info */}
                    {showInfo && currentImage.title && (
                        <Box sx={{ textAlign: 'center', py: 2 }}>
                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                {currentImage.title}
                            </Typography>
                            {currentImage.description && (
                                <Typography variant="body2" sx={{ color: 'grey.400', mt: 0.5 }}>
                                    {currentImage.description}
                                </Typography>
                            )}
                        </Box>
                    )}

                    {/* Thumbnails */}
                    {showThumbnails && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 1,
                                p: 2,
                                overflowX: 'auto',
                                '&::-webkit-scrollbar': { height: 6 },
                                '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.700', borderRadius: 3 },
                            }}
                        >
                            {images.map((image, index) => (
                                <Box
                                    key={index}
                                    onClick={() => { setCurrentIndex(index); setZoom(1); }}
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 1,
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        opacity: index === currentIndex ? 1 : 0.5,
                                        border: index === currentIndex ? '2px solid #E02B20' : '2px solid transparent',
                                        transition: 'all 0.2s',
                                        flexShrink: 0,
                                        '&:hover': { opacity: 1 },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={image.src}
                                        alt=""
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ImageLightbox;
