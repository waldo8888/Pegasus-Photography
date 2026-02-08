import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import ImageCard from '../../components/ImageCard';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProcessStep = ({ number, title, description }) => (
    <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{
            width: 60, height: 60, borderRadius: '50%', bgcolor: 'primary.main', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700,
            mb: 3, boxShadow: 4, border: '4px solid white'
        }}>
            {number}
        </Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, mx: 'auto' }}>{description}</Typography>
    </Box>
);

const FallPortraits = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', bgcolor: '#222', color: 'white', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="/images/fall_portraits_hero.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 0 }} />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 800 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main', mb: 2, display: 'block' }}>SCHOOL DAY PHOTOGRAPHY</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>
                            Picture Day <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>Made Perfect.</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 6, fontWeight: 400, opacity: 0.9, maxWidth: 600 }}>
                            Back to school means picture day is coming! We ensure a stress-free experience for schools and beautiful portraits for families.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" href="#parents" sx={{ bgcolor: 'primary.main', color: 'white', px: 4, py: 1.5, '&:hover': { bgcolor: 'primary.dark' } }}>For Parents</Button>
                            <Button variant="outlined" color="inherit" size="large" href="#schools" sx={{ px: 4, py: 1.5 }}>For Schools</Button>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Intro Section */}
            <Box sx={{ py: 15 }}>
                <Container>
                    <SectionHeader
                        overline="Stress-Free Experience"
                        title="More Than Just a Photo"
                        description="We know Picture Day is a big event. Our experienced photographers ensure a smooth, efficient process so you can focus on learning."
                    />

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <ImageCard
                                image="/images/fall_portraits_session.png"
                                title="Professional Quality"
                                subtitle="Experts with Kids"
                                height={400}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ImageCard
                                image="/images/fall_portraits_ordering.png"
                                title="Easy Ordering"
                                subtitle="Online Portal"
                                height={400}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ImageCard
                                image="/images/fall_portraits_admin.png"
                                title="School Services"
                                subtitle="Admin Support"
                                height={400}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Process For Parents */}
            <Box id="parents" sx={{ py: 15, bgcolor: '#f9fafb' }}>
                <Container>
                    <SectionHeader title="How It Works" description="We make Picture Day simple for parents." />

                    <Box sx={{ position: 'relative', mt: 8 }}>
                        {/* Connector Line */}
                        <Box sx={{
                            position: 'absolute', top: 30, left: '10%', right: '10%', height: 4, bgcolor: 'grey.300', zIndex: 0,
                            display: { xs: 'none', md: 'block' }
                        }} />

                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <ProcessStep
                                    number="1"
                                    title="Get Ready"
                                    description="Choose an outfit that reflects your child's style. Solid colors work best to keep the focus on the face."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProcessStep
                                    number="2"
                                    title="Picture Day"
                                    description="Our friendly photographers guide your child through multiple poses to get that perfect smile."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProcessStep
                                    number="3"
                                    title="Order Online"
                                    description="Receive your private access code, view proofs instantly, and order prints or digital downloads."
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Button variant="contained" size="large" href="https://online.pegasus-si.com/" sx={{ px: 6, py: 1.5, fontSize: '1.2rem' }}>
                            Order Your Portraits
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box id="schools" sx={{ py: 12, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Partner With Pegasus</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Looking for a photography partner that understands your school's needs? Let's talk about how we can make Picture Day the best day of the year.
                    </Typography>
                    <Button variant="contained" color="white" sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, px: 4, py: 1.5, '&:hover': { bgcolor: 'grey.100' } }}>
                        Request a Proposal
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default FallPortraits;
