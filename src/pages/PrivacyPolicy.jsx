import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Section = ({ title, children }) => (
    <Box sx={{ mb: 5 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>{title}</Typography>
        {children}
    </Box>
);

const PrivacyPolicy = () => (
    <Box>
        <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 10, textAlign: 'center' }}>
            <Container>
                <Typography variant="h2" fontWeight={800} gutterBottom>Privacy Policy</Typography>
                <Typography variant="h6" sx={{ opacity: 0.8 }}>Last updated: March 1, 2026</Typography>
            </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 10 }}>
            <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
                <Typography paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 5 }}>
                    Pegasus School Images ("Pegasus," "we," "us," or "our") is committed to protecting the privacy and security of all personal information we collect. This Privacy Policy describes how we collect, use, disclose, and safeguard information in connection with our photography services.
                </Typography>

                <Section title="1. Information We Collect">
                    <Typography paragraph color="text.secondary">We collect information necessary to provide our photography services, including:</Typography>
                    <Typography component="ul" color="text.secondary" sx={{ pl: 3 }}>
                        <li>Student names, grades, and school information (provided by the school)</li>
                        <li>Photographs taken during scheduled sessions</li>
                        <li>Parent/guardian contact information for order fulfillment</li>
                        <li>Payment information for photo orders (processed securely through third-party payment processors)</li>
                    </Typography>
                </Section>

                <Section title="2. How We Use Information">
                    <Typography paragraph color="text.secondary">We use the information we collect solely for:</Typography>
                    <Typography component="ul" color="text.secondary" sx={{ pl: 3 }}>
                        <li>Delivering photography services to schools and families</li>
                        <li>Processing photo orders and payments</li>
                        <li>Providing access to online photo galleries</li>
                        <li>Communicating about picture day schedules and orders</li>
                        <li>Creating school administrative materials (ID cards, yearbooks) as requested</li>
                    </Typography>
                </Section>

                <Section title="3. Data Protection">
                    <Typography paragraph color="text.secondary">
                        All personal data is encrypted using AES-256 encryption and stored exclusively on servers located in Canada. We implement industry-standard security measures including firewalls, secure socket layer (SSL) technology, and regular security audits.
                    </Typography>
                </Section>

                <Section title="4. Data Sharing">
                    <Typography paragraph color="text.secondary">
                        We do not sell, rent, or share personal information with third parties for marketing purposes. Information is only shared with the school that engaged our services and with payment processors to fulfill orders.
                    </Typography>
                </Section>

                <Section title="5. Data Retention">
                    <Typography paragraph color="text.secondary">
                        Student photographs and associated data are retained for the current school year plus 90 days to allow for retake and reorder requests. After this period, all data is securely deleted from our systems.
                    </Typography>
                </Section>

                <Section title="6. Parental Rights">
                    <Typography paragraph color="text.secondary">
                        Parents and guardians have the right to access, correct, or request deletion of their child's information at any time. To exercise these rights, contact us at privacy@pegasus-si.com or call (800) 461-6575.
                    </Typography>
                </Section>

                <Section title="7. Compliance">
                    <Typography paragraph color="text.secondary">
                        We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA), the Freedom of Information and Protection of Privacy Act (FIPPA), and the Municipal Freedom of Information and Protection of Privacy Act (MFIPPA).
                    </Typography>
                </Section>

                <Section title="8. Contact Us">
                    <Typography paragraph color="text.secondary">
                        If you have any questions or concerns about this Privacy Policy, please contact our Privacy Officer:
                    </Typography>
                    <Typography color="text.secondary">Pegasus School Images</Typography>
                    <Typography color="text.secondary">944 South Service Rd, Stoney Creek, ON L8E 6A2</Typography>
                    <Typography color="text.secondary">Email: privacy@pegasus-si.com</Typography>
                    <Typography color="text.secondary">Phone: (800) 461-6575</Typography>
                </Section>
            </Paper>
        </Container>
    </Box>
);

export default PrivacyPolicy;
