import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, List, ListItem, ListItemIcon, ListItemText, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const packages = [
    {
        name: 'Basic',
        price: 29,
        features: ['1 pose', '1 sheet of wallets', '1 5x7 print', 'Digital yearbook image', 'Online gallery access'],
        featured: false
    },
    {
        name: 'Standard',
        price: 49,
        features: ['2 poses', '2 sheets of wallets', '2 5x7 prints', '1 8x10 print', 'Digital yearbook image', 'Online gallery access', 'Basic retouching'],
        featured: true
    },
    {
        name: 'Premium',
        price: 79,
        features: ['3 poses', '3 sheets of wallets', '3 5x7 prints', '2 8x10 prints', 'All digital downloads', 'Digital yearbook image', 'Online gallery access', 'Professional retouching', 'Sibling photo included'],
        featured: false
    }
];

const addOns = [
    { name: 'Extra Digital Downloads', price: 15 },
    { name: 'Professional Retouching', price: 10 },
    { name: 'Additional 8x10 Print', price: 12 },
    { name: 'Sibling Photo Add-On', price: 8 },
];

const PackageCard = ({ pkg, selected, onSelect }) => (
    <Paper
        elevation={pkg.featured ? 8 : selected ? 4 : 1}
        onClick={() => onSelect(pkg.name)}
        sx={{
            p: 4, borderRadius: 4, height: '100%', position: 'relative',
            border: 2, borderColor: selected ? 'primary.main' : pkg.featured ? 'primary.light' : 'transparent',
            bgcolor: pkg.featured ? '#fff5f5' : 'background.paper',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
        }}
    >
        {pkg.featured && (
            <Chip icon={<StarIcon />} label="Most Popular" color="primary" sx={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)' }} />
        )}
        <Typography variant="h4" gutterBottom fontWeight={700}>{pkg.name}</Typography>
        <Box sx={{ mb: 3 }}>
            <Typography component="span" variant="h3" fontWeight={800} color="primary">${pkg.price}</Typography>
            <Typography component="span" color="text.secondary" sx={{ ml: 1 }}>/ student</Typography>
        </Box>
        <List dense>
            {pkg.features.map((feature, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.3 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                </ListItem>
            ))}
        </List>
    </Paper>
);

const Prepay = () => {
    const [selectedPackage, setSelectedPackage] = useState('Standard');
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const toggleAddOn = (name) => {
        setSelectedAddOns(prev =>
            prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
        );
    };

    const selectedPkg = packages.find(p => p.name === selectedPackage);
    const addOnTotal = addOns.filter(a => selectedAddOns.includes(a.name)).reduce((sum, a) => sum + a.price, 0);
    const total = (selectedPkg?.price || 0) + addOnTotal;

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Chip label="Picture Day" sx={{ mb: 2, bgcolor: 'primary.main', color: 'white' }} />
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
                            Prepay for Photos
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                            Choose a package before picture day and save time. No stress, no forgotten order forms.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Packages */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Typography variant="overline" color="primary" fontWeight={700} sx={{ display: 'block', textAlign: 'center' }}>Step 1</Typography>
                    <Typography variant="h3" align="center" gutterBottom fontWeight={700}>Choose Your Package</Typography>
                    <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>Select the package that's right for your family.</Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {packages.map((pkg) => (
                            <Grid item xs={12} md={4} key={pkg.name}>
                                <PackageCard pkg={pkg} selected={selectedPackage === pkg.name} onSelect={setSelectedPackage} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Add-Ons */}
            <Box sx={{ py: 10, bgcolor: '#f9fafb' }}>
                <Container maxWidth="md">
                    <Typography variant="overline" color="primary" fontWeight={700} sx={{ display: 'block', textAlign: 'center' }}>Step 2</Typography>
                    <Typography variant="h3" align="center" gutterBottom fontWeight={700}>Add Extras</Typography>
                    <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>Customize your order with optional add-ons.</Typography>

                    <Paper sx={{ p: 4, borderRadius: 4 }}>
                        <Stack spacing={2}>
                            {addOns.map((addon) => (
                                <Box key={addon.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderRadius: 2, bgcolor: selectedAddOns.includes(addon.name) ? 'rgba(224,43,32,0.05)' : 'transparent', transition: 'background 0.2s' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={selectedAddOns.includes(addon.name)} onChange={() => toggleAddOn(addon.name)} color="primary" />}
                                        label={addon.name}
                                    />
                                    <Typography fontWeight={600} color="primary">+${addon.price}</Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Container>
            </Box>

            {/* Summary & CTA */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="sm">
                    <Paper sx={{ p: 5, borderRadius: 4, textAlign: 'center' }}>
                        <Typography variant="overline" color="primary" fontWeight={700}>Your Selection</Typography>
                        <Typography variant="h4" fontWeight={800} gutterBottom>{selectedPackage} Package</Typography>

                        {selectedAddOns.length > 0 && (
                            <Box sx={{ mb: 3 }}>
                                {selectedAddOns.map(name => (
                                    <Chip key={name} label={name} size="small" sx={{ mr: 1, mb: 1 }} />
                                ))}
                            </Box>
                        )}

                        <Typography variant="h2" fontWeight={800} color="primary" gutterBottom>${total}</Typography>
                        <Typography color="text.secondary" sx={{ mb: 4 }}>
                            To complete your prepay order, please contact us with your school name, student name, and selected package.
                        </Typography>

                        <Stack spacing={2}>
                            <Button variant="contained" size="large" fullWidth component={Link} to="/contact" sx={{ py: 1.5, borderRadius: 3 }}>
                                Contact Us to Order
                            </Button>
                            <Button variant="outlined" size="large" fullWidth component="a" href="tel:+18004616575" sx={{ py: 1.5, borderRadius: 3 }}>
                                Call (800) 461-6575
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Prepay;
