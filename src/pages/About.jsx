import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SectionHeader from '../components/SectionHeader';
import { ScrollReveal, StaggerChildren, AnimatedCounter, GlowCard } from '../components/Animations';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ValueCard = ({ icon, title, desc }) => (
    <Paper sx={{
        p: 4, textAlign: 'center', height: '100%', borderRadius: 4,
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
    }}>
        <Box sx={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', bgcolor: 'primary.main', opacity: 0.05 }} />
        <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', bgcolor: 'secondary.main', opacity: 0.03 }} />

        <Box sx={{
            width: 80, height: 80, mx: 'auto', mb: 3,
            bgcolor: 'primary.light', color: 'primary.main', // lighter background
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
            background: 'rgba(224, 43, 32, 0.1)'
        }}>
            {icon}
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>{desc}</Typography>
    </Paper>
);

const TeamMember = ({ name, role, image }) => (
    <Box sx={{ textAlign: 'center', group: 'member' }}>
        <Box sx={{ position: 'relative', width: 200, height: 200, mx: 'auto', mb: 3 }}>
            <Avatar
                src={image}
                sx={{
                    width: '100%', height: '100%',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' }
                }}
            />
            <Box
                sx={{
                    position: 'absolute', bottom: 0, right: 0,
                    display: 'flex', gap: 1,
                    opacity: 0, transition: 'opacity 0.3s',
                    '.MuiBox-root:hover &': { opacity: 1 } // Show on hover of wrapper
                }}
            >
                <IconButton size="small" sx={{ bgcolor: 'white', boxShadow: 2, '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                    <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: 'white', boxShadow: 2, '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                    <EmailIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
        <Typography variant="h5" fontWeight={700}>{name}</Typography>
        <Typography variant="body1" color="primary" fontWeight={500}>{role}</Typography>
    </Box>
);

const TimelineNode = ({ year, title, desc, align }) => (
    <Box sx={{ display: 'flex', justifyContent: align === 'left' ? 'flex-end' : 'flex-start', position: 'relative', mb: 8, width: '50%', ml: align === 'right' ? '50%' : 0, pr: align === 'left' ? 6 : 0, pl: align === 'right' ? 6 : 0 }}>
        {/* Connector Line - simplified for demo */}
        <Box sx={{
            position: 'absolute',
            top: 0,
            [align === 'left' ? 'right' : 'left']: -1,
            width: 2,
            height: '100%',
            bgcolor: 'grey.300',
            display: { xs: 'none', md: 'block' } // Hide on mobile
        }} />

        {/* Dot */}
        <Box sx={{
            position: 'absolute',
            top: 0,
            [align === 'left' ? 'right' : 'left']: -9,
            width: 18,
            height: 18,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            border: '4px solid white',
            boxShadow: 2,
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
        }} />

        <Box sx={{ textAlign: align === 'left' ? 'right' : 'left' }}>
            <Typography variant="h3" color="primary" fontWeight={800} sx={{ opacity: 0.2, lineHeight: 1, mb: 1 }}>{year}</Typography>
            <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
            <Typography variant="body1" color="text.secondary">{desc}</Typography>
        </Box>
    </Box>
);

const About = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', bgcolor: 'primary.main', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)' }} />
                <Box
                    component={motion.div}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    sx={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '50%' }}
                />

                <Container sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Typography variant="overline" fontWeight={700} sx={{ letterSpacing: 3, opacity: 0.8 }}>EST. 2010</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>
                            More Than Just <br /> A Portrait.
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, opacity: 0.9 }}>
                            We preserve the moments that matter most—helping families and schools cherish memories for generations.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Story */}
            <Box sx={{ py: 15 }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <ScrollReveal direction="left">
                                <SectionHeader
                                    overline="Our Story"
                                    title="Built on Passion, Driven by Purpose"
                                    align="left"
                                />
                                <Typography paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 3 }}>
                                    Pegasus School Images was founded with a simple mission: to create beautiful, authentic photographs that families would treasure, not just store away in a drawer.
                                </Typography>
                                <Typography paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                                    What started as a small studio has grown into a trusted partner for over 200 schools across the region. But our commitment to quality, personal service, and innovation has never wavered.
                                </Typography>
                            </ScrollReveal>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ScrollReveal direction="right" delay={0.2}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', top: 20, left: 20, width: '100%', height: '100%', border: '2px solid', borderColor: 'primary.main', borderRadius: 4, zIndex: 0 }} />
                                    <Box component="img" src="/images/about-story.jpg" sx={{ width: '100%', borderRadius: 4, boxShadow: 4, position: 'relative', zIndex: 1, bgcolor: 'grey.300', minHeight: 400 }} />
                                </Box>
                            </ScrollReveal>
                        </Grid>
                    </Grid>

                    {/* Stats Section */}
                    <Box sx={{ mt: 10, p: 6, bgcolor: 'secondary.main', borderRadius: 4, color: 'white' }}>
                        <Grid container spacing={4} textAlign="center">
                            <Grid item xs={6} md={3}>
                                <Typography variant="h2" fontWeight={800}>
                                    <AnimatedCounter target={200} suffix="+" />
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>Schools Served</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography variant="h2" fontWeight={800}>
                                    <AnimatedCounter target={50000} suffix="+" />
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>Students Photographed</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography variant="h2" fontWeight={800}>
                                    <AnimatedCounter target={15} suffix="+" />
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>Years Experience</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography variant="h2" fontWeight={800}>
                                    <AnimatedCounter target={98} suffix="%" />
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>Satisfaction Rate</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Values */}
            <Box sx={{ py: 15, bgcolor: '#f9fafb' }}>
                <Container>
                    <ScrollReveal>
                        <SectionHeader title="What We Stand For" description="Our core values guide every interaction, from the first click of the shutter to the final delivery." />
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.15}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ValueCard icon="⭐" title="Authenticity" desc="We capture real moments and genuine personalities—not forced poses or fake smiles." />
                                </GlowCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ValueCard icon="🏆" title="Excellence" desc="We're committed to delivering the highest quality in everything we do—from photos to service." />
                                </GlowCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <GlowCard>
                                    <ValueCard icon="🤝" title="Community" desc="We're proud to be part of the communities we serve, supporting local schools and families." />
                                </GlowCard>
                            </Grid>
                        </Grid>
                    </StaggerChildren>
                </Container>
            </Box>

            {/* Timeline */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="md">
                    <SectionHeader title="Our Journey" />
                    <Box sx={{ position: 'relative', mt: 8 }}>
                        {/* Center Line for Desktop */}
                        <Box sx={{
                            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, bg: 'grey.200', transform: 'translateX(-50%)',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(200,200,200,1) 10%, rgba(200,200,200,1) 90%, rgba(0,0,0,0) 100%)',
                            display: { xs: 'none', md: 'block' }
                        }} />

                        <TimelineNode align="left" year="2010" title="The Beginning" desc="Sarah Johnson opens Pegasus as a small portrait studio with a vision for better school photos." />
                        <TimelineNode align="right" year="2014" title="First School Partner" desc="We sign our first major school contract, expanding into the school portrait photography market." />
                        <TimelineNode align="left" year="2018" title="100 Schools Strong" desc="Pegasus reaches a milestone of 100 school partners and expands the team to 20 full-time staff." />
                        <TimelineNode align="right" year="2023" title="Innovation Hub" desc="We open our new flagship studio with state-of-the-art equipment and launch our proprietary online ordering system." />
                        <TimelineNode align="left" year="2026" title="Today & Beyond" desc="With 200+ school partners, we continue to grow while staying true to our mission of capturing authentic moments." />
                    </Box>
                </Container>
            </Box>


            {/* Team */}
            <Box sx={{ py: 15, bgcolor: 'background.default' }}>
                <Container>
                    <SectionHeader title="Meet the Leadership" description="The people behind the lens." />
                    <Grid container spacing={8} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <TeamMember name="Sarah Johnson" role="Founder & CEO" image="https://placehold.co/400x400/333/fff?text=Sarah" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TeamMember name="Michael Chen" role="Head of Photography" image="https://placehold.co/400x400/444/fff?text=Michael" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TeamMember name="Emily Rodriguez" role="Director of Operations" image="https://placehold.co/400x400/555/fff?text=Emily" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 12, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Let's Work Together</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Whether you're a senior looking for amazing portraits or a school seeking a photography partner, we'd love to hear from you.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Button variant="contained" color="white" component={Link} to="/contact" sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, px: 4 }}>
                            Contact Us
                        </Button>
                        <Button variant="outlined" color="inherit" component={Link} to="/schools">For Schools</Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default About;
