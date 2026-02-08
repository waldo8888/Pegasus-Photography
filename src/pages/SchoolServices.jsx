import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => (
    <Paper
        component={link ? Link : 'div'}
        to={link}
        sx={{
            p: 3,
            height: '100%',
            borderRadius: 2,
            textDecoration: 'none',
            display: 'block',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.2s',
            '&:hover': link ? { transform: 'translateY(-3px)', borderColor: 'primary.main', boxShadow: 2 } : {}
        }}
    >
        <Typography variant="h6" gutterBottom fontWeight={700} color="text.primary">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
    </Paper>
);

const CategorySection = ({ title, services }) => (
    <Box sx={{ mb: 8 }}>
        <Typography variant="h5" color="primary" sx={{ borderBottom: 2, borderColor: 'divider', pb: 2, mb: 4, fontWeight: 700 }}>
            {title}
        </Typography>
        <Grid container spacing={3}>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ServiceCard {...service} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

const SchoolServices = () => {
    return (
        <Box sx={{ py: 6 }}>
            <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="overline" color="primary" fontWeight={700}>Comprehensive Solutions</Typography>
                <Typography variant="h2" gutterBottom>More Than Just Picture Day</Typography>
                <Typography color="text.secondary" variant="h6" fontWeight={400}>
                    Pegasus offers a full portfolio of photo programs, specialty items, and administrative services.
                </Typography>
            </Container>

            <Container>
                <CategorySection
                    title="📷 Photography Programs"
                    services={[
                        { title: 'Fall Day Photos', description: 'Traditional underclass portraits for school records.', link: '/photography/fall' },
                        { title: 'Graduation', description: 'JK/SK, Grade 8, and Grade 12 ceremony coverage.', link: '/photography/commencements' },
                        { title: 'Special Events', description: 'Candids for First Communion, plays, and more.', link: '/schools#events' },
                        { title: 'Prom & Formal', description: 'Studio lighting setups for big nights.', link: '/for-seniors' },
                        { title: 'Sports', description: 'Team photos and individual athlete portraits.', link: '/apparel/uniforms' },
                        { title: 'Panoramas', description: 'Whole-school or graduating class panoramic shots.' }
                    ]}
                />

                <CategorySection
                    title="🛡️ Admin & Safety"
                    services={[
                        { title: 'SIS Data Integration', description: 'Images formatted for PowerSchool, Trillium, and more.' },
                        { title: 'ID Cards', description: 'PVC cards for Students, Staff, and Visitors.' },
                        { title: 'Emergency Cards', description: 'Printed safety cards for administrative use.' },
                        { title: 'Digital Directories', description: 'Searchable visual databases for office staff.' }
                    ]}
                />

                <CategorySection
                    title="🖨️ Print & Promotional"
                    services={[
                        { title: 'Yearbooks', description: 'Elementary and Secondary yearbook printing programs.', link: '/yearbooks' },
                        { title: 'Certificates', description: 'Custom awards and graduation diplomas.' },
                        { title: 'Posters', description: 'Large format promotional prints for hallway displays.' },
                        { title: 'Banners', description: 'Vinyl banners for sports teams or school events.' }
                    ]}
                />
            </Container>
        </Box>
    );
};

export default SchoolServices;
