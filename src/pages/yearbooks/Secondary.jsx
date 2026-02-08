import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProCard = ({ title, desc }) => (
    <Paper sx={{ p: 4, height: '100%', borderRadius: 4 }}>
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>{title}</Typography>
        <Typography variant="body1" color="text.secondary">{desc}</Typography>
    </Paper>
);

const FinishItem = ({ color, name }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{
            height: 120, borderRadius: 2, mb: 2,
            background: color,
            border: '1px solid rgba(0,0,0,0.1)'
        }} />
        <Typography variant="h6" fontWeight={600}>{name}</Typography>
    </Box>
);

const Secondary = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', bgcolor: '#1e1e1e', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/hero_bg.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2 }}>SECONDARY & HIGH SCHOOL</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mt: 2 }}>
                            Design Without <br /> Limits.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            Professional tools for your journalism team. Whether you use our advanced software or Adobe Creative Suite, we bring your vision to life.
                        </Typography>
                        <Button variant="contained" size="large" href="#contact">Request Quote</Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Pro Features */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>Professional Grade</Typography>
                        <Typography variant="h3" gutterBottom>Built for Creatives</Typography>
                        <Typography color="text.secondary">We support industry-standard workflows.</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <ProCard
                                title="Adobe Integration"
                                desc="Design in InDesign or Photoshop. We provide the specs, plugins, and color profiles to ensure your print-ready PDFs look exactly as intended."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ProCard
                                title="Pegasus Pro Suite"
                                desc="Don't have Adobe? Our advanced cloud software offers 'Free Form' mode for total control over layers, typography, and effects."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Finishes */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container>
                    <Typography variant="h3" align="center" sx={{ mb: 10 }}>Premium Finishes</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={6} md={3}>
                            <FinishItem color="linear-gradient(135deg, silver, white)" name="Foil Stamping" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FinishItem color="#333" name="Debossing" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FinishItem color="linear-gradient(to right, #444, #666)" name="Spot Gloss (UV)" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FinishItem color="repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, #fff 0, #fff 50%)" name="Texture" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Sales Support */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Sales Support</Typography>
                            <Typography variant="h3" gutterBottom>We Handle the Business</Typography>
                            <Typography color="text.secondary" paragraph>
                                Focus on the content, not the cash. Our comprehensive sales program helps you sell more books with less effort.
                            </Typography>
                            <Stack spacing={1} sx={{ mt: 3 }}>
                                <Typography>✓ <strong>Online Store:</strong> Custom link for parents.</Typography>
                                <Typography>✓ <strong>Marketing Kit:</strong> Posters, flyers, and creative assets.</Typography>
                                <Typography>✓ <strong>Payment Plans:</strong> Flexible options for families.</Typography>
                                <Typography>✓ <strong>Direct Shipping:</strong> Optional ship-to-home service.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="https://placehold.co/600x400/eee/333?text=Online+Store" sx={{ width: '100%', borderRadius: 4, boxShadow: 4 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box id="contact" sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Upgrade Your Yearbook</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Switch to Pegasus for better quality, better support, and better prices.
                    </Typography>
                    <Button variant="contained" color="white" sx={{ color: 'secondary.main', fontWeight: 700, px: 4 }}>
                        Get a Proposal
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Secondary;
