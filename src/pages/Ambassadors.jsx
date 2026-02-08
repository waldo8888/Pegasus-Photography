import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, Stack, TextField, MenuItem, Stepper, Step, StepLabel, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolIcon from '@mui/icons-material/School';
import SectionHeader from '../components/SectionHeader';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const benefits = [
    {
        icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
        title: 'Free Mini Session',
        desc: 'Get a complimentary portrait session (valued at $200)'
    },
    {
        icon: <LocalOfferIcon sx={{ fontSize: 40 }} />,
        title: '20% Off Prints',
        desc: 'Exclusive discount on all print packages'
    },
    {
        icon: <CardGiftcardIcon sx={{ fontSize: 40 }} />,
        title: 'Referral Rewards',
        desc: 'Earn $50 for every friend you refer who books'
    },
    {
        icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
        title: 'Featured Status',
        desc: 'Get featured on our website and social media'
    }
];

const requirements = [
    'Currently enrolled as a junior or senior in high school',
    'Active on social media (Instagram, TikTok, etc.)',
    'Comfortable in front of the camera',
    'Passionate about photography and helping others',
    'Available for occasional events and photoshoots',
    'Willing to share your experience on social media'
];

const testimonials = [
    {
        name: 'Madison K.',
        school: 'Lincoln High School',
        year: 'Class of 2025',
        quote: "Being a Pegasus Ambassador changed my senior year! The free session was amazing and I've already earned $150 in referral bonuses.",
        avatar: '/images/ambassadors/madison.jpg'
    },
    {
        name: 'Tyler R.',
        school: 'Central Academy',
        year: 'Class of 2025',
        quote: "I love being part of the Pegasus family. The team is so supportive and my photos turned out incredible!",
        avatar: '/images/ambassadors/tyler.jpg'
    }
];

const ApplicationForm = () => {
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        school: '',
        graduationYear: '',
        instagram: '',
        whyInterested: ''
    });

    const steps = ['Personal Info', 'School Details', 'Social Media'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setSubmitted(true);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    if (submitted) {
        return (
            <Paper sx={{ p: 5, textAlign: 'center', borderRadius: 4 }}>
                <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Application Submitted!
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Thanks for applying! We'll review your application and get back to you within 5 business days.
                </Typography>
                <Button variant="contained" href="/">
                    Back to Home
                </Button>
            </Paper>
        );
    }

    return (
        <Paper sx={{ p: 4, borderRadius: 4 }}>
            <Stepper activeStep={step} sx={{ mb: 4 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {step === 0 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            )}

            {step === 1 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="School Name"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            select
                            label="Graduation Year"
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="2025">2025</MenuItem>
                            <MenuItem value="2026">2026</MenuItem>
                            <MenuItem value="2027">2027</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            )}

            {step === 2 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Instagram Handle"
                            name="instagram"
                            placeholder="@yourusername"
                            value={formData.instagram}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InstagramIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Why do you want to be a Pegasus Ambassador?"
                            name="whyInterested"
                            value={formData.whyInterested}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>
            )}

            <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                <Button
                    disabled={step === 0}
                    onClick={handleBack}
                    variant="outlined"
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                >
                    {step === steps.length - 1 ? 'Submit Application' : 'Next'}
                </Button>
            </Stack>
        </Paper>
    );
};

const Ambassadors = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#111',
                color: 'white',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/ambassadors-hero.jpg"
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)'
                }} />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Chip
                            icon={<StarIcon />}
                            label="Join the Team"
                            color="primary"
                            sx={{ mb: 3 }}
                        />
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                            Become a Pegasus Ambassador
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            Represent your school, earn exclusive perks, and get featured on our platforms.
                        </Typography>
                        <Button variant="contained" size="large" href="#apply">
                            Apply Now
                        </Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box sx={{ py: 12 }}>
                <Container>
                    <SectionHeader
                        overline="Ambassador Perks"
                        title="What You'll Get"
                        description="Being a Pegasus Ambassador comes with awesome benefits."
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
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.light',
                                        color: 'primary.main',
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

            {/* Requirements Section */}
            <Box sx={{ py: 12, bgcolor: '#f9f9f9' }}>
                <Container>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <Chip label="Requirements" color="secondary" sx={{ mb: 2 }} />
                                <Typography variant="h3" fontWeight={800} gutterBottom>
                                    Who Can Apply?
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    We're looking for enthusiastic students who love photography and want to share their experience with others.
                                </Typography>
                                <List>
                                    {requirements.map((req, index) => (
                                        <ListItem key={index} disableGutters>
                                            <ListItemIcon>
                                                <CheckCircleIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary={req} />
                                        </ListItem>
                                    ))}
                                </List>
                            </MotionBox>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="/images/ambassador-group.jpg"
                                sx={{ width: '100%', borderRadius: 4 }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ py: 12 }}>
                <Container>
                    <SectionHeader
                        overline="From Our Ambassadors"
                        title="What They're Saying"
                        description="Hear from students who are already part of the Pegasus family."
                    />

                    <Grid container spacing={4} justifyContent="center">
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <MotionPaper
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    elevation={2}
                                    sx={{ p: 4, borderRadius: 4 }}
                                >
                                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, fontSize: '1.1rem' }}>
                                        "{testimonial.quote}"
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56 }} />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={700}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {testimonial.school} • {testimonial.year}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </MotionPaper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Application Form Section */}
            <Box id="apply" sx={{ py: 12, bgcolor: 'secondary.main', color: 'white' }}>
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Chip label="🎓 Apply Today" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                        <Typography variant="h3" fontWeight={800} gutterBottom>
                            Ready to Join?
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                            Fill out the form below and we'll be in touch soon!
                        </Typography>
                    </Box>

                    <ApplicationForm />
                </Container>
            </Box>
        </Box>
    );
};

export default Ambassadors;
