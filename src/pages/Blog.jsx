import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Stack, TextField, InputAdornment, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../components/SectionHeader';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Sample blog articles
const articles = [
    {
        id: 1,
        slug: 'what-to-wear-senior-photos',
        title: 'What to Wear for Senior Photos: Your Ultimate Guide',
        excerpt: 'Choosing the right outfits can make all the difference. Here are our top tips for looking your best.',
        image: '/images/blog/what-to-wear.jpg',
        category: 'For Seniors',
        date: 'Feb 1, 2026',
        readTime: '5 min read',
        featured: true
    },
    {
        id: 2,
        slug: 'picture-day-tips-parents',
        title: '10 Picture Day Tips Every Parent Should Know',
        excerpt: 'From getting enough sleep to avoiding new haircuts, here\'s how to prepare your child for the best photos.',
        image: '/images/gallery/family-portraits-1.jpg',
        category: 'For Parents',
        date: 'Jan 28, 2026',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 3,
        slug: 'choosing-school-photographer',
        title: 'How Schools Can Choose the Right Photography Partner',
        excerpt: 'What to look for when selecting a school photography company for your district.',
        image: '/images/gallery/school-group-1.jpg',
        category: 'For Schools',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        featured: false
    },
    {
        id: 4,
        slug: 'senior-portrait-locations',
        title: '15 Stunning Senior Portrait Locations in Your City',
        excerpt: 'From urban streetscapes to natural parks, discover the best backdrops for your senior session.',
        image: '/images/gallery/senior-outdoor-1.jpg',
        category: 'For Seniors',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        featured: true
    },
    {
        id: 5,
        slug: 'props-senior-photos',
        title: 'Creative Props for Unique Senior Photos',
        excerpt: 'Showcase your personality with these prop ideas – from sports gear to beloved pets.',
        image: '/images/gallery/sports-team-1.jpg',
        category: 'For Seniors',
        date: 'Jan 10, 2026',
        readTime: '5 min read',
        featured: false
    },
    {
        id: 6,
        slug: 'yearbook-design-trends',
        title: '2026 Yearbook Design Trends to Watch',
        excerpt: 'The latest in yearbook layouts, typography, and customization options for schools.',
        image: '/images/yearbook-cover.jpg',
        category: 'For Schools',
        date: 'Jan 5, 2026',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 7,
        slug: 'behind-the-scenes-photo-session',
        title: 'Behind the Scenes: A Senior Photo Session',
        excerpt: 'Ever wondered what happens during a professional photo session? Take a peek behind the camera.',
        image: '/images/blog/senior-tips.jpg',
        category: 'For Seniors',
        date: 'Dec 28, 2025',
        readTime: '3 min read',
        featured: false
    },
    {
        id: 8,
        slug: 'graduation-portraits-guide',
        title: 'The Complete Guide to Graduation Portraits',
        excerpt: 'From cap and gown to casual shots, everything you need for perfect graduation photos.',
        image: '/images/gallery/graduation-1.jpg',
        category: 'For Seniors',
        date: 'Dec 20, 2025',
        readTime: '6 min read',
        featured: false
    }
];

const categories = ['All', 'For Seniors', 'For Parents', 'For Schools'];

const ArticleCard = ({ article, featured = false }) => (
    <MotionPaper
        component={Link}
        to={`/blog/${article.slug}`}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        elevation={2}
        sx={{
            display: 'block',
            textDecoration: 'none',
            borderRadius: 4,
            overflow: 'hidden',
            height: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 8
            },
            '&:hover .read-more': {
                color: 'primary.main'
            }
        }}
    >
        <Box
            component="img"
            src={article.image}
            alt={article.title}
            sx={{
                width: '100%',
                height: featured ? 280 : 180,
                objectFit: 'cover'
            }}
        />
        <Box sx={{ p: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Chip
                    label={article.category}
                    size="small"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 14 }} /> {article.readTime}
                </Typography>
            </Stack>
            <Typography variant={featured ? 'h5' : 'h6'} fontWeight={700} gutterBottom color="text.primary">
                {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {article.excerpt}
            </Typography>
            <Typography
                className="read-more"
                variant="body2"
                fontWeight={600}
                color="text.primary"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, transition: 'color 0.2s' }}
            >
                Read More <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Typography>
        </Box>
    </MotionPaper>
);

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredArticles = filteredArticles.filter(a => a.featured);
    const regularArticles = filteredArticles.filter(a => !a.featured);

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                py: 12,
                bgcolor: 'primary.main',
                color: 'white',
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                        <Chip label="📚 Tips & Resources" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                        <Typography variant="h2" fontWeight={800} gutterBottom>
                            The Pegasus Blog
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                            Tips, guides, and inspiration for seniors, parents, and schools.
                        </Typography>

                        {/* Search Bar */}
                        <TextField
                            fullWidth
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{
                                maxWidth: 500,
                                bgcolor: 'white',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& fieldset': { border: 'none' }
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </MotionBox>
                </Container>
            </Box>

            {/* Category Filter */}
            <Box sx={{ py: 4, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
                <Container>
                    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
                        {categories.map((cat) => (
                            <Chip
                                key={cat}
                                label={cat}
                                clickable
                                onClick={() => setActiveCategory(cat)}
                                variant={activeCategory === cat ? 'filled' : 'outlined'}
                                color={activeCategory === cat ? 'primary' : 'default'}
                                sx={{ fontWeight: 600, px: 2 }}
                            />
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* Articles Grid */}
            <Box sx={{ py: 8 }}>
                <Container>
                    {/* Featured Articles */}
                    {featuredArticles.length > 0 && (
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                                Featured Articles
                            </Typography>
                            <Grid container spacing={4}>
                                {featuredArticles.map((article) => (
                                    <Grid item xs={12} md={6} key={article.id}>
                                        <ArticleCard article={article} featured />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}

                    {/* Regular Articles */}
                    {regularArticles.length > 0 && (
                        <Box>
                            <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                                Latest Articles
                            </Typography>
                            <Grid container spacing={4}>
                                {regularArticles.map((article) => (
                                    <Grid item xs={12} sm={6} md={4} key={article.id}>
                                        <ArticleCard article={article} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}

                    {/* Empty State */}
                    {filteredArticles.length === 0 && (
                        <Box sx={{ textAlign: 'center', py: 10 }}>
                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                No articles found
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Try a different search term or category.
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>

            {/* Newsletter CTA */}
            <Box sx={{ py: 10, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" gutterBottom fontWeight={800}>
                        Stay in the Loop
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Get the latest tips and updates delivered to your inbox.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
                        <TextField
                            placeholder="Enter your email"
                            sx={{
                                width: { xs: '100%', sm: 350 },
                                bgcolor: 'white',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& fieldset': { border: 'none' }
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'primary.main',
                                px: 4,
                                '&:hover': { bgcolor: 'primary.dark' }
                            }}
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Blog;
