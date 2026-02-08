import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, TextField, MenuItem, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentIcon from '@mui/icons-material/Payment';
import TestimonialCarousel from '../components/TestimonialCarousel';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BenefitItem = ({ icon, title, text }) => (
    <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default', borderRadius: 4, height: '100%', display: 'flex', gap: 2 }}>
        <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'flex-start', pt: 0.5 }}>
            {icon}
        </Box>
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
            <Typography variant="body2" color="text.secondary">{text}</Typography>
        </Box>
    </Paper>
);

const Schools = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', bgcolor: '#111', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/school-hero.jpg"
                    sx={{ position: 'absolute', right: 0, width: '50%', height: '100%', objectFit: 'cover', opacity: 0.6, maskImage: 'linear-gradient(to left, black, transparent)' }}
                />
                <Container>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 650, position: 'relative', zIndex: 1 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main' }}>🏫 SCHOOL PARTNERS</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mt: 2 }}>
                            Photography That Captures Your School's Story
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.8 }}>
                            From class portraits to athletic events, we provide comprehensive photography services tailored to your community.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" href="#services">Our Services</Button>
                            <Button variant="outlined" color="inherit" size="large" href="#contact">Request Quote</Button>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Services Section */}
            <Box id="services" sx={{ py: 10 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>What We Offer</Typography>
                        <Typography variant="h3">School Photography Services</Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { title: 'School Portraits', desc: 'Professional individual and class photos.', img: '/images/school-portraits.jpg' },
                            { title: 'Athletics & Events', desc: 'Dynamic coverage of sports and events.', img: '/images/athletics.jpg' },
                            { title: 'School Culture', desc: 'Documenting daily life and clubs.', img: '/images/school-culture.jpg' }
                        ].map((service, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper sx={{ borderRadius: 4, overflow: 'hidden', height: '100%' }}>
                                    <Box component="img" src={service.img} sx={{ width: '100%', height: 200, objectFit: 'cover' }} />
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h5" gutterBottom fontWeight={700}>{service.title}</Typography>
                                        <Typography color="text.secondary" paragraph>{service.desc}</Typography>
                                        <Button>Learn More →</Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Why Pegasus</Typography>
                            <Typography variant="h3" gutterBottom>What Makes Us Different</Typography>
                            <Stack spacing={3} sx={{ mt: 4 }}>
                                <BenefitItem
                                    icon={<VerifiedUserIcon fontSize="large" />}
                                    title="Trusted & Secure"
                                    text="Background-checked photographers and secure online galleries."
                                />
                                <BenefitItem
                                    icon={<AccessTimeIcon fontSize="large" />}
                                    title="On-Time Delivery"
                                    text="Guaranteed delivery timelines for all materials."
                                />
                                <BenefitItem
                                    icon={<GroupsIcon fontSize="large" />}
                                    title="Experienced Team"
                                    text="15+ years working with schools of all sizes."
                                />
                                <BenefitItem
                                    icon={<PaymentIcon fontSize="large" />}
                                    title="Flexible Payment"
                                    text="Multiple options for parents, no upfront costs to schools."
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component="img" src="/images/school-team.jpg" sx={{ width: '100%', borderRadius: 4, boxShadow: 4 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials */}
            <TestimonialCarousel
                dark
                title="Trusted by Schools Everywhere"
                subtitle="Hear from administrators who partner with Pegasus"
                testimonials={[
                    {
                        quote: "Pegasus made picture day so easy for our school. The photos came out beautiful and the online ordering system was a hit with parents!",
                        name: "Sarah Mitchell",
                        role: "Principal",
                        school: "Maple Grove Elementary",
                        rating: 5,
                        avatar: "/images/testimonial-admin-1.jpg"
                    },
                    {
                        quote: "We've worked with Pegasus for 8 years. Their reliability, quality, and customer service are unmatched. Highly recommend!",
                        name: "Dr. Robert Chen",
                        role: "Superintendent",
                        school: "Valley School District",
                        rating: 5,
                        avatar: "/images/testimonial-admin-2.jpg"
                    },
                    {
                        quote: "The team uniforms turned out amazing! Great quality, fast turnaround, and the kids loved them. Pegasus has been our go-to for 5 years.",
                        name: "Coach Mike Rodriguez",
                        role: "Athletic Director",
                        school: "Lincoln High School",
                        rating: 5,
                        avatar: "/images/testimonial-admin-3.jpg"
                    }
                ]}
            />

            {/* Contact Form */}
            <Box id="contact" sx={{ py: 10 }}>
                <Container>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="overline" color="primary" fontWeight={700}>Get Started</Typography>
                            <Typography variant="h3" gutterBottom>Partner With Us</Typography>
                            <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
                                Ready to elevate your school's photography experience? Fill out the form and we'll get back to you within 24 hours.
                            </Typography>
                            <Typography variant="h6" gutterBottom>📧 schools@pegasus-si.com</Typography>
                            <Typography variant="h6">📞 (555) 123-4567</Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Paper sx={{ p: 5, borderRadius: 4 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField fullWidth label="School Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField fullWidth label="Your Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField fullWidth label="Email Address" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField fullWidth label="Phone Number" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField select fullWidth label="Services Interested In" defaultValue="">
                                            <MenuItem value="">Select a service...</MenuItem>
                                            <MenuItem value="portraits">School Portraits</MenuItem>
                                            <MenuItem value="athletics">Athletics</MenuItem>
                                            <MenuItem value="culture">Culture</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth multiline rows={4} label="Additional Information" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" size="large" fullWidth>Request Quote</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Schools;
