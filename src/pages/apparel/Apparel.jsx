import React from 'react';
import { Box, Container, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import ImageCard from '../../components/ImageCard';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Apparel = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', bgcolor: '#b91c1c', color: 'white', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="/images/hero_bg.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                />
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))', zIndex: 0 }} />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 800 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', color: 'rgba(255,255,255,0.9)' }}>SCHOOL SPIRIT</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1 }}>
                            Wear Your <br /> Pride.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 6, fontWeight: 400, opacity: 0.9, maxWidth: 600 }}>
                            From custom spirit wear to performance team uniforms, we outfit your school in style with premium quality gear.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main', px: 4, py: 1.5, '&:hover': { bgcolor: 'grey.100' } }} href="#spirit">
                                Spirit Wear
                            </Button>
                            <Button variant="outlined" color="inherit" size="large" component={Link} to="/apparel/uniforms" sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                Team Uniforms
                            </Button>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>

            {/* Spirit Wear Section - Alternating Layout */}
            <Box id="spirit" sx={{ py: 15 }}>
                <Container>
                    <SectionHeader
                        overline="For the Whole School"
                        title="Spirit Wear Made Simple"
                        description="Boost school morale with high-quality hoodies, t-shirts, and joggers. We handle the design, orders, and delivery so you don't have to."
                    />

                    {/* Feature 1: Online Stores */}
                    <Grid container spacing={8} alignItems="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6}>
                            <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <Typography variant="h3" fontWeight={700} gutterBottom>Online Stores</Typography>
                                <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 3 }}>Hassle-Free Ordering for Parents</Typography>
                                <Typography color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                                    Stop collecting paper forms and checks. We build a custom e-commerce site for your school where parents can order directly.
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    • Secure online payments<br />
                                    • Individual packaging & labeling<br />
                                    • Direct-to-home shipping options
                                </Typography>
                                <Button variant="outlined" size="large" sx={{ mt: 2 }} href="https://pegasus-si.com/onlinestores/">View Demo Store</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    height: 500,
                                    backgroundImage: 'url(https://placehold.co/800x800/e0e0e0/333?text=Online+Store+Demo)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/* Feature 2: Custom Design */}
                    <Grid container spacing={8} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    height: 500,
                                    backgroundImage: 'url(https://placehold.co/800x800/333/fff?text=Custom+Design)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <Typography variant="h3" fontWeight={700} gutterBottom>Custom Design</Typography>
                                <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 3 }}>Your Brand, Your Way</Typography>
                                <Typography color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                                    Our in-house graphics team will create unique designs using your logo and school colors. Whether you want vintage, modern, or collegiate styles, we've got you covered.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {['Screen Printing', 'Embroidery', 'Appliqué', 'Sublimation'].map(tag => (
                                        <Paper key={tag} sx={{ px: 2, py: 1, bgcolor: 'grey.100', borderRadius: 2, fontSize: '0.9rem', fontWeight: 600 }}>
                                            {tag}
                                        </Paper>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Popular Products - New ImageCard Grid */}
            <Box sx={{ py: 15, bgcolor: '#f9fafb' }}>
                <Container>
                    <SectionHeader
                        overline="Student Favorites"
                        title="Popular Gear"
                        description="From comfy hoodies to essential tees, here's what students love to wear."
                    />
                    <Grid container spacing={4}>
                        {[
                            { title: 'T-Shirts', img: 'https://placehold.co/600x800/red/white?text=T-Shirts' },
                            { title: 'Hoodies', img: 'https://placehold.co/600x800/blue/white?text=Hoodies' },
                            { title: 'Joggers', img: 'https://placehold.co/600x800/green/white?text=Joggers' },
                            { title: 'Hats & Accessories', img: 'https://placehold.co/600x800/yellow/black?text=Hats' }
                        ].map((item, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <ImageCard image={item.img} title={item.title} height={350} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Team Uniforms Promo - Dark Mode */}
            <Box sx={{ py: 15, bgcolor: '#111', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, rgba(224, 43, 32, 0.1) 0%, rgba(17, 17, 17, 0) 70%)',
                        zIndex: 0
                    }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>Performance Gear</Typography>
                            <Typography variant="h2" gutterBottom fontWeight={800}>Next Level Uniforms</Typography>
                            <Typography sx={{ opacity: 0.7, mb: 4, fontSize: '1.2rem', maxWidth: 500 }}>
                                Dominate the field with custom, hand-sewn uniforms designed for performance and durability.
                            </Typography>

                            <Stack spacing={3} sx={{ mb: 6 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography variant="h6" color="primary">✓</Typography>
                                    <Box>
                                        <Typography variant="h6" fontWeight={700}>Custom Hand-Sewn</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7 }}>Tailored fits and premium fabrics.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography variant="h6" color="primary">✓</Typography>
                                    <Box>
                                        <Typography variant="h6" fontWeight={700}>Build Your Own</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7 }}>Interactive 3D online builder.</Typography>
                                    </Box>
                                </Box>
                            </Stack>

                            <Button variant="outlined" color="inherit" size="large" component={Link} to="/apparel/uniforms" sx={{ px: 4, py: 1.5 }}>Explore Team Gear</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sx={{ mt: 4 }}>
                                    <ImageCard image="https://placehold.co/400x500/222/white?text=Jersey" title="Basketball" height={260} />
                                </Grid>
                                <Grid item xs={6}>
                                    <ImageCard image="https://placehold.co/400x500/333/white?text=Shorts" title="Football" height={260} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box id="contact" sx={{ py: 12, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Get Your Gear</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Ready to start an online store or outfit your team?
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Button variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, '&:hover': { bgcolor: 'grey.100' }, px: 4, py: 1.5 }}>
                            Contact Apparel Team
                        </Button>
                        <Button variant="outlined" color="inherit" href="https://pegasus-si.com/onlinestores/" sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.5)' }}>
                            View Demo Stores
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Apparel;
