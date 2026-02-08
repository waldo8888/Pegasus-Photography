import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Avatar, Paper, IconButton, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

const MotionPaper = motion(Paper);

const defaultTestimonials = [
    {
        quote: "Pegasus made picture day so easy for our school. The photos came out beautiful and the online ordering system was a hit with parents!",
        name: "Sarah Mitchell",
        role: "Principal",
        school: "Maple Grove Elementary",
        rating: 5,
        avatar: "/images/testimonial-1.jpg"
    },
    {
        quote: "My daughter's senior portraits exceeded all expectations. The photographer made her feel so comfortable and confident. We'll treasure these forever.",
        name: "Jennifer Adams",
        role: "Parent",
        school: "Class of 2025",
        rating: 5,
        avatar: "/images/testimonial-2.jpg"
    },
    {
        quote: "The team uniforms turned out amazing! Great quality, fast turnaround, and the kids loved them. Pegasus has been our go-to for 5 years now.",
        name: "Coach Mike Rodriguez",
        role: "Athletic Director",
        school: "Lincoln High School",
        rating: 5,
        avatar: "/images/testimonial-3.jpg"
    },
    {
        quote: "I was nervous about my senior photos but the Pegasus team made it so fun! The location options and outfit changes gave me tons of variety.",
        name: "Emma Thompson",
        role: "Senior",
        school: "Class of 2026",
        rating: 5,
        avatar: "/images/testimonial-4.jpg"
    }
];

const TestimonialCarousel = ({
    testimonials = defaultTestimonials,
    title = "What People Are Saying",
    subtitle = "Real stories from our school community",
    dark = false,
    autoPlay = true,
    interval = 6000
}) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, testimonials.length]);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const testimonial = testimonials[current];

    return (
        <Box sx={{
            py: 12,
            bgcolor: dark ? '#111' : 'background.paper',
            color: dark ? 'white' : 'text.primary',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Quote Icon */}
            <FormatQuoteIcon
                sx={{
                    position: 'absolute',
                    top: 40,
                    left: '10%',
                    fontSize: 200,
                    opacity: 0.03,
                    transform: 'rotate(180deg)'
                }}
            />

            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="overline" color="primary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                        Testimonials
                    </Typography>
                    <Typography variant="h3" fontWeight={800} gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.7, fontWeight: 400 }}>
                        {subtitle}
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative', minHeight: 300 }}>
                    <AnimatePresence mode="wait">
                        <MotionPaper
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            elevation={dark ? 0 : 4}
                            sx={{
                                p: { xs: 4, md: 6 },
                                borderRadius: 4,
                                textAlign: 'center',
                                bgcolor: dark ? 'rgba(255,255,255,0.05)' : 'white',
                                border: dark ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}
                        >
                            {/* Stars */}
                            <Stack direction="row" justifyContent="center" spacing={0.5} sx={{ mb: 3 }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 24 }} />
                                ))}
                            </Stack>

                            {/* Quote */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    lineHeight: 1.8,
                                    mb: 4,
                                    color: dark ? 'grey.300' : 'text.primary',
                                    fontSize: { xs: '1.1rem', md: '1.4rem' }
                                }}
                            >
                                "{testimonial.quote}"
                            </Typography>

                            {/* Author */}
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                <Avatar
                                    src={testimonial.avatar}
                                    sx={{ width: 56, height: 56, border: '3px solid', borderColor: 'primary.main' }}
                                />
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                        {testimonial.role} • {testimonial.school}
                                    </Typography>
                                </Box>
                            </Stack>
                        </MotionPaper>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={prev}
                        sx={{
                            position: 'absolute',
                            left: { xs: 0, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': { bgcolor: 'primary.dark' }
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={next}
                        sx={{
                            position: 'absolute',
                            right: { xs: 0, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': { bgcolor: 'primary.dark' }
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>

                {/* Dots */}
                <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 4 }}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrent(index)}
                            sx={{
                                width: index === current ? 24 : 10,
                                height: 10,
                                borderRadius: 5,
                                bgcolor: index === current ? 'primary.main' : (dark ? 'grey.700' : 'grey.300'),
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default TestimonialCarousel;
