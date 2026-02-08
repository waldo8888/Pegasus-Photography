import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper, Avatar } from '@mui/material';

const TestimonialCard = ({ quote, author, role, image }) => (
    <Paper
        elevation={4}
        sx={{
            minWidth: '350px',
            maxWidth: '350px',
            p: 4,
            borderRadius: 4,
            bgcolor: 'white',
            userSelect: 'none',
            mr: 4
        }}
    >
        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, fontSize: '1.1rem' }}>"{quote}"</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={image} sx={{ width: 50, height: 50 }} />
            <Box>
                <Typography variant="subtitle1" fontWeight={700}>{author}</Typography>
                <Typography variant="caption" color="text.secondary">{role}</Typography>
            </Box>
        </Box>
    </Paper>
);

const DraggableStory = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <Box sx={{ py: 15, bgcolor: '#f9f9f9', overflow: 'hidden' }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="overline" color="primary" fontWeight={700}>Community Voices</Typography>
                <Typography variant="h3" fontWeight={800}>Hear Their Stories</Typography>
            </Box>

            <motion.div
                ref={carousel}
                style={{ cursor: 'grab', overflow: 'hidden' }}
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ display: 'flex', paddingLeft: '10vw' }}
                >
                    <TestimonialCard
                        quote="Pegasus captured my daughter's personality perfectly. The photos are stunning and she felt so comfortable."
                        author="Sarah M." role="Parent" image="/images/avatar-1.jpg"
                    />
                    <TestimonialCard
                        quote="The best school photography experience we've had in 10 years. Efficient, professional, and the kids loved them."
                        author="Dr. James K." role="Principal" image="/images/avatar-2.jpg"
                    />
                    <TestimonialCard
                        quote="I normally hate getting my picture taken, but this was actually fun. The photographer was super chill."
                        author="Emily R." role="Class of 2025" image="/images/avatar-3.jpg"
                    />
                    <TestimonialCard
                        quote="Our yearbook looks incredible. The print quality is unmatched."
                        author="Mark T." role="Yearbook Advisor" image="/images/avatar-4.jpg"
                    />
                    <TestimonialCard
                        quote="Customer service actually picked up the phone! Resolved my order issue in 2 minutes."
                        author="Lisa P." role="Parent" image="/images/avatar-1.jpg"
                    />
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default DraggableStory;
