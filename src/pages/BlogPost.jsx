import React from 'react';
import { Box, Container, Typography, Chip, Stack, Paper, Button, Divider, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionBox = motion(Box);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Sample article content - matching Blog.jsx
const articles = [
    {
        id: 1,
        slug: 'what-to-wear-senior-photos',
        title: 'What to Wear for Senior Photos: Your Ultimate Guide',
        category: 'For Seniors',
        date: 'Feb 1, 2026',
        readTime: '5 min read',
        image: '/images/blog/what-to-wear.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `
## Why Your Outfit Matters
Your senior photos are a snapshot of who you are right now. The outfits you choose can make or break the final result. Here's everything you need to know to look your absolute best.

## The Golden Rules
### 1. Solid Colors Are Your Best Friend
Busy patterns, logos, and graphics distract from your face. Stick to solid, rich colors like:
- **Jewel tones**: emerald, sapphire, ruby
- **Earth tones**: rust, olive, camel
- **Neutrals**: cream, navy, charcoal

### 2. Dress in Layers
Layers add dimension to your photos and give you options during your session. Think:
- Blazers or jackets over simple tops
- Cardigans or denim jackets
- Scarves for fall sessions

### 3. Bring Multiple Outfits
Most sessions allow for 2-3 outfit changes. Mix it up with:
- One casual look (jeans + nice top)
- One dressy look (dress or suit)
- One "you" look (sports gear, band tee, etc.)

## Ready to Book?
Now that you know what to wear, it's time to schedule your session!`
    },
    {
        id: 2,
        slug: 'picture-day-tips-parents',
        title: '10 Picture Day Tips Every Parent Should Know',
        category: 'For Parents',
        date: 'Jan 28, 2026',
        readTime: '4 min read',
        image: '/images/gallery/family-portraits-1.jpg',
        author: { name: 'David Chen', role: 'School Photography Director', avatar: '/images/team/david.jpg' },
        content: `
## Preparing for Picture Day
Picture day is a big deal! Here is how to ensure your child looks their best.

## 1. Get a Good Night's Sleep
Rest is crucial for happy smiles and bright eyes.

## 2. Plan the Outfit in Advance
Don't wait until the morning of. Choose comfortable clothes that fit well.

## 3. Avoid Large Logos
Text and graphics can be distracting. Solid colors works best.

## 4. Don't Stress!
If you are stressed, your child might be too. Keep it fun and lighthearted.`
    },
    {
        id: 3,
        slug: 'choosing-school-photographer',
        title: 'How Schools Can Choose the Right Photography Partner',
        category: 'For Schools',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        image: '/images/gallery/school-group-1.jpg',
        author: { name: 'Emily White', role: 'Account Manager', avatar: '/images/team/emily.jpg' },
        content: `## Finding the Perfect Partner
Choosing a photographer for your school district is a big decision.`
    },
    {
        id: 4,
        slug: 'senior-portrait-locations',
        title: '15 Stunning Senior Portrait Locations in Your City',
        category: 'For Seniors',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        image: '/images/gallery/senior-outdoor-1.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `## Location, Location, Location
The backdrop sets the mood for your entire session.`
    },
    {
        id: 5,
        slug: 'props-senior-photos',
        title: 'Creative Props for Unique Senior Photos',
        category: 'For Seniors',
        date: 'Jan 10, 2026',
        readTime: '5 min read',
        image: '/images/gallery/sports-team-1.jpg',
        author: { name: 'Mike Ross', role: 'Creative Director', avatar: '/images/team/mike.jpg' },
        content: `## Personalized Your Session
Props are a great way to show off your personality and interests.`
    },
    {
        id: 6,
        slug: 'yearbook-design-trends',
        title: '2026 Yearbook Design Trends to Watch',
        category: 'For Schools',
        date: 'Jan 5, 2026',
        readTime: '4 min read',
        image: '/images/yearbook-cover.jpg',
        author: { name: 'Jessica Lee', role: 'Yearbook Specialist', avatar: '/images/team/jessica.jpg' },
        content: `## What's Trending in 2026?
From bold typography to interactive elements, here is what is hot in yearbook design.`
    },
    {
        id: 7,
        slug: 'behind-the-scenes-photo-session',
        title: 'Behind the Scenes: A Senior Photo Session',
        category: 'For Seniors',
        date: 'Dec 28, 2025',
        readTime: '3 min read',
        image: '/images/blog/senior-tips.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `## A Look Behind the Lens
Ever wondered what goes into a professional photo shoot?`
    },
    {
        id: 8,
        slug: 'graduation-portraits-guide',
        title: 'The Complete Guide to Graduation Portraits',
        category: 'For Seniors',
        date: 'Dec 20, 2025',
        readTime: '6 min read',
        image: '/images/gallery/graduation-1.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `## Celebrating Your Achievement
Graduation is a major milestone. Capture it perfectly.`
    }
];

const BlogPost = () => {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug) || articles[0];

    return (
        <Box>
            {/* Hero Image */}
            <Box sx={{
                position: 'relative',
                height: { xs: '40vh', md: '50vh' },
                bgcolor: '#111'
            }}>
                <Box
                    component="img"
                    src={article.image}
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
                }} />
            </Box>

            {/* Article Content */}
            <Container maxWidth="md" sx={{ mt: -15, position: 'relative', zIndex: 1, pb: 8 }}>
                <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                    {/* Back Link */}
                    <Button
                        component={Link}
                        to="/blog"
                        startIcon={<ArrowBackIcon />}
                        sx={{ color: 'white', mb: 3, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                    >
                        Back to Blog
                    </Button>

                    <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
                        {/* Category & Meta */}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                            <Chip label={article.category} color="primary" sx={{ fontWeight: 600 }} />
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarTodayIcon sx={{ fontSize: 16 }} /> {article.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: 16 }} /> {article.readTime}
                            </Typography>
                        </Stack>

                        {/* Title */}
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                            {article.title}
                        </Typography>

                        {/* Author */}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                            <Avatar src={article.author.avatar} sx={{ width: 48, height: 48 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700}>{article.author.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{article.author.role}</Typography>
                            </Box>
                        </Stack>

                        <Divider sx={{ mb: 4 }} />

                        {/* Article Body */}
                        <Box sx={{
                            '& h2': {
                                fontSize: '1.75rem',
                                fontWeight: 700,
                                mt: 4,
                                mb: 2,
                                color: 'text.primary'
                            },
                            '& h3': {
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: 'text.primary'
                            },
                            '& p': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 2,
                                color: 'text.secondary'
                            },
                            '& ul, & ol': {
                                pl: 3,
                                mb: 2
                            },
                            '& li': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 1,
                                color: 'text.secondary'
                            },
                            '& strong': {
                                color: 'text.primary',
                                fontWeight: 600
                            }
                        }}>
                            {article.content.split('\n').map((line, index) => {
                                if (line.startsWith('## ')) {
                                    return <Typography key={index} variant="h2">{line.replace('## ', '')}</Typography>;
                                } else if (line.startsWith('### ')) {
                                    return <Typography key={index} variant="h3">{line.replace('### ', '')}</Typography>;
                                } else if (line.startsWith('- ')) {
                                    return <Typography key={index} component="li">{line.replace('- ', '')}</Typography>;
                                } else if (line.trim()) {
                                    return <Typography key={index} paragraph>{line}</Typography>;
                                }
                                return null;
                            })}
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        {/* Share Section */}
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                            <Typography variant="h6" fontWeight={600}>
                                <ShareIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Share this article
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Button variant="outlined" size="small" startIcon={<FacebookIcon />}>
                                    Facebook
                                </Button>
                                <Button variant="outlined" size="small" startIcon={<TwitterIcon />}>
                                    Twitter
                                </Button>
                                <Button variant="outlined" size="small" startIcon={<LinkedInIcon />}>
                                    LinkedIn
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>

                    {/* CTA */}
                    <Paper sx={{ mt: 4, p: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Ready to Book Your Senior Session?
                        </Typography>
                        <Typography sx={{ opacity: 0.9, mb: 3 }}>
                            Now that you're prepped and ready, let's capture your story.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={Link}
                            to="/for-seniors"
                            sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                        >
                            View Senior Packages
                        </Button>
                    </Paper>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default BlogPost;
