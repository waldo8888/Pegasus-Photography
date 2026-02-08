import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, Stack, TextField, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionHeader from '../components/SectionHeader';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const jobs = [
    {
        id: 1,
        title: 'Senior Portrait Photographer',
        department: 'Photography',
        location: 'Multiple Locations',
        type: 'Full-time',
        salary: '$45,000 - $65,000',
        description: 'Capture stunning senior portraits while creating a fun, comfortable experience for students.',
        requirements: [
            '3+ years professional photography experience',
            'Proficient in Adobe Lightroom and Photoshop',
            'Excellent interpersonal skills',
            'Reliable transportation',
            'Flexible schedule for peak seasons'
        ]
    },
    {
        id: 2,
        title: 'School Photographer',
        department: 'Photography',
        location: 'Regional - Midwest',
        type: 'Full-time / Seasonal',
        salary: '$35,000 - $50,000',
        description: 'Photograph school picture days for K-12 students. High-volume, fast-paced environment.',
        requirements: [
            '1+ years photography experience',
            'Comfortable working with children',
            'Able to lift 30+ lbs of equipment',
            'Valid driver\'s license',
            'Background check required'
        ]
    },
    {
        id: 3,
        title: 'Photo Retoucher',
        department: 'Post-Production',
        location: 'Remote',
        type: 'Full-time',
        salary: '$40,000 - $55,000',
        description: 'Edit and retouch thousands of school and portrait photos to our quality standards.',
        requirements: [
            'Expert-level Photoshop skills',
            'Experience with batch editing workflows',
            'Strong attention to detail',
            'Ability to meet deadlines',
            'Portfolio of retouching work'
        ]
    },
    {
        id: 4,
        title: 'Sales Representative - Schools',
        department: 'Sales',
        location: 'Texas Region',
        type: 'Full-time',
        salary: '$50,000 - $80,000 + Commission',
        description: 'Build relationships with school administrators and grow our school photography partnerships.',
        requirements: [
            '2+ years B2B sales experience',
            'Experience in education sector preferred',
            'Strong presentation skills',
            'CRM experience (Salesforce)',
            'Willingness to travel regionally'
        ]
    },
    {
        id: 5,
        title: 'Customer Service Representative',
        department: 'Support',
        location: 'Houston, TX',
        type: 'Full-time',
        salary: '$35,000 - $42,000',
        description: 'Help parents and schools with orders, inquiries, and photo-related questions.',
        requirements: [
            'Excellent communication skills',
            'Experience with customer service software',
            'Problem-solving mindset',
            'Bilingual (Spanish) a plus',
            'Patient and empathetic demeanor'
        ]
    }
];

const benefits = [
    { icon: <CameraAltIcon />, title: 'Creative Work', desc: 'Express yourself through photography and design' },
    { icon: <GroupsIcon />, title: 'Team Culture', desc: 'Collaborative, supportive work environment' },
    { icon: <TrendingUpIcon />, title: 'Growth', desc: 'Clear paths for advancement and skill development' },
    { icon: <FavoriteIcon />, title: 'Benefits', desc: 'Health, dental, vision, and 401(k) matching' }
];

const Careers = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                color: 'white',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/careers-hero.jpg"
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.3
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
                }} />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Chip label="🚀 Join Our Team" color="primary" sx={{ mb: 3 }} />
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                            Build Your Career at Pegasus
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            Join 200+ talented photographers and professionals capturing life's milestones.
                        </Typography>
                        <Button variant="contained" size="large" href="#openings">
                            View Open Positions
                        </Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Why Join Section */}
            <Box sx={{ py: 12 }}>
                <Container>
                    <SectionHeader
                        overline="Why Pegasus"
                        title="More Than Just a Job"
                        description="We're passionate about photography and the moments we help families preserve."
                    />

                    <Grid container spacing={4} justifyContent="center">
                        {benefits.map((benefit, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <MotionPaper
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    elevation={2}
                                    sx={{ p: 4, textAlign: 'center', borderRadius: 4, height: '100%' }}
                                >
                                    <Box sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 2
                                    }}>
                                        {benefit.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>
                                        {benefit.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {benefit.desc}
                                    </Typography>
                                </MotionPaper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Open Positions */}
            <Box id="openings" sx={{ py: 12, bgcolor: '#f9f9f9' }}>
                <Container>
                    <SectionHeader
                        overline="Open Positions"
                        title="Find Your Role"
                        description="We're always looking for talented individuals to join our growing team."
                    />

                    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                        {jobs.map((job) => (
                            <Accordion
                                key={job.id}
                                expanded={expanded === `panel${job.id}`}
                                onChange={handleChange(`panel${job.id}`)}
                                disableGutters
                                elevation={2}
                                sx={{
                                    mb: 2,
                                    borderRadius: '16px !important',
                                    overflow: 'hidden',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Typography variant="h6" fontWeight={700}>{job.title}</Typography>
                                        <Stack direction="row" spacing={2} sx={{ mt: 1 }} flexWrap="wrap" useFlexGap>
                                            <Chip icon={<WorkIcon />} label={job.department} size="small" />
                                            <Chip icon={<LocationOnIcon />} label={job.location} size="small" variant="outlined" />
                                            <Chip icon={<AccessTimeIcon />} label={job.type} size="small" variant="outlined" />
                                        </Stack>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: 4, pb: 4 }}>
                                    <Typography color="text.secondary" paragraph>
                                        {job.description}
                                    </Typography>

                                    <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ mt: 2 }}>
                                        Requirements
                                    </Typography>
                                    <List dense>
                                        {job.requirements.map((req, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircleIcon color="primary" fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={req} />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
                                        <Chip icon={<AttachMoneyIcon />} label={job.salary} color="success" />
                                        <Button variant="contained" size="large">
                                            Apply Now
                                        </Button>
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>
                        Don't See the Right Role?
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        We're always looking for talented individuals. Send us your resume!
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                    >
                        Submit General Application
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Careers;
