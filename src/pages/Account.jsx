import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Button, Chip, Stack, Avatar, LinearProgress, List, ListItem, ListItemText, ListItemIcon, Divider, Card, CardMedia, CardContent, IconButton, TextField, Switch, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';

const MotionBox = motion(Box);

// Sample data for the mockup
const userProfile = {
    name: 'Emma Thompson',
    email: 'emma.thompson@email.com',
    school: 'Lincoln High School',
    graduationYear: '2026',
    avatar: '/images/account/avatar.jpg',
    sessions: 2,
    downloads: 45
};

const photos = [
    { id: 1, src: '/images/account/photo1.jpg', title: 'Senior Portrait 1', liked: true },
    { id: 2, src: '/images/account/photo2.jpg', title: 'Senior Portrait 2', liked: false },
    { id: 3, src: '/images/account/photo3.jpg', title: 'Senior Portrait 3', liked: true },
    { id: 4, src: '/images/account/photo4.jpg', title: 'Outdoor Session', liked: false },
    { id: 5, src: '/images/account/photo5.jpg', title: 'Golden Hour', liked: true },
    { id: 6, src: '/images/account/photo6.jpg', title: 'Urban Portrait', liked: false },
    { id: 7, src: '/images/account/photo7.jpg', title: 'Studio Shot', liked: false },
    { id: 8, src: '/images/account/photo8.jpg', title: 'Headshot', liked: true }
];

const orders = [
    {
        id: 'ORD-2026-001',
        date: 'Jan 15, 2026',
        items: '8x10 Print + Digital Downloads',
        total: '$149.99',
        status: 'Delivered',
        tracking: '1Z999AA10123456784'
    },
    {
        id: 'ORD-2025-089',
        date: 'Dec 20, 2025',
        items: 'Senior Portrait Package - Premium',
        total: '$349.00',
        status: 'Processing',
        tracking: null
    }
];

const PhotoCard = ({ photo }) => {
    const [liked, setLiked] = useState(photo.liked);

    return (
        <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={photo.src}
                    alt={photo.title}
                />
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8
                    }}
                >
                    <IconButton
                        size="small"
                        onClick={() => setLiked(!liked)}
                        sx={{ bgcolor: 'rgba(255,255,255,0.9)', '&:hover': { bgcolor: 'white' } }}
                    >
                        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Stack>
            </Box>
            <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} noWrap>
                    {photo.title}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button size="small" startIcon={<DownloadIcon />} variant="outlined">
                        Download
                    </Button>
                    <IconButton size="small">
                        <ShareIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
};

const OrderRow = ({ order }) => (
    <Paper sx={{ p: 3, mb: 2, borderRadius: 3 }}>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                    Order #{order.id}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                    {order.items}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
                <Typography variant="caption" color="text.secondary">Date</Typography>
                <Typography variant="body2">{order.date}</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
                <Typography variant="caption" color="text.secondary">Total</Typography>
                <Typography variant="body2" fontWeight={600}>{order.total}</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
                <Chip
                    label={order.status}
                    size="small"
                    color={order.status === 'Delivered' ? 'success' : 'warning'}
                    icon={order.status === 'Delivered' ? <CheckCircleIcon /> : <LocalShippingIcon />}
                />
            </Grid>
            <Grid item xs={6} sm={2}>
                <Button size="small" variant="outlined">
                    View Details
                </Button>
            </Grid>
        </Grid>
    </Paper>
);

const Account = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            {/* Header */}
            <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 6 }}>
                <Container>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                        <Avatar
                            src={userProfile.avatar}
                            sx={{ width: 100, height: 100, border: '4px solid white' }}
                        />
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            <Typography variant="h4" fontWeight={700}>
                                {userProfile.name}
                            </Typography>
                            <Typography sx={{ opacity: 0.8 }}>
                                {userProfile.school} • Class of {userProfile.graduationYear}
                            </Typography>
                            <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
                                <Box>
                                    <Typography variant="h5" fontWeight={700}>{userProfile.sessions}</Typography>
                                    <Typography variant="caption">Sessions</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" fontWeight={700}>{userProfile.downloads}</Typography>
                                    <Typography variant="caption">Downloads</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* Tabs Navigation */}
            <Box sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider' }}>
                <Container>
                    <Tabs value={activeTab} onChange={handleTabChange}>
                        <Tab icon={<PhotoLibraryIcon />} label="My Photos" />
                        <Tab icon={<ShoppingBagIcon />} label="Orders" />
                        <Tab icon={<PersonIcon />} label="Profile" />
                        <Tab icon={<SettingsIcon />} label="Settings" />
                    </Tabs>
                </Container>
            </Box>

            {/* Tab Content */}
            <Container sx={{ py: 4 }}>
                {/* My Photos Tab */}
                {activeTab === 0 && (
                    <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                            <Typography variant="h5" fontWeight={700}>
                                My Photos
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Chip label="All Photos" color="primary" />
                                <Chip label="Favorites" variant="outlined" />
                                <Chip label="Recent" variant="outlined" />
                            </Stack>
                        </Stack>

                        <Grid container spacing={3}>
                            {photos.map((photo) => (
                                <Grid item xs={6} sm={4} md={3} key={photo.id}>
                                    <PhotoCard photo={photo} />
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ textAlign: 'center', mt: 4 }}>
                            <Button variant="outlined" size="large">
                                Load More Photos
                            </Button>
                        </Box>
                    </Box>
                )}

                {/* Orders Tab */}
                {activeTab === 1 && (
                    <Box>
                        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                            Order History
                        </Typography>

                        {orders.map((order) => (
                            <OrderRow key={order.id} order={order} />
                        ))}

                        <Paper sx={{ p: 4, borderRadius: 3, textAlign: 'center', bgcolor: '#fafafa' }}>
                            <ShoppingBagIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                            <Typography variant="h6" color="text.secondary">
                                Looking to order more?
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2 }}>
                                Browse Print Products
                            </Button>
                        </Paper>
                    </Box>
                )}

                {/* Profile Tab */}
                {activeTab === 2 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, borderRadius: 3 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        Personal Information
                                    </Typography>
                                    <Button startIcon={<EditIcon />} size="small">
                                        Edit
                                    </Button>
                                </Stack>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="First Name" defaultValue="Emma" disabled />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Last Name" defaultValue="Thompson" disabled />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Email" defaultValue={userProfile.email} disabled />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="School" defaultValue={userProfile.school} disabled />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, borderRadius: 3 }}>
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                                    Upcoming Sessions
                                </Typography>
                                <Box sx={{ p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <CalendarTodayIcon color="primary" />
                                        <Box>
                                            <Typography fontWeight={600}>Senior Portrait Session</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                March 15, 2026 at 3:00 PM
                                            </Typography>
                                        </Box>
                                    </Stack>
                                    <Button variant="contained" size="small" sx={{ mt: 2 }}>
                                        View Details
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                )}

                {/* Settings Tab */}
                {activeTab === 3 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, borderRadius: 3 }}>
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                                    Notification Preferences
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                                        <ListItemText
                                            primary="Email Notifications"
                                            secondary="Receive updates about your orders and photos"
                                        />
                                        <Switch defaultChecked />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon><LocalShippingIcon /></ListItemIcon>
                                        <ListItemText
                                            primary="Shipping Updates"
                                            secondary="Get notified when orders ship"
                                        />
                                        <Switch defaultChecked />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon><PhotoLibraryIcon /></ListItemIcon>
                                        <ListItemText
                                            primary="New Photos Ready"
                                            secondary="Alert when new photos are uploaded"
                                        />
                                        <Switch defaultChecked />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, borderRadius: 3 }}>
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                                    Account Security
                                </Typography>
                                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                                    Change Password
                                </Button>
                                <Button variant="outlined" fullWidth color="error">
                                    Sign Out
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Account;
