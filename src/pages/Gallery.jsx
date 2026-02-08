import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Tabs, Tab, Chip, IconButton, Dialog, DialogContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SectionHeader from '../components/SectionHeader';
import ImageLightbox from '../components/ImageLightbox';

const MotionBox = motion(Box);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Sample gallery data with size variations for masonry layout
const galleryItems = [
    // Seniors - Featured large images
    { id: 1, src: '/images/gallery/senior-outdoor-1.jpg', category: 'seniors', title: 'Emma - Nature Session', description: 'Autumn outdoor portrait with golden hour lighting', size: 'large' },
    { id: 2, src: '/images/gallery/senior-urban-1.jpg', category: 'seniors', title: 'Marcus - Downtown', description: 'Urban portrait in the city', size: 'medium' },
    { id: 3, src: '/images/gallery/graduation-1.jpg', category: 'seniors', title: 'Sophia - Graduation Day', description: 'Cap and gown celebration', size: 'tall' },
    { id: 4, src: '/images/gallery/senior-outdoor-1.jpg', category: 'seniors', title: 'James - Park Session', description: 'Natural light senior portraits', size: 'small' },
    { id: 5, src: '/images/gallery/senior-urban-1.jpg', category: 'seniors', title: 'Olivia - City Vibes', description: 'Modern urban aesthetic', size: 'wide' },
    { id: 6, src: '/images/gallery/graduation-1.jpg', category: 'seniors', title: 'Ethan - Graduation', description: 'Campus graduation portraits', size: 'small' },
    // Underclass
    { id: 7, src: '/images/gallery/school-group-1.jpg', category: 'underclass', title: 'Class of 2028', description: 'Annual class photo', size: 'wide' },
    { id: 8, src: '/images/gallery/school-group-1.jpg', category: 'underclass', title: 'Picture Day', description: 'Individual school portraits', size: 'medium' },
    { id: 9, src: '/images/gallery/family-portraits-1.jpg', category: 'underclass', title: 'Sibling Session', description: 'Family and sibling portraits', size: 'tall' },
    { id: 10, src: '/images/gallery/school-group-1.jpg', category: 'underclass', title: 'Group Photo', description: 'Student group photography', size: 'small' },
    // Sports
    { id: 11, src: '/images/gallery/sports-team-1.jpg', category: 'sports', title: 'Soccer Champions', description: 'Team celebration photo', size: 'large' },
    { id: 12, src: '/images/gallery/sports-team-1.jpg', category: 'sports', title: 'Basketball Team', description: 'Varsity team portraits', size: 'medium' },
    { id: 13, src: '/images/gallery/sports-team-1.jpg', category: 'sports', title: 'Track & Field', description: 'Athletic action shots', size: 'small' },
    // Events
    { id: 14, src: '/images/gallery/graduation-1.jpg', category: 'events', title: 'Graduation Ceremony', description: 'Commencement day celebration', size: 'tall' },
    { id: 15, src: '/images/gallery/family-portraits-1.jpg', category: 'events', title: 'Family Reunion', description: 'Multi-generational family portraits', size: 'wide' },
    { id: 16, src: '/images/gallery/senior-outdoor-1.jpg', category: 'events', title: 'Prom Night', description: 'Formal dance photography', size: 'medium' }
];

// Size configurations for masonry grid
const sizeConfig = {
    large: { gridColumn: 'span 2', gridRow: 'span 2', aspectRatio: '1/1' },
    tall: { gridColumn: 'span 1', gridRow: 'span 2', aspectRatio: '3/5' },
    wide: { gridColumn: 'span 2', gridRow: 'span 1', aspectRatio: '16/9' },
    medium: { gridColumn: 'span 1', gridRow: 'span 1', aspectRatio: '4/5' },
    small: { gridColumn: 'span 1', gridRow: 'span 1', aspectRatio: '1/1' }
};

const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'seniors', label: 'Senior Portraits' },
    { value: 'underclass', label: 'Underclass' },
    { value: 'sports', label: 'Sports & Teams' },
    { value: 'events', label: 'Events' }
];

const GalleryImage = ({ item, onClick, index }) => {
    const config = sizeConfig[item.size] || sizeConfig.medium;

    return (
        <MotionBox
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            onClick={onClick}
            sx={{
                gridColumn: config.gridColumn,
                gridRow: config.gridRow,
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
                },
                '&:hover .overlay': {
                    opacity: 1
                },
                '&:hover .image': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <Box
                className="image"
                component="img"
                src={item.src}
                alt={item.title}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    aspectRatio: config.aspectRatio,
                    transition: 'transform 0.6s ease'
                }}
            />
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3
                }}
            >
                <Typography variant="h6" fontWeight={700} color="white" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="grey.300">
                    {item.description}
                </Typography>
            </Box>
        </MotionBox>
    );
};

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    const handleCategoryChange = (event, newValue) => {
        setActiveCategory(newValue);
    };

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % filteredItems.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#111',
                color: 'white',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/gallery-hero.jpg"
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(17,17,17,1) 100%)'
                }} />

                <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Chip label="📸 Our Work" sx={{ mb: 2, bgcolor: 'primary.main', color: 'white' }} />
                        <Typography variant="h2" fontWeight={800} gutterBottom>
                            Inspiration Gallery
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto' }}>
                            Browse our latest work for poses, props, and location ideas for your own session.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Gallery Section */}
            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container>
                    {/* Filter Tabs */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Tabs
                            value={activeCategory}
                            onChange={handleCategoryChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                '& .MuiTab-root': {
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    mx: 1
                                }
                            }}
                        >
                            {categories.map((cat) => (
                                <Tab key={cat.value} value={cat.value} label={cat.label} />
                            ))}
                        </Tabs>
                    </Box>

                    {/* Masonry Gallery Grid */}
                    <AnimatePresence mode="wait">
                        <Box
                            key={activeCategory}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: 'repeat(2, 1fr)',
                                    sm: 'repeat(3, 1fr)',
                                    md: 'repeat(4, 1fr)'
                                },
                                gridAutoRows: { xs: '180px', sm: '200px', md: '220px' },
                                gap: 2,
                                gridAutoFlow: 'dense'
                            }}
                        >
                            {filteredItems.map((item, index) => (
                                <GalleryImage
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    onClick={() => openLightbox(index)}
                                />
                            ))}
                        </Box>
                    </AnimatePresence>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <Box sx={{ textAlign: 'center', py: 10 }}>
                            <Typography variant="h5" color="text.secondary">
                                No photos in this category yet.
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>

            {/* Enhanced Lightbox */}
            <ImageLightbox
                images={filteredItems}
                open={lightboxOpen}
                onClose={closeLightbox}
                initialIndex={currentImage}
            />

            {/* CTA Section */}
            <Box sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>
                        Ready to Create Your Own?
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Book a session and let's capture your unique story.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Chip
                            label="Book Senior Session"
                            component="a"
                            href="/for-seniors"
                            clickable
                            sx={{
                                bgcolor: 'primary.main',
                                color: 'white',
                                fontSize: '1rem',
                                py: 3,
                                px: 2,
                                '&:hover': { bgcolor: 'primary.dark' }
                            }}
                        />
                        <Chip
                            label="Contact Us"
                            component="a"
                            href="/contact"
                            clickable
                            variant="outlined"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                fontSize: '1rem',
                                py: 3,
                                px: 2,
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                            }}
                        />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Gallery;
