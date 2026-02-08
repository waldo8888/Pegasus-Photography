import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Container, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Collapse, LinearProgress } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useScroll, useSpring } from 'framer-motion';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Scroll Progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Navigation State
    const [photographyAnchor, setPhotographyAnchor] = useState(null);
    const [schoolsAnchor, setSchoolsAnchor] = useState(null);
    const [yearbooksAnchor, setYearbooksAnchor] = useState(null);
    const [apparelAnchor, setApparelAnchor] = useState(null);
    const [resourcesAnchor, setResourcesAnchor] = useState(null);

    // Mobile accordion state
    const [openMobileMenus, setOpenMobileMenus] = useState({});

    const handleMobileToggle = () => setMobileOpen(!mobileOpen);

    const toggleMobileMenu = (menu) => {
        setOpenMobileMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const renderDropdown = (label, anchor, setAnchor, items) => (
        <Box onMouseEnter={(e) => setAnchor(e.currentTarget)} onMouseLeave={() => setAnchor(null)}>
            <Button
                color="inherit"
                endIcon={<ExpandMore />}
                sx={{ fontWeight: '500', fontSize: '0.95rem', mx: 0.5, '&:hover': { color: 'primary.main' } }}
            >
                {label}
            </Button>
            <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                MenuListProps={{ onMouseLeave: () => setAnchor(null) }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{ sx: { borderRadius: 2, mt: 1, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' } }}
            >
                {items.map((item) => (
                    <MenuItem
                        key={item.label}
                        component={Link}
                        to={item.path}
                        onClick={() => setAnchor(null)}
                        sx={{ minWidth: '200px', py: 1.5, '&:hover': { bgcolor: 'grey.100', color: 'primary.main' } }}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );

    const navItems = {
        photography: [
            { label: 'Fall Portraits', path: '/photography/fall' },
            { label: 'Senior Graduation', path: '/for-seniors' },
            { label: 'Kinder & Junior Grad', path: '/photography/kinder-junior' },
            { label: 'University/College', path: '/university' },
            { label: 'Commencements', path: '/photography/commencements' },
        ],
        schools: [
            { label: 'School Partnership', path: '/schools' },
            { label: 'School Services', path: '/schools/services' },
        ],
        yearbooks: [
            { label: 'Elementary Yearbooks', path: '/yearbooks/elementary' },
            { label: 'Secondary Yearbooks', path: '/yearbooks/secondary' },
            { label: 'All Yearbooks', path: '/yearbooks' },
        ],
        apparel: [
            { label: 'Spirit Wear', path: '/apparel' },
            { label: 'Team Uniforms', path: '/apparel/uniforms' },
        ],
        resources: [
            { label: 'Blog & Tips', path: '/blog' },
            { label: 'Inspiration Gallery', path: '/gallery' },
            { label: 'Session Prep Guide', path: '/session-prep' },
            { label: 'Book a Session', path: '/booking' },
            { label: 'Ambassador Program', path: '/ambassadors' },
            { label: 'Careers', path: '/careers' },
        ],
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'visible' }}>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: '#E02B20',
                    transformOrigin: '0%',
                    scaleX,
                    zIndex: 9999,
                }}
            />

            {/* Announcement Bar */}
            <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 1, textAlign: 'center', fontSize: '0.9rem' }}>
                🎓 Now Booking 2026 Senior Portraits! <Link to="/for-seniors" style={{ color: 'white', fontWeight: 'bold' }}>Book Now →</Link>
            </Box>

            {/* Navigation */}
            <AppBar position="sticky" sx={{ zIndex: 1200 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src="/images/USPegasusOnly512.png"
                                alt="Pegasus Logo"
                                sx={{ height: 45 }}
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <Button color="inherit" component={Link} to="/about" sx={{ fontWeight: '500', fontSize: '0.95rem', mx: 0.5 }}>
                                About Us
                            </Button>

                            {renderDropdown('Photography', photographyAnchor, setPhotographyAnchor, navItems.photography)}
                            {renderDropdown('For Schools', schoolsAnchor, setSchoolsAnchor, navItems.schools)}
                            {renderDropdown('Yearbooks', yearbooksAnchor, setYearbooksAnchor, navItems.yearbooks)}
                            {renderDropdown('Apparel', apparelAnchor, setApparelAnchor, navItems.apparel)}
                            {renderDropdown('Resources', resourcesAnchor, setResourcesAnchor, navItems.resources)}

                            <Button color="inherit" component={Link} to="/faq" sx={{ fontWeight: '500', fontSize: '0.95rem', mx: 0.5 }}>
                                FAQ
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/contact"
                                sx={{ ml: 2, borderRadius: '50px', px: 3 }}
                            >
                                Contact
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleMobileToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleMobileToggle}
                PaperProps={{ sx: { width: '100%', maxWidth: 350 } }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid', borderColor: 'grey.200' }}>
                    <Typography variant="h6" fontWeight={700}>Menu</Typography>
                    <IconButton onClick={handleMobileToggle}><CloseIcon /></IconButton>
                </Box>
                <List sx={{ pt: 2 }}>
                    <ListItem button component={Link} to="/about" onClick={handleMobileToggle}>
                        <ListItemText primary="About Us" />
                    </ListItem>

                    {Object.entries(navItems).map(([key, items]) => (
                        <React.Fragment key={key}>
                            <ListItem button onClick={() => toggleMobileMenu(key)}>
                                <ListItemText primary={key.charAt(0).toUpperCase() + key.slice(1)} />
                                {openMobileMenus[key] ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openMobileMenus[key]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {items.map(item => (
                                        <ListItem button key={item.path} sx={{ pl: 4 }} component={Link} to={item.path} onClick={handleMobileToggle}>
                                            <ListItemText primary={item.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ))}

                    <ListItem button component={Link} to="/faq" onClick={handleMobileToggle}>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button component={Link} to="/contact" onClick={handleMobileToggle}>
                        <ListItemText primary="Contact" primaryTypographyProps={{ fontWeight: 700, color: 'primary.main' }} />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Layout;
