import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, Stack, TextField, MenuItem, Stepper, Step, StepLabel, StepContent, ToggleButton, ToggleButtonGroup, Avatar, Divider, Alert, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ParkIcon from '@mui/icons-material/Park';
import ApartmentIcon from '@mui/icons-material/Apartment';

const MotionBox = motion(Box);

// Session types
const sessionTypes = [
    {
        id: 'basic',
        name: 'Essential',
        duration: '30 min',
        price: '$149',
        includes: ['1 location', '10 edited photos', 'Online gallery']
    },
    {
        id: 'standard',
        name: 'Signature',
        duration: '1 hour',
        price: '$249',
        includes: ['2 locations', '25 edited photos', 'Online gallery', '1 outfit change'],
        popular: true
    },
    {
        id: 'premium',
        name: 'Premium',
        duration: '2 hours',
        price: '$399',
        includes: ['3 locations', '50 edited photos', 'Online gallery', 'Unlimited outfits', 'Print credit']
    }
];

// Available dates (mocked)
const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 3; i < 21; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        // Skip weekends for this demo
        if (date.getDay() !== 0) {
            dates.push(date);
        }
    }
    return dates;
};

// Time slots
const timeSlots = [
    { time: '9:00 AM', type: 'morning' },
    { time: '10:30 AM', type: 'morning' },
    { time: '2:00 PM', type: 'afternoon' },
    { time: '3:30 PM', type: 'afternoon' },
    { time: '5:00 PM', type: 'golden' },
    { time: '6:30 PM', type: 'golden' }
];

// Locations
const locations = [
    { id: 'studio', name: 'Pegasus Studio', icon: <CameraAltIcon />, desc: 'Professional indoor studio' },
    { id: 'park', name: 'Riverside Park', icon: <ParkIcon />, desc: 'Natural outdoor setting' },
    { id: 'downtown', name: 'Downtown', icon: <ApartmentIcon />, desc: 'Urban city backdrop' }
];

const BookingWidget = ({ onClose, embedded = false }) => {
    const [step, setStep] = useState(0);
    const [booking, setBooking] = useState({
        sessionType: null,
        date: null,
        time: null,
        location: null,
        name: '',
        email: '',
        phone: '',
        notes: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const availableDates = generateDates();
    const [dateRange, setDateRange] = useState(0);
    const visibleDates = availableDates.slice(dateRange * 7, (dateRange + 1) * 7);

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setSubmitted(true);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const canProceed = () => {
        switch (step) {
            case 0: return booking.sessionType !== null;
            case 1: return booking.date !== null && booking.time !== null;
            case 2: return booking.location !== null;
            case 3: return booking.name && booking.email;
            default: return false;
        }
    };

    if (submitted) {
        return (
            <Paper sx={{ p: 5, textAlign: 'center', borderRadius: 4, maxWidth: 500, mx: 'auto' }}>
                <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Booking Confirmed!
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                    We've sent a confirmation email to {booking.email}.
                    See you on {formatDate(booking.date)} at {booking.time}!
                </Typography>
                <Button variant="contained" href="/">
                    Back to Home
                </Button>
            </Paper>
        );
    }

    return (
        <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, maxWidth: 800, mx: 'auto' }}>
            {/* Header */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                <Box>
                    <Typography variant="h5" fontWeight={700}>
                        Book Your Session
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Step {step + 1} of 4
                    </Typography>
                </Box>
                {!embedded && onClose && (
                    <IconButton onClick={onClose}>×</IconButton>
                )}
            </Stack>

            {/* Progress */}
            <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={1}>
                    {[0, 1, 2, 3].map((i) => (
                        <Box
                            key={i}
                            sx={{
                                flex: 1,
                                height: 4,
                                borderRadius: 2,
                                bgcolor: i <= step ? 'primary.main' : 'grey.200'
                            }}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Step 1: Session Type */}
            {step === 0 && (
                <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                        Choose Your Package
                    </Typography>
                    <Grid container spacing={2}>
                        {sessionTypes.map((session) => (
                            <Grid item xs={12} md={4} key={session.id}>
                                <Paper
                                    onClick={() => setBooking({ ...booking, sessionType: session })}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                        border: 2,
                                        borderColor: booking.sessionType?.id === session.id ? 'primary.main' : 'transparent',
                                        bgcolor: booking.sessionType?.id === session.id ? 'primary.light' : 'grey.50',
                                        position: 'relative',
                                        transition: 'all 0.2s',
                                        '&:hover': { borderColor: 'primary.light' }
                                    }}
                                >
                                    {session.popular && (
                                        <Chip
                                            label="Popular"
                                            size="small"
                                            color="primary"
                                            sx={{ position: 'absolute', top: -12, right: 12 }}
                                        />
                                    )}
                                    <Typography variant="h6" fontWeight={700}>{session.name}</Typography>
                                    <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ my: 1 }}>
                                        {session.price}
                                    </Typography>
                                    <Chip label={session.duration} size="small" icon={<AccessTimeIcon />} sx={{ mb: 2 }} />
                                    <List dense>
                                        {session.includes.map((item, i) => (
                                            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 24 }}>
                                                    <CheckCircleIcon color="success" fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* Step 2: Date & Time */}
            {step === 1 && (
                <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                        Select Date & Time
                    </Typography>

                    {/* Date Selection */}
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                        <IconButton onClick={() => setDateRange(Math.max(0, dateRange - 1))} disabled={dateRange === 0}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography fontWeight={600}>
                            {visibleDates[0]?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </Typography>
                        <IconButton onClick={() => setDateRange(dateRange + 1)} disabled={dateRange >= 1}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>

                    <Grid container spacing={1} sx={{ mb: 4 }}>
                        {visibleDates.map((date, i) => (
                            <Grid item xs key={i}>
                                <Button
                                    fullWidth
                                    variant={booking.date?.getTime() === date.getTime() ? 'contained' : 'outlined'}
                                    onClick={() => setBooking({ ...booking, date })}
                                    sx={{
                                        flexDirection: 'column',
                                        py: 2,
                                        borderRadius: 2
                                    }}
                                >
                                    <Typography variant="caption">
                                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                    </Typography>
                                    <Typography variant="h6" fontWeight={700}>
                                        {date.getDate()}
                                    </Typography>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Time Selection */}
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Available Times
                    </Typography>
                    <Grid container spacing={2}>
                        {timeSlots.map((slot, i) => (
                            <Grid item xs={4} key={i}>
                                <Button
                                    fullWidth
                                    variant={booking.time === slot.time ? 'contained' : 'outlined'}
                                    onClick={() => setBooking({ ...booking, time: slot.time })}
                                    startIcon={slot.type === 'golden' ? <WbSunnyIcon /> : <AccessTimeIcon />}
                                    sx={{ borderRadius: 2 }}
                                >
                                    {slot.time}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    {booking.time && timeSlots.find(s => s.time === booking.time)?.type === 'golden' && (
                        <Alert severity="info" sx={{ mt: 2 }}>
                            Golden hour sessions offer the best natural lighting!
                        </Alert>
                    )}
                </Box>
            )}

            {/* Step 3: Location */}
            {step === 2 && (
                <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                        Choose Your Location
                    </Typography>
                    <Grid container spacing={2}>
                        {locations.map((loc) => (
                            <Grid item xs={12} md={4} key={loc.id}>
                                <Paper
                                    onClick={() => setBooking({ ...booking, location: loc })}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                        border: 2,
                                        borderColor: booking.location?.id === loc.id ? 'primary.main' : 'transparent',
                                        bgcolor: booking.location?.id === loc.id ? 'primary.light' : 'grey.50',
                                        textAlign: 'center',
                                        transition: 'all 0.2s',
                                        '&:hover': { borderColor: 'primary.light' }
                                    }}
                                >
                                    <Box sx={{
                                        width: 60, height: 60, borderRadius: '50%',
                                        bgcolor: 'primary.main', color: 'white',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        mx: 'auto', mb: 2
                                    }}>
                                        {loc.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700}>{loc.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">{loc.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* Step 4: Contact Info */}
            {step === 3 && (
                <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                        Your Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                value={booking.name}
                                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={booking.email}
                                onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Phone"
                                value={booking.phone}
                                onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Special Requests (optional)"
                                value={booking.notes}
                                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                            />
                        </Grid>
                    </Grid>

                    {/* Summary */}
                    <Paper sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
                            Booking Summary
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2">
                                <strong>Package:</strong> {booking.sessionType?.name} ({booking.sessionType?.price})
                            </Typography>
                            <Typography variant="body2">
                                <strong>Date:</strong> {booking.date && formatDate(booking.date)} at {booking.time}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Location:</strong> {booking.location?.name}
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
            )}

            {/* Navigation */}
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                <Button
                    disabled={step === 0}
                    onClick={handleBack}
                    variant="outlined"
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!canProceed()}
                >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                </Button>
            </Stack>
        </Paper>
    );
};

// Page wrapper for the booking widget
const BookingPage = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Chip label="📅 Book Online" color="primary" sx={{ mb: 2 }} />
                    <Typography variant="h2" fontWeight={800} gutterBottom>
                        Schedule Your Session
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Choose your package, pick a date, and you're all set!
                    </Typography>
                </Box>
                <BookingWidget embedded />
            </Container>
        </Box>
    );
};

export { BookingWidget };
export default BookingPage;
