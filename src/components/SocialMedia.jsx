import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MotionBox = motion(Box);

/**
 * InstagramFeed Component
 * 
 * Displays a grid of Instagram-style posts.
 * In production, this would connect to Instagram's API.
 * 
 * @param {Object} props
 * @param {Array} props.posts - Array of post objects with image, caption, likes, comments
 * @param {string} props.handle - Instagram handle to display
 * @param {string} props.profileImage - Profile image URL
 * @param {number} props.columns - Number of columns (default: 4)
 * @param {boolean} props.showHeader - Whether to show the profile header (default: true)
 */

// Sample posts for demo
const samplePosts = [
    { id: 1, image: '/images/instagram/post1.jpg', likes: 247, comments: 12 },
    { id: 2, image: '/images/instagram/post2.jpg', likes: 189, comments: 8 },
    { id: 3, image: '/images/instagram/post3.jpg', likes: 312, comments: 21 },
    { id: 4, image: '/images/instagram/post4.jpg', likes: 156, comments: 5 },
    { id: 5, image: '/images/instagram/post5.jpg', likes: 423, comments: 34 },
    { id: 6, image: '/images/instagram/post6.jpg', likes: 278, comments: 15 },
    { id: 7, image: '/images/instagram/post7.jpg', likes: 195, comments: 9 },
    { id: 8, image: '/images/instagram/post8.jpg', likes: 367, comments: 27 }
];

const InstagramPost = ({ post }) => (
    <MotionBox
        whileHover={{ scale: 1.02 }}
        sx={{
            position: 'relative',
            aspectRatio: '1',
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: 2,
            '&:hover .overlay': {
                opacity: 1
            }
        }}
    >
        <Box
            component="img"
            src={post.image}
            alt=""
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
        />
        <Box
            className="overlay"
            sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
            }}
        >
            <Stack direction="row" spacing={3}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <FavoriteIcon sx={{ color: 'white' }} />
                    <Typography color="white" fontWeight={600}>{post.likes}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <ChatBubbleOutlineIcon sx={{ color: 'white' }} />
                    <Typography color="white" fontWeight={600}>{post.comments}</Typography>
                </Stack>
            </Stack>
        </Box>
    </MotionBox>
);

const InstagramFeed = ({
    posts = samplePosts,
    handle = '@pegasusportraits',
    profileImage = '/images/instagram/profile.jpg',
    columns = 4,
    showHeader = true
}) => {
    return (
        <Box>
            {showHeader && (
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 4 }}
                >
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                            src={profileImage}
                            sx={{
                                width: 56,
                                height: 56,
                                border: '3px solid',
                                borderColor: 'primary.main'
                            }}
                        />
                        <Box>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <InstagramIcon sx={{ color: '#E1306C' }} />
                                <Typography variant="h6" fontWeight={700}>
                                    {handle}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Follow us for daily inspiration
                            </Typography>
                        </Box>
                    </Stack>
                    <Chip
                        component="a"
                        href={`https://instagram.com/${handle.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        icon={<OpenInNewIcon />}
                        label="Follow"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                    />
                </Stack>
            )}

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: 2
            }}>
                {posts.map((post) => (
                    <InstagramPost key={post.id} post={post} />
                ))}
            </Box>
        </Box>
    );
};

/**
 * SocialProofBanner Component
 * 
 * A compact banner showing social media stats and follow CTAs.
 */
const SocialProofBanner = () => (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
        >
            <Stack direction="row" spacing={4}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={800} color="primary.main">15K+</Typography>
                    <Typography variant="body2" color="text.secondary">Instagram Followers</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={800} color="primary.main">5K+</Typography>
                    <Typography variant="body2" color="text.secondary">Happy Seniors</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={800} color="primary.main">200+</Typography>
                    <Typography variant="body2" color="text.secondary">Partner Schools</Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    sx={{ bgcolor: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', color: '#E1306C' }}
                >
                    <InstagramIcon />
                </IconButton>
                {/* Add other social icons as needed */}
            </Stack>
        </Stack>
    </Paper>
);

/**
 * FloatingSocialButtons Component
 * 
 * Fixed position social buttons on the side of the page.
 */
const FloatingSocialButtons = () => (
    <Box sx={{
        position: 'fixed',
        right: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 1
    }}>
        <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            sx={{
                bgcolor: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: '#fce4ec' }
            }}
        >
            <InstagramIcon sx={{ color: '#E1306C' }} />
        </IconButton>
    </Box>
);

export { InstagramFeed, SocialProofBanner, FloatingSocialButtons };
export default InstagramFeed;
