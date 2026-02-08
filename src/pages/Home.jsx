import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import RevealText from '../components/animations/RevealText';
import ParallaxSection from '../components/animations/ParallaxSection';
import HorizontalScroll from '../components/animations/HorizontalScroll';
import DraggableStory from '../components/animations/DraggableStory';
import MagneticButton from '../components/animations/MagneticButton';
const ServiceCard = ({ title, img, desc, link }) => (
    <Paper
        elevation={0}
        component={motion.div}
        whileHover={{ y: -15, transition: { duration: 0.4, ease: 'easeOut' } }}
        sx={{
            minWidth: '400px',
            height: '600px',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
    >
        <Box
            component={motion.img}
            src={img}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 4, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
            <Typography variant="h3" fontWeight={700} gutterBottom>{title}</Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>{desc}</Typography>
            <Button variant="outlined" color="inherit" component={Link} to={link}>Explore</Button>
        </Box>
    </Paper>
);

const Home = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ bgcolor: 'white' }}>
            {/* Immersive Hero */}
            <ParallaxSection bgImage="/images/hero-bg.jpg" height="100vh">
                <Container maxWidth="xl" sx={{ textAlign: 'center', color: 'white', px: { xs: 2, md: 10 }, position: 'relative' }}>
                    {/* Parallax Logo Watermark */}
                    <motion.img
                        src="/images/USPegasusOnly512.png"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            x: '-50%',
                            y: '-50%',
                            width: '600px',
                            opacity: 0.1,
                            zIndex: 0,
                            filter: 'brightness(0) invert(1)'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="overline" sx={{ letterSpacing: 4, opacity: 0.8, mb: 2, display: 'block' }}>EST. 2010</Typography>
                        <RevealText
                            text="The Moment Is Yours."
                            style={{ justifyContent: 'center', fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9 }}
                        />
                        <Box sx={{ mt: 4 }}>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
                                <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 300, mb: 4 }}>
                                    Premium photography for those who want to remember every detail.
                                </Typography>
                                <MagneticButton onClick={() => navigate('/contact')}>
                                    Begin Your Journey
                                </MagneticButton>
                            </motion.div>
                        </Box>
                    </Box>
                </Container>
            </ParallaxSection>

            {/* Narrative Section */}
            <Box sx={{ py: 15, bgcolor: 'background.default' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <RevealText
                        text="We don't just take photos."
                        variant="h3"
                        style={{ justifyContent: 'center', color: '#666', marginBottom: '1rem' }}
                    />
                    <RevealText
                        text="We capture legacies."
                        variant="h2"
                        style={{ justifyContent: 'center', color: '#111', fontWeight: 800 }}
                    />
                    <Typography sx={{ mt: 4, fontSize: '1.2rem', color: 'text.secondary', lineHeight: 1.8 }}>
                        Whether it's the nervous excitement of senior year or the collective spirit of a championship team, our lens focuses on the authentic emotion behind the pose.
                    </Typography>
                </Container>
            </Box>

            {/* Horizontal Scroll Gallery */}
            <HorizontalScroll>
                <Box sx={{ minWidth: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="h1" sx={{ fontSize: '6rem', color: '#E02B20', opacity: 0.2, fontWeight: 900 }}>01</Typography>
                        <Typography variant="h2" fontWeight={800}>Our <br /> Canvas.</Typography>
                        <Typography color="text.secondary">Swipe to explore our specialties.</Typography>
                    </Box>
                </Box>

                <ServiceCard
                    title="Senior Portraits"
                    img="/images/senior-portraits.jpg"
                    desc="Bold. Authentic. Uniquely You. A session designed around your style."
                    link="/for-seniors"
                />
                <ServiceCard
                    title="School Photography"
                    img="/images/school-photography.jpg"
                    desc="Reimagining picture day. Efficient, organized, and remarkably better."
                    link="/schools"
                />
                <ServiceCard
                    title="Sports & Apparel"
                    img="/images/culture.jpg"
                    desc="From the field to the fan shop. Pro-level team photos and custom gear."
                    link="/apparel"
                />
                <ServiceCard
                    title="Memories"
                    img="/images/yearbook-cover.jpg"
                    desc="Yearbooks that students actually want to keep forever."
                    link="/yearbooks"
                />

                <Box sx={{ minWidth: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', pr: 10 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" fontWeight={800} gutterBottom>Ready?</Typography>
                        <MagneticButton onClick={() => navigate('/contact')}>Book Now</MagneticButton>
                    </Box>
                </Box>
            </HorizontalScroll>

            {/* Draggable Story Section */}
            <DraggableStory />

            {/* Parallax Break */}
            <ParallaxSection bgImage="/images/hero_bg.png" height="80vh" speed={0.3}>
                <Container sx={{ textAlign: 'center', color: 'white' }}>
                    <RevealText text="Your Story Starts Here." style={{ justifyContent: 'center' }} />
                </Container>
            </ParallaxSection>

        </Box>
    );
};

export default Home;
