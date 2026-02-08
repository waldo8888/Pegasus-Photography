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

const StatItem = ({ title, label }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" color="primary" fontWeight={800}>{title}</Typography>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>{label}</Typography>
    </Box>
);

const TeamUniforms = () => {
    return (
        <Box sx={{ bgcolor: '#111', color: 'white', minHeight: '100vh' }}>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="/images/hero_bg.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
                />
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)', zIndex: 0 }} />

                <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main', mb: 2, display: 'block' }}>PERFORMANCE SERIES</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ mt: 2, fontSize: { xs: '3rem', md: '6rem' }, lineHeight: 0.9 }}>
                            VICTORY IS <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>EARNED.</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 6, fontWeight: 400, opacity: 0.8, maxWidth: 600, mx: 'auto' }}>
                            Equip your athletes with custom, hand-sewn uniforms designed for durability, speed, and comfort.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button variant="contained" size="large" href="#builder" sx={{ px: 4, py: 1.5 }}>Start Building</Button>
                            <Button variant="outlined" color="inherit" size="large" href="#sports" sx={{ px: 4, py: 1.5 }}>View Sports</Button>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>

            {/* Builder Section */}
            <Box id="builder" sx={{ py: 15, bgcolor: 'background.paper', color: 'text.primary' }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    boxShadow: 20
                                }}
                            >
                                <Box component="img" src="https://placehold.co/800x600/333/666?text=3D+Builder+Interface" sx={{ width: '100%', display: 'block' }} />
                                <Box sx={{ position: 'absolute', bottom: 20, left: 20, bgcolor: 'rgba(255,255,255,0.9)', p: 2, borderRadius: 2 }}>
                                    <Typography variant="caption" fontWeight={700}>LIVE PREVIEW</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SectionHeader
                                overline="Customization"
                                title="Design Your Look"
                                align="left"
                            />
                            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
                                Use our interactive 3D builder to customize every inch of your team's kit. Choose fabrics, colors, fonts, and logo placement in real-time.
                            </Typography>
                            <Stack spacing={3} sx={{ mt: 3, mb: 6 }}>
                                <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 3 }}>
                                    <Typography variant="subtitle1" fontWeight={700}>✓ Sublimated Printing</Typography>
                                    <Typography variant="body2" color="text.secondary">Designs never crack, peel, or fade.</Typography>
                                </Paper>
                                <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 3 }}>
                                    <Typography variant="subtitle1" fontWeight={700}>✓ Performance Fabrics</Typography>
                                    <Typography variant="body2" color="text.secondary">Moisture-wicking and breathable.</Typography>
                                </Paper>
                                <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: 'grey.300', borderRadius: 3 }}>
                                    <Typography variant="subtitle1" fontWeight={700}>✓ All-Inclusive Pricing</Typography>
                                    <Typography variant="body2" color="text.secondary">Names, numbers, and logos included.</Typography>
                                </Paper>
                            </Stack>
                            <Button variant="contained" size="large" href="https://pegasus-si.com/team_uniforms/" sx={{ px: 4, py: 1.5 }}>Launch Builder →</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Sports Grid - Upgraded to ImageCards */}
            <Box id="sports" sx={{ py: 15, bgcolor: '#1a1a1a' }}>
                <Container>
                    <SectionHeader
                        overline="Multi-Sport Support"
                        title="Gear Up For Game Day"
                        description="We outfit every athlete, from the court to the field and beyond."
                        dark
                    />
                    <Grid container spacing={3}>
                        {[
                            { title: 'Basketball', img: 'https://placehold.co/400x500/111/fff?text=Basketball' },
                            { title: 'Volleyball', img: 'https://placehold.co/400x500/222/fff?text=Volleyball' },
                            { title: 'Soccer', img: 'https://placehold.co/400x500/333/fff?text=Soccer' },
                            { title: 'Track & Field', img: 'https://placehold.co/400x500/444/fff?text=Track' },
                            { title: 'Football', img: 'https://placehold.co/400x500/555/fff?text=Football' },
                            { title: 'Baseball', img: 'https://placehold.co/400x500/666/fff?text=Baseball' },
                            { title: 'Lacrosse', img: 'https://placehold.co/400x500/777/fff?text=Lacrosse' },
                            { title: 'Wrestling', img: 'https://placehold.co/400x500/888/fff?text=Wrestling' }
                        ].map((sport) => (
                            <Grid item xs={6} md={3} key={sport.title}>
                                <ImageCard image={sport.img} title={sport.title} height={320} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Quality Stats */}
            <Box sx={{ py: 15, bgcolor: 'white', color: 'text.primary' }}>
                <Container sx={{ textAlign: 'center', maxWidth: 900 }}>
                    <SectionHeader
                        overline="Why Choose Pegasus"
                        title="The Pegasus Advantage"
                        description="Unlike other suppliers who simply print on blank jerseys, ours are cut and sewn from scratch to your exact specifications."
                    />

                    <Grid container spacing={6} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                            <StatItem title="4-Week" label="Turnaround Time" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StatItem title="Lifetime" label="Fill-In Orders" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StatItem title="100%" label="Quality Guarantee" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 6, bgcolor: 'black', color: 'white', textAlign: 'center', borderTop: '1px solid #333' }}>
                <Container>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>© 2026 Pegasus School Images. </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default TeamUniforms;
