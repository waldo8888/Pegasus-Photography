import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TimelineItem = ({ number, title, description, image, reverse }) => (
    <Grid container spacing={6} alignItems="center" direction={reverse ? 'row-reverse' : 'row'} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', pl: 2 }}>
                <Typography variant="h1" color="primary" sx={{ position: 'absolute', top: -40, left: -20, opacity: 0.1, fontWeight: 900, fontSize: '8rem', zIndex: -1 }}>
                    {number}
                </Typography>
                <Typography variant="h4" fontWeight={700} gutterBottom>{title}</Typography>
                <Typography variant="body1" color="text.secondary">{description}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box component="img" src={image} sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }} />
        </Grid>
    </Grid>
);

const DetailCard = ({ title, desc, price }) => (
    <Paper sx={{ p: 4, height: '100%', borderRadius: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        {price && <Typography variant="h4" color="primary" fontWeight={800} gutterBottom>{price}</Typography>}
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
    </Paper>
);

const University = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', bgcolor: '#222', color: 'white' }}>
                <Box
                    component="img"
                    src="/images/university_hero_gown.png"
                    sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp} sx={{ maxWidth: 700 }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.main' }}>UNIVERSITY & COLLEGE</Typography>
                        <Typography variant="h1" fontWeight={800} gutterBottom sx={{ mt: 2, fontSize: { xs: '3rem', md: '5rem' } }}>
                            Celebrate Your <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>Achievement.</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
                            You've worked hard for this moment. Let us capture your success with professional graduation portraits that tell your story.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" size="large" href="#book">Book Portrait Session</Button>
                            <Button variant="outlined" color="inherit" size="large" href="#process">How It Works</Button>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>

            {/* Timeline */}
            <Box id="process" sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>The Process</Typography>
                        <Typography variant="h3">Your Graduation Experience</Typography>
                        <Typography color="text.secondary">From booking to framing, we make it seamless.</Typography>
                    </Box>

                    <TimelineItem
                        number="01"
                        title="The Session"
                        description="Your 15-20 minute sitting includes traditional poses in your gown and hood, plus casual shots to show your personality."
                        image="/images/university_casual_portrait.png"
                    />
                    <TimelineItem
                        number="02"
                        title="The Proofs"
                        description="No need to wait. Your proofs are emailed directly to you shortly after your session. View them on your phone or laptop and share with family."
                        image="/images/digital_proofs_student.png"
                        reverse
                    />
                    <TimelineItem
                        number="03"
                        title="The Composite"
                        description="A tradition that lasts. Your portrait will be included in the official class composite board that hangs in your department hallway."
                        image="/images/class_composite_example.png"
                    />
                </Container>
            </Box>

            {/* Details Grid */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>What to Expect</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <DetailCard
                                title="Sitting Fee"
                                price="$25.00"
                                desc="Required to book your appointment. Covers photographer's time and equipment. Does not include prints or digital files."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DetailCard
                                title="Wardrobe"
                                desc="We provide the gown, sash, and hood for your specific degree. For the casual portion, wear business casual or something that represents you."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DetailCard
                                title="Double Degrees"
                                desc="Graduating with two degrees? No problem. We can photograph you in both hoods during your session. Just let us know."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box id="book" sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>Ready to Make History?</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Slots fill up fast as graduation approaches. Secure your time today.
                    </Typography>
                    <Button variant="contained" color="white" size="large" sx={{ color: 'secondary.main', fontWeight: 700, px: 5 }}>
                        Book Now
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}

export default University;
