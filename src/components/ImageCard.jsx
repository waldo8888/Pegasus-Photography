import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const ImageCard = ({ image, title, subtitle, height = 300, onClick }) => {
    return (
        <MotionPaper
            elevation={4}
            onClick={onClick}
            whileHover={{ y: -8 }}
            sx={{
                position: 'relative',
                height: height,
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: 12,
                    '& .bg-image': {
                        transform: 'scale(1.05)'
                    }
                }
            }}
        >
            {/* Background Image */}
            <Box
                className="bg-image"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease-in-out'
                }}
            />

            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)'
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                    color: 'white'
                }}
            >
                {subtitle && (
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            lineHeight: 1,
                            mb: 1,
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
                <Typography
                    variant="h5"
                    fontWeight={800}
                    sx={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
                >
                    {title}
                </Typography>
            </Box>
        </MotionPaper>
    );
};

export default ImageCard;
