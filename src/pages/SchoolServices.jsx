import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PanoramaIcon from '@mui/icons-material/Panorama';
import BadgeIcon from '@mui/icons-material/Badge';
import SecurityIcon from '@mui/icons-material/Security';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ImageIcon from '@mui/icons-material/Image';
import FlagIcon from '@mui/icons-material/Flag';

const ServiceCard = ({ icon, title, description, link }) => (
    <Paper
        component={link ? Link : 'div'}
        to={link}
        sx={{
            p: 3,
            height: '100%',
            borderRadius: 3,
            textDecoration: 'none',
            display: 'block',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.2s',
            '&:hover': link ? { transform: 'translateY(-3px)', borderColor: 'primary.main', boxShadow: 3 } : {}
        }}
    >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: 'rgba(224,43,32,0.1)', color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {icon}
            </Box>
            <Box>
                <Typography variant="h6" gutterBottom fontWeight={700} color="text.primary">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </Box>
        </Box>
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
                    title="Photography Programs"
                    services={[
                        { icon: <CameraAltIcon />, title: 'Fall Day Photos', description: 'Traditional underclass portraits for school records and parent orders.', link: '/photography/fall' },
                        { icon: <SchoolIcon />, title: 'Graduation', description: 'JK/SK, Grade 8, and Grade 12 ceremony coverage with cap and gown options.', link: '/photography/commencements' },
                        { icon: <CelebrationIcon />, title: 'Special Events', description: 'Candids for First Communion, plays, proms, and milestone events.', link: '/schools#events' },
                        { icon: <EmojiEventsIcon />, title: 'Prom & Formal', description: 'Professional studio lighting setups for formal dances and big nights.', link: '/for-seniors' },
                        { icon: <SportsSoccerIcon />, title: 'Sports', description: 'Team photos, individual athlete portraits, and action shots for all sports.', link: '/apparel/uniforms' },
                        { icon: <PanoramaIcon />, title: 'Panoramas', description: 'Whole-school or graduating class panoramic shots for display and purchase.' }
                    ]}
                />

                <CategorySection
                    title="Admin Tools & Safety"
                    services={[
                        { icon: <PeopleIcon />, title: 'SIS Data Integration', description: 'Images formatted for PowerSchool, Trillium, and other student information systems. Seamless data sync with your existing school database.' },
                        { icon: <BadgeIcon />, title: 'Student & Staff ID Cards', description: 'Professional PVC ID cards with photos for students, staff, and visitors. Includes barcoding and magnetic stripe options.' },
                        { icon: <ContactEmergencyIcon />, title: 'Emergency Cards', description: 'Printed safety cards with student photos for emergency preparedness. Quick identification in critical situations.' },
                        { icon: <SecurityIcon />, title: 'Digital Directories', description: 'Searchable visual databases for office staff. Quickly identify students and staff with photo-enhanced directories.', link: '/admin-portal' },
                    ]}
                />

                <CategorySection
                    title="Print & Promotional"
                    services={[
                        { icon: <MenuBookIcon />, title: 'Yearbooks', description: 'Elementary and Secondary yearbook design, printing, and distribution programs.', link: '/yearbooks' },
                        { icon: <CardMembershipIcon />, title: 'Certificates', description: 'Custom awards, graduation diplomas, and achievement certificates with professional printing.' },
                        { icon: <ImageIcon />, title: 'Posters', description: 'Large format promotional prints for hallway displays, athletic showcases, and school pride.' },
                        { icon: <FlagIcon />, title: 'Banners', description: 'Durable vinyl banners for sports teams, school events, and campus decoration.' }
                    ]}
                />

                {/* Admin Portal CTA */}
                <Paper sx={{ p: 5, borderRadius: 4, textAlign: 'center', bgcolor: 'secondary.main', color: 'white', mt: 4 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>Manage It All From One Dashboard</Typography>
                    <Typography sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: 'auto' }}>
                        Our Admin Portal gives you tools to schedule picture days, download ID cards, track orders, and view revenue share reports.
                    </Typography>
                    <Button variant="contained" size="large" component={Link} to="/admin-portal" sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, '&:hover': { bgcolor: 'grey.100' } }}>
                        Explore the Admin Portal
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default SchoolServices;
