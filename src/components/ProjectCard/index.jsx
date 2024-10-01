// import React from 'react';
// import './style.css'; // Import the CSS file

// const ProjectCard = () => {
//     const cardsData = [
//         {
//             title: 'Latur Solid Waste Management',
//             projectBudget: 'Project Value: ₹117.35 Cr.',
//             content: 'Managing comprehensive solid waste collection and bio-mining in Latur, contributing to cleaner urban environments and sustainable waste disposal practices.',
//             imageUrl: require('../../assets/projectcard/img-1.jpg') || 'https://assets.codepen.io/210284/flower-9.jpg'
//         },
//         {
//             title: 'Telangana Bio-Mining',
//             projectBudget: 'Project Value: ₹85 Cr.',
//             content: 'Leading bio-mining efforts across 28 ULB clusters, handling legacy waste and creating sustainable solutions for the Telangana region.',
//             imageUrl: require('../../assets/projectcard/img-2.jpg') || 'https://assets.codepen.io/210284/flower-8.jpg'
//         },
//         {
//             title: 'Solapur Waste Management',
//             projectBudget: 'Project Value: ₹24 Cr.',
//             content: 'Implementing advanced bio-mining technologies to process and manage waste, significantly contributing to environmental health in Solapur.',
//             imageUrl: require('../../assets/projectcard/img-3.jpg') || 'https://assets.codepen.io/210284/flower-7.jpg'
//         },
//         {
//             title: 'Ludhiana Bio-Mining',
//             projectBudget: 'Project Value: ₹26.5 Cr.',
//             content: 'Ongoing project focused on legacy waste processing in Ludhiana, turning waste into usable resources and enhancing the city’s environmental footprint.',
//             imageUrl: require('../../assets/projectcard/img-4.jpg') || 'https://assets.codepen.io/210284/flower-6.jpg'
//         },
//         {
//             title: 'Nadiyala & Adoni Bio-Mining',
//             projectBudget: 'Project Value: ₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
//             content: 'Active bio-mining projects aimed at transforming waste into valuable resources, driving sustainability in Andhra Pradesh.',
//             imageUrl: require('../../assets/projectcard/img-5.jpg') || 'https://assets.codepen.io/210284/flower-6.jpg'
//         }
//     ];
//     return (
//         <div>
//             <main>
//                 <ul id="cards">
//                     {cardsData.map((card, index) => (
//                         <li className="card" key={index} id={`card-${index + 1}`}>
//                             <div className="card-content">
//                                 <div>
//                                     <h2 className="card-title">{card.title}</h2>
//                                     <h6 className="card-title">{card.projectBudget}</h6>
//                                     <p className="card-text">{card.content}</p>
//                                 </div>
//                                 <figure>
//                                     <img src={card.imageUrl} alt={card.title} />
//                                 </figure>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </main>
//         </div>
//     );
// };

// export default ProjectCard;


import React from 'react';
import './style.css';
import { Grid } from '@mui/material';

const projects = [
    {
        title: 'Latur Solid Waste Management',
        budget: '₹117.35 Cr.',
        description: 'Innovative waste management solutions for Latur, focusing on sustainable practices and environmental conservation.',
        image: require('../../assets/Projects/img-1.jpg') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Telangana Bio-Mining',
        budget: '₹85 Cr.',
        description: 'Cutting-edge bio-mining techniques implemented in Telangana to extract valuable resources from waste materials.',
        image: require('../../assets/Projects/img-2.jpg') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Solapur Waste Management',
        budget: '₹24 Cr.',
        description: 'Comprehensive waste management program in Solapur, addressing urban waste challenges with modern solutions.',
        image: require('../../assets/Projects/img-3.jpg') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Lucknow Bio-Mining',
        budget: '₹26.5 Cr.',
        description: 'Advanced bio-mining operations in Lucknow, transforming waste sites and recovering valuable materials.',
        image: require('../../assets/Projects/img-4.jpg') || 'https://via.placeholder.com/300',
    },
    {
        title: 'Nashik & Akola Bio-Mining',
        budget: '₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
        description: 'Joint bio-mining initiatives in Nashik and Akola, showcasing innovative approaches to waste management and resource recovery.',
        image: require('../../assets/Projects/img-5.jpg') || 'https://via.placeholder.com/300',
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
