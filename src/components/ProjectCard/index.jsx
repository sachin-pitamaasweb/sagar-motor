// import React from 'react';
// import './style.css';
// import { Grid } from '@mui/material';

// const projects = [
//     {
//         title: 'Latur Solid Waste Management',
//         budget: '₹117.35 Cr.',
//         description: 'Innovative waste management solutions for Latur, focusing on sustainable practices and environmental conservation.',
//         image: require('../../assets/Projects/img-1.jpg') || 'https://via.placeholder.com/300',
//     },
//     {
//         title: 'Telangana Bio-Mining',
//         budget: '₹85 Cr.',
//         description: 'Cutting-edge bio-mining techniques implemented in Telangana to extract valuable resources from waste materials.',
//         image: require('../../assets/Projects/img-2.jpg') || 'https://via.placeholder.com/300',
//     },
//     {
//         title: 'Solapur Waste Management',
//         budget: '₹24 Cr.',
//         description: 'Comprehensive waste management program in Solapur, addressing urban waste challenges with modern solutions.',
//         image: require('../../assets/Projects/img-3.jpg') || 'https://via.placeholder.com/300',
//     },
//     {
//         title: 'Lucknow Bio-Mining',
//         budget: '₹26.5 Cr.',
//         description: 'Advanced bio-mining operations in Lucknow, transforming waste sites and recovering valuable materials.',
//         image: require('../../assets/Projects/img-4.jpg') || 'https://via.placeholder.com/300',
//     },
//     {
//         title: 'Nashik & Akola Bio-Mining',
//         budget: '₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
//         description: 'Joint bio-mining initiatives in Nashik and Akola, showcasing innovative approaches to waste management and resource recovery.',
//         image: require('../../assets/Projects/img-5.jpg') || 'https://via.placeholder.com/300',
//     },
// ];

// const ProjectCard = () => {
//     return (
//         <section className="section-project-container">
//             <h1 className="section-title-project">Driving Progress Through Our Key Projects</h1>
//             <Grid container spacing={2} className="projects-grid">
//                 {projects.map((project, index) => (
//                     <Grid item xs={12} sm={6} md={4} key={index}>
//                         <div className="project-card-component">
//                             <img src={project.image} alt={project.title} className="project-image-project" />
//                             <div className="project-content-project">
//                                 <h2 className="project-title-project">{project.title}</h2>
//                                 <h5 className="project-budget-project"><span style={{ fontWeight: 'bold' }}>Project Value:</span>{project.budget}</h5>
//                                 <p className="project-description-project">{project.description}</p>
//                             </div>
//                         </div>
//                     </Grid>
//                 ))}
//             </Grid>
//         </section>
//     );
// };

// export default ProjectCard;


import React, { useEffect } from 'react';
import './style.css'; // Add any custom styles here

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panelData = [
  {
    title: "EXPERT TEAM",
    description: "Our engineers and technicians are pioneers in the casting industry, ensuring excellence in every detail.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "QUALITY ASSURANCE",
    description: "We adhere to the highest standards of quality, ensuring that every product meets rigorous testing criteria.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "INNOVATION",
    description: "With a focus on research and development, we lead the industry in innovative casting solutions.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "SUSTAINABILITY",
    description: "We are committed to sustainable practices, minimizing our impact on the environment while maximizing efficiency.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "CUSTOMER SATISFACTION",
    description: "Our clients' satisfaction is at the core of our business, driving us to deliver outstanding service every time.",
    image: "https://via.placeholder.com/400x200"
  }
];

const ProjectCard = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 0.1,
        end: "+=3000"
      }
    });

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container" id="panelContainer">
      {panelData.map((data, index) => (
        <section className="panel" key={index}>
          <div className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectCard;