import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid, Chip, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplayIcon from '@mui/icons-material/Replay';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Link } from 'react-router-dom';
import ImageLightbox from '../components/ImageLightbox';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sampleProofs = [
    { id: 1, src: '/images/gallery/senior-outdoor-1.jpg', title: 'Pose 1 - Traditional', description: 'Classic portrait with standard background' },
    { id: 2, src: '/images/gallery/senior-urban-1.jpg', title: 'Pose 2 - Casual', description: 'Relaxed pose with natural expression' },
    { id: 3, src: '/images/gallery/graduation-1.jpg', title: 'Pose 3 - Formal', description: 'Formal portrait with cap and gown' },
    { id: 4, src: '/images/gallery/family-portraits-1.jpg', title: 'Pose 4 - Creative', description: 'Creative angle with dynamic lighting' },
];

const ProofCard = ({ proof, isFavorite, onToggleFavorite, onRetake, onClick }) => (
    <Paper
        sx={{
            borderRadius: 3, overflow: 'hidden',
            transition: 'all 0.3s',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
        }}
    >
        <Box
            sx={{ position: 'relative', cursor: 'pointer' }}
            onClick={onClick}
        >
            <Box
                component="img"
                src={proof.src}
                alt={proof.title}
                loading="lazy"
                sx={{ width: '100%', height: 300, objectFit: 'cover' }}
            />
            <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                <IconButton
                    onClick={(e) => { e.stopPropagation(); onToggleFavorite(proof.id); }}
                    sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
            </Box>
        </Box>
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>{proof.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{proof.description}</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Button size="small" startIcon={<ReplayIcon />} onClick={() => onRetake(proof.id)}>
                    Request Retake
                </Button>
            </Box>
        </Box>
    </Paper>
);

const Proofing = () => {
    const [accessCode, setAccessCode] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [retakeRequests, setRetakeRequests] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const handleAccess = () => {
        if (accessCode.trim().length > 0) {
            setIsAuthenticated(true);
        }
    };

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
    };

    const requestRetake = (id) => {
        if (!retakeRequests.includes(id)) {
            setRetakeRequests(prev => [...prev, id]);
        }
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ bgcolor: '#111', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <PhotoLibraryIcon sx={{ fontSize: 50, mb: 2, color: 'primary.main' }} />
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
                            View Your Proofs
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                            Enter your access code to view, favorite, and order from your child's photo gallery.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            <Box sx={{ py: 10, minHeight: '60vh' }}>
                <Container>
                    {!isAuthenticated ? (
                        <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, maxWidth: 500, mx: 'auto', textAlign: 'center' }}>
                            <LockIcon sx={{ fontSize: 60, color: 'grey.300', mb: 3 }} />
                            <Typography variant="h4" fontWeight={700} gutterBottom>Enter Access Code</Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Your access code was provided by your school or included in your picture day information sheet.
                            </Typography>
                            <TextField
                                fullWidth
                                label="Access Code"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAccess()}
                                sx={{ mb: 3 }}
                            />
                            <Button variant="contained" size="large" fullWidth onClick={handleAccess} sx={{ py: 1.5, borderRadius: 3 }}>
                                View Photos
                            </Button>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                                Don't have a code? <Typography component={Link} to="/contact" color="primary" variant="body2">Contact us</Typography> or ask your school office.
                            </Typography>
                        </Paper>
                    ) : (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                                <Box>
                                    <Typography variant="h4" fontWeight={700}>Your Photo Proofs</Typography>
                                    <Typography color="text.secondary">{sampleProofs.length} photos available</Typography>
                                </Box>
                                <Stack direction="row" spacing={1}>
                                    {favorites.length > 0 && (
                                        <Chip icon={<FavoriteIcon />} label={`${favorites.length} Favorite${favorites.length > 1 ? 's' : ''}`} color="error" variant="outlined" />
                                    )}
                                    {retakeRequests.length > 0 && (
                                        <Chip icon={<ReplayIcon />} label={`${retakeRequests.length} Retake${retakeRequests.length > 1 ? 's' : ''} Requested`} color="warning" variant="outlined" />
                                    )}
                                </Stack>
                            </Box>

                            <Grid container spacing={3}>
                                {sampleProofs.map((proof, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={proof.id}>
                                        <ProofCard
                                            proof={proof}
                                            isFavorite={favorites.includes(proof.id)}
                                            onToggleFavorite={toggleFavorite}
                                            onRetake={requestRetake}
                                            onClick={() => openLightbox(index)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Action Bar */}
                            <Paper sx={{ mt: 6, p: 4, borderRadius: 4, textAlign: 'center', bgcolor: 'rgba(224,43,32,0.05)', border: '1px solid', borderColor: 'primary.light' }}>
                                <Typography variant="h5" fontWeight={700} gutterBottom>Ready to order prints?</Typography>
                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    Contact us with your access code and selected poses to place your order.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                                    <Button variant="contained" size="large" component={Link} to="/prepay" sx={{ borderRadius: 3 }}>
                                        View Packages & Order
                                    </Button>
                                    <Button variant="outlined" size="large" component={Link} to="/contact" sx={{ borderRadius: 3 }}>
                                        Contact Us
                                    </Button>
                                </Stack>
                            </Paper>

                            <ImageLightbox
                                images={sampleProofs}
                                open={lightboxOpen}
                                onClose={() => setLightboxOpen(false)}
                                initialIndex={lightboxIndex}
                            />
                        </>
                    )}
                </Container>
            </Box>
        </Box>
    );
};

export default Proofing;
