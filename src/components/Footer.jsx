import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const FooterLink = ({ to, children }) => (
    <Typography
        component={Link}
        to={to}
        sx={{
            color: 'grey.500',
            fontSize: '0.9rem',
            transition: 'color 0.2s',
            '&:hover': { color: 'white' },
        }}
    >
        {children}
    </Typography>
);

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#0a0a0a', color: 'white', pt: 15, pb: 6, position: 'relative', overflow: 'hidden' }}>
            {/* Large Background Text */}
            {/* Large Background Logo */}
            <Box
                component="img"
                src="/images/USPegasusOnly512.png"
                alt=""
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(500px, 80vw, 1200px)',
                    opacity: 0.03,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'grayscale(100%)',
                }}
            />

            <Container sx={{ position: 'relative', zIndex: 1 }}>
                {/* Main Footer Content */}
                <Grid container spacing={8} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={5}>
                        <Box
                            component="img"
                            src="/images/USPegasusOnly512.png"
                            alt="Pegasus Logo"
                            sx={{ height: 60, mb: 2, filter: 'brightness(0) invert(1)' }}
                        />
                        <Typography sx={{ color: 'grey.500', maxWidth: 300, lineHeight: 1.8 }}>
                            Premium school and senior portrait photography. Capturing moments that become cherished memories.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                            <IconButton sx={{ color: 'grey.500', '&:hover': { color: 'white', bgcolor: 'primary.main' } }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'grey.500', '&:hover': { color: 'white', bgcolor: 'primary.main' } }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'grey.500', '&:hover': { color: 'white', bgcolor: 'primary.main' } }}>
                                <PinterestIcon />
                            </IconButton>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, color: 'grey.400', textTransform: 'uppercase', letterSpacing: 1 }}>
                            Services
                        </Typography>
                        <Stack spacing={1.5}>
                            <FooterLink to="/for-seniors">Senior Portraits</FooterLink>
                            <FooterLink to="/schools">School Photography</FooterLink>
                            <FooterLink to="/yearbooks">Yearbooks</FooterLink>
                            <FooterLink to="/apparel">Apparel</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, color: 'grey.400', textTransform: 'uppercase', letterSpacing: 1 }}>
                            Resources
                        </Typography>
                        <Stack spacing={1.5}>
                            <FooterLink to="/blog">Blog & Tips</FooterLink>
                            <FooterLink to="/gallery">Gallery</FooterLink>
                            <FooterLink to="/session-prep">Session Prep</FooterLink>
                            <FooterLink to="/booking">Book a Session</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, color: 'grey.400', textTransform: 'uppercase', letterSpacing: 1 }}>
                            Company
                        </Typography>
                        <Stack spacing={1.5}>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/faq">FAQ</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/careers">Careers</FooterLink>
                            <FooterLink to="/ambassadors">Ambassadors</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, color: 'grey.400', textTransform: 'uppercase', letterSpacing: 1 }}>
                            Contact
                        </Typography>
                        <Stack spacing={1.5}>
                            <Typography sx={{ color: 'grey.500', fontSize: '0.9rem' }}>944 South Service Rd</Typography>
                            <Typography sx={{ color: 'grey.500', fontSize: '0.9rem' }}>Stoney Creek, ON L8E 6A2</Typography>
                            <Typography component="a" href="tel:+18004616575" sx={{ color: 'primary.main', fontSize: '0.9rem', fontWeight: 600 }}>
                                (800) 461-6575
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                        © 2026 Pegasus School Images. All rights reserved.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Typography component="a" href="#" sx={{ color: 'grey.600', fontSize: '0.8rem', '&:hover': { color: 'white' } }}>
                            Privacy Policy
                        </Typography>
                        <Typography component="a" href="#" sx={{ color: 'grey.600', fontSize: '0.8rem', '&:hover': { color: 'white' } }}>
                            Terms of Service
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
