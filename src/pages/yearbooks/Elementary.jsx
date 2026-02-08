import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureCard = ({ icon, title, desc }) => (
    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>{icon}</Typography>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Paper>
);

const ReasonCard = ({ title, desc }) => (
    <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Box>
);

const Elementary = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', bgcolor: '#3b82f6', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/hero_bg.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2 }}>ELEMENTARY SERIES</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mt: 2 }}>
                            Yearbooks Made <br /> Easy & Fun.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            Designed for parent volunteers and busy teachers. Our online software makes creating your yearbook a breeze.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }} href="#features">See Features</Button>
                            <Button variant="outlined" color="inherit" size="large" href="#contact">Request Sample</Button>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>

            {/* Features Grid */}
            <Box id="features" sx={{ py: 10 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>Pegasus Online</Typography>
                        <Typography variant="h3" gutterBottom>Everything You Need</Typography>
                        <Typography color="text.secondary">No design experience? No problem.</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <FeatureCard icon="🖥️" title="100% Online" desc="Work from anywhere. Multiple users can log in simultaneously." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FeatureCard icon="🎨" title="Templates Galore" desc="Hundreds of professionally designed page layouts and clip art elements." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FeatureCard icon="📸" title="Auto-Flow" desc="Drag and drop class photos. Our smart software formats them perfectly." />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Showcase */}
            <Box sx={{ py: 10, bgcolor: '#111', color: 'white' }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="/images/yearbook_elementary_software.png" sx={{ width: '100%', borderRadius: 4 }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" sx={{ color: 'grey.500', fontWeight: 700 }}>Creativity Unlocked</Typography>
                            <Typography variant="h3" gutterBottom>Drag, Drop, Done.</Typography>
                            <Typography color="grey.400" paragraph>
                                Our "Pegasus Online" builder is intuitive. You don't need to be a designer to create stunning pages.
                            </Typography>
                            <Stack spacing={2} sx={{ mt: 3 }}>
                                <Typography>✓ <strong>Smart Scrub:</strong> Ensure every student is pictured.</Typography>
                                <Typography>✓ <strong>Portrait Flow:</strong> Automatic alphabetical class pages.</Typography>
                                <Typography>✓ <strong>Clip Art Library:</strong> Mascots, doodles, and themes.</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Logistics */}
            <Box sx={{ py: 10 }}>
                <Container sx={{ textAlign: 'center', maxWidth: 800 }}>
                    <Typography variant="h3" gutterBottom sx={{ mb: 6 }}>The Pegasus Promise</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <ReasonCard title="Fast Delivery" desc="Printed locally for quick turnaround times (4-6 weeks typical)." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ReasonCard title="No Shipping Fees" desc="We deliver directly to your school at no extra cost." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ReasonCard title="Competitive Rates" desc="Quality yearbooks at rates that fit school budgets. Contact us for a custom quote." />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box id="contact" sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Start Your Yearbook</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Get a free quote and a demo of our online software today.
                    </Typography>
                    <Button variant="contained" color="white" sx={{ color: 'secondary.main', fontWeight: 700, px: 4 }}>
                        Request Quote
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Elementary;
