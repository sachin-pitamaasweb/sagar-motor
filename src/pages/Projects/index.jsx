import React from "react";
import Banner from '../../components/Banner';
import ProgressSection from "../../components/ProgressSection";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    const mediaType = 'image';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/image/upload/v1726640957/img-1_trirbe.png';
    const altText = 'Sagar Motor Banner';
    const progressData1 = {
        title: 'Driving Progress Through Our Key Projects',
        content: 'At Sagar Motors, we take pride in our diverse and impactful projects across the automotive and environmental sectors. From providing top-tier vehicle services to addressing solid waste management challenges, each project is a testament to our commitment to excellence and sustainability.',
        imageUrl: 'https://via.placeholder.com/200',
    };


    return (
        <>
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
