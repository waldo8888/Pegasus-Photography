import React from 'react';
import { Box, Container, Typography, Button, Grid, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureList = ({ items }) => (
    <Stack spacing={2} sx={{ mt: 2 }}>
        {items.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <Typography color="primary" fontWeight="bold">✓</Typography>
                <Typography variant="body1">
                    <Box component="span" fontWeight="bold">{item.title}:</Box> {item.desc}
                </Typography>
            </Box>
        ))}
    </Stack>
);

const PropCard = ({ icon, title, desc }) => (
    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', bgcolor: 'rgba(255,255,255,0.05)', color: 'white' }}>
        <Typography variant="h2" sx={{ mb: 2 }}>{icon}</Typography>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>{desc}</Typography>
    </Paper>
);

const KinderGrad = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', bgcolor: '#222', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/kinder_grad_hero.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main' }}>MILESTONE MOMENTS</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mt: 2 }}>
                            Small Steps, <br /> Big Dreams.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            From their first cap and gown to the step into high school, we capture the joy of every academic achievement.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" href="#kinder">Keywords Grad</Button>
                            <Button variant="outlined" color="inherit" href="#junior">Junior Grad</Button>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Intro */}
            <Box sx={{ py: 8, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="overline" color="primary" fontWeight={700}>Cherished Memories</Typography>
                    <Typography variant="h3" gutterBottom>Celebrating Every Transition</Typography>
                    <Typography color="text.secondary">
                        Graduation isn't just for high schoolers. We specialize in making younger graduates feel just as special with professional sessions designed for their age.
                    </Typography>
                </Container>
            </Box>

            {/* Junior Grad */}
            <Box id="junior" sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="/images/junior_grad_portrait.png" sx={{ width: '100%', borderRadius: 4, boxShadow: 4 }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Grade 8 Graduation</Typography>
                            <Typography variant="h3" gutterBottom>Ready for High School</Typography>
                            <Typography color="text.secondary" paragraph>
                                The transition to high school is a major turning point. Our Junior Grad portraits honor this maturity with a sophisticated look.
                            </Typography>
                            <FeatureList items={[
                                { title: 'Formal Regalia', desc: 'We provide gowns and sashes to match school colors.' },
                                { title: 'Professional Posing', desc: 'Guidance to help them look their best.' },
                                { title: 'Class Composites', desc: 'A keepsake to remember their elementary classmates.' }
                            ]} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Kinder Grad */}
            <Box id="kinder" sx={{ py: 10 }}>
                <Container>
                    <Grid container spacing={8} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Kindergarten Graduation</Typography>
                            <Typography variant="h3" gutterBottom>Good Luck in Big Kid School!</Typography>
                            <Typography color="text.secondary" paragraph>
                                Is there anything cuter than a 5-year-old in a cap and gown? We create a fun, relaxed environment where personalities shine.
                            </Typography>
                            <FeatureList items={[
                                { title: 'Whimsical Props', desc: 'Flowers, books, and Class Of signs included.' },
                                { title: 'Colorful Backgrounds', desc: 'Vibrant options that pop.' },
                                { title: 'Little Details', desc: 'We capture the tassel turns and big smiles.' }
                            ]} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="/images/kinder_grad_group.png" sx={{ width: '100%', borderRadius: 4, boxShadow: 4 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Props Section */}
            <Box sx={{ py: 10, bgcolor: '#111', color: 'white' }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>The Experience</Typography>
                        <Typography variant="h3" gutterBottom>Everything You Need</Typography>
                        <Typography sx={{ opacity: 0.7 }}>No need to hunt for supplies. We bring the studio to you.</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <PropCard icon="🎓" title="Gowns Provided" desc="We supply clean, sized gowns for every student." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PropCard icon="📜" title="Diplomas & Props" desc="Diplomas, flowers, and books available for posing." />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PropCard icon="📸" title="Class Composites" desc="11x14 composite available in a vinyl keepsake folder." />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Celebrate the Milestone</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Capture these fleeting moments before they grow up even more. Book a session for your school today.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" color="white" sx={{ color: 'primary.main' }}>Contact Us</Button>
                        <Button variant="outlined" color="inherit">Order Photos</Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default KinderGrad;
