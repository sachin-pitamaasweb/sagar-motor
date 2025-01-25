
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Sample project data
const projects = [
    {
        title: 'Latur Solid Waste Management',
        budget: '₹117.35 Cr.',
        description: 'Innovative waste management solutions for Latur, focusing on sustainable practices and environmental conservation.',
        image: require('../../assets/projectcard/img-1.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Telangana Bio-Mining',
        budget: '₹85 Cr.',
        description: 'Cutting-edge bio-mining techniques implemented in Telangana to extract valuable resources from waste materials.',
        image: require('../../assets/projectcard/img-2.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Solapur Waste Management',
        budget: '₹24 Cr.',
        description: 'Comprehensive waste management program in Solapur, addressing urban waste challenges with modern solutions.',
        image: require('../../assets/projectcard/img-3.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Ludhiana Bio-Mining',
        budget: '₹26.5 Cr.',
        description: 'Advanced bio-mining operations in Ludhiana, transforming waste sites and recovering valuable materials.',
        image: require('../../assets/projectcard/img-4.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Nashik & Akola Bio-Mining',
        budget: '₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
        description: 'Joint bio-mining initiatives in Nashik and Akola, showcasing innovative approaches to waste management and resource recovery.',
        image: require('../../assets/projectcard/img-5.png') || 'https://via.placeholder.com/300',
    },
];
// Animation variants for framer-motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

export default function KeyProjects() {
    // Use MUI's useTheme and useMediaQuery hooks for responsive design
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Screens smaller than 600px
    const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md')); // Screens smaller than 960px

    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '40px 0' }}>
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Animated Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
                        Driving Progress Through Our Key Projects
                    </Typography>
                </motion.div>

                {/* Desktop, Laptop, Tablet View */}
                {!isMobile && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Grid container spacing={4}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} key={index}>
                                    <motion.div variants={itemVariants}>
                                        <Card sx={{ display: 'flex', backgroundColor: '#1e1e1e', borderRadius: '8px' }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 300, objectFit: 'cover' }}
                                                image={project.image}
                                                alt={project.title}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
                                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px', fontSize: 'calc(18px + 1vw)' }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{ color: '#ccc', marginBottom: '10px', fontSize: 'calc(14px + 1vw)' }}>
                                                    {project.budget}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#999', fontSize: 'calc(12px + 1vw)' }}>
                                                    {project.description}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                )}

                {/* Mobile View */}
                {isTabletOrMobile && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ marginTop: '40px' }}
                    >
                        <Grid container spacing={4}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} key={index}>
                                    <motion.div variants={itemVariants}>
                                        <Card sx={{ backgroundColor: '#1e1e1e', borderRadius: '8px' }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 200 }}
                                                image={project.image}
                                                alt={project.title}
                                            />
                                            <CardContent>
                                                <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '10px' }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{ color: '#ccc', marginBottom: '10px' }}>
                                                    {project.budget}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#999' }}>
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                )}
            </Box>
        </Box>
    );
}
