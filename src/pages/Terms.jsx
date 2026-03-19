import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Section = ({ title, children }) => (
    <Box sx={{ mb: 5 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        {children}
    </Box>
);

const Terms = () => (
    <Box>
        <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 10, textAlign: 'center' }}>
            <Container>
                <Typography variant="h2" fontWeight={800} gutterBottom>Terms of Service</Typography>
                <Typography variant="h6" sx={{ opacity: 0.8 }}>Last updated: March 1, 2026</Typography>
            </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 10 }}>
            <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
                <Typography paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 5 }}>
                    These Terms of Service ("Terms") govern your use of Pegasus School Images' website and photography services. By accessing our website or using our services, you agree to be bound by these Terms.
                </Typography>

                <Section title="1. Services">
                    <Typography paragraph color="text.secondary">
                        Pegasus School Images provides professional photography services for schools, students, and families. Our services include school portrait photography, senior portraits, sports photography, yearbook services, and related products.
                    </Typography>
                </Section>

                <Section title="2. Photo Orders & Payment">
                    <Typography paragraph color="text.secondary">
                        All photo orders are subject to availability and processing times. Prices are listed in Canadian dollars unless otherwise stated. Payment is due at the time of ordering. We accept major credit cards and other payment methods as indicated during checkout.
                    </Typography>
                </Section>

                <Section title="3. Satisfaction Guarantee">
                    <Typography paragraph color="text.secondary">
                        We stand behind the quality of our photography. If you are not satisfied with your photos, contact us within 30 days of delivery for a retake or refund. Retakes are subject to availability and scheduling with the school.
                    </Typography>
                </Section>

                <Section title="4. Copyright & Usage">
                    <Typography paragraph color="text.secondary">
                        All photographs taken by Pegasus School Images are copyrighted. Personal-use digital downloads may be used for non-commercial purposes. Photos may not be reproduced for commercial use without written permission. Schools are granted a license to use photos for administrative and promotional purposes as outlined in their service agreement.
                    </Typography>
                </Section>

                <Section title="5. Cancellation & Rescheduling">
                    <Typography paragraph color="text.secondary">
                        Senior portrait sessions may be rescheduled with at least 48 hours' notice at no charge. Cancellations made less than 24 hours before a session may be subject to a cancellation fee. School picture days follow the schedule agreed upon with the school administration.
                    </Typography>
                </Section>

                <Section title="6. Limitation of Liability">
                    <Typography paragraph color="text.secondary">
                        While we take every precaution to ensure the quality and security of our services, Pegasus School Images' liability is limited to the value of the services or products purchased. We are not liable for any indirect, incidental, or consequential damages.
                    </Typography>
                </Section>

                <Section title="7. Changes to Terms">
                    <Typography paragraph color="text.secondary">
                        We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the revised Terms.
                    </Typography>
                </Section>

                <Section title="8. Contact">
                    <Typography paragraph color="text.secondary">
                        Questions about these Terms should be directed to:
                    </Typography>
                    <Typography color="text.secondary">Pegasus School Images</Typography>
                    <Typography color="text.secondary">944 South Service Rd, Stoney Creek, ON L8E 6A2</Typography>
                    <Typography color="text.secondary">Email: info@pegasus-si.com</Typography>
                    <Typography color="text.secondary">Phone: (800) 461-6575</Typography>
                </Section>
            </Paper>
        </Container>
    </Box>
);

export default Terms;
