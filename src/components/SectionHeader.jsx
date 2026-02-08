import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SectionHeader = ({ overline, title, description, align = 'center', color = 'text.primary', dark = false }) => {
    return (
        <Box sx={{ textAlign: align, mb: 6, color: dark ? 'white' : color }}>
            {overline && (
                <Typography
                    variant="overline"
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        letterSpacing: 2,
                        mb: 1,
                        display: 'block'
                    }}
                >
                    {overline}
                </Typography>
            )}

            <Typography
                variant="h3"
                component={motion.h3}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                fontWeight={800}
                gutterBottom
                sx={{
                    fontSize: { xs: '2rem', md: '3rem' }
                }}
            >
                {title}
            </Typography>

            {description && (
                <Typography
                    variant="h6"
                    component={motion.p}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    sx={{
                        maxWidth: 700,
                        mx: align === 'center' ? 'auto' : 0,
                        fontWeight: 400,
                        opacity: 0.8,
                        color: dark ? 'grey.400' : 'text.secondary'
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
};

export default SectionHeader;
