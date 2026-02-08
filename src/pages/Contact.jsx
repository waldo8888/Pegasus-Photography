import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, TextField, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactInfoCard = ({ icon, title, content, subContent }) => (
    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 4 }}>
        <Box sx={{ fontSize: 40, mb: 2, bgcolor: 'grey.100', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
            {icon}
        </Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">{content}</Typography>
        {subContent && <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{subContent}</Typography>}
    </Paper>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'Order Issue', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo)');
    };

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ py: 10, bgcolor: 'background.default', textAlign: 'center' }}>
                <Container>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Typography variant="overline" color="primary" fontWeight={700}>We're Here To Help</Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom color="text.primary">Contact Us</Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
                            Have a question about your order or need to book a session? Reach out to our team.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Info Grid */}
            <Box sx={{ py: 8 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <ContactInfoCard icon="📍" title="Visit Us" content="944 South Service Rd, Stoney Creek, ON L8E 6A2" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ContactInfoCard icon="📞" title="Call Us" content="(800) 461-6575" subContent="Mon-Fri, 8:30am - 5:00pm" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ContactInfoCard icon="✉️" title="Email Us" content="info@pegasus-si.com" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Form & Map */}
            <Box sx={{ pb: 10 }}>
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, borderRadius: 4 }}>
                                <Typography variant="h5" fontWeight={700} gutterBottom>Send a Message</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField fullWidth label="Name" name="name" margin="normal" required onChange={handleChange} />
                                    <TextField fullWidth label="Email" name="email" margin="normal" required type="email" onChange={handleChange} />
                                    <TextField fullWidth select label="Subject" name="subject" margin="normal" value={formData.subject} onChange={handleChange}>
                                        <MenuItem value="Order Issue">Order Issue</MenuItem>
                                        <MenuItem value="Booking Inquiry">Booking Inquiry</MenuItem>
                                        <MenuItem value="School Partnership">School Partnership</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>
                                    <TextField fullWidth label="Message" name="message" margin="normal" required multiline rows={4} onChange={handleChange} />
                                    <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 3 }}>Send Message</Button>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ height: '100%', minHeight: 400, borderRadius: 4, overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.528345168864!2d-79.6974!3d43.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca25555555555%3A0x5555555555555555!2s944%20South%20Service%20Rd%2C%20Stoney%20Creek%2C%20ON%20L8E%206A2!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
