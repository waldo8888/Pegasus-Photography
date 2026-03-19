import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BadgeIcon from '@mui/icons-material/Badge';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import SecurityIcon from '@mui/icons-material/Security';
import { AnimatedCounter } from '../components/Animations';
import SectionHeader from '../components/SectionHeader';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureCard = ({ icon, title, desc }) => (
    <Paper sx={{
        p: 4, borderRadius: 4, height: '100%',
        transition: 'all 0.3s',
        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
    }}>
        <Box sx={{
            width: 56, height: 56, borderRadius: 3, mb: 2,
            bgcolor: 'rgba(224,43,32,0.1)', color: 'primary.main',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {icon}
        </Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{desc}</Typography>
    </Paper>
);

const AdminPortal = () => (
    <Box>
        {/* Hero */}
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', bgcolor: '#111', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, rgba(224,43,32,0.1) 0%, transparent 60%)' }} />
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                    <Chip label="For Administrators" sx={{ mb: 3, bgcolor: 'primary.main', color: 'white', fontWeight: 600 }} />
                    <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        School Admin Portal
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.8 }}>
                        Manage picture days, track orders, download ID cards, and view your school's revenue share — all from one dashboard.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" size="large" component={Link} to="/contact">Request Demo</Button>
                        <Button variant="outlined" color="inherit" size="large" component={Link} to="/schools">Learn More</Button>
                    </Stack>
                </MotionBox>
            </Container>
        </Box>

        {/* Dashboard Preview */}
        <Box sx={{ py: 12 }}>
            <Container>
                <SectionHeader title="Your Dashboard at a Glance" description="Everything you need to manage your school's photography program in one place." />

                <Paper sx={{ p: 5, borderRadius: 4, mt: 6, bgcolor: '#fafafa' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                                <Typography variant="h3" fontWeight={800} color="primary">
                                    <AnimatedCounter target={847} />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">Students Photographed</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                                <Typography variant="h3" fontWeight={800} color="primary">
                                    <AnimatedCounter target={92} suffix="%" />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">Participation Rate</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                                <Typography variant="h3" fontWeight={800} color="primary">
                                    $<AnimatedCounter target={3850} />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">Revenue Share Earned</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                                <Typography variant="h3" fontWeight={800} color="primary">
                                    <AnimatedCounter target={3} />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">Picture Days This Year</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>

        {/* Features */}
        <Box sx={{ py: 12, bgcolor: '#f9fafb' }}>
            <Container>
                <SectionHeader title="Portal Features" description="Powerful tools designed specifically for school administrators." />
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<CalendarTodayIcon sx={{ fontSize: 28 }} />}
                            title="Schedule Picture Days"
                            desc="Request and manage picture day dates directly through the portal. Get real-time confirmation."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<BadgeIcon sx={{ fontSize: 28 }} />}
                            title="Student ID Cards"
                            desc="Download and print PVC student and staff ID cards. Visitor badges also available."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<AssessmentIcon sx={{ fontSize: 28 }} />}
                            title="Order Tracking"
                            desc="Monitor order progress from production to delivery. Get notified when orders ship."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<MonetizationOnIcon sx={{ fontSize: 28 }} />}
                            title="Revenue Reports"
                            desc="View real-time revenue share earnings and download detailed financial reports."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<PeopleIcon sx={{ fontSize: 28 }} />}
                            title="SIS Integration"
                            desc="Seamless integration with PowerSchool, Trillium, and other student information systems."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<InventoryIcon sx={{ fontSize: 28 }} />}
                            title="Digital Directories"
                            desc="Searchable visual directories for office staff. Quickly identify students and staff."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<SecurityIcon sx={{ fontSize: 28 }} />}
                            title="Emergency Cards"
                            desc="Print safety and emergency cards with student photos for administrative use."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeatureCard
                            icon={<DashboardIcon sx={{ fontSize: 28 }} />}
                            title="Dedicated Support"
                            desc="Your own Pegasus representative available via phone, email, or in-portal chat."
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>

        {/* CTA */}
        <Box sx={{ py: 12, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom fontWeight={800}>Ready to Simplify Picture Day?</Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                    Join 200+ schools that trust Pegasus. Request a demo of the Admin Portal today.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="contained" size="large" component={Link} to="/contact" sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, '&:hover': { bgcolor: 'grey.100' } }}>
                        Request a Demo
                    </Button>
                    <Button variant="outlined" color="inherit" size="large" component={Link} to="/schools">
                        Learn More
                    </Button>
                </Stack>
            </Container>
        </Box>
    </Box>
);

export default AdminPortal;
