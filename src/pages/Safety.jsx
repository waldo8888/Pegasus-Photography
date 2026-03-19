import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { ScrollReveal, StaggerChildren, GlowCard } from '../components/Animations';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ShieldCard = ({ icon, title, desc }) => (
    <Paper sx={{
        p: 4, textAlign: 'center', height: '100%', borderRadius: 4,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
    }}>
        <Box sx={{
            width: 80, height: 80, mx: 'auto', mb: 3,
            bgcolor: 'rgba(224, 43, 32, 0.1)', color: 'primary.main',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {icon}
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>{desc}</Typography>
    </Paper>
);

const Safety = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', bgcolor: '#111', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 50%, rgba(224,43,32,0.15) 0%, rgba(0,0,0,0) 60%)' }} />
                <Container sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Box sx={{ width: 100, height: 100, borderRadius: '50%', bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldIcon sx={{ fontSize: 50, color: 'white' }} />
                            </Box>
                        </Box>
                        <Chip label="PegasusShield" color="primary" sx={{ mb: 3, fontWeight: 700, fontSize: '1rem', py: 2.5 }} />
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' } }}>
                            Safety is Our Priority
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, opacity: 0.9 }}>
                            Every child deserves to feel safe and comfortable on picture day. Our PegasusShield program ensures exactly that.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Shield Pillars */}
            <Box sx={{ py: 15 }}>
                <Container>
                    <ScrollReveal>
                        <SectionHeader
                            title="The PegasusShield Promise"
                            description="Our comprehensive safety program covers every aspect of the photography experience."
                        />
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.15}>
                        <Grid container spacing={4} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ShieldCard
                                        icon={<BadgeIcon sx={{ fontSize: 40 }} />}
                                        title="Background Checked"
                                        desc="Every Pegasus photographer undergoes a comprehensive Criminal Record Check with Vulnerable Sector Screening before entering any school."
                                    />
                                </GlowCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ShieldCard
                                        icon={<LockIcon sx={{ fontSize: 40 }} />}
                                        title="Data Privacy"
                                        desc="Student data is encrypted, stored on Canadian servers, and never shared with third parties. We comply with PIPEDA and all provincial privacy regulations."
                                    />
                                </GlowCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ShieldCard
                                        icon={<SecurityIcon sx={{ fontSize: 40 }} />}
                                        title="Secure Galleries"
                                        desc="Online photo galleries are password-protected and accessible only to verified parents and guardians through unique access codes."
                                    />
                                </GlowCard>
                            </Grid>
                        </Grid>
                    </StaggerChildren>
                </Container>
            </Box>

            {/* Photographer Code of Conduct */}
            <Box sx={{ py: 15, bgcolor: '#f9fafb' }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <ScrollReveal direction="left">
                                <Typography variant="overline" color="primary" fontWeight={700}>Our Standards</Typography>
                                <Typography variant="h3" gutterBottom fontWeight={700}>
                                    Photographer Code of Conduct
                                </Typography>
                                <Typography color="text.secondary" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                                    Every Pegasus photographer signs and adheres to a strict Code of Conduct that governs their behavior on school property.
                                </Typography>
                                <Stack spacing={2}>
                                    {[
                                        'Always accompanied by school staff in restricted areas',
                                        'Visible Pegasus identification badge worn at all times',
                                        'No personal devices used during photography sessions',
                                        'All images captured on company-owned, encrypted equipment',
                                        'Annual safety training and certification renewal',
                                        'Zero-tolerance policy for any misconduct'
                                    ].map((item, i) => (
                                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <GppGoodIcon color="primary" />
                                            <Typography>{item}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </ScrollReveal>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ScrollReveal direction="right" delay={0.2}>
                                <Paper sx={{ p: 5, borderRadius: 4, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                                    <VerifiedUserIcon sx={{ fontSize: 80, mb: 3, color: 'primary.main' }} />
                                    <Typography variant="h4" fontWeight={800} gutterBottom>100% Verified</Typography>
                                    <Typography sx={{ opacity: 0.9, fontSize: '1.1rem' }}>
                                        Every member of our photography team has been verified, trained, and certified under the PegasusShield program before they ever step into your school.
                                    </Typography>
                                </Paper>
                            </ScrollReveal>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* FAQ */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="md">
                    <SectionHeader title="Safety FAQ" description="Common questions from parents and administrators about our safety practices." />
                    <Box sx={{ mt: 4 }}>
                        {[
                            { q: 'What background checks do your photographers undergo?', a: 'All photographers complete a Criminal Record Check with Vulnerable Sector Screening, renewed annually. We also verify professional references and require a minimum of 3 years of professional photography experience.' },
                            { q: 'How is my child\'s data protected?', a: 'Student data is encrypted using AES-256 encryption, stored exclusively on Canadian servers, and automatically purged after the school year concludes. We comply with PIPEDA, FIPPA, and MFIPPA.' },
                            { q: 'Who can access my child\'s photos?', a: 'Only verified parents/guardians with the unique access code provided by the school can view photos. Photos are never posted publicly or used for marketing without explicit written consent.' },
                            { q: 'What happens if I have a concern on picture day?', a: 'Every picture day has a designated PegasusShield Coordinator on-site. Parents and staff can raise concerns immediately. We also maintain a confidential reporting line at (800) 461-6575.' },
                            { q: 'Do you share student information with third parties?', a: 'Never. Student information is used solely for the purpose of delivering photography services to the school. We do not sell, share, or transfer data to any third party under any circumstances.' }
                        ].map((faq, index) => (
                            <Accordion
                                key={index}
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

            {/* CTA */}
            <Box sx={{ py: 12, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <ShieldIcon sx={{ fontSize: 60, mb: 2 }} />
                    <Typography variant="h3" gutterBottom fontWeight={800}>Protected by PegasusShield</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Have questions about our safety practices? We're happy to discuss our program in detail.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Chip
                            label="Contact Us"
                            component={Link}
                            to="/contact"
                            clickable
                            sx={{ bgcolor: 'white', color: 'primary.main', fontSize: '1rem', py: 3, px: 2, fontWeight: 700, '&:hover': { bgcolor: 'grey.100' } }}
                        />
                        <Chip
                            label="View Privacy Policy"
                            component={Link}
                            to="/privacy"
                            clickable
                            variant="outlined"
                            sx={{ borderColor: 'white', color: 'white', fontSize: '1rem', py: 3, px: 2, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                        />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Safety;
