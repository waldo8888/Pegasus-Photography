import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShieldIcon from '@mui/icons-material/Shield';
import HelpIcon from '@mui/icons-material/Help';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PortalCard = ({ icon, title, desc, link, primary }) => (
    <Paper
        component={Link}
        to={link}
        elevation={primary ? 4 : 1}
        sx={{
            p: 5, borderRadius: 4, textAlign: 'center', height: '100%',
            textDecoration: 'none', color: 'inherit',
            border: primary ? 2 : 0, borderColor: 'primary.main',
            transition: 'all 0.3s',
            '&:hover': { transform: 'translateY(-8px)', boxShadow: 8 }
        }}
    >
        <Box sx={{
            width: 80, height: 80, mx: 'auto', mb: 3,
            bgcolor: primary ? 'primary.main' : 'rgba(224,43,32,0.1)',
            color: primary ? 'white' : 'primary.main',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {icon}
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>{desc}</Typography>
    </Paper>
);

const ProcessStep = ({ number, title, desc }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{
            width: 48, height: 48, borderRadius: '50%', bgcolor: 'primary.main', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 'bold', fontSize: '1.2rem', mx: 'auto', mb: 2
        }}>
            {number}
        </Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Box>
);

const ParentPortal = () => (
    <Box>
        {/* Hero */}
        <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 10, md: 15 }, textAlign: 'center' }}>
            <Container maxWidth="md">
                <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                    <Typography variant="overline" sx={{ letterSpacing: 3, opacity: 0.8, display: 'block', mb: 2 }}>For Parents & Families</Typography>
                    <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' } }}>
                        Parent Portal
                    </Typography>
                    <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400, opacity: 0.9 }}>
                        Everything you need for picture day in one place — find your school, view proofs, and order photos.
                    </Typography>
                </MotionBox>
            </Container>
        </Box>

        {/* Main Actions */}
        <Box sx={{ py: 12 }}>
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <PortalCard
                            icon={<SearchIcon sx={{ fontSize: 40 }} />}
                            title="Find Your School"
                            desc="Search for your school to see picture day dates, times, and details."
                            link="/find-school"
                            primary
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PortalCard
                            icon={<PhotoLibraryIcon sx={{ fontSize: 40 }} />}
                            title="View Proofs"
                            desc="Enter your access code to view, favorite, and select your child's photos."
                            link="/proofing"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PortalCard
                            icon={<ShoppingCartIcon sx={{ fontSize: 40 }} />}
                            title="Order Photos"
                            desc="Browse packages and prepay before picture day for a stress-free experience."
                            link="/prepay"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>

        {/* How It Works */}
        <Box sx={{ py: 12, bgcolor: '#f9fafb' }}>
            <Container maxWidth="md">
                <Typography variant="overline" color="primary" fontWeight={700} sx={{ display: 'block', textAlign: 'center' }}>How It Works</Typography>
                <Typography variant="h3" align="center" gutterBottom fontWeight={700}>Picture Day Made Easy</Typography>
                <Typography align="center" color="text.secondary" sx={{ mb: 8 }}>From ordering to delivery, we've streamlined the entire process.</Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={4}>
                        <ProcessStep number={1} title="Find & Prepay" desc="Search for your school and choose a photo package before picture day." />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProcessStep number={2} title="Picture Day" desc="Your child gets photographed at school. Multiple poses captured." />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProcessStep number={3} title="View & Order" desc="Access proofs online, select your favorites, and receive prints at school." />
                    </Grid>
                </Grid>
            </Container>
        </Box>

        {/* Quick Links */}
        <Box sx={{ py: 12 }}>
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper component={Link} to="/session-prep" sx={{ p: 4, borderRadius: 3, textAlign: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                            <CalendarTodayIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
                            <Typography fontWeight={700}>Session Prep</Typography>
                            <Typography variant="body2" color="text.secondary">Tips for picture day</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper component={Link} to="/safety" sx={{ p: 4, borderRadius: 3, textAlign: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                            <ShieldIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
                            <Typography fontWeight={700}>Safety Program</Typography>
                            <Typography variant="body2" color="text.secondary">PegasusShield details</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper component={Link} to="/faq" sx={{ p: 4, borderRadius: 3, textAlign: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                            <HelpIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
                            <Typography fontWeight={700}>FAQ</Typography>
                            <Typography variant="body2" color="text.secondary">Common questions</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
);

export default ParentPortal;
