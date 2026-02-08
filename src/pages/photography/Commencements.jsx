import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ValueCard = ({ title, desc }) => (
    <Paper sx={{ p: 4, borderRadius: 4, height: '100%' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Paper>
);

const Commencements = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', bgcolor: '#222', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/commencements_hero.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main' }}>CEREMONY COVERAGE</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mt: 2 }}>
                            The Moment <br /> They Earned.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            We capture the pride and joy of every graduate as they cross the stage. A seamless service that adds value to your ceremony.
                        </Typography>
                        <Button variant="contained" size="large" href="#details">How It Works</Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Intro / Grip & Grin */}
            <Box id="details" sx={{ py: 10 }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Stage Crossing Photography</Typography>
                            <Typography variant="h3" gutterBottom>"Grip and Grin"</Typography>
                            <Typography color="text.secondary" paragraph>
                                The handshake. The diploma. The smile. We specialize in capturing this split-second milestone with professional precision.
                            </Typography>
                            <Typography color="text.secondary" paragraph>
                                Our photographers work discreetly to ensure the focus remains on the ceremony, while providing every student with a high-quality customized memory of their achievement.
                            </Typography>
                            <Box sx={{ mt: 3, pl: 2, borderLeft: 4, borderColor: 'primary.main' }}>
                                <Typography variant="subtitle1" fontWeight="bold">Free Digital Download</Typography>
                                <Typography variant="body2" color="text.secondary">Every student receives a complimentary digital print.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ width: '100%', height: 400, bgcolor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                <Typography color="text.secondary">[Stage Crossing Action Shot]</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Value Grid */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container>
                    <Typography variant="h3" align="center" sx={{ mb: 8 }}>Why Add Commencement Photography?</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <ValueCard title="Discreet Professionals" desc="We respect the sanctity of the ceremony. No flashes in faces, no blocking the view." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ValueCard title="Fast Delivery" desc="Images are processed and customized quickly so families can share the news while the excitement is fresh." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ValueCard title="Partner Perk" desc="As a Pegasus partner, this premium service is included to add value to your school community." />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Upgrade Your Ceremony</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Let us handle the memories so families can enjoy the moment.
                    </Typography>
                    <Button variant="contained" color="white" sx={{ color: 'secondary.main', fontWeight: 700, px: 4 }}>
                        Request a Proposal
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Commencements;
