import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button, Chip, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PlaceIcon from '@mui/icons-material/Place';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DownloadIcon from '@mui/icons-material/Download';
import SectionHeader from '../components/SectionHeader';
import { ScrollReveal, BeforeAfter, StaggerChildren, GlowCard } from '../components/Animations';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TipCard = ({ icon, title, tips, color = 'primary.main' }) => (
    <MotionPaper
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        elevation={2}
        sx={{ p: 4, borderRadius: 4, height: '100%' }}
    >
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: color,
            color: 'white',
            mb: 3
        }}>
            {icon}
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        <List dense>
            {tips.map((tip, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={tip} />
                </ListItem>
            ))}
        </List>
    </MotionPaper>
);

const ColorSwatch = ({ color, name, good }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{
            width: 60,
            height: 60,
            borderRadius: 2,
            bgcolor: color,
            mx: 'auto',
            mb: 1,
            border: good ? '3px solid #4CAF50' : '3px solid #f44336',
            boxShadow: 2
        }} />
        <Typography variant="caption" fontWeight={600}>{name}</Typography>
        <Typography variant="caption" display="block" color={good ? 'success.main' : 'error.main'}>
            {good ? '✓ Great' : '✗ Avoid'}
        </Typography>
    </Box>
);

const SessionPrep = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                color: 'white',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/session-prep-hero.jpg"
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
                    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)'
                }} />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Chip label="📸 Session Prep Guide" color="primary" sx={{ mb: 3 }} />
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                            Get Ready for Your <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>Best Photos Ever</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            Everything you need to know to prepare for a picture-perfect session. From outfit ideas to prop inspiration.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" href="#tips">View Tips</Button>
                            <Button variant="outlined" color="inherit" size="large" startIcon={<DownloadIcon />}>
                                Download Checklist
                            </Button>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

            {/* What to Wear Section */}
            <Box id="tips" sx={{ py: 12 }}>
                <Container>
                    <SectionHeader
                        overline="Outfit Guide"
                        title="What to Wear"
                        description="Your outfit sets the tone for your photos. Here's how to dress for success."
                    />

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <TipCard
                                icon={<CheckroomIcon sx={{ fontSize: 32 }} />}
                                title="Do's"
                                color="#4CAF50"
                                tips={[
                                    "Solid colors photograph best",
                                    "Layer with jackets or cardigans",
                                    "Bring 2-3 outfit options",
                                    "Mix casual and dressy looks",
                                    "Iron or steam clothes beforehand",
                                    "Choose timeless styles over trends"
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TipCard
                                icon={<CheckroomIcon sx={{ fontSize: 32 }} />}
                                title="Don'ts"
                                color="#f44336"
                                tips={[
                                    "Avoid busy patterns & logos",
                                    "Skip neon or overly bright colors",
                                    "Don't choose brand new shoes",
                                    "Avoid all-black or all-white outfits",
                                    "Skip heavy sunglasses on head",
                                    "Avoid clothes that don't fit well"
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TipCard
                                icon={<LightbulbIcon sx={{ fontSize: 32 }} />}
                                title="Pro Tips"
                                color="primary.main"
                                tips={[
                                    "Coordinate with your location",
                                    "Bring backup accessories",
                                    "Get a haircut 1 week before",
                                    "Paint nails 2 days before",
                                    "Stay hydrated for glowing skin",
                                    "Get a good night's sleep"
                                ]}
                            />
                        </Grid>
                    </Grid>

                    {/* Color Palette */}
                    <ScrollReveal delay={0.2}>
                        <Box sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 4 }}>
                            <Typography variant="h5" fontWeight={700} align="center" gutterBottom>
                                Best Colors for Photos
                            </Typography>
                            <Typography color="text.secondary" align="center" sx={{ mb: 4 }}>
                                Jewel tones, earth tones, and muted colors photograph beautifully.
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                flexWrap="wrap"
                                useFlexGap
                            >
                                <ColorSwatch color="#1E5162" name="Teal" good />
                                <ColorSwatch color="#8B4513" name="Rust" good />
                                <ColorSwatch color="#2F4F4F" name="Forest" good />
                                <ColorSwatch color="#D4A574" name="Camel" good />
                                <ColorSwatch color="#800020" name="Burgundy" good />
                                <ColorSwatch color="#F5F5DC" name="Cream" good />
                                <ColorSwatch color="#FF1493" name="Hot Pink" good={false} />
                                <ColorSwatch color="#00FF00" name="Neon" good={false} />
                            </Stack>
                        </Box>
                    </ScrollReveal>
                </Container>
            </Box>

            {/* Before/After Photo Editing Section */}
            <Box sx={{ py: 12, bgcolor: '#f9fafb' }}>
                <Container>
                    <ScrollReveal>
                        <SectionHeader
                            overline="Professional Editing"
                            title="See the Difference"
                            description="Every photo receives professional color correction and retouching to bring out your best."
                        />
                    </ScrollReveal>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <ScrollReveal direction="left">
                                <BeforeAfter
                                    beforeImage="/images/gallery/senior-outdoor-1.jpg"
                                    afterImage="/images/gallery/senior-urban-1.jpg"
                                    beforeLabel="Original"
                                    afterLabel="Retouched"
                                    height={450}
                                />
                            </ScrollReveal>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <ScrollReveal direction="right" delay={0.2}>
                                <Typography variant="h4" fontWeight={700} gutterBottom>
                                    Professional Retouching
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    Our expert editors enhance every image while maintaining your natural beauty. We focus on:
                                </Typography>
                                <List>
                                    <ListItem disableGutters>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Natural skin smoothing" />
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Color correction & enhancement" />
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Background cleanup" />
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Blemish removal" />
                                    </ListItem>
                                </List>
                            </ScrollReveal>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Props Section */}
            <Box sx={{ py: 12, bgcolor: '#111', color: 'white' }}>
                <Container>
                    <SectionHeader
                        dark
                        overline="Personalize Your Session"
                        title="Props & Accessories"
                        description="Props add personality and make your photos uniquely YOU."
                    />

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { emoji: '🎸', title: 'Musical Instruments', desc: 'Guitar, violin, drums – show your talent' },
                            { emoji: '⚽', title: 'Sports Gear', desc: 'Jerseys, equipment, championship trophies' },
                            { emoji: '🐕', title: 'Pets', desc: 'Your furry (or scaly) best friend' },
                            { emoji: '🚗', title: 'Your Car', desc: 'Classic rides make great backdrops' },
                            { emoji: '📚', title: 'Books & Art', desc: 'Paint supplies, favorite novels, journals' },
                            { emoji: '🎓', title: 'School Spirit', desc: 'Letter jacket, college gear, class signs' }
                        ].map((prop, index) => (
                            <Grid item xs={6} md={4} key={index}>
                                <Paper
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        bgcolor: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 4,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            transform: 'translateY(-4px)'
                                        }
                                    }}
                                >
                                    <Typography variant="h2" sx={{ mb: 2 }}>{prop.emoji}</Typography>
                                    <Typography variant="h6" fontWeight={700} color="white">{prop.title}</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7, color: 'grey.400' }}>{prop.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Locations Section */}
            <Box sx={{ py: 12 }}>
                <Container>
                    <SectionHeader
                        overline="Location Inspiration"
                        title="Where to Shoot"
                        description="The right backdrop can transform your photos. Here are some favorites."
                    />

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { img: '/images/location-urban.jpg', title: 'Urban Downtown', desc: 'Brick walls, murals, city vibes' },
                            { img: '/images/location-nature.jpg', title: 'Nature Trails', desc: 'Golden hour in the woods' },
                            { img: '/images/location-beach.jpg', title: 'Beach & Water', desc: 'Coastal sunsets and sandy shores' },
                            { img: '/images/location-campus.jpg', title: 'Your Campus', desc: 'School spirit at its finest' }
                        ].map((location, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper
                                    sx={{
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.02)' }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={location.img}
                                        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h6" fontWeight={700}>{location.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{location.desc}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>
                        Ready to Book Your Session?
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Now that you're prepped and ready, let's capture your story.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                            href="/for-seniors"
                        >
                            View Packages
                        </Button>
                        <Button variant="outlined" color="inherit" size="large" href="/contact">
                            Contact Us
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default SessionPrep;
