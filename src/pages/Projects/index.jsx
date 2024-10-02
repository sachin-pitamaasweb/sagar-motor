import React from "react";
import { Helmet } from "react-helmet";

import Banner from '../../components/Banner';
import ProgressSection from "../../components/ProgressSection";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    const mediaType = 'image';
    const mediaSource = require('../../assets/banner/img-2.png') || 'https://via.placeholder.com/200';
    const altText = 'Sagar Motor Banner';
    const progressData1 = {
        title: 'Driving Progress Through Our Key Projects',
        content: 'At Sagar Motors, we take pride in our diverse and impactful projects across the automotive and environmental sectors. From providing top-tier vehicle services to addressing solid waste management challenges, each project is a testament to our commitment to excellence and sustainability.',
        imageUrl:  require('../../assets/aboutus/pic.jpg') || 'https://via.placeholder.com/200',
    };


    return (
        <>
            <Helmet>
                <title>Our Projects - Sagar Motors</title>
                <meta name="description" content="Explore Sagar Motors' key projects that showcase our commitment to excellence in the automotive and environmental sectors." />
                <meta name="keywords" content="Sagar Motors, Projects, automotive, environmental, solid waste management" />
                <meta name="author" content="Sagar Motors" />
                <meta name="robots" content="index, follow" />  
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Helmet>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
            />
            <ProgressSection
                title={progressData1.title}
                content={progressData1.content}
                imageUrl={progressData1.imageUrl}
                reverse={false}
                headingSize="h2"
            />
            <ProjectCard />
        </>
    );
};

export default Projects;
