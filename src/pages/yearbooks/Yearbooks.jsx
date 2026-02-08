import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionHeader from '../../components/SectionHeader';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureRow = ({ feature, included }) => (
    <TableRow hover>
        <TableCell component="th" scope="row" sx={{ py: 2, fontSize: '1rem', fontWeight: 500 }}>{feature}</TableCell>
        <TableCell align="center" sx={{ py: 2 }}>
            <CheckCircleIcon color="primary" />
        </TableCell>
        <TableCell align="center" sx={{ py: 2 }}>
            {included ? <CheckCircleIcon color="primary" /> : <Box sx={{ width: 24, height: 24, bgcolor: 'grey.200', borderRadius: '50%', mx: 'auto' }} />}
        </TableCell>
    </TableRow>
);

const Yearbooks = () => {
    const [softwareTab, setSoftwareTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSoftwareTab(newValue);
    };

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', bgcolor: '#111', color: 'white', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="/images/yearbook_hero.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(17,17,17,1) 100%)', zIndex: 0 }} />

                <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main', mb: 2, display: 'block' }}>PRINT & PUBLISHING</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>
                            Your Story, <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>Printed Forever.</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 6, fontWeight: 400, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                            From simple softcovers to premium hardcovers, we provide industry-leading printing and design software for schools of all sizes.
                        </Typography>
                        <Button variant="contained" size="large" href="#software" sx={{ px: 4, py: 1.5 }}>View Software</Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Comparison Table */}
            <Box sx={{ py: 15, bgcolor: '#111', color: 'white' }}>
                <Container maxWidth="lg">
                    <SectionHeader
                        overline="Printing Options"
                        title="Choose Your Format"
                        description="We offer flexible printing options to match your budget and timelines."
                        dark
                    />

                    <TableContainer component={Paper} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 10 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="printing comparison table">
                            <TableHead sx={{ bgcolor: 'grey.100' }}>
                                <TableRow>
                                    <TableCell sx={{ py: 3, width: '40%' }}>
                                        <Typography variant="h6" fontWeight={700}>Features</Typography>
                                    </TableCell>
                                    <TableCell align="center" sx={{ py: 3, width: '30%' }}>
                                        <Typography variant="h5" fontWeight={800} color="primary.main">Standard</Typography>
                                        <Typography variant="body2" color="text.secondary">Perfect for Elementary</Typography>
                                    </TableCell>
                                    <TableCell align="center" sx={{ py: 3, width: '30%', bgcolor: 'rgba(224, 43, 32, 0.05)' }}>
                                        <Typography variant="h5" fontWeight={800} color="secondary.main">Premium</Typography>
                                        <Typography variant="body2" color="text.secondary">Best for High Schools</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <FeatureRow feature="Full Color Pages" included={true} />
                                <FeatureRow feature="Softcover Binding" included={true} />
                                <FeatureRow feature="Hardcover Upgrade" included={true} />
                                <FeatureRow feature="Foil Stamping" included={true} />
                                <FeatureRow feature="Embossing / Debossing" included={true} />
                                <FeatureRow feature="UV Coating" included={true} />
                                <FeatureRow feature="Layflat Binding" included={true} />
                                <FeatureRow feature="Personalized Covers" included={true} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>

            {/* Software Showcase */}
            <Box id="software" sx={{ py: 15, bgcolor: 'background.default' }}>
                <Container>
                    <SectionHeader title="Design Software" description="Powerful tools that make yearbook creation easy and fun." />

                    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'grey.50' }}>
                            <Tabs
                                value={softwareTab}
                                onChange={handleTabChange}
                                variant="fullWidth"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Drag & Drop (Elementary)" sx={{ py: 3, fontWeight: 700 }} />
                                <Tab label="Advanced Design (High School)" sx={{ py: 3, fontWeight: 700 }} />
                            </Tabs>
                        </Box>

                        <Box sx={{ p: 6 }}>
                            {softwareTab === 0 && (
                                <Grid container spacing={6} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h4" fontWeight={700} gutterBottom>Simple & Fun for Volunteers</Typography>
                                        <Typography paragraph color="text.secondary">
                                            Our elementary software is designed for speed. Hundreds of pre-made templates, clip art, and backgrounds make it easy to drag, drop, and done.
                                        </Typography>
                                        <Button variant="outlined" color="primary">Explore Templates</Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box component="img" src="/images/yearbook_elementary_software.png" sx={{ width: '100%', borderRadius: 2, boxShadow: 4 }} />
                                    </Grid>
                                </Grid>
                            )}
                            {softwareTab === 1 && (
                                <Grid container spacing={6} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h4" fontWeight={700} gutterBottom>Professional Control for Students</Typography>
                                        <Typography paragraph color="text.secondary">
                                            Give your yearbook class the tools they need. Advanced typography, layer management, and precision alignment tools for a professional-grade book.
                                        </Typography>
                                        <Button variant="outlined" color="primary">View Features</Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box component="img" src="/images/yearbook_pro_software.png" sx={{ width: '100%', borderRadius: 2, boxShadow: 4 }} />
                                    </Grid>
                                </Grid>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 12, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Start Your Yearbook Project</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Get a quote and sample kit delivered to your school.
                    </Typography>
                    <Button variant="contained" color="white" sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, px: 6, py: 1.5 }}>
                        Request Info Kit
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Yearbooks;
