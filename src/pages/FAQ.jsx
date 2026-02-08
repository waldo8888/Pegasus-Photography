import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CustomAccordion = ({ question, answer }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            sx={{
                bgcolor: 'transparent',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                borderBottom: '1px solid',
                borderColor: 'grey.200',
                mb: 2
            }}
        >
            <AccordionSummary
                expandIcon={expanded ? <RemoveIcon sx={{ color: 'primary.main' }} /> : <AddIcon />}
                sx={{ px: 0, '& .MuiAccordionSummary-content': { my: 2 } }}
            >
                <Typography variant="h6" fontWeight={600} sx={{ color: expanded ? 'primary.main' : 'text.primary' }}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

const FAQ = () => {
    return (
        <Box>
            {/* Hero */}
            <Box sx={{ py: 15, bgcolor: '#111', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/images/pattern_dots.png)', // Assuming this exists or falls back gracefully
                        opacity: 0.1,
                        backgroundSize: '20px 20px'
                    }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Box sx={{ display: 'inline-block', bgcolor: 'rgba(255,255,255,0.1)', px: 3, py: 1, borderRadius: 50, mb: 4 }}>
                            <Typography variant="subtitle2" fontWeight={700} sx={{ letterSpacing: 1 }}>HELP CENTER</Typography>
                        </Box>
                        <Typography variant="h1" fontWeight={800} gutterBottom>
                            Frequently Asked <br /> <Box component="span" sx={{ color: 'primary.main' }}>Questions</Box>
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.7, maxWidth: 600, mx: 'auto', fontWeight: 400, mt: 2 }}>
                            Everything you need to know about your photos, orders, and retakes.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="md">
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ mb: 4 }}>For Parents & Students</Typography>
                            <CustomAccordion
                                question="How do I order my photos?"
                                answer="You can order your photos online at online.pegasus-si.com. You will need the access code provided on your proof sheet or via email. Enter the code, select your favorite pose, and choose a package."
                            />
                            <CustomAccordion
                                question="What is the Family Plan?"
                                answer="We offer a special discount only available for families with multiple children in schools serviced by us. If you purchase full packages for the first two children, any additional children's packages (of equal or lesser value) are free."
                            />
                            <CustomAccordion
                                question="I lost my access code / password. What do I do?"
                                answer="Don't worry! For Elementary or High School students, please contact your school's main office as they have a master list. For Graduates, please click the 'Contact' button below and provide the student's full name and school."
                            />
                            <CustomAccordion
                                question="Can I get a retake?"
                                answer="Yes, we want you to love your photo. Retake days are scheduled directly with your school. Please check your school calendar or office for the specific date. Remember to bring your original proof sheet to the photographer!"
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 8 }}>
                            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ mb: 4 }}>General Inquiries</Typography>
                            <CustomAccordion
                                question="What are your office hours?"
                                answer="Our customer service team is happy to help you Monday through Friday, from 8:30 AM to 5:00 PM EST. We are closed on statutory holidays."
                            />
                            <CustomAccordion
                                question="Do you offer digital downloads?"
                                answer="Absolutely! Digital downloads are available for purchase with most of our packages. You receive a high-resolution file perfect for sharing on social media, emailing to relatives, or archiving safely."
                            />
                            <CustomAccordion
                                question="How long does delivery take?"
                                answer="Digital downloads are delivered instantly after purchase. For print orders, please allow approximately 2-3 weeks for processing and delivery to your school or home, depending on the shipping option selected."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 12, bgcolor: 'background.default', textAlign: 'center' }}>
                <Container maxWidth="sm">
                    <Paper elevation={0} sx={{ p: 6, borderRadius: 8, bgcolor: 'secondary.main', color: 'white' }}>
                        <Typography variant="h4" gutterBottom fontWeight={700}>Still have questions?</Typography>
                        <Typography sx={{ mb: 4, opacity: 0.8 }}>We're just a click or phone call away.</Typography>
                        <Button variant="contained" size="large" component={Link} to="/contact" sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, px: 4 }}>
                            Contact Support
                        </Button>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default FAQ;
