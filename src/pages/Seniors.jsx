import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '../components/TestimonialCarousel';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const ProcessStep = ({ number, title, description }) => (
    <Paper elevation={2} sx={{ p: 4, borderRadius: 4, textAlign: 'center', height: '100%', position: 'relative' }}>
        <Box sx={{
            width: 48, height: 48, borderRadius: '50%', bgcolor: 'primary.main', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 'bold', fontSize: '1.2rem', mx: 'auto', mb: 2
        }}>
            {number}
        </Box>
        <Typography variant="h6" gutterBottom fontWeight={700}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
    </Paper>
);

const PackageCard = ({ name, price, features, featured }) => (
    <Paper
        elevation={featured ? 8 : 2}
        sx={{
            p: 4, borderRadius: 4, height: '100%', position: 'relative',
            border: featured ? 2 : 0, borderColor: 'primary.main',
            bgcolor: featured ? '#fff5f5' : 'background.paper',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'translateY(-8px)' }
        }}
    >
        {featured && (
            <Chip label="Most Popular" color="primary" sx={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)' }} />
        )}
        <Typography variant="h4" gutterBottom fontWeight={700}>{name}</Typography>
        <Typography variant="h3" color="primary" fontWeight={800} gutterBottom>{price}</Typography>
        <List dense>
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                </ListItem>
            ))}
        </List>
        <Button
            variant={featured ? "contained" : "outlined"}
            fullWidth
            size="large"
            component={Link}
            to="/contact"
            sx={{ mt: 3 }}
        >
            Select Package
        </Button>
    </Paper>
);

const Seniors = () => {
    const [expanded, setExpanded] = useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', bgcolor: 'secondary.main', color: 'white' }}>
                <Container>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <MotionBox
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                <MotionBox variants={fadeInUp}>
                                    <Chip label="✨ Class of 2026" color="primary" sx={{ mb: 3 }} />
                                </MotionBox>
                                <MotionTypography variants={fadeInUp} variant="h1" gutterBottom>
                                    Senior Portraits
                                </MotionTypography>
                                <MotionTypography variants={fadeInUp} variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.8 }}>
                                    Your senior year is one of the most important milestones of your life.
                                    Let us capture your unique personality, style, and story.
                                </MotionTypography>
                                <MotionBox variants={fadeInUp} sx={{ display: 'flex', gap: 2 }}>
                                    <Button variant="contained" size="large" component="a" href="#packages">View Packages</Button>
                                    <Button variant="outlined" color="inherit" size="large" component="a" href="#gallery">See Gallery</Button>
                                </MotionBox>
                            </MotionBox>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionBox
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                sx={{ position: 'relative' }}
                            >
                                <Box
                                    component="img"
                                    src="/images/senior-hero.jpg"
                                    sx={{ width: '100%', borderRadius: 4, height: 500, objectFit: 'cover', boxShadow: 6 }}
                                />
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Process Section */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>How It Works</Typography>
                        <Typography variant="h3">Your Portrait Experience</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { title: 'Book Online', desc: 'Choose your package and schedule your session.' },
                            { title: 'Consultation', desc: 'We\'ll discuss outfits, locations, and unique ideas.' },
                            { title: 'Photo Session', desc: 'Enjoy a fun, relaxed session with our pros.' },
                            { title: 'Receive Photos', desc: 'View your gallery online within 2 weeks.' }
                        ].map((step, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ProcessStep number={index + 1} title={step.title} description={step.desc} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Packages Section */}
            <Box id="packages" sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>Pricing</Typography>
                        <Typography variant="h3" gutterBottom>Senior Portrait Packages</Typography>
                        <Typography color="text.secondary">All packages include a pre-session consultation.</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <PackageCard
                                name="Essential"
                                price="$299"
                                features={['1-hour session', '1 location', '2 outfit changes', '15 edited digital images', 'Online gallery']}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PackageCard
                                name="Signature"
                                price="$499"
                                featured
                                features={['2-hour session', '2 locations', '4 outfit changes', '30 edited digital images', 'Online gallery', '8x10 print included']}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PackageCard
                                name="Premium"
                                price="$799"
                                features={['3-hour session', '3 locations', 'Unlimited outfits', '50 edited digital images', 'Online gallery', '16x20 canvas included']}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Gallery Preview */}
            <Box id="gallery" sx={{ py: 10 }}>
                <Container>
                    <Typography variant="h3" gutterBottom align="center">Recent Senior Portraits</Typography>
                    <Typography align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
                        Every senior has a story worth capturing. Here are some of our favorites.
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {/* Masonry-style layout simulation */}
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="/images/gallery-1.jpg" sx={{ width: '100%', height: 600, objectFit: 'cover', borderRadius: 4, mb: 2 }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={6}>
                                    <Box component="img" src="/images/gallery-2.jpg" sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 4 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Box component="img" src="/images/gallery-3.jpg" sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 4 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Box component="img" src="/images/gallery-4.jpg" sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 4 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Box component="img" src="/images/gallery-5.jpg" sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 4 }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials */}
            <TestimonialCarousel
                title="What Seniors Are Saying"
                subtitle="Real stories from our Class of 2025 and 2026"
                testimonials={[
                    {
                        quote: "I was so nervous about my senior photos but the Pegasus team made it so fun! The location options and outfit changes gave me tons of variety.",
                        name: "Emma Thompson",
                        role: "Senior",
                        school: "Class of 2026",
                        rating: 5,
                        avatar: "/images/testimonial-senior-1.jpg"
                    },
                    {
                        quote: "My daughter's senior portraits exceeded all expectations. The photographer made her feel so comfortable and confident. We'll treasure these forever.",
                        name: "Jennifer Adams",
                        role: "Parent",
                        school: "Class of 2025",
                        rating: 5,
                        avatar: "/images/testimonial-parent-1.jpg"
                    },
                    {
                        quote: "Best decision I made for senior year! The photos came out amazing and the whole process was super easy.",
                        name: "Marcus Johnson",
                        role: "Senior",
                        school: "Class of 2026",
                        rating: 5,
                        avatar: "/images/testimonial-senior-2.jpg"
                    }
                ]}
            />

            {/* FAQ Section */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" align="center" gutterBottom>Common Questions</Typography>
                    <Box sx={{ mt: 4 }}>
                        {[
                            { q: 'When should I book my senior session?', a: 'We recommend booking 2-3 months in advance to ensure availability, especially for spring and summer sessions.' },
                            { q: 'What should I wear to my session?', a: 'Bring outfits that reflect your personality! We recommend solid colors and avoiding busy patterns. Include a mix of casual and dressy options.' },
                            { q: 'Can I bring props or pets?', a: 'Absolutely! We encourage you to bring items that are meaningful to you—sports equipment, musical instruments, your car, or even your pet.' },
                            { q: 'How long until I receive my photos?', a: 'Your online gallery will be ready within 2 weeks of your session. Prints arrive 1-2 weeks after ordering.' }
                        ].map((faq, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                disableGutters
                                elevation={0}
                                sx={{ '&:before': { display: 'none' }, mb: 2, borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight={600} variant="h6">{faq.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">{faq.a}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Seniors;
