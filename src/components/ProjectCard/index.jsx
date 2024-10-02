import React from 'react';
import './style.css';
import { Grid } from '@mui/material';

const projects = [
    {
        title: 'Latur Solid Waste Management',
        budget: '₹117.35 Cr.',
        description: 'Innovative waste management solutions for Latur, focusing on sustainable practices and environmental conservation.',
        image: require('../../assets/Projects/img-1.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Telangana Bio-Mining',
        budget: '₹85 Cr.',
        description: 'Cutting-edge bio-mining techniques implemented in Telangana to extract valuable resources from waste materials.',
        image: require('../../assets/Projects/img-2.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Solapur Waste Management',
        budget: '₹24 Cr.',
        description: 'Comprehensive waste management program in Solapur, addressing urban waste challenges with modern solutions.',
        image: require('../../assets/Projects/img-3.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Lucknow Bio-Mining',
        budget: '₹26.5 Cr.',
        description: 'Advanced bio-mining operations in Lucknow, transforming waste sites and recovering valuable materials.',
        image: require('../../assets/Projects/img-4.png') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Nashik & Akola Bio-Mining',
        budget: '₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
        description: 'Joint bio-mining initiatives in Nashik and Akola, showcasing innovative approaches to waste management and resource recovery.',
        image: require('../../assets/Projects/img-5.png') || 'https://via.placeholder.com/300',
    },
];

const ProjectCard = () => {
    return (
        <section className="section-project-container">
            <h1 className="section-title-project">Driving Progress Through Our Key Projects</h1>
            <Grid container spacing={2} className="projects-grid">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <div className="project-card-component">
                            <img src={project.image} alt={project.title} className="project-image-project" />
                            <div className="project-content-project">
                                <h2 className="project-title-project">{project.title}</h2>
                                <h5 className="project-budget-project"><span style={{ fontWeight: 'bold' }}>Project Value:</span>{project.budget}</h5>
                                <p className="project-description-project">{project.description}</p>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default ProjectCard;


