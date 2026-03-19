import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Paper, Grid, Chip, Button, InputAdornment, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Link } from 'react-router-dom';
import schools from '../data/schools';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SchoolCard = ({ school, onSelect }) => (
    <Paper
        elevation={0}
        sx={{
            p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider',
            transition: 'all 0.2s',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: 4, borderColor: 'primary.main' },
            cursor: 'pointer'
        }}
        onClick={() => onSelect(school)}
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(224,43,32,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SchoolIcon color="primary" />
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={700}>{school.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{school.city}, {school.province}</Typography>
                </Box>
            </Box>
            <Chip
                label={school.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                size="small"
                color={school.status === 'upcoming' ? 'primary' : 'default'}
                variant={school.status === 'upcoming' ? 'filled' : 'outlined'}
            />
        </Box>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{new Date(school.pictureDayDate).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ScheduleIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{school.pictureDayTime}</Typography>
            </Box>
        </Box>
    </Paper>
);

const SchoolDetail = ({ school, onBack }) => (
    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, maxWidth: 700, mx: 'auto' }}>
        <Button onClick={onBack} sx={{ mb: 3 }}>← Back to results</Button>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 64, height: 64, borderRadius: 3, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />
            </Box>
            <Box>
                <Typography variant="h4" fontWeight={800}>{school.name}</Typography>
                <Typography color="text.secondary">{school.board}</Typography>
            </Box>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                    <CalendarTodayIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>Picture Day</Typography>
                    <Typography color="text.secondary">{new Date(school.pictureDayDate).toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                    <Typography variant="body2" color="text.secondary">{school.pictureDayTime}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>Location</Typography>
                    <Typography color="text.secondary">{school.city}, {school.province}</Typography>
                </Paper>
            </Grid>
        </Grid>

        <Stack spacing={2}>
            {school.prepayAvailable && (
                <Button variant="contained" size="large" fullWidth component={Link} to="/prepay" sx={{ py: 1.5, borderRadius: 3 }}>
                    Prepay for Picture Day
                </Button>
            )}
            <Button variant="outlined" size="large" fullWidth component={Link} to="/proofing" sx={{ py: 1.5, borderRadius: 3 }}>
                View Proofs (Enter Access Code)
            </Button>
            <Button variant="outlined" size="large" fullWidth component={Link} to="/contact" sx={{ py: 1.5, borderRadius: 3 }}>
                Contact Us About This School
            </Button>
        </Stack>

        {school.status === 'upcoming' && (
            <Paper sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: 'rgba(224,43,32,0.05)', border: '1px solid', borderColor: 'primary.light' }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                    <Typography fontWeight={700}>Picture Day Tips</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    Get a good night's rest, wear solid colors, and check out our <Typography component={Link} to="/session-prep" color="primary" variant="body2">Session Prep Guide</Typography> for more tips to get the best photos.
                </Typography>
            </Paper>
        )}
    </Paper>
);

const FindSchool = () => {
    const [search, setSearch] = useState('');
    const [selectedSchool, setSelectedSchool] = useState(null);

    const filtered = search.length >= 2
        ? schools.filter(s =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.city.toLowerCase().includes(search.toLowerCase()) ||
            s.board.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
                            Find Your School
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, mb: 5, fontWeight: 400 }}>
                            Search for your school to see picture day dates, prepay for photos, or view proofs.
                        </Typography>
                        <Paper sx={{ p: 1, borderRadius: 3, maxWidth: 600, mx: 'auto' }}>
                            <TextField
                                fullWidth
                                placeholder="Search by school name, city, or board..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setSelectedSchool(null); }}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: 'text.secondary', ml: 1 }} />
                                        </InputAdornment>
                                    ),
                                    sx: { py: 1.5, px: 1, fontSize: '1.1rem' }
                                }}
                            />
                        </Paper>
                    </MotionBox>
                </Container>
            </Box>

            {/* Results */}
            <Box sx={{ py: 8, minHeight: '50vh' }}>
                <Container maxWidth="md">
                    {selectedSchool ? (
                        <SchoolDetail school={selectedSchool} onBack={() => setSelectedSchool(null)} />
                    ) : search.length >= 2 ? (
                        <>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                {filtered.length} school{filtered.length !== 1 ? 's' : ''} found
                            </Typography>
                            <Stack spacing={2}>
                                {filtered.map(school => (
                                    <SchoolCard key={school.id} school={school} onSelect={setSelectedSchool} />
                                ))}
                            </Stack>
                            {filtered.length === 0 && (
                                <Paper sx={{ p: 5, textAlign: 'center', borderRadius: 4 }}>
                                    <SchoolIcon sx={{ fontSize: 60, color: 'grey.300', mb: 2 }} />
                                    <Typography variant="h5" gutterBottom>No schools found</Typography>
                                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                                        Can't find your school? It may not be a Pegasus partner yet.
                                    </Typography>
                                    <Button variant="contained" component={Link} to="/contact">Contact Us</Button>
                                </Paper>
                            )}
                        </>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 5 }}>
                            <SearchIcon sx={{ fontSize: 60, color: 'grey.300', mb: 2 }} />
                            <Typography variant="h5" color="text.secondary">
                                Start typing to search for your school
                            </Typography>
                            <Typography color="text.secondary" sx={{ mt: 1 }}>
                                Enter at least 2 characters to see results
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>
        </Box>
    );
};

export default FindSchool;
